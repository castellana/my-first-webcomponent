class SaludoBasicoElement extends HTMLElement {
    constructor() {
        super();  //importante llamar a super.

        this.saludo = "Hola, cómo estás";
    }

    connectedCallback() { //con connectedCallback me puedo enterar de cuando se monta un componente
        console.log("montado")
        let bold = document.createElement("strong");
        bold.innerHTML = this.saludo;
        this.appendChild(bold); //this es el HTML Element

    }

    attributeChangedCallback(nombre, viejoValor, nuevoValor) { //este callback se va a disparar cuando se modifique el valor de un atributo. Este callback recibe 3 atributos (nombre del atributo, viejo valor, nuevoValor)
        console.log(`${nombre} ha cambiado de ${viejoValor} a ${nuevoValor}`) //para ver esto necesito un static get observed Attributes

        if (nombre === "nombre") {  //si el atributo que ha cambiado es nombre,
            this.saludo = `Hola, ${nuevoValor}`;
        }
        console.log(`${nombre}, ${viejoValor} => ${nuevoValor}`)
    }
    static get observedAttributes() { //necesitamos escribir esto para indicar qué atributos son los que queremos observar. Devuelve un array.
        return ['nombre']

    }
}

//declaramos mi etiqueta, con nombre al menos doble!, con guión
window.customElements.define("saludo-basico", SaludoBasicoElement);
