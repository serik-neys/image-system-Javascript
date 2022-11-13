const setMessage = (mess, className = "") => {
    const message = document.querySelector(".img__message")

    message.textContent = mess
    className && message.classList.add(className)
    setTimeout(() => {
        message.textContent = ""
        className && message.classList.remove(className)
    }, 5000)
}

export default setMessage;