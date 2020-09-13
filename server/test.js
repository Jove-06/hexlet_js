const fs = require('fs');
// const callback = (_err, result) => console.log(result);
// fs.readFile('server/PHOTOS.js', 'utf-8', callback)
const fun  = () => {

    const callback = (_err, data) => console.log(data);
    const resdFile = fs.readFile('server/PHOTOS.js', 'utf-8', callback)
    console.log(resdFile);
}
fun()