
// Json에 있는 파일을 받아오는 것
function loadItems() {
    return fetch('data/data_2cl.json')
    .then(response => response.json())
    .then(json => json.items);
}

// 리스트 업데이트
function displayItems(items) {
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
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return;
    }

    displayItems(items.filter(item => item[key] === value));
    }

function setEventListeners(items) {
    const logo = document.querySelector('.store');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}
    


//main

loadItems()
    .then(items => {
        displayItems(items);
        setEventListeners(items)
    })
    .catch(console.log);