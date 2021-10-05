
// Json에 있는 파일을 받아오는 것
function loaditems() {
    return fetch('data/data_2cl.json')
    .then(response => response.json())
    .then(json => json.items);
}

function displaytitems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item));
}

function createHTMLString(item) {
    return
}
//main

loaditems()
    .then(items => {
        console.log(items);
        displaytitems(items);
        // setEventListeners(items)
    })
    .catch(console.log);