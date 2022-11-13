import setMessage from "./message"

const imageValidation = (file) => {
    if (!file) return false

    const type = file.type
    const size = file.size
    const correctType = "image"
    const limitSize = 1024 * 1024 * 5 // 5MB

    if (type.includes(correctType)) {
        if (size < limitSize) {
            return true
        } else {
            setMessage("The file size should not be more than 5MB!", "img__alert")
            return false
        }
    } else {
        setMessage("This is not a picture!", "img__alert")
        return false
    }

}

export default imageValidation;