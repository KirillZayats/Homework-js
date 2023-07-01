//Задание #1
{
    let allNumberUp = '';
    let allNumberDown = '';

    for (let index = 1; index <= 52; index++) {
        allNumberUp += index + ' '; 
    }
    for (let index = 35; index >= 8; index--) {
        allNumberDown += index + ' ';   
    }
    document.write(`<h2>Задание №1<br/>
                        Вывод чисел от 1 до 52: ${allNumberUp}<br/>
                        Вывод чисел от 35 до 8: ${allNumberDown}</h2>`)
}

//Задание #2
{
    let allNumber = '',
        index = 89;
    while(index >= 11) {
        allNumber += index + "<br/>"
        index--
    }
    document.write(`<h2>Задание №2<br/>
                        Вывод чисел от 89 до 11:<br>
                        ${allNumber}</h2>`)   
}

//Задание #3 
{
    let sumNumber = 0;
    let startInterval = 0;
    let endInterval = 100;
    for (let index = startInterval; index <= endInterval; index++) {
        sumNumber += index;
    }
    document.write(`<h2>Задание №3<br/>
                        Сумма чисел от ${startInterval} до ${endInterval} = ${sumNumber}</h2>`)  
}

//Задание #4
{
    let strSumNumber = '';
    let startInterval = 1;
    let endInterval = 5;
    let sumNumber = 0;
    for (let i = startInterval; i <= endInterval; i++) {
        for (let j = 0; j <= i; j++) {
            sumNumber += j;
        }
        strSumNumber += sumNumber + " ";
        sumNumber = 0;
    }
    console.log(strSumNumber);
    document.write(`<h2>Задание №4<br/>
                        Сумма чисел каждого числа от ${startInterval} до ${endInterval}: ${strSumNumber}</h2>`) 
}

//Задание #5
{
     let startInterval = 8;
     let endInterval = 89;
     let strNumbersFor = '';
     let strNumbersWhile = '';
     for (let index = startInterval; index <= endInterval; index++) {
        if(index % 2 === 0) {
            strNumbersFor += index + " ";
        }
     }
     while (startInterval <= endInterval) {
        if(startInterval % 2 === 0) {
            strNumbersWhile += startInterval + " ";
        }
        startInterval++;
     }

     document.write(`<h2>Задание №5<br/>
                         Чётные числа (for): ${strNumbersFor}<br/>
                         Чётные числа (while): ${strNumbersWhile}</h2>`)
}

//Задание #6
{
     let startInterval = 2;
     let endInterval = 10;
     let str = '';
     for (let i = startInterval; i <= endInterval; i++) {
        for (let j = 1; j <= endInterval; j++) {
            str += i + '*' + j + "=" + (i * j) + '<br/>'
        }
        str += '<br/>'      
     }
     document.write(`<h2>Задание №6<br/>
                         Таблица умножения: <br/> 
                         ${str}</h2>`) 
}

//Задание #7
{
    let n = 1000;
    let num = 0;
    let numberEnd = 50;
    let dividerNumber = 2;
    for (n; n > numberEnd; n = n /dividerNumber) {
        num++; 
    }
    document.write(`<h2>Задание №7<br/>
                        Число = ${n}<br/> 
                        Число итераций = ${num}</h2>`) 
}

//Задание #8
{
    let isWrite = true;
    let sum = 0;
    let index = 1;
    while(isWrite) {
        let inputNumber = prompt(`Введите число ${index}`);
        if(inputNumber == '' || inputNumber == 0) {
            isWrite = false;
        }
        else {
            if(typeof Number(inputNumber) === 'number' && !isNaN(inputNumber)) {
                sum += Number(inputNumber);
                index++;
            }
            else {
                alert("Ошибка - введеное вами значение не удалось преобразовать в число." + 
                "Если хотите продолжить введите число или пустое значение/0 чтобы остановить");
            }
        }
    }
    document.write(`<h2>Задание №8<br/>
                        Сумма = ${sum}<br/> 
                        Кол-во чисел = ${index - 1}<br/> 
                        Среднее арифметическое = ${sum / (index - 1)}</h2>`) 
}

//Задание #9
{
    let str = '4 98 4 6 1 32 4 65 -22 4 3 5 7 89 7 10 1 36 8 57 -1'
    let minValue, maxValue,
        firstNumberIndex = 0;
    for (let index = 0; index < str.length; index++) {
        let isStatus = true;
        let number = str[index];

        while (isStatus) {
                if(index < str.length - 1 && str[index + 1].trim() != '' ) {
                    number += str[index + 1];
                } else {
                    isStatus = false;
                }
                index++;
        }
        if(!firstNumberIndex) {
            minValue = maxValue = number;
            firstNumberIndex++;
            
        }
        else {

            minValue = (Number(minValue) > Number(number)) ? number : minValue
            maxValue = (Number(maxValue) < Number(number)) ? number : maxValue
        }
    }
    document.write(`<h2>Задание №9<br>
                    Минимальное значение равно  = ${minValue}<br>
                    Максимальное значение равно = ${maxValue}</h2>`)
}

//Задание #10 
{
    let isWrite = true;
    let inputNumber;
    while(isWrite) {
        strInputNumber = prompt("Введите число!")
        inputNumber = strInputNumber[0] == "-" ? -1 * Number(strInputNumber) : Number(strInputNumber)
        if(typeof inputNumber === 'number' && 
            !isNaN(inputNumber) && 
            (inputNumber ^ 0) === inputNumber &&
            strInputNumber != undefined) {
            isWrite = false;
        }
        else {
            alert("Ошибка - введеное вами значение не удалось преобразовать в число." + 
                  "Если хотите продолжить введите число");
        }
    }
    inputNumber = String(inputNumber)
    let sum = 0;
    for (let i = 0; i < inputNumber.length; i++) {
        sum += Number(inputNumber[i]);       
    }
    document.write(`<h2>Задание №10<br>
                Цифры: ${inputNumber.split('').join(' ')}<br/>
                Кол-во цифр = ${inputNumber.length}<br/>
                Сумма = ${sum}<br/>
                Обратный порядок: ${inputNumber.split('').reverse().join('')}</h2>`)
}