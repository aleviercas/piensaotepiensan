# Piensa o Te Piensan

Libro de pensamiento crítico (borrador en edición). No es un catecismo de un bando: es el intento de un curioso de mirar hechos antes de ponerle color político.

**Leerlo:** [piensaotepiensan.vercel.app](https://piensaotepiensan.vercel.app)

Ahí está el índice, la introducción, los diez capítulos y la conclusión. En el teléfono, el botón *Índice*. Noche / tamaño de letra abajo a la izquierda.

## Índice

| | Capítulo | Archivo |
|---|---|---|
| | Introducción | [es/00-introduccion.md](es/00-introduccion.md) |
| 1 | La salud en la encrucijada | [es/01-salud.md](es/01-salud.md) |
| 2 | Geopolítica y los hilos del poder | [es/02-geopolitica.md](es/02-geopolitica.md) |
| 3 | Atentados y encubrimientos | [es/03-atentados.md](es/03-atentados.md) |
| 4 | Democracia y el espejismo electoral | [es/04-democracia.md](es/04-democracia.md) |
| 5 | Medios de comunicación | [es/05-medios.md](es/05-medios.md) |
| 6 | Cambio climático | [es/06-clima.md](es/06-clima.md) |
| 7 | Economía e inflación | [es/07-economia.md](es/07-economia.md) |
| 8 | Espacio y Tierra | [es/08-espacio.md](es/08-espacio.md) |
| 9 | Vida extraterrestre | [es/09-extraterrestre.md](es/09-extraterrestre.md) |
| 10 | Más allá de la muerte | [es/10-mas-alla.md](es/10-mas-alla.md) |
| | Conclusión | [es/conclusion.md](es/conclusion.md) |

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
