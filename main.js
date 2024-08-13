import { CreateButtons } from "./components/CreateButtons";
import { ScreenCalculator } from "./components/ScreenCalculator";
import { OperationTools } from "./Functions/OperationTools";
import { ButtonCalculator } from "./utils/NumberAndOperatorCalculator";

CreateButtons()

const numberAndOperator = new ButtonCalculator()

let operation ={
    number1: 0,
    operat:"",
    number2:0
}



document.getElementById("button-calculator").addEventListener("click",(Event)=>{
    if (Event.target.tagName === 'BUTTON') {
        const ID = Event.target.id
        const content = Event.target.textContent
        if (numberAndOperator.numbers.includes(parseInt(ID))){  
            operation = ScreenCalculator(ID, "number")
        }
        else if (ID in numberAndOperator.operator){
            operation = ScreenCalculator(content, "operator")
        }
        else if ("=" == ID){
            ScreenCalculator(OperationTools(operation), "operationCompleted")
        }
        else if ("CE" == ID){
            ScreenCalculator(ID, "delete-all")
        }
    }
})

document.body.addEventListener("keydown", (e)=>{
    e.preventDefault()
    if (numberAndOperator.numbers.includes(parseInt(e.key))){  
        operation = ScreenCalculator(e.key, "number")
    }
    else if (Object.values(numberAndOperator.operator).includes(e.key)){
        operation = ScreenCalculator(e.key, "operator")
    }
    else if (["Enter",  "="].includes(e.key)){
        ScreenCalculator(OperationTools(operation), "operationCompleted")
    }
    else if(e.key == "Backspace"){
        ScreenCalculator(e.key, "delete")
    }
    else if(e.key == "Delete"){
        ScreenCalculator(e.key, "delete-all")
    }
    
})