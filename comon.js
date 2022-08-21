function inputValues (idName, isInput){
    const element = document.getElementById(idName);
    let elementValueString;
    if (isInput == true){
        elementValueString = element.value;
    }else{
        elementValueString = element.innerText;
    };
    const elementValueNumber = parseInt(elementValueString);
    return elementValueNumber
}