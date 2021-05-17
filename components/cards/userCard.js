const template= document.createElement('template')
template.innerHTML = `
    <style>
        .usercard-container{
            font-family: 'Arial', sans-serif;
            background: #f4f4f4;
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            margin-bottom: 15px;
            border-bottom: darkorchid 5px solid;
        }
            
        .usercard-container img {
            width: 100%;
        }
            
        .usercard-container button {
            cursor: pointer;
            background: darkorchid;
            tcolor: #fff;
        }
    </style>
    
    <div class='usercard-container'>
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
        // this.innerHTML = `John Doe`
        this.showInfo = true;
        this.attachShadow({ mode: 'open'}) //para agregar estilo sólo para este componente
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name')
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar')

    }
}

window.customElements.define('castel-usercard', UserCard)