import { async } from "@firebase/util";

export const fileUpload = async(file) => {
    if (!file) throw new Error("Y el archivo? 🥴")
    //                                              ⬇ enviroment variable
    const URL = 'https://api.cloudinary.com/v1_1/dzvrpgyxy/image/upload'
    const body = new FormData()
    body.append('upload_preset', 'reactJournal')
    body.append('file', file)
    try {
        const resp = await fetch(URL, { method: 'POST', body })
        if (!resp.ok) throw new Error('No se puede cargar el archivo')
        const cloudResp = await resp.json()
        return cloudResp.secure_url
    } catch (error) {
        throw new Error (error.message)
    }
}