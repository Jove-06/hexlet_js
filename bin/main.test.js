const fs = require('fs')
const { promises } = fs;

const unipnFiles = (firstFile, secondFile, outFile) => {
    let data1;
   const result = promises.readFile(firstFile, 'utf-8')
       .then((content) => {
           data1 = content;
       })
       .then(promises)
    return result;
}
console.log(unipnFiles('./README.md', 'readme_2.md', './readme_3.md'));