export type Chapter = {
  slug: string;
  file: string;
  num: string;
  kicker: string;
  title: string;
};

export const CHAPTERS: Chapter[] = [
  { slug: "introduccion", file: "00-introduccion.md", num: "00", kicker: "Prólogo", title: "Introducción" },
  { slug: "salud", file: "01-salud.md", num: "01", kicker: "Capítulo 1", title: "La isla del doctor Moreau" },
  { slug: "geopolitica", file: "02-geopolitica.md", num: "02", kicker: "Capítulo 2", title: "Quién tiró la primera piedra" },
  { slug: "atentados", file: "03-atentados.md", num: "03", kicker: "Capítulo 3", title: "Falsa bandera" },
  { slug: "democracia", file: "04-democracia.md", num: "04", kicker: "Capítulo 4", title: "La urna y lo que no se vota" },
  { slug: "medios", file: "05-medios.md", num: "05", kicker: "Capítulo 5", title: "El ministerio de la verdad" },
  { slug: "clima", file: "06-clima.md", num: "06", kicker: "Capítulo 6", title: "El termómetro en el ombligo" },
  { slug: "economia", file: "07-economia.md", num: "07", kicker: "Capítulo 7", title: "La impresora de dinero" },
  { slug: "inteligencia", file: "08-inteligencia.md", num: "08", kicker: "Capítulo 8", title: "Skynet" },
  { slug: "espacio", file: "09-espacio.md", num: "09", kicker: "Capítulo 9", title: "Si las piedras hablaran" },
  { slug: "extraterrestre", file: "10-extraterrestre.md", num: "10", kicker: "Capítulo 10", title: "El bosque oscuro" },
  { slug: "mas-alla", file: "11-mas-alla.md", num: "11", kicker: "Capítulo 11", title: "El otro patio" },
  { slug: "conclusion", file: "conclusion.md", num: "12", kicker: "Capítulo 12", title: "Seguir preguntando" },
  { slug: "revision", file: "revision-autor.md", num: "Ed.", kicker: "Edición", title: "Revisión: marcá y comentá" },
];

export function chapterBySlug(slug: string) {
  return CHAPTERS.find((c) => c.slug === slug);
}
