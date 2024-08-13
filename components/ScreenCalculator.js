let N1 = ""
let N2 = ""
let operator = ""
const $ScreenUp = document.getElementById("screen-up")
const $ScreenBottom = document.getElementById("screen-bottom")

export const ScreenCalculator = (number, type) =>{
    
    if (type == "number"){
        if(operator == ""){
            N1 = N1 + number
            $ScreenBottom.textContent = N1
        }
        else{
            N2 = N2 + number
            $ScreenUp.textContent = N1
            $ScreenBottom.textContent = N2

        }
    }
    if(type == "operator"){
        $ScreenBottom.textContent = ""
        operator = number
        $ScreenUp.textContent = N1 + " " + operator

    }
    if(type == "operationCompleted"){
        $ScreenBottom.textContent =""
        $ScreenUp.textContent = number
        operator = ""
        N2= ""
        N1 = number
    }
    if (type == "delete"){
        if(operator == ""){
            N1 = N1.toString();
            if (N1.length !== 1) {
                N1 = N1.substring(0, N1.length - 1);
                N1 = parseFloat(N1);
                $ScreenBottom.textContent = N1;
            } else {
                N1 = 0;
                $ScreenBottom.textContent = "";
            }
        }else{
            N2 = N2.toString();
            if (N2.length !== 1) {
                N2 = N2.substring(0, N2.length - 1);
                N2 = parseFloat(N2);
                $ScreenBottom.textContent = N2;
            } else {
                N2 = 0;
                $ScreenBottom.textContent = "";
            } 
        }
    }
    if (type == "delete-all"){
        N1 = 0;
        N2 = 0;
        $ScreenUp.textContent ="";
        $ScreenBottom.textContent ="";
    }


    return {
        number1: parseFloat(N1) || 0,
        operat: operator,
        number2: parseFloat(N2) || 0  
    }

}