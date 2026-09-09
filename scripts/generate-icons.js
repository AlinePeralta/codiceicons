const fs = require("fs");
const path = require("path");

// Configuración

const iconsDir = path.join(__dirname, "../src/icons");
const outputFile = path.join(__dirname, "../icons.css");

// CSS

let css = `/*
 * Códice Icons 2.0
 * Generado automáticamente.
 * NO editar manualmente.
 */

/* =========================================================
   Base
   ========================================================= */

[class^="ico-"],
[class*=" ico-"] {
    display: inline-block;
    width: 1em;
    height: 1em;

    font-size: 1rem;
    background-color: currentColor;

    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: contain;

    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;

    vertical-align: middle;
}

/* =========================================================
   Tamaños
   ========================================================= */

.icon-md {
    font-size: 1.5rem;
}

.icon-lg {
    font-size: 2rem;
}

`;

// =========================================================
// Obtener todos los SVG
// =========================================================

const files = fs
    .readdirSync(iconsDir)
    .filter((file) => file.toLowerCase().endsWith(".svg"))
    .sort();

// =========================================================
// Generar clases automáticamente
// =========================================================

files.forEach((file) => {
    const iconName = path.basename(file, ".svg");

    css += `.${iconName} {
    -webkit-mask-image: url("./src/icons/${file}");
    mask-image: url("./src/icons/${file}");
}

`;
});

// =========================================================
// Generar icons.css
// =========================================================

fs.writeFileSync(outputFile, css, "utf8");

console.log(`✓ ${files.length} iconos generados en icons.css`);