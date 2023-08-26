export default class DOM {
    static create = (tagName) => {
        return document.createElement(tagName);
    }

    static attr = (element, nameAttr, valueAttr) => {
        element.setAttribute(nameAttr, valueAttr)
    }

    static html = (element, value) => {
        element.innerHTML += value;
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