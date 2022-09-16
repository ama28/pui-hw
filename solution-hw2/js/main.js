//roll object constructor
function createRoll(type, price, glazing, packSize){
    const obj = {};

    obj.type = type;
    obj.price = price;
    obj.glazing = glazing;
    obj.packSize = packSize;

    return obj;
}

//all roll objects 
const originalRoll = createRoll("Original Cinnamon Roll", 2.49, 0, 1);
const appleRoll = createRoll("Apple Cinnamon Roll", 3.49, 0, 1);
const raisinRoll = createRoll("Raisin Cinnamon Roll", 2.99, 0, 1);
const walnutRoll = createRoll("Walnut Cinnamon Roll", 3.49, 0, 1);
const doubleChocoRoll = createRoll("Double Chocolate Cinnamon Roll", 3.99, 0, 1);
const strawberryRoll = createRoll("Strawberry Cinnamon Roll", 3.99, 0, 1);

//Glazing Options Section

//glazing object constructor
function createGlazing(label, priceChange){
    const G = document.createElement("option");
    G.textContent = label;
    G.value = priceChange;
    return G;
}

const dropdowns = document.getElementsByClassName("glazingOptions");

//populate all dropdowns with the correct glazing objects
for (i = 0; i < dropdowns.length; i++){
    dropdowns[i].appendChild(createGlazing("Keep Original", 0));
    dropdowns[i].appendChild(createGlazing("Sugar Milk", 0));
    dropdowns[i].appendChild(createGlazing("Vanilla Milk", 0.5));
    dropdowns[i].appendChild(createGlazing("Double Chocolate", 1.5));
}

//Pack Sizing Section

//pack option constructor
function createPackOption(size, priceChange, double, first) {
    const P = document.createElement("div");
    P.classList.add("buttonContainer");

    const button = document.createElement("input");
    button.setAttribute("type", "radio");
    button.setAttribute("name", "packs");
    button.setAttribute("id", size);
    button.setAttribute("value", priceChange);
    button.classList.add("number2");
    if (first)
        button.setAttribute("checked", true);

    const text = document.createElement("label");
    text.textContent = size;
    if (double)
        text.classList.add("doubledigit");

    P.appendChild(button);
    P.appendChild(text);

    return P;
}

const packSelectors = document.getElementsByClassName("count");

//populate all pack size forms with the correct packsize objects
for (i = 0; i < packSelectors.length; i++){
    packSelectors[i].appendChild(createPackOption(1, 1, false, true));
    packSelectors[i].appendChild(createPackOption(3, 3, false, false));
    packSelectors[i].appendChild(createPackOption(6, 5, false, false));
    packSelectors[i].appendChild(createPackOption(12, 10, true, false));
}

//updates price field when a glazing option or pack size option is selected
function priceChange(element, isGlazing){
    var refRoll = {};

    //set refRoll to the roll object that we are working with
    switch (element.parentElement.parentElement.id){
        case "original":
            refRoll = originalRoll;
            break;
        case "apple":
            refRoll = appleRoll;
            break;
        case "raisin":
            refRoll = raisinRoll;
            break;
        case "walnut":
            refRoll = walnutRoll;
            break;
        case "choco":
            refRoll = doubleChocoRoll;
            break;
        case "strawberry":
            refRoll = strawberryRoll;
            break;
    }

    //update either glazing or packSize based off the user input
    if (isGlazing)
    {
        refRoll.glazing = element.value; 
    }
    else
    {
        var buttons = [];
        for (const child of element.children) {
            buttons.push(child.firstElementChild);
        }
        var checkedButton = {};
        for (const button of buttons){
            if (button.checked)
                checkedButton = button;
        }

        refRoll.packSize = checkedButton.value;
    }

    //calculate new price and update price display
    const newPrice = ((parseFloat(refRoll.price) + parseFloat(refRoll.glazing)) * parseFloat(refRoll.packSize)).toFixed(2);
    element.parentElement.parentElement.lastElementChild.firstElementChild.textContent = "$" + newPrice;
}

//add to cart button functionality
function addToCart(element){
    const cartDisplay = document.getElementById("cart-display");
    var itemCount = cartDisplay.firstElementChild;
    var totalText = cartDisplay.lastElementChild.textContent;

    //update total price (total items added below with popup)
    var itemPrice = parseFloat(element.parentElement.parentElement.firstElementChild.textContent.substring(1));
    var newTotal = itemPrice + parseFloat(totalText);
    cartDisplay.lastElementChild.textContent = newTotal.toFixed(2);

    //show roll summary with popup
    const popup = document.getElementById("popup");

    var refRoll = {};

    //set refRoll to the roll object that we are working with
    switch (element.parentElement.parentElement.parentElement.id){
        case "original":
            refRoll = originalRoll;
            break;
        case "apple":
            refRoll = appleRoll;
            break;
        case "raisin":
            refRoll = raisinRoll;
            break;
        case "walnut":
            refRoll = walnutRoll;
            break;
        case "choco":
            refRoll = doubleChocoRoll;
            break;
        case "strawberry":
            refRoll = strawberryRoll;
            break;
    }

    //update label
    document.getElementById("popupLabel").textContent = 
        element.parentElement.parentElement.parentElement.querySelector("h2").textContent;
    document.getElementById("popupLabel").style.fontWeight = "bold";

    //update glazing
    const glazingArray = element.parentElement.parentElement.parentElement.querySelector("select");
    document.getElementById("popupGlazing").textContent =
        glazingArray.options[glazingArray.selectedIndex].textContent;

    //update packSize & total items
    const packSizeOptions = element.parentElement.parentElement.parentElement.querySelector("form").children;
    for (i = 0; i < packSizeOptions.length; i++){
        if (packSizeOptions[i].firstElementChild.checked){
            document.getElementById("popupPackSize").textContent = 
                packSizeOptions[i].firstElementChild.id;
            //total items
            var newCount = parseFloat(itemCount.textContent) + parseFloat(packSizeOptions[i].firstElementChild.id);
            itemCount.textContent = newCount;
            break;
        }
    }
    
    //update price
    document.getElementById("popupPrice").textContent = element.parentElement.parentElement.querySelector("h2").textContent;

    //show popup for 3 seconds
    function showPopup(){
        document.getElementById("popup").style.visibility = "hidden";
    }

    document.getElementById("popup").style.visibility = "visible";
    setTimeout(showPopup, 3000);
}



