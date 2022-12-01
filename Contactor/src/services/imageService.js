import * as ImagePicker from 'expo-image-picker';

// permission constant for accessing the camera roll
const CAMERA_ROLL = 'CAMERA_ROLL';
// Permission constant for accessing the camera
const CAMERA = 'CAMERA'; 

const getPermission = async permissionTypes => {
    if (permissionTypes.indexOf(CAMERA) >= 0) {
        await ImagePicker.requestCameraPermissionsAsync();
    }
    if (permissionTypes.indexOf(CAMERA_ROLL) >= 0) {
        await ImagePicker.requestMediaLibraryPermissionsAsync(); 
    }
};

export const selectFromCameraRoll = async () => {
    await getPermission([CAMERA_ROLL]);
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: .8,
        base64: true,
        aspect: [16, 9]
    });

    if (result.canceled) { return ''; }
    return result.assets.uri;
}

export const takePhoto = async () => {
    await getPermission([CAMERA, CAMERA_ROLL]); 
    const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: .8,
        base64: true,
        aspect: [16, 9]
    });

    if (result.canceled) {return '';}

    return result.assets.uri;
};