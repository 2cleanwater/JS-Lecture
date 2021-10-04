
// Json에 있는 파일을 받아오는 것
function loaditems() {
    return fetch('../data/data_2cl.json')
    .then(response => response.json())
    .then(json => json.items);
}

//main

loaditems()
    .then(items => {
        // displatitems(items);
        // setEventListeners(items)
    })
    .catch(console.log);