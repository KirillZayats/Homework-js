//задание 1, 2
{
    let nameUser = prompt("Ваше имя");
    let age = Number(prompt("Ваш возраст"));
    let city = prompt("Ваш город проживания");
    let phone = prompt("Ваш номер телефона");
    let email = prompt("Ваша эл. почта");
    let company = prompt("Название вашей компании");
    document.write(`<h2>Задание №1.\nМеня зовут ${nameUser}. Мне ${age} лет. Я проживаю в
    городе ${city} и работаю в компании ${company}. Мои контактные данные:
    ${phone}, ${email}. </h2>`);

    document.write(`<h2>Задание №2. ${nameUser} родился в ${new Date().getFullYear() - age} году </h2>`);
}

//задание 3
{
    let check = true
    let number;
    while(check) {
        number = Number(prompt("Введите шестизначное число"))
        if(String(number).length == 6) {
            check = false;
        }
        else {
            alert(`Введенное число должно иметь 6 цифер (${year})`);
        }
    }
    let sumFirst = String(number).slice(0,String(number).length / 2)
                             .split('')
                             .reduce(function(previousValue, currentValue) {
                                    return Number(previousValue) + Number(currentValue);
                             });
    let sumLast = String(number).slice(String(number).length / 2, String(number).length)
                            .split('')
                            .reduce(function(previousValue, currentValue) {
                                    return Number(previousValue) + Number(currentValue);
                            });
    let answer = "нет"
    if(sumLast === sumFirst) {
        answer = "да"
    }
    document.write(`<h2>Задание №3. ${answer}`);
}

//задание 4
{
    let a1 = 1;
    let a2 = 0;
    let a3 = -3;
    const isCheck = a => {
        return (a > 0) ? "верно" : (a === 0) ? "а равно 0" : "не верно";
    
    }
    document.write(`<h2>Задание №4. <br>Если а = 1, то ${(isCheck(a1))}; <br>Если а = 0, то ${(isCheck(a2))}; <br>Если а = -3, то ${(isCheck(a3))};`);    
}

//задание 5
{
    let a = 10;
    let b = 2;
    document.write(`<h2>Задание №5. 
                    <br>Сумма = ${(a + b) > 1 ? Math.pow(a + b, 2) : a + b}; 
                    <br>Разность = ${a - b}; 
                    <br>Произведение = ${a * b};
                    <br>Частное = ${a / b};`
                    );    
}

//задание 6
{
    let a = prompt("Введите число a")
    let b = prompt("Введите число b")
    document.write(`<h2>Задание №6. 
                    <br> ${(a > 2 && a < 11) || (b >= 6 && b < 14) ? "Верно" : "Неверно" }`);    
}

//задание 7
{
    let minute = Number(prompt("Введите кол-во минут"))
    let part = Math.ceil((minute / (60/4)))
    document.write(`<h2>Задание №7. 
                    <br>Четверть часа: ${part === 0 ? 1 : part}`);  
}

const year = 365;
const month = 31;
const week = 7;
const hours = 24;
const minuteOrSecond = 60;

//задание 8, 10
{
    let check = true
    let day;
    while(check) {
        day = Number(prompt("Введите день"));
        if(day < 1 || day > year) {
            alert(`значение дня должно быть положительным, но меньше дней в году (${year})`);
        } else {
            check = false;
        }
        
    }
    let decada = Math.ceil((day % month / 10))
    document.write(`<h2>Задание №8. 
                    <br>Декада номер ${day === month ? 3 : decada}`); 
    let monthNow = Math.ceil(day / month)   
    let timeYear = ''
    switch (monthNow) {
        case 1:
        case 2:
        case 12:

            timeYear = "зима"
            break;
        case 3:
        case 4:
        case 5:
            timeYear = "весна"
            break;
        case 6:
        case 7:
        case 8:
            timeYear = "лето"
            break;
        case 9:
        case 10:
        case 11:
            timeYear = "осень"
            break;
        default:
            timeYear = " неудалось определить пору года"
            break;
    }
    document.write(`<h2>Задание №10. 
    <br>Месяц номер ${monthNow}
    <br>Пора года ${timeYear}`);  
}

//задание 9
{
    let day = Number(prompt("Введите кол-во дней"))
    let countYears;
    let countMonth;
    let countWeek;
    let countHours;
    let countMinute;
    let countSecond;
    if(day >= year) {
        countYears = Math.floor(day / year);
        day = day % year;
    } else {
        countYears = "Меньше года";
    }
    if(day >= month) {
        countMonth = Math.floor(day / month);
        day = day % month;
    } else {
        countMonth = "Меньше месяца";
    }
    if(day >= week) {
        countWeek = Math.floor(day / week);
        day = day % week;
    } else {
        countWeek = "Меньше недели";
    }
    if(day > 0) {
        countHours = Math.floor(day * hours);
        day = day * hours - countHours;
    } else {
        countHours = "Меньше часа";
    }
    if(day > 0) {
        countMinute = Math.floor(day * minuteOrSecond);
        day = day * minuteOrSecond - countMinute;
    } else {
        countMinute = "Меньше минуты";
    }
    if(day > 0) {
        countSecond = Math.floor(day * minuteOrSecond);
        day = day * minuteOrSecond - countSecond;
    } else {
        countSecond = "Меньше секунды";
    }
    document.write(`<h2>Задание №9. 
                    <br>Года: ${countYears}
                    <br>Месяцев: ${countMonth}
                    <br>Недель: ${countWeek} 
                    <br>Часов: ${countHours}
                    <br>Минут: ${countMinute}
                    <br>Секунд: ${countSecond}`);  
}
