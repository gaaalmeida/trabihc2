class Toggle {
    constructor(id, caller, classT) {
        this.tag = document.querySelector(`#${id}`);
        this.classT = classT;
        this.caller = document.querySelector(`#${caller}`);
        this.init();
    }

    toggleClass() {
        this.tag.classList.toggle(`${this.classT}`);
    }

    init() {
        this.toggleClass = this.toggleClass.bind(this);
        this.caller.addEventListener('click', this.toggleClass);
    }
}


// * Mobile navbar toggle
new Toggle("sidebar", "navbar-toggler", "show");

//Candidatos
new Toggle("profilediv", "candidato-1-m", "d-none");
new Toggle("black", "candidato-1-m", "d-none");
new Toggle("profilediv", "candidato-1-m-c", "d-none");
new Toggle("black", "candidato-1-m-c", "d-none");


new Toggle("profilediv", "black", "d-none");
new Toggle("black", "black", "d-none");

// Melhores/Piores prefeitos
const melhoresPrefeitos = () => {
    const melhores = document.querySelector("#ranking-melhores-prefeitos");
    const piores = document.querySelector("#ranking-piores-prefeitos");
    const mB = document.querySelector("#melhoresPrefeitos");
    const pB = document.querySelector("#pioresPrefeitos");

    mB.classList.add("btn-primary");
    pB.classList.remove("btn-primary");
    melhores.classList.remove("d-none");
    piores.classList.add("d-none");
}
const pioresPrefeitos = () => {
    const melhores = document.querySelector("#ranking-melhores-prefeitos");
    const piores = document.querySelector("#ranking-piores-prefeitos");
    const mB = document.querySelector("#melhoresPrefeitos");
    const pB = document.querySelector("#pioresPrefeitos");

    pB.classList.add("btn-primary");
    mB.classList.remove("btn-primary");
    melhores.classList.add("d-none");
    piores.classList.remove("d-none");
}

$('#profiletab a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
})