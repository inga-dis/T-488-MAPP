import * as FileSystem from 'expo-file-system'
import uuid from 'react-native-uuid'
const contactsDirectory = `${FileSystem.documentDirectory}contacts`
const newUuid = uuid.v1()

// Set up directory if directory does not exist
const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(contactsDirectory)
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(contactsDirectory)
    }
}

// Clean directory if needed, used for debugging purposes
const cleanDirectory = async () => {
    await FileSystem.deleteAsync(contactsDirectory)
}

// Catch error
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

// Helper function for add contact into file system
const loadContact = async (fileName, contact) => {
    const content = JSON.stringify(contact)
    await FileSystem.writeAsStringAsync(
        contactsDirectory + '/' + fileName,
        content,
        { encoding: FileSystem.EncodingType.UTF8 }
    )
}

export const editContactPhone = async (contact, newPhoneNumber) => {
    const updatedContact = {
        name: contact.name,
        phoneNumber: newPhoneNumber,
        image: contact.image
    }
    const content = JSON.stringify(updatedContact)
    await FileSystem.writeAsStringAsync(
        contactsDirectory + '/' + contact.key, content,
        { encoding: FileSystem.EncodingType.UTF8 }
    )
}

export const editContactImage = async (contact, newImage) => {
    const updatedContact = {
        name: contact.name,
        phoneNumber: contact.phoneNumber,
        image: newImage
    }
    const content = JSON.stringify(updatedContact)
    await FileSystem.writeAsStringAsync(
        contactsDirectory + '/' + contact.key, content,
        { encoding: FileSystem.EncodingType.UTF8 }
    )
}

export const editContactName = async (contact, newName) => {
    const updatedContact = {
        name: newName,
        phoneNumber: contact.phoneNumber,
        image: contact.image
    }
    await addContact(updatedContact)
    await FileSystem.deleteAsync(contactsDirectory + '/' + contact.key)
}

// Add contact into file system
export const addContact = async ({contactInfo}) => {
    const fileName = contactInfo.name + '-' + newUuid
    const contact = {
        name: contactInfo.name,
        phoneNumber: contactInfo.phoneNumber,
        image: contactInfo.image
    }

    await loadContact(fileName, contact)
}

// get file content, helper function for get all.
const getFileContent = async (filename) => {
    const result = await onException(() =>
        FileSystem.readAsStringAsync(contactsDirectory + '/' + filename, {
            encoding: FileSystem.EncodingType.UTF8
        })
    )
    const resultObj = await JSON.parse(result)
    return await resultObj
}

// Get all contacts in directory and return as jason object.
export const getAllContacts = async () => {
    // Check if directory exists
    await setupDirectory()
    const result = await onException(() =>
        FileSystem.readDirectoryAsync(contactsDirectory)
    )
    return Promise.all(
        result.map(async (fileName) => {
            const contact = await getFileContent(fileName)
            return {
                key: fileName,
                name: contact.name,
                phoneNumber: contact.phoneNumber,
                image: contact.image
            }
        })
    )
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
