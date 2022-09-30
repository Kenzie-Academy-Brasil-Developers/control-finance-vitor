const activateButtons = (elem, list, type) => {
    if (type === 1) {
        Array.from(list).find(e => {
            e.children[0].classList.remove("outline-btn-actived");
        })
        elem.classList.toggle("outline-btn-actived");
    } else if (type === 2) {
        list.find(e => {
            e.classList.remove("outline-btn-actived");
        })
        elem.classList.toggle("outline-btn-actived");
    }
}