import modalRender from "./modalRender"

const slider = (state) => {

    let { imageList, imageIndex} = state

    const mainElem = document.querySelector("main")

    mainElem.addEventListener("click", (e) => {
        const prev = e.target.classList.contains("left")
        const next = e.target.classList.contains("right")
        let imageListLength = imageList.length
    
        // prev slide
        if (prev) {
    
            if (imageIndex <= 0) {
                imageIndex = imageListLength - 1
            } else {
                imageIndex--;
            }
            modalRender(state, imageIndex, true)
        }
    
        //next slide
        if (next) {
    
            if (imageIndex >= imageListLength - 1) {
                imageIndex = 0
            } else {
                imageIndex++;
            }
    
            modalRender(state, imageIndex, true)
        }
    })
    

}

export default slider;