# Piensa o Te Piensan

Libro de pensamiento crítico (borrador en edición).

**Leerlo:** [piensaotepiensan.vercel.app](https://piensaotepiensan.vercel.app)

Ahí está la tapa, el índice, la introducción, once capítulos y el capítulo 12. En el teléfono, el botón *Índice*.

## Dos ediciones

Cada capítulo tiene **Edición Primera** y **Edición Segunda**. No se pisan. En la web, dos botones arriba del texto.

- Primera (por defecto): `es/NN-….md` — esta sesión (Grok).
- Segunda (en paralelo): `es/NN-…-edicion-segunda.md` — ChatGPT / el otro usuario. Salvo la intro, empiezan vacíos.

Detalle: [EDICIONES.md](EDICIONES.md).


## Índice

Orden de lectura (los números de capítulo se conservan):

| Parte | Capítulo | Archivo |
|---|---|---|
| I — Antes de la pregunta | Introducción | [es/00-introduccion.md](es/00-introduccion.md) |
| II — El laboratorio de lo real | 1. La isla del doctor Moreau | [es/01-salud.md](es/01-salud.md) |
| | 6. El termómetro en el ombligo | [es/06-clima.md](es/06-clima.md) |
| | 7. La impresora de dinero | [es/07-economia.md](es/07-economia.md) |
| III — El guion invisible | 2. Quién tiró la primera piedra | [es/02-geopolitica.md](es/02-geopolitica.md) |
| | 3. Falsa bandera | [es/03-atentados.md](es/03-atentados.md) |
| | 4. La urna y lo que no se vota | [es/04-democracia.md](es/04-democracia.md) |
| | 5. El ministerio de la verdad | [es/05-medios.md](es/05-medios.md) |
| IV — Los semiconductores ancestrales | 8. Skynet | [es/08-inteligencia.md](es/08-inteligencia.md) |
| | 9. Si las piedras hablaran | [es/09-espacio.md](es/09-espacio.md) |
| V — Donde nadie está mirando | 10. El bosque oscuro | [es/10-extraterrestre.md](es/10-extraterrestre.md) |
| | 11. El otro patio | [es/11-mas-alla.md](es/11-mas-alla.md) |
| Fuera de las partes | 12. Seguir preguntando | [es/conclusion.md](es/conclusion.md) |

Estructura detallada: [ESTRUCTURA.md](ESTRUCTURA.md). Notas de revisión: [NOTAS-REVISION.md](NOTAS-REVISION.md).

## Cómo está armado

Cada capítulo, en lo posible: lo que no se discute → la narrativa oficial → lo que esa narrativa omite → una pregunta abierta. El markdown vive en `es/`. El lector web es `index.html` (Vercel sirve ese archivo en la raíz).

Objetivo de extensión: ~40.000 palabras (ebook corto, KDP). Edición en curso: ver `es/` (el recuento se actualiza en cada ronda).

## Editar

1. Cambiá el `.md` en `es/`.
2. Push a `main`.
3. Vercel republica solo. Recargá el capítulo (el lector pide los markdown sin caché agresiva).

```bash
git clone https://github.com/aleviercas/piensaotepiensan.git
cd piensaotepiensan
# cualquier static server en la raíz abre index.html
python3 -m http.server 8000
```

