let Tech = function(name, power) {
    name = name;
    power = power;
    let status = false;

    this.enable = () => {
        status = true;
    }

    this.disable = () => {
        status = false;
    }

    this.getStatus = () => {
        return status;
    }

    this.getPower = () => {
        return power;
    }

    this.getName = () => {
        return name;
    }

    this.toString = () => {
        return `Name is ${name}\nPower is ${power}w\nStatus is ${(status ? 'on' : 'off')}`;
    }
}

let Kettle = function(name, power, sizeKettle) {
    Tech.apply(this, arguments)
    let size = sizeKettle, //how match water we can add to the kettle
        water = 0,
        status = false, 
        parentGetStatus = this.getStatus,
        parentDisable = this.disable,
        parentEnable = this.enable,
        setTime = null;
        
    this.setSize = (size) => {
        size = size;
    } 

    this.on = () => {
        if(water > 0) {
            status = true;
            if(parentGetStatus() && this.enable()) this.boiling();
        }
        else alert(`You cant turn on kettle, because no water.`);
    }

    this.off = () => {
        status = false;
        clearTimeout(setTime);
    }

    this.boiling = () => {
        setTime = setTimeout(() => {
            alert(`Water is hot!!!`)
            status = false;
        }, 3000)
    }

    this.getStatus = () => {
        parentGetStatus.call(this);
        return (status && parentGetStatus()) ? true : false; 
    }

    this.enable = () => {
        parentEnable.call(this);
        if(parentGetStatus() && status) this.boiling();
    }

    this.disable = () => {
        parentDisable.call(this);
        clearTimeout(setTime);
    }

    this.setWater = (amountWater) => {
        if(amountWater > 0 && amountWater <= size) water = amountWater;
        else {
            alert(`You cant set this amount water. Value water must be > 0 or <= size kettle (${size})`)
            water = 0;
        }
    }

    this.addWater = (partWater) => {
        if(water + partWater <= size) water += partWater;
        else {
            alert(`You cant add this amount water (overflow water = ${partWater + water - size} liter).` + 
                 ` You can add water ${size - water} liter`)
        }
    }
    
    this.getWater = () => {
        return water;
    }

    this.getSize = () => {
        return size;
    }

    this.toString = () => {
        return `Name is ${name}\nPower is ${power}w\nStatus is ${(this.getStatus() ? 'on' : 'off')}`+
                `\nSize is ${sizeKettle} liter\nWater is ${water} liter`;
    }
}

let kettle = new Kettle('Sumsung', 100, 20);
console.log(kettle);
console.log(kettle.toString());
kettle.setWater(10);
console.log(kettle.toString());
kettle.enable();
kettle.on();


let DocumentHtml = function() {
    this.create = (tagName) => {
        return document.createElement(tagName);
    }

    this.attr = (element, nameAttr, ValueAttr) => {
        element.setAttribute(nameAttr, ValueAttr)

    }

    this.html = (element, massiveValue) => {
        for (const value of massiveValue) {
            element.innerHTML += value + " ";
        }
    }

    this.search = (element, selector) => {
        return element.querySelectorAll(selector);
    }

    this.addClass = (element, className) => {
        element.classList.add(className);
    }

    this.removeClass = (element, className) => {
        element.classList.remove(className);
    }

    this.toggleClass = (element, className) => {
        element.classList.toggle(className);
    }

    this.hasClass = (element, className) => {
        return element.classList.contains(className);
    }

    this.append = (element, newElement, beforeElement) => {
        beforeElement ? element.insertBefore(newElement, beforeElement) :
                        element.appendChild(newElement);
    }

    this.on = (element, eventName, funcName) => {
        element.addEventListener(eventName, funcName)
    }
}

let site = new DocumentHtml();
let classColor = 'color';
let text = site.create('p');
site.attr(text, 'class', 'text color');
site.html(text, [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy 
                  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                  survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
                  in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                  like Aldus PageMaker including versions of Lorem Ipsum.`]);
site.append(document.body, text);

let title = site.create('h1');
site.attr(title, 'class', `h1 ${classColor}`);
site.html(title, ["Hello World!", "I Love all of us :)"]);
site.append(document.body, title, text);

console.log(`Search elements with class color:`);
console.log(site.search(document.body, `.${classColor}`));

//site.removeClass(text, classColor);
site.addClass(text, 'color-mod');
console.log(`Class '${classColor}' is ` + (site.hasClass(text, classColor) ? 'on' : 'off'));

const showClick = (event) => {  
    console.log(event.type);
}
site.on(text, 'click', showClick);
