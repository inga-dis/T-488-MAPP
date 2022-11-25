import * as FileSystem from 'expo-file-system';
const boardDirectory = `${FileSystem.documentDirectory}boards`;

export const cleanDirectory = async () => {
    await FileSystem.deleteAsync(boardDirectory);
}

export const copyFile = async (file, newLocation) => {
    return await onException(() => FileSystem.copyAsync({
        from: file,
        to: newLocation
    }));
} //Þarf þetta?

const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(boardDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(boardDirectory)
    }
}

export const addBoard = async board => {
    const boardId = getBoardId();
    await onException(() => copyFile(board, `${boardDirectory}/${boardId}`));

    return {
        id: boardId,
        name: board.name, //Hér þarf að breyta í það sem passar við boards
        thumbnailPhoto: board.thumbnailPhoto,
        file: await loadBoard(boardId)
    };
}

export const remove = async boardId => {
    return await onException(() => FileSystem.deleteAsync(`${boardDirectory}/${boardId}`, { idempotent: true }));
}

export const loadBoard = async boardId => {
    return await onException(() => FileSystem.readAsStringAsync(`${boardDirectory}/${boardId}`, {
        encoding: FileSystem.EncodingType.Base64
    }));
}

export const getAllImages = async () => {
    // Check if directory exists
    await setupDirectory();

    const result = await onException(() => FileSystem.readDirectoryAsync(boardDirectory));
    return Promise.all(result.map(async boardId => {
        return {
            id: boardId,
            name: board.name, //Hér þarf að breyta í það sem passar við boards
            thumbnailPhoto: board.thumbnailPhoto,
            file: await loadBoard(boardId)
        };
    }));
}