const selectLang = document.getElementById("select-lang");
const selectColor = document.getElementById("select-color");
const textosSelect = {
    es: {
        lang: ["Seleccionar idioma", "Español", "English"],
        color: ["Claro", "Oscuro"]
    },
    en: {
        lang: ["Select language", "Español", "English"],
        color: ["Light", "Dark"]
    }
};


function cambiarIdioma(idioma) {
    const elementos = document.querySelectorAll("[data-es]");

    elementos.forEach(function (elemento) {
        elemento.textContent = elemento.getAttribute("data-" + idioma);
    });
    const opcionesLang = selectLang.options;
    for (let i = 0; i < opcionesLang.length; i++) {
        opcionesLang[i].textContent = textosSelect[idioma].lang[i];
    }

    const opcionesColor = selectColor.options;
    for (let i = 0; i < opcionesColor.length; i++) {
        opcionesColor[i].textContent = textosSelect[idioma].color[i];
    }

    document.documentElement.lang = idioma;
}

selectLang.addEventListener("change", function () {
    cambiarIdioma(selectLang.value);
});

selectColor.addEventListener("change", function () {
    if (selectColor.value === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
});
