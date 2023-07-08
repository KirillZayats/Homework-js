document.querySelector('html').setAttribute('lang', 'en');

let title = document.createElement('title');
title.innerHTML = 'Homework 8';

let metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
let metaView = document.createElement('meta');
metaView.setAttribute('name', 'viewport');
metaView.setAttribute('content', 'width=device-width, initial-scale=1.0');

document.head.appendChild(title);
document.head.appendChild(metaCharset);
document.head.appendChild(metaView);

let titleH1 = document.createElement('h1');
titleH1.innerHTML = 'Choose Your Option';
let paragraphBody = document.createElement('p');
paragraphBody.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
let divContainer = document.createElement('div');
divContainer.setAttribute('class', 'container');
divContainer.innerHTML = `
    <div class="block-info">
    <p class="pre-title">FREELANCER</p>
    <h2 class="title">Initially designed to </h2>
    <p class="text">But I must explain to you how all this mistaken idea of denouncing </p>
    <button>START HERE</button>
    </div>
    <div class="block-info">
    <p class="pre-title">STUDIO</p>
    <h2 class="title">Initially designed to </h2>
    <p class="text">But I must explain to you how all this mistaken idea of denouncing </p>
    <button>START HERE</button>
    </div>`;
console.log(titleH1);
document.body.appendChild(titleH1);
document.body.appendChild(paragraphBody);
document.body.appendChild(divContainer);

let styleHtml = document.createElement('style');
styleHtml.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
    }

    :root {
        --color-main: #212121;
        --color-text: #9FA3A7;
        --color-background: #8F75BE;
        --color-marker: #FFC80A;
        --color-marker-text: #fff;
    }

    body {
        text-align: center;
    }

    h1 {
        margin: 122px auto 10px;
        color: var(--color-main);
    }

    h1,
    h2 {
        font-family: Arvo;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: 46px;
    }

    body>p {
        font-family: 'Open Sans';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        color: var(--color-text);
    }

    .container {
        max-width: 1280px;
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 55.5px auto 139px;
    }

    .block-info {
        max-width: 401px;
        width: 100%;
        box-shadow: 0px 0px 5px #E8E9ED;
    }

    .block-info:last-child {
        background: var(--color-background);
    }

    .pre-title {
        margin: 81px auto 19px;
    }

    .pre-title,
    button {
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2.4px;
    }

    .text,
    h2 {
        max-width: 210px;
        width: 100%;
        margin: 0 auto;
    }

    .text {
        font-family: 'Open Sans';
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
    }

    h2 {
        margin-bottom: 25px;

    }

    button {
        margin: 62px auto 90px;
        border-radius: 40px;
        border: 2px solid var(--color-marker);
        height: 55px;
        width: 150px;
        background: transparent;
    }

    .block-info:first-child .pre-title,
    .block-info:first-child .text {
        color: var(--color-text);
    }

    .block-info:last-child,
    .block-info:last-child button {
        color: var(--color-marker-text);
    }

    .block-info:first-child,
    .block-info:first-child button {
        color: var(--color-main);
    }

    .block-info:last-child .pre-title {
        color: #FFC80A;
    } 
`;

document.head.appendChild(styleHtml);