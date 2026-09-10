# Códice Icons 2.0

Biblioteca de iconos SVG para Códice.
Framework de estilos de SERTI

La biblioteca conserva la nomenclatura existente `ico-*`, genera automáticamente las clases CSS a partir de los archivos SVG y distribuye los recursos mediante GitHub + jsDelivr.

---

## ✨ Características

- SVG como fuente única de los iconos.
- Compatibilidad con las clases existentes `ico-*`.
- Generación automática de `icons.css`.
- Generación automática de `icons.min.css`.
- Visor automático de iconos en `index.html`.
- Buscador de iconos.
- Tamaños estandarizados.
- Color heredado mediante `currentColor`.
- Animación opcional mediante `ico-animate`.
- Versionamiento mediante tags de Git.
- Distribución mediante CDN.
- No requiere copiar los SVG dentro de cada aplicación.

---

## 📁 Estructura

```text
codiceicons/
│
├── src/
│   └── icons/
│       ├── ico-card.svg
│       ├── ico-edit.svg
│       ├── ico-buscar.svg
│       └── ...
│
├── scripts/
│   └── generate-icons.js
│
├── icons.css
├── icons.min.css
├── index.html
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md