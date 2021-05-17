//Creamos nuestro web component. Necesitamos: template, class y shadow
//Forma 1: template fuera del constructor
// const template = document.createElement('template')
// template.innerHTML =   //aquí metemos la estructura de nuestro componente, nuestro html y css
//     //<link to css> Podríamos linkear a un archivo css externo. Pero en este ejemplo escribimos el css aquí mismo.
//    `
//    <style>
//
//    </style>
//
//    <div class="schadenCard-container">
//    <img src="./assets/img/icon_Schaden.png" alt="">
//     </div>
//    `;
//
// class SchadenCard extends HTMLElement {
//     constructor() {
//         super()
//
//
//         this.attachShadow({mode: 'open'}) //It takes one argument, and object with key: mode and value: 'open' or 'closed'. "open" to access the shadowDOM via the shadowroot
//         this.shadowRoot.appendChild(template.content.cloneNode(true));//we attach the template "template" to the shadowRoot
//         //this.shadowRoot.appendChild(this.template.content.cloneNode(true)); //diferencia con "this" y sin this?
//     }
// }
//
// window.customElements.define('castel-schadencard', SchadenCard)

//Forma 2: Template dentro del constructor:
class SchadenCard extends HTMLElement {
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
window.customElements.define('castel-schadencard', SchadenCard)