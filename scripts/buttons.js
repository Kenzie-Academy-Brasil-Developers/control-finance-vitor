const activateButtons = (elem, list) => {
    console.log(elem)
    console.log(list)
    Array.from(list).find(e => {
        e.children[0].classList.remove("outline-btn-actived");
    })
    elem.classList.toggle("outline-btn-actived");
}