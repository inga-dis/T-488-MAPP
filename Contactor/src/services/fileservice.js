import * as FileSystem from 'expo-file-system'
import uuid from 'react-native-uuid'
const contactsDirectory = `${FileSystem.documentDirectory}contacts`
const newUuid = uuid.v1()

const replaceSpecialCharacters = require('replace-special-characters')

// Set up directory if directory does not exist
const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(contactsDirectory)
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(contactsDirectory)
    }
}

// Clean directory if needed, used for debugging purposes
// eslint-disable-next-line no-unused-vars
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
        key: contact.key,
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
        key: contact.key,
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
export const addContact = async (contactInfo) => {
    const file = contactInfo.name + '-' + newUuid
    const fileName = replaceSpecialCharacters(file);
    const contact = {
        key: fileName,
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
    // Clean directory if needed. Comment out when using app normally
    // cleanDirectory()
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
