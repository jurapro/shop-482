export default class Product extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.append(this.getStyle());
    }

    connectedCallback() {
        this.addHtml();
        this.bindEvent();
    }

    addHtml() {
        this.shadow.innerHTML+=
         `
            <b>${this.dataset.name}</b> - <span>${this.dataset.price}</span>
            <button>+</button>
            <hr>
            <div class="description">${this.dataset.description}</div>
        `;
    }

    bindEvent() {
        this.shadow.querySelector('button').addEventListener('click', () => {
            alert(this.dataset.id);
        })
    }

    getStyle() {
        const style = document.createElement('style');
        style.innerHTML = `
        :host
        {
            border: black 1px dotted;
            padding: 1rem;
        }`;
        return style;
    }
}