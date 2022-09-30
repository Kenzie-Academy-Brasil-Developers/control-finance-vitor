let selectedButton = document.querySelector("#all").innerHTML;

const checkFilterClick = () => {
    const filterBtn = document.querySelectorAll(".filter-btn");
    filterBtn.forEach(elem => {
        elem.onclick = event => {

            selectedButton = event.path[0].innerHTML;
            filterValues(event.target.id);
            activateButtons(event.target, event.path[2].children, 1);
        }
    })
}
checkFilterClick();

const filterValues = (type = "all") => {
    insertedValuesfiltered = [];
    insertedValues.forEach(elem => {
        if (elem.categoryID === parseInt(type)) {
            insertedValuesfiltered.push(elem);
            renderCards(insertedValuesfiltered);
        } else if (type === "all") {
            insertedValuesfiltered.push(elem);
            renderCards(insertedValuesfiltered);
        }
    })

    if (insertedValuesfiltered.length === 0 || insertedValues.length === 0) {
        if (document.querySelector(".app-main")) {
            document.querySelector(".app-main").remove();
        } else if (type === "all") {
            closeWarning();
            openWarning();
        }
        else {
            closeWarning();
            openWarning();
        }
    }
    if (document.querySelector(".app-infos").children.length === 0) {
        closeWarning();
        openWarning();
        document.querySelector(".total-value").innerHTML = "R$ 00,00";
    }
}