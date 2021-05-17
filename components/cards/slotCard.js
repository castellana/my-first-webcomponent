// Forma 1
customElements.define('castel-slotcard', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML =`
        <div>Title:
            <slot name="title"></slot>
        </div>
        <div>Subtitle:
            <slot name="subtitel"></slot>
        </div>
        <div>Image:
            <slot name="image"></slot>
        </div>`

    }
})

/*
class castel-slotcard extends HTMLElement {
    constructor() {
        super();
        this.template= document.createElement('template');

        //creamos variables y les asignamos los valores iniciales:
        this.img = this.getAttribute('img');
        this.cardTitel = this.getAttribute('card-titel');
        this.cardSubTitel = this.getAttribute('card-subtitel');
        this.cardButtonColor = this.getAttribute('card-button-color');
        this.cardButtonTextColor = this.getAttribute('card-button-text-color');
        this.buttonText = this.innerHTML;

        this.template.innerHTML = `
            <style>
                .card-container{
                width: 500px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                text-align: center;
                }
                .img-container{
                width: 30%;
                margin: 0 auto;
                }
                .button-container {
                display: flex;
                justify-content: center;
                align-items: center;
                }
                button{
                background-color: ${this.cardButtonColor};
                color: ${this.cardButtonTextColor};
                width: 90%;
                height: 1.8rem;
                border-radius: none;
                }
            </style>

            <div class='card-container'>
                <div class="img-container">
                    <img src="${this.img}" alt="${this.cardTitel}"/>
                </div>
                <h2>${this.cardTitel}</h2>
                <p>${this.cardSubTitel}</p>
                <div class="button-container">
                    <button>${this.buttonText}</button>
                </div>
        `;
        this.attachShadow({mode: 'open'}) //It takes one argument, and object with key: mode and value: 'open' or 'closed'. "open" to access the shadowDOM via the shadowroot
        this.shadowRoot.appendChild(this.template.content.cloneNode(true)); //diferencia con "this" y sin this?
    }
}
window.customElements.define('castel-schadencard', SchadenCard)*/
