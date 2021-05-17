//el template lo he escrito en el .html
const template = `
`
class NotificationElement extends HTMLElement {
    constructor() {
        super();

        this.template = document.getElementById("notificacion");
    }

    connectedCallback() {
        // this.innerText = "Notification works";
        //importNOde acepta 2 parametros (el nodo que quiero importar, true)
        let clonedDOM = document.importNode(this.template.content, true)
        this.appendChild(clonedDOM)
    }

    attributeChangedCallback(attr, oldval, newval) {

    }

    static get observedAttributes() {
        return [""];
    }
}

window.customElements.define("castel-error-notice", NotificationElement)