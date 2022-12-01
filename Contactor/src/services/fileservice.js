import * as FileSystem from 'expo-file-system'
import uuid from 'react-native-uuid'
const contactsDirectory = `${FileSystem.documentDirectory}contacts`
const newUuid = uuid.v1()

const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(contactsDirectory)
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(contactsDirectory)
    }
}

export const cleanDirectory = async () => {
    await FileSystem.deleteAsync(contactsDirectory)
}

const onException = (cb, errorHandler) => {
    try {
        return cb()
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err)
        }
        console.error(err)
    }
}

export const getFileContent = async (filename) => {
    await setupDirectory()
    const result = await onException(() => FileSystem.readAsStringAsync(
        contactsDirectory + '/' + filename, { encoding: FileSystem.EncodingType.UTF8 }))
    const resultObj = await JSON.parse(result)
    return await resultObj
}

export const addContact = async contactInfo => {
    await setupDirectory()
    const fileName = contactInfo.name + '-' + newUuid
    const contact = {
        name: contactInfo.name,
        phoneNumber: contactInfo.phoneNumber,
        image: contactInfo.image
    }

    await loadContact(fileName, contact)
}

const loadContact = async (fileName, contact) => {
    const string = JSON.stringify(contact)

    await FileSystem.writeAsStringAsync(contactsDirectory + '/' + fileName, string, { encoding: FileSystem.EncodingType.UTF8 })
}

export const getAllContacts = async () => {
    // Check if directory exists
    await setupDirectory()
    const result = await onException(() => FileSystem.readDirectoryAsync(contactsDirectory))
    return Promise.all(result.map(async fileName => {
        return {
            name: fileName
        }
    }))
}

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
// moveAsync(options) - Move a file or directory to a new location (options contains 'from' and 'to')
// copyAsync(options) - Create a copy of a file or directory (options contains 'from' and 'to')
// makeDirecotyrAsync(fileUri, options) - create new empty directory

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
