
// Json에 있는 파일을 받아오는 것
function loaditems() {
    return fetch('data/data_2cl.json')
    .then(response => response.json())
    .then(json => json.items);
}

// 리스트 업데이트
function displayitems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// 받은 데이터로 아이템 리스트 만들기
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail" width="100" />
        <span class="item_description">${item.type}, ${item.color} </span>
    </li>
    `;
}

function onButtonClick(event, items) {
    const target = event.target;
    const key = target.dataset.key;
    const value = target.dataset.value;

    if (key == null || value == null) {
        return;
    }
    displayItems(items.filter(item => item[key] === value));
}


function setEventListeners() {
    const logo = document.querySelector('.logo');
    const buttons = docoument.querySelector('.buttons');
    logo.addEventListener('click', () => displayitems(items));
    buttons.addEventListener('click', event => onButtonClick(evnet, items));
}

//main

loaditems()
    .then(items => {
        console.log(items);
        displayitems(items);
        setEventListeners(items)
    })
    .catch(console.log);