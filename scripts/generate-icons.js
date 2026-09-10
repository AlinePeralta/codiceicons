const fs = require("fs");
const path = require("path");


// Configuración


const iconsDir = path.join(__dirname, "../src/icons");
const cssOutputFile = path.join(__dirname, "../icons.css");
const htmlOutputFile = path.join(__dirname, "../index.html");


// Obtener todos los SVG


const files = fs
    .readdirSync(iconsDir)
    .filter((file) => file.toLowerCase().endsWith(".svg"))
    .sort();


// Generar CSS


let css = `/*
 * Códice Icons 2.0
 * Generado automáticamente.
 * NO editar manualmente.
 */

/* Base */

[class^="ico-"],
[class*=" ico-"] {
    display: inline-block;
    width: 1em;
    height: 1em;

    font-size: 1.4rem;
    background-color: currentColor;

    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: contain;

    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;

    vertical-align: middle;
}

/*Tamaños */

.icon-md {
    font-size: 1.8rem;
}

.icon-lg {
    font-size: 2.4rem;
}

/* Animación opcional */

.ico-animate {
    transition:
        transform 0.2s ease,
        opacity 0.2s ease;
}

.ico-animate:hover {
    transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
    .ico-animate {
        transition: none;
    }

    .ico-animate:hover {
        transform: none;
    }
}

/* Iconos */

`;



// Generar clases de iconos


files.forEach((file) => {

    const iconName = path.basename(file, ".svg");

    css += `.${iconName} {
    -webkit-mask-image: url("./src/icons/${file}");
    mask-image: url("./src/icons/${file}");
}

`;
});



// Guardar icons.css


fs.writeFileSync(cssOutputFile, css, "utf8");



// Generar HTML


let html = `<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Códice Icons 2.0</title>

    <!-- Tailwind CSS - únicamente para el visor -->
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    >

    <!-- Códice Icons -->
    <link
        rel="stylesheet"
        href="./icons.css"
    >

    <style>

        html {
            scroll-behavior: smooth;
        }

        body {
            background:
                radial-gradient(
                    circle at 15% 20%,
                    rgba(59, 130, 246, 0.08),
                    transparent 30%
                ),
                radial-gradient(
                    circle at 85% 80%,
                    rgba(139, 92, 246, 0.08),
                    transparent 30%
                ),
                #080b12;
        }

        .icon-card {
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;
        }

        .icon-card:hover {
            transform: translateY(-2px);
            border-color: rgba(255, 255, 255, 0.18);
            box-shadow:
                0 10px 30px rgba(0, 0, 0, 0.25);
        }

        .icon-preview {
            min-height: 100px;
        }

        .search-input::placeholder {
            color: #6b7280;
        }

        .copy-button {
            transition:
                background-color 0.2s ease,
                transform 0.2s ease;
        }

        .copy-button:hover {
            transform: translateY(-1px);
        }

        .tech-line {
            height: 1px;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.15),
                transparent
            );
        }

        @media (prefers-reduced-motion: reduce) {

            html {
                scroll-behavior: auto;
            }

            .icon-card,
            .copy-button {
                transition: none;
            }

            .icon-card:hover,
            .copy-button:hover {
                transform: none;
            }

        }

    </style>

</head>


<body class="text-gray-100">

    <main class="max-w-7xl mx-auto px-6 py-12">


        <!-- Header -->

        <header class="mb-10">

            <div class="flex flex-col md:flex-row
                        md:items-end md:justify-between
                        gap-6">

                <div>

                    <div class="flex items-center gap-3 mb-3">

                        <span
                            class="text-xs font-mono
                                   tracking-widest
                                   uppercase
                                   text-gray-500"
                        >
                            CÓDICE
                        </span>

                        <span class="text-gray-700">
                            /
                        </span>

                        <span
                            class="text-xs font-mono
                                   tracking-widest
                                   uppercase
                                   text-gray-500"
                        >
                            ICONS 2.0
                        </span>

                    </div>


                    <h1 class="text-4xl md:text-5xl
                               font-bold tracking-tight">

                        Biblioteca de iconos

                    </h1>


                    <p class=" mt-3 max-w-2xl">

                        Biblioteca de iconos
                        personalizados para Códice.

                    </p>
                    <small class="text-gray-500">Framework de estilos de SERTI</small>

                </div>


                <!-- Contador -->

                <div
                    class="border border-gray-800
                           rounded-xl
                           bg-gray-900/70
                           px-6 py-4"
                >

                    <div
                        class="text-3xl font-bold
                               font-mono"
                    >
                        ${files.length}
                    </div>

                    <div
                        class="text-xs uppercase
                               tracking-widest
                               text-gray-500 mt-1"
                    >
                        iconos disponibles
                    </div>

                </div>

            </div>

        </header>


        <div class="tech-line mb-8"></div>


        <!--Buscador-->

        <div class="mb-10">

            <input
                id="search"
                type="search"
                placeholder="Buscar icono por nombre..."
                class="search-input
                       w-full
                       px-5 py-4
                       rounded-xl
                       bg-gray-900
                       border border-gray-800
                       text-gray-200
                       outline-none
                       focus:border-gray-600"
            >

        </div>


        <!--Tamaños-->

        <section class="mb-12">

            <div class="mb-5">

                <h2 class="text-xl font-semibold">
                    Tamaños
                </h2>

                <p class="text-sm text-gray-500 mt-1">
                    El tamaño base se aplica automáticamente.
                    Los tamaños adicionales utilizan clases
                    opcionales.
                </p>

            </div>


            <div class="grid grid-cols-1
                        md:grid-cols-3
                        gap-4">


                

                <div
                    class="bg-gray-900
                           border border-gray-800
                           rounded-xl
                           p-5"
                >

                    <div class="flex items-center
                                justify-between mb-4">

                        <span
                            class="text-sm font-semibold"
                        >
                            Base
                        </span>

                        <span
                            class="text-xs font-mono
                                   text-gray-500"
                        >
                            1.4rem
                        </span>

                    </div>


                    <div class="flex items-center gap-4">

                        <i class="ico-card"></i>

                        <code
                            class="text-xs text-gray-400"
                        >
                            &lt;i class="ico-card"&gt;&lt;/i&gt;
                        </code>

                    </div>

                </div>


                <!-- Medium -->

                <div
                    class="bg-gray-900
                           border border-gray-800
                           rounded-xl
                           p-5"
                >

                    <div class="flex items-center
                                justify-between mb-4">

                        <span
                            class="text-sm font-semibold"
                        >
                            Medium
                        </span>

                        <span
                            class="text-xs font-mono
                                   text-gray-500"
                        >
                            1.8rem
                        </span>

                    </div>


                    <div class="flex items-center gap-4">

                        <i class="ico-card icon-md"></i>

                        <code
                            class="text-xs text-gray-400"
                        >
                            &lt;i class="ico-card icon-md"&gt;
                        </code>

                    </div>

                </div>


                <!-- Large -->

                <div
                    class="bg-gray-900
                           border border-gray-800
                           rounded-xl
                           p-5"
                >

                    <div class="flex items-center
                                justify-between mb-4">

                        <span
                            class="text-sm font-semibold"
                        >
                            Large
                        </span>

                        <span
                            class="text-xs font-mono
                                   text-gray-500"
                        >
                            2.4rem
                        </span>

                    </div>


                    <div class="flex items-center gap-4">

                        <i class="ico-card icon-lg"></i>

                        <code
                            class="text-xs text-gray-400"
                        >
                            &lt;i class="ico-card icon-lg"&gt;
                        </code>

                    </div>

                </div>

            </div>

        </section>


        <!--Animación -->

        <section class="mb-12">

            <div class="mb-5">

                <h2 class="text-xl font-semibold">
                    Animación opcional
                </h2>

                <p class="text-sm text-gray-500 mt-1">
                    Agrega <code class="text-gray-300">
                    ico-animate
                    </code> para activar un movimiento
                    sutil al pasar el cursor.
                </p>

            </div>


            <div
                class="bg-gray-900
                       border border-gray-800
                       rounded-xl
                       p-6"
            >

                <div class="flex items-center gap-6">

                    <i
                        class="ico-card
                               icon-lg
                               ico-animate"
                    ></i>

                    <code class="text-sm text-gray-400">

                        &lt;i class="ico-card
                        icon-lg ico-animate"&gt;&lt;/i&gt;

                    </code>

                </div>

            </div>

        </section>


        <!--Iconos -->

        <section>

            <div
                id="icons"
                class="grid grid-cols-2
                       sm:grid-cols-3
                       md:grid-cols-4
                       lg:grid-cols-6
                       gap-4"
            >
`;


files.forEach((file) => {

    const iconName = path.basename(file, ".svg");

    html += `

                <article
                    class="icon-card
                           bg-white
                           text-gray-900
                           border border-gray-200
                           rounded-xl
                           p-5"
                    data-name="${iconName}"
                >

                    <div
                        class="icon-preview
                               flex
                               items-center
                               justify-center"
                    >

                        <i
                            class="${iconName} icon-lg"
                        ></i>

                    </div>


                    <div class="mt-4">

                        <p
                            class="font-mono
                                   text-sm
                                   font-semibold
                                   truncate"
                        >
                            .${iconName}
                        </p>


                        <code
                            class="block
                                   text-xs
                                   text-gray-400
                                   mt-2
                                   truncate"
                        >
                            &lt;i class="${iconName}"&gt;
                        </code>


                        <button
                            type="button"
                            onclick="copyIcon('${iconName}', this)"
                            class="copy-button
                                   mt-4
                                   w-full
                                   px-3
                                   py-2
                                   text-xs
                                   font-medium
                                   rounded-lg
                                   bg-gray-100
                                   hover:bg-gray-200"
                        >
                            Copiar clase
                        </button>

                    </div>

                </article>
`;

});


html += `

            </div>

            <!-- Sin resultados -->

            <div
                id="no-results"
                class="hidden
                       text-center
                       py-20
                       text-gray-500"
            >

                No se encontraron iconos.

            </div>

        </section>


        <!--Footer-->

        <footer class="mt-20 pt-8
                       border-t border-gray-900
                       text-center">

            <p
                class="text-sm
                       text-gray-500"
            >
                Desarrollado por: 
                <span class="text-gray-300 font-medium">
                    Aline Peralta
                </span>
            </p>


            <p
                class="text-xs
                       text-gray-700
                       font-mono
                       mt-2"
            >
                Códice Icons 2.0
            </p>

        </footer>


    </main>



    <script>

        const search = document.getElementById("search");
        const cards = document.querySelectorAll(".icon-card");
        const noResults = document.getElementById("no-results");


        // =====================================================
        // Buscar iconos
        // =====================================================

        search.addEventListener("input", function () {

            const value = this.value
                .toLowerCase()
                .trim();

            let visibleCards = 0;


            cards.forEach(card => {

                const name = card
                    .dataset
                    .name
                    .toLowerCase();


                const visible =
                    name.includes(value);


                card.style.display =
                    visible ? "" : "none";


                if (visible) {
                    visibleCards++;
                }

            });


            noResults.classList.toggle(
                "hidden",
                visibleCards !== 0
            );

        });



        function copyIcon(iconName, button) {

            navigator.clipboard.writeText(
                "ico-" + iconName.replace(/^ico-/, "")
            );


            const originalText =
                button.textContent;


            button.textContent =
                "✓ Copiado";


            setTimeout(() => {

                button.textContent =
                    originalText;

            }, 1200);

        }

    </script>


</body>

</html>
`;



// Guardar index.html


fs.writeFileSync(
    htmlOutputFile,
    html,
    "utf8"
);



// Resultado


console.log(
    `✓ ${files.length} iconos generados en icons.css`
);

console.log(
    `✓ ${files.length} iconos generados en index.html`
);