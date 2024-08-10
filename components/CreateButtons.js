import { ButtonCalculator } from "../utils/NumberAndOperatorCalculator"

export const CreateButtons =()=>{
    const containerNumber= document.getElementById("container-number")
    const containerOperator= document.getElementById("container-operator")
    const containerSpecialOption= document.getElementById("container-special-option")

    
    const createUiButton =(id, element) =>{
        const div = document.createElement('div');
        const boton = document.createElement('button');
        boton.id = id;
        boton.textContent = element;
        div.appendChild(boton);

        return div

    }
    const buttonsElement = new ButtonCalculator()

    buttonsElement.numbers.forEach((num)=>{
        containerNumber.append(createUiButton(num, num))
    })

    for (const [name, operator] of Object.entries(buttonsElement.operator)) {
        containerOperator.append(createUiButton(name, operator))

    }

    buttonsElement.specialCharacter.forEach((character)=>{
        containerSpecialOption.append(createUiButton(character, character))
        
    })
}