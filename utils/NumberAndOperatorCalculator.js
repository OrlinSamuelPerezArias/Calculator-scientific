export class ButtonCalculator{
    constructor(){
        this.numbers = Array.from({length: 10}, (_, i) => i )
        this.specialCharacter = ["=", ".", "CE"]
        this.operator = {
            // Operadores básicos
            suma: '+',
            resta: '-',
            multiplicacion: '*',
            division: '/',
            // Operadores de potencia y raíz
            potencia: '**', // Exponente
            raiz: 'sqrt',   // Raíz cuadrada, puede ser implementada con una función
            
            // Funciones trigonométricas
            seno: 'sin',
            coseno: 'cos',
            tangente: 'tan',
            arcSeno: 'asin',
            arcCoseno: 'acos',
            arcTangente: 'atan',
            
            // Funciones hiperbólicas
            senoHiperbolico: 'sinh',
            cosenoHiperbolico: 'cosh',
            tangenteHiperbolica: 'tanh',
            
            // Funciones logarítmicas
            logaritmo: 'log',    // Logaritmo natural
            logaritmoBase10: 'log10', // Logaritmo base 10
            
            // Funciones de redondeo
            redondear: 'round',
            redondearArriba: 'ceil',
            redondearAbajo: 'floor',
            
            // Funciones matemáticas adicionales
            absoluto: 'abs',    // Valor absoluto
            factorial: 'factorial', // Puede requerir implementación personalizada
            
            // Constantes matemáticas
            pi: 'PI',
            euler: 'E'
        }
    }
}