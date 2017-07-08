class MenuNav extends Polymer.Element {

  static get is() { return 'menu-nav'; }

  // Element class can define custom element reactions
  connectedCallback() {
    super.connectedCallback();
    console.log('menu-nav created!');
  }

  constructor() {
    super();
  }

  ready() {
    super.ready();
  }
}

// Associate the new class with an element name
customElements.define(MenuNav.is, MenuNav);
