//Задание #1
{
    let numbers = [1, 2, 3, 4, 5];

    document.write(`<h2>Задание №1<br/>
                    Вывод массива:</h2>`)
    for (let index = 0; index < numbers.length; index++) {
        document.write(`<h3>${numbers[index]}</h3>`) 
    }
}

//Задание #2
{
    let numbers = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    document.write(`<h2>Задание №2<br/>Вывод отрицательных чисел от -10 до -3</h2>`)
    for (let index = 0; index < numbers.length; index++) {
        if(numbers[index] > -10 && numbers[index] < -3) {
            document.write(`<h3>${numbers[index]}</h3>`) 
        }
    }
}

//Задание #3 
{
    let numbersFor = [];
    let numbersWhile = [];

    let startInterval = 23;
    let endInterval = 57;
    let result = 0;

    for (let index = startInterval; index <= endInterval; index++) {
        numbersFor.push(index);      
    }
    let index = startInterval;
    while(index <= endInterval) {
        numbersWhile.push(index)
        index++;
    }
    for (let index = 0; index < numbersFor.length; index++) result += numbersFor[index];

    document.write(`<h2>Задание №3</h2>
                    <h3>Вывод массивов:
                    <br/>Массив numbersFor = ${numbersFor}
                    <br/>Массив numbersWhile = ${numbersWhile}
                    <br/>Сумма элментов result = ${result}</h3>`)
}

//Задание #4
{
    let massive = ['10', '20', '30', '50', '235', '3000'];
    document.write(`<h2>Задание №4 <br/> Числа на цифру 1, 2, 5:</h2>`);
    for (let index = 0; index <= massive.length; index++) {
        let value = String(massive[index])[0];
        value == 1 ||
        value == 2 ||
        value == 5 ? document.write(`<h3>${massive[index]}</h3>`) : 0;
    }
}

//Задание #5
{
    let massive = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    document.write(`<h2>Задание №5 <br/> Дни недели:</h2>`);
    for (let index = 0; index < massive.length; index++) {
        index > 4 ? document.write(`<b>${massive[index]}</b> `) : 
                             document.write(`${massive[index]} `);
    }
}

//Задание #6
{
    let oldMassive = ['ПН', 1234, '456', false, 'Купить', 15];
    let massive = [];
    Array.prototype.push.apply(massive, oldMassive);

    massive.push(massive[Math.floor(Math.random() * massive.length)]);
    document.write(`<h2>Задание №6<br/>
                    Начальный массив: ${oldMassive.toString()}<br/>
                    Полученный массив: ${massive.toString()}<br/>
                    Последний элемент:
                    ${massive[massive.length - 1]}</h2>`);

}

//Задание #7
{
    let massive = [];
    let index = 1;
    while(1) {
        let inputNumber = prompt(`Введите число ${index}`);
        if(inputNumber == '') {
            break;
        }
        else {
            if(!isNaN(inputNumber)) {
                massive.push(inputNumber)
                index++;
            }
            else {
                alert("Ошибка - введеное вами значение не удалось преобразовать в число." + 
                "Если хотите продолжить введите число или пустое значение чтобы остановить");
            }
        }
    }
    document.write(`<h2>Задание №7 <br/>Полученный массив: ${massive}</h2>`);
}

// //Задание #8
{
    let massive = [12, false, 'Текст', 4, 2, -5, 0, 2]; 
    let massiveReverse = [];
    Array.prototype.push.apply(massiveReverse, massive);

    let index = 0;
    let lastIndex = massive.length - 1;
    while (index < (massive.length) / 2) {
        [massiveReverse[index], massiveReverse[lastIndex]] = [massiveReverse[lastIndex], massiveReverse[index]];
        index++;
        lastIndex--;
    }
    document.write(`<h2>Задание №8<br/>
                    Массив: ${massive}<br/>
                    В обратном порядке (reverse): ${massive.reverse()}<br/>
                    В обратном порядке (while): ${massiveReverse}</h2>`);
}

//Задание #9
{
let massive = [,5, 9, 21, , , 9, 78, , , , 6];
let count = 0;
for (const item of massive) isNaN(item) ? count++ : 0;
document.write(`<h2>Задание №9<br/>
                Массив: ${massive}<br/>
                Кол-во пустых значений count = ${count}</h2>`);
}

//Задание #10 
{
    let massive = [48,9,0,4,21,2,1,0,8,84,76,8,0,13,2]
    let startIndex = massive.indexOf(0);
    let endIndex = massive.lastIndexOf(0);
    let sum = 0;
    if(startIndex != -1 && endIndex != -1 && startIndex != endIndex) {
        for (let index = startIndex; index < endIndex; index++) {
            sum += massive[index];
        }
    }
    document.write(`<h2>Задание №10<br/>
                Массив: ${massive}<br/>
                Сумма sum = ${sum}</h2>`);
}


let initMassive = (height, weight) => {
    let massive = new Array(height);
    for (let rowIndex = 0; rowIndex < height; rowIndex++) {
        massive[rowIndex] = new Array(weight);
        for (let columnIndex = 0; columnIndex < weight; columnIndex++) {
            massive[rowIndex][columnIndex] = '_';
        }      
    }
    return massive;
}

//Задание #11
{
    let minLenght = 3;
    let valuePyramid = '^';
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
    let weightPyramid = 2 * heightPyramid - 1;
    let massive = initMassive(heightPyramid, weightPyramid);
    let startIndexWeight = 0;
    let endIndexWeight = weightPyramid;
    for (let row = heightPyramid - 1; row >= 0; row--) {
        for (let column = startIndexWeight; column < endIndexWeight; column++) {  
            massive[row][column] = valuePyramid;     
        }        
        startIndexWeight++;
        endIndexWeight--;
    }

    document.write(`<h2>Задание №11 <br/>Пирамида:</h2>`);
    for (let rowIndex = 0; rowIndex < heightPyramid; rowIndex++) {
        for (let columnIndex = 0; columnIndex < weightPyramid; columnIndex++) {
            document.write(`${massive[rowIndex][columnIndex]}`);
        }      
        document.write(`<br/>`);
    }
}