const template= document.createElement('template')
template.innerHTML = `
    <style>
        .mi-usercard {
            font-family: 'Arial', sans-serif;
            background: #f4f4f4;
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            margin-bottom: 15px;
            border-bottom: darkorchid 5px solid;
        }
            
        .mi-usercard img {
            width: 100%;
        }
            
        .mi-usercard button {
            cursor: pointer;
            background: darkorchid;
            tcolor: #fff;
        }
    </style>
    
    <div class='mi-usercard'>
        <img />
        <div>
            <h3></h3>
            <div class='info'>
                <p><slot name="email"/>></p>
                <p><slot name="phone"</p>
            </div>
            <button id="toggle-info">Hide info</button>
        </div>
    <div>
    
</div>
   `;


class UserCard extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true; //los detalles se mostrarán por default
        this.attachShadow({ mode: 'open'}) //para agregar estilo sólo para este componente
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name')
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar')
        // this.innerHTML = `Vamos a ver`;
        // this.innerHTML = `<h3>${this.getAttribute('name')}</h3>`
    }

    //hacemos que el botón se pueda clickear y aparezca y desapazca el card:
    toggleInfo() {
        console.log(123) //para ver si funciona el click
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector('.info')
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info')

        if(this.showInfo) {
            info.style.display = 'block'
            toggleBtn.innerText = 'Hide Info';
        } else {
            info.style.display = 'none'
            toggleBtn.innerText = 'Show Info';
        }
    }
    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo())
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').removeEventListener('click', () => this.toggleInfo())
    }
}

window.customElements.define('mi-usercard', UserCard)