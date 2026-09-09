const fs = require('fs');
const path = require("path");

// =========================================================
// Configuración
// =========================================================

const iconsDir = path.join(__dirname, "../src/icons");
const outputFile = path.join(__dirname, "../icons.css");

// =========================================================
// Encabezado del CSS
// =========================================================

let css = `/*
 * Códice Icons 2.0
 * Generado automáticamente.
 * NO editar manualmente.
 */

[class^="ico-"],
[class*=" ico-"] {
    display: inline-block;
    width: 1em;
    height: 1em;

    background-color: currentColor;

    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: contain;

    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;

    vertical-align: middle;
}

`;

// =========================================================
// Obtener SVGs
// =========================================================

const files = fs
    .readdirSync(iconsDir)
    .filter((file) => file.toLowerCase().endsWith(".svg"))
    .sort();

// =========================================================
// Generar clases
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
// Escribir icons.css
// =========================================================

fs.writeFileSync(outputFile, css, "utf8");

console.log(`✓ ${files.length} iconos generados en icons.css`);