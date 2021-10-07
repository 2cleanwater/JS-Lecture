
// Json에 있는 파일을 받아오는 것
function loaditems() {
    return fetch('data/data_2cl.json')
    .then(response => response.json())
    .then(json => json.items);
}

// 리스트 업데이트
function displaytitems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail" width="100" />
        <span class="item_description">${item.type}, ${item.color} </span>
    </li>
    `;
}
//main

loaditems()
    .then(items => {
        console.log(items);
        displaytitems(items);
        // setEventListeners(items)
    })
    .catch(console.log);