const createElementsCardList = () => {
    let listElements = [];
    let title = document.createElement("h2");
    title.innerHTML = "To do list";

    let inputCreateList = document.createElement("input");
    inputCreateList.setAttribute("class", "input_create");
    inputCreateList.setAttribute("type", "text");
    inputCreateList.setAttribute("placeholder", "Type your task...");

    let listTask = document.createElement("ul");

    listElements.push(title, inputCreateList, listTask);
    return listElements;
};

const addElementsContainer = () => {
    let listElements = createElementsCardList(),
        containerCardList = document.createElement("div"),
        listContainers = [];

    containerCardList.setAttribute("class", "container-list");
    listElements.forEach((element) => {
        containerCardList.appendChild(element);
    });
    listContainers.push(containerCardList);
    return listContainers;
};

const addContainersBody = () => {
    addElementsContainer().forEach((element) => {
        document.body.appendChild(element);
    });
};

const addStyle = () => {
    let stylesCard = document.createElement("style");
    stylesCard.innerHTML = `
    * {
        margin: 0;
        padding: 0;
    }

    :root {
        --color-text: #fff;
        --color-background: #8F75BE;
        --color-marker: #FFC80A;
        --color-decor: #212121;
    }


    .container-list {
        background: var(--color-background);
        max-width: 300px;
        width: 100%;
        margin: 50px auto;
        text-align: center;
        padding: 5px 0;
        color: var(--color-text);
    }

    ul {
        list-style: none;
    }
    li {
        display: flex;
        gap: 10px;
        width: 90%;
        margin: 5px auto;
        font-size: 18px;
        line-height: 30px;
        box-shadow: 0px 1px 0px var(--color-text);
        cursor: pointer;
    }

    li input {
        width: 24px;
        height: 24px;
        margin: 3px 0;
        accent-color: var(--color-background);
        cursor: pointer;
    }

    h2 {
        color: var(--color-marker);
    }

    p {
        max-width: 235px;
        width: 100%;
        text-align: left;
    }

    .p-toggle {
        text-decoration: line-through;
        text-decoration-color: var(--color-decor);
    }

    .input_create, button {
        width: 90%;
        height: 30px;
        font-size: 15px;
        font-weight: bold;
        color: var(--color-background);
        background: var(--color-text);
        border: none;
    }
    
    button:hover {
        background: var(--color-marker);
        cursor: pointer;
    }
    
    button:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px var(--color-decor);
    }

    .block-mark_delete {
        width: 24px;
        height: 24px;
        margin: 3px 0px 0px auto;
    }
    
    .line {
        width: 100%;
        height: 3px;
        background: var(--color-text);
        position: relative;
    }
    
    .line-start {
        transform: rotate(-45deg);
        top: 11px;
    }

    .block-mark_delete:hover .line {
        background: var(--color-marker);
    }
    
    .line-end {
        transform: rotate(45deg);
        top: 8px;
    }

    svg {
        margin-top: 3px;
    }

    svg:hover polyline {
        fill: var(--color-marker);
    }`;

    document.head.appendChild(stylesCard);
};

const inputNameTask = () => {
    let inputCreate = document.querySelector('.input_create');
    inputCreate.addEventListener('keyup', (event) => {
        if(event.code == 'Enter' && event.target.value) {
            countEntry++;
            countEntry === 1 && addButtonDelAll();
            addTask(event.target.value);
            event.target.value = '';
        } else if (event.code == 'Enter' && !event.target.value) {
            alert("Input is empty! Type name task and press Enter.")
        }
    })

}

const addButtonDelAll = () => {
    let button = document.createElement('button');
    button.innerHTML = 'Delete all task'
    document.querySelector('.container-list').appendChild(button);
    button.addEventListener('click', () => {
        document.querySelectorAll('li').forEach(element => {
            element.remove();
        })
        button.remove();
        countEntry = 0;
    })
}

const addTask = (nameTask) => { 
    let recordTask = document.createElement('li'),
        inputCheckBox = document.createElement('input'),
        paragrafTask = document.createElement('p');
    inputCheckBox.setAttribute('type', 'checkbox');
    paragrafTask.innerHTML = nameTask;
    recordTask.appendChild(inputCheckBox);
    recordTask.appendChild(paragrafTask);
    recordTask.innerHTML += ` <svg fill="#fff" viewBox="0 0 50 50"
        width="24px" height="24px">
        <polyline fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" points="42.948,12.532 10.489,44.99 3,47 5.009,39.511 37.468,7.052 " />
        <path
            d="M45.749,11.134c-0.005,0.004,0.824-0.825,0.824-0.825c1.901-1.901,1.901-4.983,0.002-6.883c-1.903-1.902-4.984-1.9-6.885,0c0,0-0.83,0.83-0.825,0.825L45.749,11.134z" />
        <polygon points="5.191,39.328 10.672,44.809 3.474,46.526 " />
        </svg>`;
    recordTask.appendChild(addMarkDelete());
    document.querySelector('ul').appendChild(recordTask);
}

const addMarkDelete = () => {
    let lineStart = document.createElement('div'),
        lineEnd = document.createElement('div'),
        blockMarkDelete = document.createElement('div');
    blockMarkDelete.setAttribute('class', 'block-mark_delete');
    lineStart.setAttribute('class', 'line line-start');
    lineEnd.setAttribute('class', 'line line-end');
    blockMarkDelete.appendChild(lineStart);
    blockMarkDelete.appendChild(lineEnd);
    return blockMarkDelete;
}

const checkTask = () => {
    let elementsTask = document.querySelector('ul');
    elementsTask.addEventListener('click', (event) => {
        let element = event.target.parentElement,
            checkbox = element.querySelector('input');
        if(element.className == 'block-mark_delete') {
            element = element.parentElement;
        }
        if(event.target.tagName == "P") {
            checkbox.checked = !checkbox.checked ? true : false
            element.querySelector('p').classList.toggle('p-toggle')
        } else if(event.target.tagName == "INPUT") {
            checkbox.checked = !checkbox.checked ? false : true
            element.querySelector('p').classList.toggle('p-toggle')
        } else if(event.target.tagName == "DIV") {
            elementsTask.children.length == 1 && document.querySelector('button').remove();
            element.remove();
            countEntry = 0;
        } else if(event.target.tagName == "svg" ||
                  event.target.parentElement.tagName == 'svg') {
            let nameTask = '';
            while(true) {
                nameTask = prompt("Input new name task")
                if(nameTask.length) {
                    break;
                } else {
                    alert('You write nothing. Let is try again :)');
                }
            }

            if(event.target.parentElement.tagName == 'svg') {
                element.parentElement.querySelector('p').innerHTML = nameTask;
            } else {
                element.querySelector('p').innerHTML = nameTask;
            }
        }
    })
}

let countEntry = 0;
window.addEventListener('load', () => {
    addStyle();
    addContainersBody();
    inputNameTask();
    checkTask();
})
