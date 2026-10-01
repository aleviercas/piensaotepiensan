# Dos ediciones (no mezclar)

Hay **dos textos de la introducción**. El resto de capítulos, por ahora, es uno solo.

| | Archivo | Quién lo toca | Qué es |
|---|---|---|---|
| **Edición Primera** | [`es/00-introduccion.md`](es/00-introduccion.md) | esta sesión (Grok) | la que se lee por defecto en la web |
| **Edición Segunda** | [`es/00-introduccion-edicion-segunda.md`](es/00-introduccion-edicion-segunda.md) | revisión en paralelo (ChatGPT / el otro usuario) | no pisa la Primera |

En la web, arriba de la intro, hay dos botones. **Edición Primera** es `main` para el lector. **Edición Segunda** es el taller del otro usuario.

## Regla

- ChatGPT **no edita** `es/00-introduccion.md`. Copia, si hace falta, y escribe en `es/00-introduccion-edicion-segunda.md`.
- Grok **no pisa** `es/00-introduccion-edicion-segunda.md` salvo para arreglar el selector o un choque de archivos.
- Cuando una corrección de la Segunda se acepte, se trae a mano a la Primera. No hay merge automático.

Si hace falta una segunda edición de otro capítulo: copiar a `es/NN-slug-edicion-segunda.md` y enganchar el selector. **No sobrescribir** el original.
