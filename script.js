//Задание 1 
{
    let regexp = /@/g;
    let str = 'aaa@bbb@ccc';
    document.write(`<h2>Задание 1<br/>
                    Начальная строка: ${str}<br/>
                    Результат замены: ${str.replace(regexp, '!')}</h2>`)
}

//Задание 2
{
    let opt = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }
    let date = "2025-12-31";
    let newDate = new Date(date).toLocaleString('en-US', opt);
    document.write(`<h2>Задание 2<br/>
                    Начальная дата: ${date}<br/>
                    Преобразованная дата: ${newDate}</h2>`)
}

//Задание 3
{
    let strData = "Я учу javascript!";
    document.write(`<h2>Задание 3<br/>
                    Начальная строка: ${strData}<br/>
                    Метод substr: вырезано (${strData.substr(2, 4)}) и (${strData.substr(6)})<br/>
                    Метод substring: вырезано (${strData.substring(2, 5)}) и (${strData.substring(6)})<br/>
                    Метод slice: вырезано (${strData.slice(2, 5)}) и (${strData.slice(6)})</h2>`);
}
//Задание 4
{
    let massive = [4, 2, 5, 19, 13, 0, 10];
    let valueSqrt;
    let summaElements = 0;
    for (let index = 0; index < massive.length; index++) {
        summaElements += Math.pow(massive[index], 3)      
    }
    valueSqrt = Math.sqrt(summaElements);
    document.write(`<h2>Задание 4<br/>
                    Дан массив: ${massive}<br/>
                    Сумма кубов: ${summaElements}<br/>
                    корень квадратный: ${valueSqrt.toFixed(3)}</h2>`);
}

//Задание 5
{
    let a = [3, 5], 
        b = [6, 1],
        c = [];
    const numbersSubtract = (a, b) => Math.abs(a - b);
    for (let index = 0; index < a.length; index++) c.push(numbersSubtract(a[index], b[index]));
    document.write(`<h2>Задание 5<br/>
                    Дан массив A: [${a}]<br/>
                    Дан массив B: [${b}]<br/>
                    Полученный массив C: [${c}]</h2>`);
}
//Задание 6
{
    let date = new Date().toLocaleString('ru');
    let validDate = '6.7.2023 12:59:59'

    const setZero = validDate => {
        validDate = validDate.split(" ").reverse().join(" ");
        validDate = validDate.split(" ");
        date = validDate[1].split('.');
        for (let index = 0; index < date.length; index++) {
            date[index] = date[index].split('').length == 1 ?  ('0' + date[index]) : date[index];       
            
        }
        validDate[1] = date.join('.');
        return validDate.join(" ");
    }

    document.write(`<h2>Задание 6<br/>
                    Текущая дата (не подходит для выполнения): ${date}<br/>
                    Тестовая дата: ${validDate}<br/>
                    Результат функции: ${setZero(validDate)}</h2>`);
}
//Задание 7
{
    let str = 'aa aba abba abbba abca abea';
    let regexp = /ab{1,}a/g;
    const findEmelents = (str, regexp) => str.match(regexp);
    document.write(`<h2>Задание 7<br/>
                    Текущая строка : ${str}<br/>
                    Результат: ${findEmelents(str, regexp)}</h2>`);
}

const isRegex = (phone, reg) => reg.test(phone);


//Задание 8
{
    let regPhoneNumber = /^(\+)?([- _():=+]?\d[- _():=+]?){10,14}$/;
    let phoneNumbers = ['375', '+375336153917', 'ergerge', '37529укп456', '+375-29-345-34-56',
                        '375(33)6154567', '+7(903)888-88-88', '8(999)99-999-99', 
                        '+380(67)777-7-777']

    document.write(`<h2>Задание 8</h2>`);
    phoneNumbers.forEach(element => {
        document.write(`<h2>Номер телефона : ${element}, верный - ${isRegex(element, regPhoneNumber) ? 'да' : 'нет'}</h2>`);
    });
}

//Задание 9
{
    let regexEmail = /^[a-zA-Z]{1,}[.\-_]?[0-9a-zA-Z]{1,}(\.)?@[a-zA-Z]{2,11}(\.)[a-zA-Z]{2,11}$/;
    let emails = ['kirill.zayats@mail.ru', 'kirill.zayats.@gmail.com', 'kirill.zaya@mail.r', 
                  'ivanov.regt@mail.', 'er.rg@mail.ru', '@mail.com', 'F4@mail.ru']

    document.write(`<h2>Задание 9</h2>`);
    emails.forEach(element => {
        document.write(`<h2>Почта : ${element}, верная - ${isRegex(element, regexEmail) ? 'да' : 'нет'}</h2>`);
    });
}

//Задание 10
{
    let urls = ['https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3', 
                  'https://tech.onliner.by/', 'http://tech.onliner.by/regerg', 'https://tech.onliner.by/2018/04/26/smart-do-200/', 
                  'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200']
    const getPartUrl = url => {
        let parts = [];
        let elementsUrl = deleteSpace(url.split("/"));
        parts.push(elementsUrl[0] + '//' + elementsUrl[1])
        let index = 2
        if(elementsUrl.length > index) {
            let strAdressDomain = '/';
            for (index; index < elementsUrl.length; index++) {
                if(elementsUrl[index].split('')[0] == '?') {
                    break;
                } else {
                    strAdressDomain += elementsUrl[index] + "/";
                }
            }
            parts.push(strAdressDomain);
            if(elementsUrl.length - 1 == index) {
                let endUrl = elementsUrl[index].split('');
                endUrl.shift();
                endUrl = endUrl.join('')
                endUrl = endUrl.split('#');
                parts.push(endUrl[0]);
                endUrl.length > 1 && parts.push('#' + endUrl[1]);
            }
        }
        return parts;
    }

    const deleteSpace = massive => {
        for (let index = 0; index < massive.length; index++) {
            if(massive[index] == '') massive.splice(index, 1);        
        }
        return massive;
    }

    const outputPartsUrl = massive => {
        document.write(`<h2>Адрес : ${massive}</h2>`);
        let elements = getPartUrl(massive);
        for (let index = 0; index < elements.length; index++) {
            document.write(`<h2>Часть ${index + 1}: ${elements[index]}</h2>`); 
        }
        document.write()
    }

    document.write(`<h2>Задание 10</h2>`);
    urls.forEach(element => {
        outputPartsUrl(element);
    });
}