import imageLoad from "./imageLoad/image-load"
import modalSlider from "./modal/modal"
import slider from "./modal/slider"

let state = {
    imageList: [],
    imageIndex: 0,
    modal: null
}

window.addEventListener("DOMContentLoaded", () => {
    const start = () => {
        imageLoad(state)
        modalSlider(state)
        slider(state)
    }

    start()
})

