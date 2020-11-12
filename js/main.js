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
new Toggle("sidebar", "navbar-toggler" ,"show");