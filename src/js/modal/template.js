const modalSliderTemplate = ({ id, src, current, length }) => {
    return `
        <div class="modal" data-modal="${id}">
        <div class="modal__img-container">
        <img src="${src}" />
            <div class="modal__info">${current} из ${length}</div>
            <div class="modal__arrow right">></div>
            <div class="modal__arrow left"><</div>
            <span class="modal__close">&times;</span>
        </div>
    </div>`
}

export default modalSliderTemplate;
