/* Formulario de revisión para el lector estático (Vercel).
   En Grok el formulario React guarda directo en el repo.
   Acá: localStorage + descarga, y se mezcla con pendientes.json si ya hay. */
(function () {
  const LS = "potp-revision-v1";

  function empty() {
    return { notes: "", items: {}, updatedAt: new Date().toISOString() };
  }

  function count(data, items) {
    return items.filter((it) => {
      const r = data.items[String(it.id)];
      return r && (r.choice || (r.comment && r.comment.trim()));
    }).length;
  }

  function toMarkdown(data, meta) {
    const { TONES, REVISION_ITEMS } = meta;
    const lines = [
      "# Pendientes de revisión",
      "",
      "Última vez: " + data.updatedAt,
      "",
      "## Tonalidad: " + (data.tone || "(sin elegir)"),
      "",
      "## Notas generales",
      "",
      (data.notes || "").trim() || "(vacío)",
      "",
      "## Ítems marcados",
      "",
    ];
    for (const it of REVISION_ITEMS) {
      const r = data.items[String(it.id)];
      if (!r || (!r.choice && !(r.comment || "").trim())) continue;
      lines.push("**" + it.id + ".** " + it.prompt);
      lines.push("- Marca: " + (r.choice || "(sin marca)"));
      if ((r.comment || "").trim()) lines.push("- Comentario: " + r.comment.trim());
      lines.push("");
    }
    return lines.join("\n");
  }

  window.renderRevision = async function renderRevision(root) {
    const meta = await fetch("revision-data.json", { cache: "no-store" }).then((r) => r.json());
    let data = empty();
    try {
      const raw = localStorage.getItem(LS);
      if (raw) data = JSON.parse(raw);
    } catch (_) {}
    try {
      const remote = await fetch("pendientes.json", { cache: "no-store" }).then((r) =>
        r.ok ? r.json() : null,
      );
      if (remote && (!data.updatedAt || remote.updatedAt >= data.updatedAt)) data = remote;
    } catch (_) {}

    const CHOICE_LABEL = {
      si: "Confirmo",
      reves: "No, al revés",
      fuerte: "Más fuerte",
      suave: "Más suave",
      sacar: "Sacar",
    };

    function save(next, toast) {
      data = next;
      data.updatedAt = new Date().toISOString();
      localStorage.setItem(LS, JSON.stringify(data));
      const n = count(data, meta.REVISION_ITEMS);
      const el = document.getElementById("rev-status");
      if (el) el.textContent = toast || n + " marcas guardadas en este aparato. Descargá el archivo o usá la vista de Grok para subirlas al repo.";
      const c = document.getElementById("rev-count");
      if (c) c.textContent = n + "/" + meta.REVISION_ITEMS.length;
    }

    function download() {
      const md = toMarkdown(data, meta);
      const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "pendientes.md";
      a.click();
      URL.revokeObjectURL(a.href);
    }

    function paint() {
      const sections = [];
      let last = "";
      for (const it of meta.REVISION_ITEMS) {
        if (it.section !== last) {
          last = it.section;
          sections.push(`<h2 style="font-family:var(--font-read);font-size:1.35rem;font-weight:500;margin:2.2rem 0 0.8rem">${it.section}</h2>`);
        }
        const r = data.items[String(it.id)] || { comment: "" };
        const btns = meta.CHOICES.map((c) => {
          const on = r.choice === c.id;
          return `<button type="button" data-id="${it.id}" data-choice="${c.id}" class="rev-chip${on ? " on" : ""}">${c.label}</button>`;
        }).join("");
        sections.push(`
          <div class="rev-card">
            <p><span class="rev-num">${it.id}.</span> ${it.prompt}${it.priority ? ' <small class="rev-tag">sensible</small>' : ""}</p>
            ${it.hint ? `<p class="rev-hint">${it.hint}</p>` : ""}
            <div class="rev-chips">${btns}</div>
            <textarea data-comment="${it.id}" rows="2" placeholder="Comentario: cómo lo querías decir, qué falta, o qué hay que investigar.">${r.comment || ""}</textarea>
          </div>`);
      }

      const tones = meta.TONES.map((t) => {
        const on = data.tone === t.id;
        return `<button type="button" data-tone="${t.id}" class="rev-tone${on ? " on" : ""}"><strong>${t.id}. ${t.title}</strong><span>${t.blurb}</span></button>`;
      }).join("");

      root.innerHTML = `
        <article class="sheet rev-page">
          <p class="kicker">Edición · no es el libro</p>
          <div class="prose">
            <h1>Marcá y comentá</h1>
            <p>Casi todas las ideas del libro están acá. <strong>Confirmo</strong> = esta idea es mía: si los datos tiran para otro lado, el editor avisa y se decide juntos; no se reescribe en contra. En esta página las notas quedan en tu navegador: descargá el archivo o dejá el comentario en Grok para que se suba al repositorio.</p>
          </div>
          <div class="rev-box">
            <p class="rev-label">Tonalidad del libro</p>
            <div class="rev-tones">${tones}</div>
          </div>
          <label class="rev-label" style="display:block;margin-top:1.4rem">Notas generales</label>
          <textarea id="rev-notes" rows="5" placeholder="Lo que no entra en un ítem: un párrafo que no suena a vos, algo que falta, un dato a investigar…">${data.notes || ""}</textarea>
          <div class="rev-toolbar">
            <button type="button" id="rev-dl" class="rev-chip on">Descargar pendientes.md</button>
            <span id="rev-count">${count(data, meta.REVISION_ITEMS)}/${meta.REVISION_ITEMS.length}</span>
          </div>
          ${sections.join("")}
          <div class="rev-foot"><span id="rev-status">Cada marca se guarda en este aparato.</span></div>
        </article>`;

      root.querySelectorAll("[data-tone]").forEach((b) => {
        b.onclick = () => {
          data.tone = b.getAttribute("data-tone");
          save(data);
          paint();
        };
      });
      root.querySelectorAll("[data-choice]").forEach((b) => {
        b.onclick = () => {
          const id = b.getAttribute("data-id");
          const choice = b.getAttribute("data-choice");
          const prev = data.items[id] || { comment: "" };
          prev.choice = prev.choice === choice ? undefined : choice;
          data.items[id] = prev;
          save(data);
          paint();
        };
      });
      root.querySelectorAll("[data-comment]").forEach((t) => {
        t.oninput = () => {
          const id = t.getAttribute("data-comment");
          const prev = data.items[id] || { comment: "" };
          prev.comment = t.value;
          data.items[id] = prev;
          save(data);
        };
      });
      const notes = document.getElementById("rev-notes");
      if (notes) notes.oninput = () => {
        data.notes = notes.value;
        save(data);
      };
      const dl = document.getElementById("rev-dl");
      if (dl) dl.onclick = download;
      window.scrollTo(0, 0);
    }

    paint();
  };
})();
