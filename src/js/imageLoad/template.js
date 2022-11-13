import transformBytes from "../utils/transform-bytes";

const imageTemplate = ({ id, name, size, src }) => {
    return `
    <div class="img__container" data-draggable="${id}" draggable="true">
    <div data-id="${id}" class="img__delete">x</div>
    <div class="img__wrapper">
        <img data-modalTarget="${id}" src="${src}" alt="" />
        <div class="img__info">
            <div class="img__name">
                Name: ${name}
            </div>
            <div class="img__size">
                Sizes: ${transformBytes(size)}
            </div>
        </div>
    </div>
</div>
    `
}

export default imageTemplate;

// ondragstart="dragStart(this)"
// ondragover="dragOver(this)"
// ondragleave="dragLeave(this)"
// ondragend="dragDrop(this)"