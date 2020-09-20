const path = 'C:\\Users\\galag\\Desktop\\PHOTOS';//путь к фалу с фото
const fs = require('fs');
const fileMetadata = require('get-file-properties');//активирование библиотеки get-file-properties
const moment = require('moment'); // require
const mv = require('mv');
(async () => {
    const reader =  await fs.readdirSync(path, 'utf-8');
    console.log(reader.length);
   //let photos;
    for (let i = 0; i < reader.length; i++) {
        const photo = reader[i];
        //  console.log(reader[i]);
        const pathToDir = path + '\\sorted_photos';
        const meta =  await fileMetadata.getFileProperties(path + `\\${photo}`);// доп. инфа по фото
      //  const nameOfFile = meta.Name.split('\\')[5];// имя файла
        const creationDate =  await moment(meta.CreationDate.split('.')[0], 'YYYYMMDDhhmmss');//дата создания
        const monthOfCreation = await creationDate.format('MMMM');//месяц создания
        const yearOfCreation = await creationDate.format('YYYY');// год создания
      //  console.log(i)
        mv(path + '\\' + `${photo}`, `${pathToDir}/${yearOfCreation}/${monthOfCreation}/${photo}`, {mkdir: true}, (err) => {
            if (err) {
                console.error(err);
            }
        })
    }
 //   console.log(photos)
 //    const pathToDir = path + '\\sorted_photos_2';
 //    const meta = await fileMetadata.getFileProperties(path + '\\20200121_115228.jpg');// доп. инфа по фото
 //    const creationDate = await moment(meta.CreationDate.split('.')[0], 'YYYYMMDDhhmmss');//дата создания
 //    const monthOfCreation = await creationDate.format('MMMM');//месяц создания
 //    const yearOfCreation = await creationDate.format('YYYY');// год создания
 //    console.log(photos)
    // mv(path + `\\${photos}`, `${pathToDir}/${yearOfCreation}/${monthOfCreation}/${photos}`, {mkdir: true}, (err) => {
    //     if (err) {
    //         console.error(err);
    //     }
    // })

})();