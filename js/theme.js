/**
 * Função para trocar o tema do site entre
 * escuro/claro
 */
const trocaTema = () => {
    const arr = document.querySelectorAll(".dark-var");
    const cache = localStorage['siteTheme'] || 'defaultValue';
    if (cache == "white") {
        arr.forEach(e => {
            e.classList.remove("dt");
        });
    } else if (cache == "black") {
        arr.forEach(e => {
            e.classList.add("dt");
        });
    }
}

const temaCache = () => {
    const cache = localStorage['siteTheme'] || 'defaultValue';
    if (cache == "white") {
        localStorage['siteTheme'] = "black";
    } else if (cache == "black") {
        localStorage['siteTheme'] = "white";
    }
    trocaTema();
}