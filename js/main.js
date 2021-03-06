class Toggle {
  constructor(id, classT) {
    this.tag = document.querySelector(`#${id}`);
    this.classT = classT;
    this.caller = document.querySelectorAll(`[close-btn]`);
    this.active = false;
    this.init();
  }

  toggleClass() {
    this.tag.classList.toggle(`${this.classT}`);
  }

  init() {
    for( let i = 0; i < this.caller.length; i++ ) {
      this.caller[i].addEventListener('click', this.toggleClass.bind(this));
    }
  }
}

class profileChange {
  constructor () {
    this.rankingId = document.querySelectorAll("a[profile-id]");
    this.profiles  = document.querySelectorAll("[profile]");
    this.col       = document.querySelector("#profile");
    this.init();
  }

  showProfile(e) {
    this.profiles.forEach(profile => {
      // Remove o atributo 'active' de todas as tags diferentes da que o usuario clicou.
      if(profile.getAttribute("id") != e.path[1].getAttribute("profile-id") && profile.hasAttribute("active")) {
        profile.removeAttribute("active");
        profile.classList.add("d-none");
      }
    });
    this.profiles.forEach(profile => {
      // Verifica se o perfil que o usuario clicou não está ativo, se nao estiver, ele ativa
      if(profile.getAttribute("id") == e.path[1].getAttribute("profile-id") && !profile.hasAttribute("active")) {
        if(profile.classList.contains("d-none")){
          profile.setAttribute('active', '');
          profile.classList.remove("d-none");

          // breakpoint para dispositivos moveis, impede que o 'display: none' seja ativado quando esteja no desktop
          if(window.innerWidth < 992) {
            this.col.classList.toggle("showhide");
          }
        }
      } else if (window.innerWidth < 992 && profile.getAttribute("id") == e.path[1].getAttribute("profile-id") && profile.hasAttribute("active")) {
        this.col.classList.toggle("showhide");
      }
    });
  }

  init() {
    for( let i = 0; i < this.rankingId.length; i++ ) {
      this.rankingId[i].addEventListener('click', this.showProfile.bind(this));
    }
  }
}

class Tabs {
  constructor(tabControl, tabs) {
    this.tabControl = document.querySelectorAll(`#${tabControl} > button[tab]`);
    this.tabs = document.querySelectorAll(`#${tabs} > .tab`);
    this.init();
  }

  callerToTab(e) {
    this.changeAll(e.srcElement);
  }

  changeAll(caller) {
    // muda o controlador
    this.tabControl.forEach(e => {
      e.classList.remove("active");
    });
    caller.classList.add("active");

    // muda as abas

    this.tabs.forEach(e => {
      e.classList.remove("showhide");
      if (e.getAttribute("id") == caller.getAttribute("tab")) {
        e.classList.add("showhide");
      }
    });
  }

  init() {
    for( let i = 0; i < this.tabControl.length; i++ )
    {
      this.tabControl[i].addEventListener('click', this.callerToTab.bind(this));
    }
  }
}


class TrocaLista {
  constructor() {
    this.cidades = document.querySelector("#selecionarCidade");
    this.cargos = document.querySelector("#selecionarCargo");
    this.resultadoFiltro = document.querySelector("#resultadoFiltro");
    this.listener();
  }

  trocaTexto() {
    this.resultadoFiltro.innerHTML = `Exibindo resultados de ${this.cidades.value} para o cargo de ${this.cargos.value}`;
  }

  listener() {
    this.cidades.addEventListener('input', this.trocaTexto.bind(this));
    this.cargos.addEventListener('input', this.trocaTexto.bind(this));
  }
}

new Toggle("profile", "showhide");
new TrocaLista();
new Tabs("tab-control", "tabs");
new Tabs("tab-control-politicos", "tabs-politicos");
new profileChange();

// Troca o tema baseado no cache
trocaTema();

// bootstrap

$('#1candidato-tab li a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})