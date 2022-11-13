import modalRender from "./modalRender"

const modalSlider = (state) => {

    let { imageList, imageIndex, modal } = state

    const overflow = document.querySelector(".overflow")
    const mainDiv = document.querySelector("main")

    const closeModal = () => {
        overflow.classList.remove("active")
        document.body.classList.remove("hidden")
        modal = document.querySelector(".modal")
        modal.remove()
    }

    const openModal = () => {
        overflow.classList.add("active")
        document.body.classList.add("hidden")
    }

    const changeModal = (e) => {
        const modalId = e.target.dataset.modaltarget

        //open modal
        if (modalId) {
            const index = imageList.findIndex(item => item.id == modalId)

            imageIndex = index

            modalRender(state, index, true)
            openModal()
        }

        //close modal
        if (e.target.classList.contains("modal__close")) {
            closeModal()
        }

    }

    mainDiv.addEventListener("click", changeModal)
    overflow.addEventListener("click", closeModal)
}

export default modalSlider;