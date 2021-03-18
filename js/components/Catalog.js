import {f} from '../main.js';

export default class Catalog extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.append(this.getStyle());
    }

    async connectedCallback() {
        await this.addProducts();
    }

    async addProducts() {
        let products = await f('products');

        products.forEach(el => {
            let item = document.createElement('shop-product');
            item.dataset.id = el.id;
            item.dataset.name = el.name;
            item.dataset.price = el.price;
            item.dataset.description = el.description;
            this.shadow.append(item);
        });
    }

    getStyle() {
        const style = document.createElement('style');
        style.innerHTML = `
        :host
        {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        }`;
        return style;
    }
}
