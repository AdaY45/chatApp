export interface IFile {
    name: string,
    size: number,
    type: string,
    href: string
}

export interface IUploadingFile {
    originalName: string,
    size: number,
    buffer: File
}

export interface IMessage {
    id: string,
    type: string,
    photo: string,
    text: string,
    date: number,
    status: string,
    room: string,
    file?: IFile | null
}

export interface IChat {
    exitDate: number | boolean,
    file?: string | null,
    id: string,
    isRoom: boolean,
    message: string,
    name: string,
    noChecked: number,
    online: boolean,
    photo: string,
    status: string,
    time: number
}