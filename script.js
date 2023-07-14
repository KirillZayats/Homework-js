class Reg {
    static regexName = new RegExp('^[a-zA-Z]{2,}$');
    static regexEmail = new RegExp('^[a-zA-Z]{1,}[.\-_]?[0-9a-zA-Z]{1,}(\.)?@[a-zA-Z]{2,11}(\.)[a-zA-Z]{2,11}$');
    static regexPhone = new RegExp('^\\+375(\\s+)?\\(?(17|25|29|33|44)\\)?(\\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$');
}

class User {
    #data = { };
    constructor(data) {
        this.data = data
    }

    get data() {
        return this.#data;
    }

    edit(data) {
        this.data = data;
    }

    isCheck() {
        return (Reg.regexName.test(this.data.name) && Reg.regexEmail.test(this.data.email) && Reg.regexPhone.test(this.data.phone)) ? true : false;
    }

    getErrorMessageField() {
        if(!Reg.regexName.test(this.data.name)) return "Name must be more than 1 character and have only letters";
        else if(!Reg.regexEmail.test(this.data.email)) return "Email must have the @ symbol (e.g. kirill.zayats@mail.ru).";
        else return "Phone number must be from Belarus add have next view (+375440000000)";
    }

    set data(data) {
        this.#data.name = data.name ? data.name : 
                    this.#data.name ? this.#data.name : '';
        this.#data.email = data.email ? data.email : 
                    this.#data.email ? this.#data.email : '';
        this.#data.adress = data.adress ? data.adress : 
                    this.#data.adress ? this.#data.adress : '';
        this.#data.phone = data.phone ? data.phone : 
                    this.#data.phone ? this.#data.phone : '';
    }

    toString() {
        return `${this.data.name}<br/> Email: ${this.data.email}<br/> 
               Phone number: ${this.data.phone}<br/> Adress: ${this.data.adress}`;
    }
}

class Contacts {
    #data = [];
    constructor(dataMassive) {
        this.#data = dataMassive ? dataMassive : [];
    }

    add(user) {
        (user instanceof User) ? this.#data.push(user) : alert('You want add object, that dont instance of User');;
    }

    edit(id, newUser) {
        if(id >= 0 && id < this.#data.length) {
            (newUser instanceof User) ? (this.#data[id] = newUser) : alert('You want add object, that dont instance of User');;

        } else {
            alert(`You input id is outside`);
        }
    }

    remove(id) {
        if(id >= 0 && id < this.#data.length) {
            this.#data.splice(id, 1);
        } else {
            alert(`You input id is outside`);
        }
    }

    removeAll() {
        this.#data.length = 0;
    }

    get data() {
        return this.#data;
    }

    set data(data) {
        this.#data = data;
    }

}

class DOM {
    static create = (tagName) => {
        return document.createElement(tagName);
    }

    static attr = (element, nameAttr, ValueAttr) => {
        element.setAttribute(nameAttr, ValueAttr)
    }

    static html = (element, massiveValue) => {
        for (const value of massiveValue) {
            element.innerHTML += value + " ";
        }
    }

    static htmlClear = (element) => {
        element.innerHTML = " ";
    }

    static search = (element, selector) => {
        return element.querySelector(selector);
    }

    static searchAll = (element, selector) => {
        return element.querySelectorAll(selector);
    }

    static addClass = (element, className) => {
        element.classList.add(className);
    }

    static removeClass = (element, className) => {
        element.classList.remove(className);
    }

    static toggleClass = (element, className) => {
        element.classList.toggle(className);
    }

    static hasClass = (element, className) => {
        return element.classList.contains(className);
    }

    static append = (element, newElement, beforeElement) => {
        beforeElement ? element.insertBefore(newElement, beforeElement) :
                        element.appendChild(newElement);
    }

    static on = (element, eventName, funcName) => {
        element.addEventListener(eventName, funcName)
    }
}

class ContactsApp extends Contacts{
    #app = '';
    #countContacts = 0;
    constructor(data){
        super(data);
        this.#initElements();
        this.#initEvents();
    }

    #initEvents() {
        window.addEventListener('load', () => {
            this.#onAdd();
            this.#viewAddInfoUser();
        })
    }

    #viewAddInfoUser() {
        let elementsContacts = DOM.search(this.#app, 'ul');
        elementsContacts.addEventListener('click', (event) => {
            let element = event.target.parentElement,
                arrow = DOM.searchAll(element, '.line-arrow'),
                parent = event.target.closest('li'),
                items = [...parent.parentElement.children],
                index = items.indexOf(parent);
            if(event.target.tagName == "svg" ||
            event.target.parentElement.tagName == 'svg') {
                this.#onChange(element, event, index);
            } else {
                    if(element.className.includes('cross') || element.className.includes('arrow')
                    ) {
                    element = element.parentElement;
                }
                if(event.target.tagName == "P" || event.target.className.includes("arrow")) { 
                    DOM.toggleClass(element, 'li_toggle');   
                    DOM.toggleClass(arrow[0], 'line-arrow_start-tog');   
                    DOM.toggleClass(arrow[1], 'line-arrow_end-tog');   
                    DOM.toggleClass(arrow[0], 'line-arrow_start');   
                    DOM.toggleClass(arrow[1], 'line-arrow_end');   
                } else if(event.target.className.includes("cross")) {
                    this.#onRemove(element, elementsContacts, index);
                }
            }
        })
    }

    #onChange(element, event, index) {
        let nameContact = this.#inputNewValueRecord('name contact', 
            'Name must be more than 1 character and have only letters', Reg.regexName),
            email = this.#inputNewValueRecord('email contact', 
            'Email must have the @ symbol (e.g. kirill.zayats@mail.ru).', Reg.regexEmail),
            adress = prompt(`Input new adress contact`),
            phone = this.#inputNewValueRecord('phone contact', 
            'Phone number must be from Belarus add have next view (+375440000000)', Reg.regexPhone),
            user = new User({name: nameContact, email: email, adress: adress, phone: phone});
        this.edit(index, user); 
        if(event.target.parentElement.tagName == 'svg') {
            let paragraf = DOM.search(element.parentElement, 'p');
            DOM.htmlClear(paragraf);
            DOM.html(paragraf, [this.data[index].toString()]);
        } else {
            let paragraf = DOM.search(element, 'p')
            DOM.htmlClear(paragraf);
            DOM.html(paragraf, [this.data[index].toString()]);
        }
    }

    #inputNewValueRecord(massagePrompt, massageError, regex) {
        let value = '';
        while(true) {
            value = prompt(`Input new ${massagePrompt}`);   
            if(regex.test(value) && value != null) {
                break;
            } else {
                alert(massageError);
            }
        }
        return value;
    }

    #onAdd() {
        let inputCreate = DOM.search(this.#app, 'button');
        let inputs = DOM.searchAll(this.#app, 'input');
        inputCreate.addEventListener('click', () => {
            let user = new User({name: inputs[0].value, email: inputs[1].value, adress: inputs[2].value, phone: inputs[3].value});
            if(user.isCheck()) {
                this.#addElementListContacts(user, DOM.search(this.#app, 'ul'))
                this.add(user);
                this.#countContacts++;
                for (const input of inputs) {
                    input.value = '';
                }
                this.#countContacts == 1 && this.#createButtonDelAll();
            }
            else {
                alert(user.getErrorMessageField());
            }
        })
    }

    #onRemove(element, elementsContacts, index) {
        elementsContacts.children.length == 1 && DOM.search(this.#app, '.button-delete').remove();
        element.remove();
        this.remove(index);
        this.#countContacts--;
    }

    #initElements() {
        this.#app = DOM.create('div');
        DOM.attr(this.#app, 'class', 'contacts');
        this.#createElement(this.#app, ['h2', 'div', 'ul']);
        DOM.attr(DOM.search(this.#app, 'div'), 'class', 'container-form');
        this.#createElement(DOM.search(this.#app, '.container-form'), ['div', 'button']);
        this.#createElement(DOM.search(DOM.search(this.#app, '.container-form'), 'div'), ['input', 'input', 'input', 'input']);
        let attr = [[{attribute: 'class', value: 'block_inputs'}],
                    [{attribute: 'type', value: 'text'}, {attribute: 'placeholder', value: 'Your name'}],
                    [{attribute: 'type', value: 'text'}, {attribute: 'placeholder', value: 'Your email'}],
                    [{attribute: 'type', value: 'text'}, {attribute: 'placeholder', value: 'Your adress'}],
                    [{attribute: 'type', value: 'tel'}, {attribute: 'placeholder', value: 'Your phone number'}],
                    [{attribute: 'type', value: 'submit'}]];
        this.#addAttr([DOM.search(DOM.search(this.#app, '.container-form'), 'div'), ... DOM.searchAll(this.#app, 'input')], attr);
        DOM.html(DOM.search(this.#app, 'h2'), ['Contacts']);
        DOM.html(DOM.search(this.#app, 'button'), ['Add contacts']);                      
        DOM.append(document.body, this.#app)
        this.#addContantToList();
        this.#countContacts >= 1 && this.#createButtonDelAll();
    }

    #addContantToList() {
        for (const user of this.data) {
            this.#addElementListContacts(user, DOM.search(this.#app, 'ul'));
            this.#countContacts++;
        }
    }

    #addElementListContacts(user, list) {
        let record = DOM.create('li');
        let valueRecord = DOM.create('p');            
        DOM.html(valueRecord, [user.toString()])
        DOM.append(record, this.#createMarkViewAllInfo());
        DOM.append(record, valueRecord);
        DOM.html(record, [`<svg fill="#fff" viewBox="0 0 50 50"
                            width="24px" height="24px">
                            <polyline fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                stroke-miterlimit="10" points="42.948,12.532 10.489,44.99 3,47 5.009,39.511 37.468,7.052 " />
                            <path
                                d="M45.749,11.134c-0.005,0.004,0.824-0.825,0.824-0.825c1.901-1.901,1.901-4.983,0.002-6.883c-1.903-1.902-4.984-1.9-6.885,0c0,0-0.83,0.83-0.825,0.825L45.749,11.134z" />
                            <polygon points="5.191,39.328 10.672,44.809 3.474,46.526 " />
                            </svg>`
                        ]);
        DOM.append(record, this.#createMarkDelete());
        DOM.append(list, record);
    }

    #createButtonDelAll() {
        let buttonDelAll = DOM.create('button');
        DOM.attr(buttonDelAll, 'class', 'button-delete')
        DOM.html(buttonDelAll, ['Delete all']);
        DOM.append(this.#app, buttonDelAll);
        this.#removeAll();
    }

    #createMarkViewAllInfo() {
        let blockArrow = DOM.create('div'),
            lineStart = DOM.create('div'),
            lineEnd = DOM.create('div')
        DOM.attr(blockArrow, 'class', 'view-marker_arrow');
        DOM.attr(lineStart, 'class', 'line-arrow line-arrow_start');
        DOM.attr(lineEnd, 'class', 'line-arrow line-arrow_end');
        DOM.append(blockArrow, lineStart);
        DOM.append(blockArrow, lineEnd);
        return blockArrow;
    }

    #createMarkDelete() {
        let lineStart = DOM.create('div'),
            lineEnd = DOM.create('div'),
            blockMarkDelete = DOM.create('div');
        DOM.attr(blockMarkDelete, 'class', 'view-marker-cross');
        DOM.attr(lineStart, 'class', 'line-cross line-cross_start');
        DOM.attr(lineEnd, 'class', 'line-cross line-cross_end');
        DOM.append(blockMarkDelete, lineStart);
        DOM.append(blockMarkDelete, lineEnd);
        return blockMarkDelete;
    }

    #removeAll() {
        let button = DOM.search(this.#app, '.button-delete');
        button.addEventListener('click', () => {
            DOM.searchAll(this.#app, 'li').forEach(element => {
                element.remove();
            });
            button.remove();
            this.removeAll();
            this.#countContacts = 0;
        })
    }

    #createElement(container, massiveTag) {
        for (let index = 0; index < massiveTag.length; index++) {
            DOM.append(container, DOM.create(massiveTag[index]))
        }
    }

    #addAttr(massiveTag, massiveAttr) {
        for (let index = 0; index < massiveTag.length; index++) {
            for (let indexJ = 0; indexJ < massiveAttr[index].length; indexJ++) {
                DOM.attr(massiveTag[index], massiveAttr[index][indexJ].attribute, massiveAttr[index][indexJ].value)
            }           
        }
    }

    get app() {
        return this.#app;
    }
}

let kirill = new User({name: "kirill", email: "kirill.zayats@mail.ru", 
                       adress: "Respublikanskay d13", phone: '+375295434567'});
let petya = new User({name: "Petya", email: "petya@mail.ru", 
                       adress: "pushkin", phone: "375295434567"});
let kolya = new User({name: "Kolya", email: "kolya@mail.ru", 
                       adress: "koshkin", phone: "3752954345672"});
let sasha = new User({name: "sasha", email: "sasha@mail.ru", 
                       adress: "shkin", phone: "375295434567"});

let contactsApp = new ContactsApp([kirill, petya, kolya]);