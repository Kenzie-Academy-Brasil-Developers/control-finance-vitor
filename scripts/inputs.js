const removeString = (clas) => {
    const inputDefault = document.querySelector(`.${clas}`);
    inputDefault.onkeypress = (e) => e.charCode >= 48 && e.charCode <= 57;
}

