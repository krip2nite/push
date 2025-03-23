// console.log(fetch("https://api.thecatapi.com/v1/breeds")); // returns promise
// fetch("https://api.thecatapi.com/v1/breeds")
// .then(resp => resp.json()).then(data => console.log(data)); // this is how to get data of promise from api url

const ulElem = document.getElementById("ul_elem");
drawImages(ulElem);
async function drawImages(elem){
    const response = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await response.json(); // better to make function that return array of 3 elements (image, title, detail)
    const images = getImages(data);
    const items = getItems(images);
    elem.innerHTML = items;
}

function getImages(data){
    const images =data.map(record => `http://cdn2.thecatapi.com/images/${record.reference_image_id}.jpg`)
    return images;
}

function getItems(images){
    const items = images.map(getItem);
    return items.join("");
}

function getItem(image){
    const item = `<li><img src=${image} width=300 px height=300 px></li>`;
    return item;
}