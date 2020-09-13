const path = 'C:\\Users\\galag\\Desktop\\PHOTOS';//путь к фалу с фото
const fileMetadata = require('get-file-properties');//активирование библиотеки get-file-properties
const moment = require('moment'); // require
(async () => {
    const meta = await fileMetadata.getFileProperties(path + '\\2k-hd-widescreen-background-planets-nebula-cloud-galaxy-spac.jpg');
    const creationDate = moment(meta.CreationDate.split('.')[0], 'YYYYMMDDhhmmss');
    console.log(creationDate.format('MMMM'));

})();
