
const openModal = () => {
    const modalClick = document.querySelectorAll(".open-modal");
    modalClick.forEach(elem => {
        elem.onclick = () => {
            renderModal();
            closeModal();
            removeString("default-input");
            capitalizeModalValue()
            const options = document.querySelector(".modal-options");
            options.onclick = e => {
                if (e.target.tagName.toLowerCase() === "label") {
                    const arr = [e.path[1].children[1], e.path[1].children[3]];
                    activateButtons(e.target, arr, 2);
                }
            }
        }
    })
}
openModal();

const renderModal = () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
    <div class="modal-box">
        <div class="modal-header">
            <h4 class="title2-bold">Registro de valor</h4>
            <button class="title2-bold greylow-btn size-btn close-modal">X</button>
        </div>
        <div class="modal-body">
            <form>
                <p class="text1-regular">Digite o valor e em seguida aperte no botão referente ao tipo do valor </p>
                <label class="default-label" for="modal-value">Valor</label>
                <input type="text" name="value" id="modal-value" class="default-input input" placeholder="00,00" required>
                <div class="value-type">
                    <h5 class="text2-medium">Tipo de valor</h5>
                    <div class="modal-options" required>
                        <input type="radio" hidden id="valueType-1" value="valueType" name="valueType" required>
                        <label class="outline-btn size-btn" tabindex="0" for="valueType-1">Entrada</label>
                        <input type="radio" hidden id="valueType-2" value="valueType" name="valueType" required>
                        <label class="outline-btn size-btn" tabindex="0" for="valueType-2">Saída</label>
                    </div>    
                </div>
                <div class="modal-footer">
                    <button type="button" class="greylow-btn size-btn close-modal">Cancelar</button>
                    <button type="submit" class="primary-btn size-btn input-value">Inserir valor</button>
                </div>
            </form>
        </div>
    </div>
    `;
    document.body.append(modal);
}

const closeModal = () => {
    const closeModal = document.querySelectorAll(".close-modal");
    closeModal.forEach(elem => {
        elem.onclick = () => {
            document.querySelector(".modal").remove();
        }
    })
}

const capitalizeModalValue = () => {
    let obj = {};
    removeCaractere();

    const inputValue = document.querySelector(".input-value");
    inputValue.onclick = e => {
        e.preventDefault()
        const form = e.path[2];
        if (form[0].value != "" && form[1].checked || form[2].checked) {
            obj.id = insertedValues.length + 1;
            obj.value = parseFloat(form[0].value.replace(".", "").replace(",", "."));
            
            if (isNaN(obj.value)) {
                return false;
            }

            if (form[1].checked) {
                obj.categoryID = valuesCategory.findIndex(e => e == "Entrada");

            } else {
                obj.categoryID = valuesCategory.findIndex(e => e == "Saída");
            }

            insertedValues.push(obj);
            document.querySelector(".modal").remove();
            if (selectedButton.toLowerCase() !== "todos") {
                insertedValuesfiltered.push(obj);
                renderCards(insertedValuesfiltered);
            } else {
                renderCards(insertedValues);
            }
        }
    }
}