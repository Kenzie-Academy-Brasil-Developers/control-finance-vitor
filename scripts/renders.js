const renderCards = (obj) => {
    if (obj.length === 0 && document.querySelector(".app-main")) {
        document.querySelector(".app-main").remove();
        document.querySelector(".total-value").innerHTML = "R$ 00,00";
    } else {
        if (document.querySelector(".app-list")) {
            document.querySelector(".app-list").innerHTML = "";
            total = 0;
        }
        closeWarning();
        total = 0;
        obj.forEach(item => {
            appCard(item);
            renderTotalValue(item.value);
        })
        checkDeleteClick();
    }
    if (app.children.length === 0) {
        openWarning();
    }
}

let total = 0;
const renderTotalValue = value => {
    total += value;
    document.querySelector(".total-value").innerHTML = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}