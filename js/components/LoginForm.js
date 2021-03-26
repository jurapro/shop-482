import {f} from '../main.js';

export default class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.append(this.getStyle());
        this.data = {
            'email': null,
            'password': null,
        }
    }

    connectedCallback() {
        this.addHtml();
        this.attachModel();
    }

    addHtml() {
        this.shadow.innerHTML += `
            <h3>Вход</h3>
            <div class="message"></div>
            <label>Логин: <input type="email" data-model="email"></label>            
            <label>Пароль: <input type="password" data-model="password"></label>
            <button data-click="login">Вход</button>   
        `;
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

    attachModel() {
        this.shadow.querySelectorAll('input')
            .forEach(el => el.addEventListener('input', event => this.inputText(event)));

        this.shadow.querySelector('button')
            .addEventListener('click', () => this.clickButton());
    }

    inputText(event) {
        if (this.data[event.target.dataset.model] === undefined) return;

        this.data[event.target.dataset.model] = event.target.value;
    }

    async clickButton() {
       let res =  await f('login', 'post', null, this.data);

       console.log(res);
    }
}