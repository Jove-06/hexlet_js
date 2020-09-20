const path = 'C:\\Users\\galag\\Desktop\\PHOTOS';//путь к фалу с фото
const fs = require('fs');
const fileMetadata = require('get-file-properties');//активирование библиотеки get-file-properties
const moment = require('moment'); // require
const mv = require('mv');
(async () => {
    const reader = await fs.readdirSync(path, 'utf-8');
    let photos;
    for (let i = 0; i < reader.length; i++) {

        const pathToNewdDir = path + '\\sorted_photos'; //'\\IMG-cb3c608518029aa1360bc5889d6ccbcc-V.jpg';

           const pathToPhoto = path + `${reader[i]}`// путь к фото

        const meta = await fileMetadata.getFileProperties(path + '\\20200121_115228.jpg');// доп. инфа по фото

        const creationDate = await moment(meta.CreationDate.split('.')[0], 'YYYYMMDDhhmmss');//дата создания

        const monthOfCreation = await creationDate.format('MMMM');//месяц создания

        console.log(monthOfCreation);

        const nameOfFile = meta.Name.split('\\')[5];// имя файла

        console.log(nameOfFile)

        const yearOfCreation = await creationDate.format('YYYY');// год создания

        console.log(yearOfCreation)

        mv(path + '\\' + photos, `${pathToNewdDir}/${yearOfCreation}/${monthOfCreation}/${nameOfFile}`, {mkdirp: true}, (err) => {
            if (err)
                console.log(err)
        });
    }


})();
