const png = require('./assets/webpack.png').default;

console.log(png);


var img = document.createElement("img");
img.src = png;
document.body.appendChild(img);
// const url = `/api/getname`;
// fetch(url).then(resp => resp.json()).then(resp => {
//     console.log(resp)
// })