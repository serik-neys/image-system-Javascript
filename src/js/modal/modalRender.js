import modalSliderTemplate from "./template"

const modalRender = (state, index, animate = false, className = "active") => {

    let { imageList,  modal } = state

    const mainDiv = document.querySelector("main")
    modal = document.querySelector(".modal")

    if (modal) modal.remove()

    const data = {
        ...imageList[index],
        current: index + 1,
        length: imageList.length
    }

    mainDiv.insertAdjacentHTML("afterbegin", modalSliderTemplate(data))
    modal = document.querySelector(".modal")

    if (animate) {
        setTimeout(() => modal.classList.add(className), 0)
    } else {
        modal.classList.add(className)
    }

}

export default modalRender;