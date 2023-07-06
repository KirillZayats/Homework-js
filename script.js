
//Задание #1
{
    const getNumber = (number, numberSubtract , numberDivide) => (number - numberSubtract) / numberDivide;
    let number = 70;
    let numberSubtract = 10;
    let numberDivide = 5; 
    document.write(`<h2>Задание №1<br/>
                    Даны числа: ${number}, ${numberSubtract}, ${numberDivide}<br/>
                    Результат ф-ции (a - b)/c = ${getNumber(number, numberSubtract, numberDivide)}</h2>`);
}

//Задание #2
{
    const getСubeAndSquare = number => [Math.pow(number, 3), Math.pow(number, 2)];
    let number = 11;
    let valuesMath = getСubeAndSquare(number);
    document.write(`<h2>Задание №2<br/>
                    Дано число: ${number}<br/>
                    Куб числа: ${valuesMath[0]}<br/>
                    Квадрат числа: ${valuesMath[1]}</h2>`)
}

//Задание #3 
{
    const getMinValue = (numberA, numberB) => numberA > numberB ? numberB : numberA;
    const getMaxValue = (numberA, numberB) => numberA > numberB ? numberA : numberB;
    let numberA = [10, 0, 33];
    let numberB = [-2, 0, 34];
    document.write(`<h2>Задание №3
                    <br/>Даны числа: ${numberA, numberB}
                    <br/>Числа ${numberA[0]} и ${numberB[0]}, из них большее ${getMaxValue(numberA[0], numberB[0])}, меньшее ${getMinValue(numberA[0], numberB[0])}  
                    <br/>Числа ${numberA[1]} и ${numberB[1]}, из них большее ${getMaxValue(numberA[1], numberB[1])}, меньшее ${getMinValue(numberA[1], numberB[1])}  
                    <br/>Числа ${numberA[2]} и ${numberB[2]}, из них большее ${getMaxValue(numberA[2], numberB[2])}, меньшее ${getMinValue(numberA[2], numberB[2])}  
                    </h2>`)
}

//Задание #4

let massive = [];
{
    const createMassive = () => {
        let startRange, endRange;
        let massive = [];
        while(true) {
            startRange = prompt("Введите начало...")
            endRange = prompt("Введите конец ...")
            if(isNaN(startRange) || isNaN(endRange)) {
                alert("введено не число")
            } else if(startRange == endRange) {
                alert("значения равны, задать интервал невозможно")
            } else {
                break;
            }     
        }
        if(startRange > endRange) {
            for (let index = endRange; index <= startRange; index++) {
                massive.push(index)              
            }
        } else {
            for (let index = startRange; index <= endRange; index++) {
                massive.push(index)              
            }
        }
        return massive;
    }   

    const outputData = massive => {
        document.write(`<h2>Задание №4 <br/> Полученный массив: ${massive}</h2>`);
    }
    massive = createMassive()
    outputData(massive);
}

const isEven = number => ((number % 2) == 0) ? true : false;

//Задание #5
{
    let numberA = 0;
    let numberB = 11;
    let numberC = 4
    let strEven = 'четное';
    let strNoEven = 'не четное'
    document.write(`<h2>Задание №5 <br/>
                    Число ${numberA} ${isEven(numberA) ? strEven : strNoEven} <br/>
                    Число ${numberB} ${isEven(numberB) ? strEven : strNoEven} <br/>
                    Число ${numberC} ${isEven(numberC) ? strEven : strNoEven} <br/>
                    </h2>`);

}

//Задание #6
{
    const getEvenMasive = massive => {
        for (let index = 0; index < massive.length; index++) {
            if(!isEven(massive[index])) {
                massive.splice(index, 1);
                index--;
            }
        }
        return massive;
    }
    document.write(`<h2>Задание №6 <br/> 
                    Полученный массив после удалнения нечетных чисел: ${getEvenMasive(massive)}</h2>`);

}

//Задание #7
{
    const createPiramida = (height, simbol) => {
        let pirabidaMassive = new Array(height);
        let valuesHeight = height;
        for (let row = height - 1; row >= 0; row--) {
            pirabidaMassive[row] = new Array(height);
            for (let column = 0; column < valuesHeight; column++) {  
                if(simbol != '') {
                    pirabidaMassive[row][column] = simbol;     
                } else {
                    pirabidaMassive[row][column] = row + 1;     
                }
            }     
            valuesHeight--;   
        }
        return pirabidaMassive;
    }

    const inputValues = () => {
        let inputNumber;
        let simbol;
        while(true) {
            inputNumber = prompt('Введите высоту пирамиды (задание 7)');
            simbol = prompt('Введите символ');
            if(isNaN(inputNumber)) {
                alert("Ошибка - введеное вами значение не удалось преобразовать в число." + 
                "Если хотите продолжить введите число (высоту для пирамиды)");
            } else {
                break;
            }     
        }

        return [inputNumber, simbol];
    }

    let values = inputValues();
    let massivePidamide = createPiramida(values[0], values[1]);
    document.write(`<h2>Задание №11 <br/>Пирамида:</h2>`);
    for (let rowIndex = 0; rowIndex < massivePidamide.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < massivePidamide[rowIndex].length; columnIndex++) {
            document.write(`${massivePidamide[rowIndex][columnIndex]}`);
        }      
        document.write(`<br/>`);
    }
}

//Задание #8
{
    const initMassive = (height, weight) => {
        let massive = new Array(height);
        for (let rowIndex = 0; rowIndex < height; rowIndex++) {
            massive[rowIndex] = "";
            for (let columnIndex = 0; columnIndex < weight; columnIndex++) massive[rowIndex] += "_";
        }
        return massive;
    }

    const inputHeight = () => {
        let minLenght = 3;
        let heightPyramid;
        while(1) {
            heightPyramid = Number(prompt(`Введите высоту пирамиды`));
            if(!isNaN(heightPyramid) && heightPyramid >= minLenght) {
                break;
            } else if(heightPyramid < minLenght) {
                alert(`Минимальная высота пирамиды равна ${minLenght}`);
            } else {
                alert("Что то пошло не так. Введите число.");
            }
        }
        return heightPyramid;
    }

    const getPiramid = heightPyramid => {
        let weightPyramid = 2 * heightPyramid - 1;
        let massive = initMassive(heightPyramid, weightPyramid);
    
        let startIndexWeight = 0;
        let valuePyramid = "*";
        let endIndexWeight = weightPyramid;
    
        for (let row = heightPyramid - 1; row >= 0; row--) {
            massive[row] = massive[row].split('');
            for (let column = startIndexWeight; column < endIndexWeight; column++) {  
                massive[row][column] = valuePyramid;     
            }
            massive[row] = massive[row].join('');
            startIndexWeight++;
            endIndexWeight--;
        }
        return massive;
    }

    const getRevercePiramid = heightPyramid => {
        let weightPyramid = 2 * heightPyramid - 1;
        let massive = initMassive(heightPyramid, weightPyramid);
    
        let startIndexWeight = 0;
        let valuePyramid = "*";
        let endIndexWeight = weightPyramid;
        for (let row = 0; row < heightPyramid; row++) {
            massive[row] = massive[row].split('');
            for (let column = startIndexWeight; column < endIndexWeight; column++) {  
                massive[row][column] = valuePyramid;     
            }
            massive[row] = massive[row].join('');
            startIndexWeight++;
            endIndexWeight--;
        }
        return massive;
    }

    let heightPyramid = inputHeight();
    let massive = getPiramid(heightPyramid);
    let massiveReverce = getRevercePiramid(heightPyramid)
    document.write(`<h2>Задание №8 <br/>Пирамида:</h2>`);
    for (let rowIndex = 0; rowIndex < heightPyramid; rowIndex++) {
        document.write(`${massive[rowIndex]}`);    
        document.write(`<br/>`);
    }
    document.write(`<h2>Перевернутая пирамида:</h2>`)
    for (let rowIndex = 0; rowIndex < heightPyramid; rowIndex++) {
        document.write(`${massiveReverce[rowIndex]}`);    
        document.write(`<br/>`);
    }
}

//Задание #9
{

const getMassiveNumbersFib = () => {
    let massive = [0, 1];
    let maxValue = 1000;
    let index = massive.length - 1;
    while(massive[index] <= maxValue) {    
        massive.push(massive[index] + massive[index - 1])
        index = massive.length - 1;
    }
    massive.pop();
    return massive;
} 
document.write(`<h2>Задание №9<br/>
                Массив с числами Фибоначи: ${getMassiveNumbersFib()}</h2>`);
}

//Задание 11
{
    const outputMassive = (massive, index) => {
        if(index < massive.length) {
            document.write(`<h2>Число №${index + 1} = ${massive[index]}</h2>`);
            outputMassive(massive, ++index);
        }
    }

    let massive = [1, 2, 3, 4, 5, 0, 7, 8, 9, 10];
    document.write(`<h2>Задание 11</h2>`);
    outputMassive(massive, 0)
}

//Задание 10
{
    const getSumNumbers = (numbers, index, sum) => {
        if(index < numbers.length) {
            sum += Number(numbers[index])
            getSumNumbers(numbers, ++index, sum)
        } else if(sum > 9) {
            getSumNumbers(String(sum), 0, 0)
        } else {
            document.write(`<h2>Сумма цифер = ${sum}</h2>`)
        }
    }

    let number = 123456;
    document.write(`<br/><h2>Задание 10</h2>`);
    getSumNumbers(String(number), 0, 0)
}

//Задание 12
{
    const getData = () => {
        let name = prompt(`Введите ваше имя`);
        let surname = prompt(`Введите вашу фамилию`);
        let lastname = prompt(`Введите ваше отчество`);
        let numberGroup = prompt(`Введите номер группы`);
        let strNameWork = 'Домашняя работа: «Функции»';
        let strGroup = `Выполнил: студент гр. ` + numberGroup;
        let fullName = surname + " " + name + " " + lastname;
        let lengthLine = 2;
        if(strNameWork.length >= strGroup.length && strNameWork.length >= fullName.length) {
            lengthLine += strNameWork.length;
        } else if(strGroup.length >= strNameWork.length && strGroup.length >= fullName.length) {
            lengthLine += strGroup.length;
        } else {
            lengthLine += fullName.length;
        }
        let lengthAddLine = lengthLine - 2 - strNameWork.length;
        for (let index = 0; index < lengthAddLine; index++) strNameWork += " ";
        lengthAddLine = lengthLine - 2 - strGroup.length;
        for (let index = 0; index < lengthAddLine; index++) strGroup += " ";
        lengthAddLine = lengthLine - 2 - fullName.length;
        for (let index = 0; index < lengthAddLine; index++) fullName += " ";
        

        
        let line = '';
        for (let index = 0; index < lengthLine; index++) line += '*';

        console.log(`Задание №12\nДанные:\n${line}\n*${strNameWork}*\n*${strGroup}*\n*${fullName}*\n${line}`);
    }

    getData();
}