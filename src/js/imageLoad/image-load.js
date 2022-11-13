import imageTemplate from "./template"
import imageValidation from "../utils/image-validation"

const imageLoad = ({ imageList }) => {

    const fileInput = document.querySelector(".img__file")
    const customFileInput = document.querySelector(".img__file-custom")
    const block = document.querySelector(".img__block")

    
    const addImages = (event) => {
        const filesLength = event.target.files.length

        for (let index = 0; index <= filesLength; index++) {

            const file = event.target.files[index]

            if (imageValidation(file)) {
                const fileReader = new FileReader()

                fileReader.onload = (e) => {

                    const data = {
                        id: Date.now(),
                        name: file.name,
                        size: file.size,
                        src: fileReader.result
                    }

                    imageList.push(data)

                    block.insertAdjacentHTML("beforeend", imageTemplate(data))
                }

                fileReader.readAsDataURL(event.target.files[index])
            }

        }

    }

    const deleteImage = (event) => {
        const id = event.target.dataset.id
        if (id) {
            imageList = imageList.filter(item => item.id != id)
            block.innerHTML = ""
            imageList.forEach(data => {
                block.insertAdjacentHTML("beforeend", imageTemplate(data))
            });
        }
    }

    fileInput.addEventListener("change", addImages)
    block.addEventListener("click", deleteImage)
    customFileInput.addEventListener("click", () => fileInput.click())

}

export default imageLoad;