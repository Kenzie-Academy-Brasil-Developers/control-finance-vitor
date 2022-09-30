const app = document.querySelector(".app-infos");

const openWarning = () => {
    const warning = document.createElement("div");
    warning.classList = "app-warning open-modal";
    if (selectedButton != "Todos") {
        warning.innerHTML = `
        <h3 class="title2-bold">Sem nenhum valor na categoria ${selectedButton}</h3>
        <p class="text2-medium">Registrar novo valor</p>
        `;
    } else if (selectedButton === "Todos") {
        warning.innerHTML = `
        <h3 class="title2-bold">Nenhum valor cadastrado</h3>
        <p class="text2-medium">Registrar novo valor</p>
        `;
    }
    app.append(warning);
    openModal();
}

const closeWarning = () => {
    if (document.querySelector(".app-warning")) {
        return document.querySelector(".app-warning").remove();
    } else {
        return false;
    }
}

const appCard = (list) => {
    const { id, value, categoryID } = list;
    let divApp, ul;

    if (!document.querySelector(".app-main")) {
        divApp = document.createElement("div");
        divApp.classList.add("app-main");
        ul = document.createElement("ul");
        ul.classList.add("app-list")

    } else {
        divApp = document.querySelector(".app-main");
        ul = document.querySelector(".app-list");
    }

    const li = document.createElement("li");
    li.id = `card-${id}`;

    const appCard = document.createElement("div");
    appCard.classList.add("app-card");

    const spanValue = document.createElement("span");
    spanValue.classList.add("text1-medium");
    spanValue.innerText = `${value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;

    const appAux = document.createElement("div");
    appAux.classList.add("app-aux");

    const tag = document.createElement("button");
    tag.classList.add("default-tag");
    tag.innerText = `${valuesCategory[categoryID]}`;

    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash-btn")

    appAux.append(tag, trashBtn);
    appCard.append(spanValue, appAux);
    li.append(appCard);
    ul.append(li);
    divApp.append(ul);
    app.append(divApp)
}

renderCards(insertedValues);