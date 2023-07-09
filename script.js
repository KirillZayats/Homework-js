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
