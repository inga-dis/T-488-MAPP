// Notes for usage:
    // access directory for the app:
    // FileSystem.documentDirectory
    // Access cache directory, cache can store files that are temporary
    // FileSystem.cacheDirectory
    // Can write each file with either UTF8 or Base64. Use UTF8 for
    // that need to be read. 
    // FileSystem.EncodingType.UTF8
    // Use Base64 for images
    // FileSystem.EncodingType.Base64

    // Common functions:
    // readAsStringAsync(fileUri, options) - read entire contents as a string. 
    // writeAsStringAsync(fileUri, options) - write entire contents as a string. 
    // deleteAsync(fileUri, options) - delete file or directory. 
    // moveAsync(options) - Move a file or directory to a new location (options contains "from" and "to")
    // copyAsync(options) - Create a copy of a file or directory (options contains "from" and "to")
    // makeDirecotyrAsync(fileUri, options) - create new empty directory 

import * as FileSystem from 'expo-file-system';
import uuid from 'react-native-uuid'
const contactsDirectory = `${FileSystem.documentDirectory}contacts`;
const newUuid = uuid.v1()
console.log(newUuid)

user : {
    name: ,
    phonenumber; ,
    photo: ,
}



//  

export const addContact = async contactInfo => {
    const fileName = contactInfo.name + "-" + newUuid
    await createFile(fileName); // Found some documents stating that ios can't write and create file so i create it first. 
    // await copyFile(contactLocation, `${contactDirectory}/${fileName}`);

    return {
        name: fileName,
        type: 'contact',
        file: await loadContact(fileName, contactInfo)
    };
};

const loadContact = async ({fileName, contactInfo}) => {
    return await FileSystem.writeAsStringAsync(`${contactDirectory}/${fileName}`, contactInfo,  {
        encoding: FileSystem.EncodingType.UTF8 
    });
};

const createFile = async fileName => {
    
}


// to use: 
// import * as fileService from '../../services/fileService';

// const [images, setImages] = useState([]);
// const [loadingContacts, setLoadingContacts] = useState(true);

// const addContact = async contact => {
//     setLoadingImages(true);
//     const newContact = await fileService.addContact(contact);
//     setContacts([...contacts, newContact]); // Þörf á þessu?
//     setIsAddModalOpen(false);
//     setLoadingContact(false);
// };