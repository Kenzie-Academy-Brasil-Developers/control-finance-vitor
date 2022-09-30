const removeString = (clas) => {
    const inputDefault = document.querySelector(`.${clas}`);
    inputDefault.onkeypress = (e) => {
        return e.charCode >= 48 ? e.charCode <= 57 : true;
    }
}

const removeCaractere = () => {
    const input = document.querySelector(".input");
    input.addEventListener("input", function () {
        const invalidKeys = "''-+*/!#$%&()".split("");
        invalidKeys.push('"');
        invalidKeys.find(elem => {this.value = this.value.replace(elem, "")});
    })
}

