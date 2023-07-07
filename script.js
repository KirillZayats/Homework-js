
const inputData = strName => {
    let data;
    while(true) {
        data = Number(prompt(`Введите данные (${strName})`));
        if(!isNaN(data) && data > 0) {
            break;
        } else {
            alert("Вы ввели неверные данные. Надо ввести положительное число!")
        }
    }
    return data;
}

let Kettle = function(power, volume, water) {
    this.power = power;
    this.volume = volume;
    this.water = water;

    this.changeAllData = function() {
        this.power = inputData('Мощность чайника');
        this.volume = inputData('Объем чайника');
        this.water = inputData('Кол-во воды в чайнике');
        if(this.water > this.volume) {
            alert(`Данное кол-во воды ${this.water}л. в чайнике не допустимо для заданного чайка. Его объем: ${this.volume}л..Введите данные заного!!!`)
            this.changeAllData();
        }
    }

    this.output = function() {
        document.write(`<h2>Данные о чайнике:<br/>
                        Мощность: ${this.power}Вт.<br/>Объем: ${this.volume}л.<br/>Кол-во воды: ${this.water}л.</h2>`);
        this.countEmpty();
    }

    this.countEmpty = function () {
        document.write(`<h2>Свободного места: ${this.volume - this.water}л.</h2>`)        
     }

     this.addWater = function () {
        let valueWater;
        while(true) {
            valueWater = inputData('Добавить воды в чайник')
            if((valueWater + this.water) > this.volume) {
                alert(`Нельзя влить столько воды! Перелив на ${this.water + valueWater - this.volume}л. Можно ещё залить ${this.volume - this.water}`)
            } else {
                break;
            }
        }
         this.water += valueWater;
     } 
}

let kettleSamsung = new Kettle(200, 20, 10);
document.write(`<h2>Начальные данные о чайнике.</h2>`)        
kettleSamsung.output();
kettleSamsung.changeAllData();
document.write(`<h2>После изменения.</h2>`)        
kettleSamsung.output();
kettleSamsung.addWater();
document.write(`<h2>После залили ещё воды.</h2>`)        
kettleSamsung.output();