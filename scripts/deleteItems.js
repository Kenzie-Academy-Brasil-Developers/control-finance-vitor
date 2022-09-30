const deleteCard = item => {
    const objIndex = insertedValues.findIndex(elem => elem === item);
    insertedValues.splice(objIndex, 1);

    const objFilterIndex = insertedValuesfiltered.findIndex(elem => elem === item);
    insertedValuesfiltered.splice(objFilterIndex, 1);

    if (selectedButton != "Todos") {
        renderCards(insertedValuesfiltered);
    } else {
        renderCards(insertedValues);
    }
}

const checkDeleteClick = () => {
    const trashBtn = document.querySelectorAll(".trash-btn");
    Array.from(trashBtn).map(elem => {
        elem.onclick = e => {
            const idNumber = e.path[3].id.replace("card-", "");
            const item = insertedValues.find(elem => elem.id === parseInt(idNumber));
            deleteCard(item);
        }
    })

}