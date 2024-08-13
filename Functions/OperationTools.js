

export const OperationTools = (operation) =>{
    let a = operation.number1
    let b = operation.number2
    let args = [a,b]
    switch (operation.operat) {
        case '+': return args.reduce((a, b) => a + b);
        case '-': return args.reduce((a, b) => a - b);
        case '*': return args.reduce((a, b) => a * b);
        case '/': return args.reduce((a, b) => a / b);
        case '**': return Math.pow(args[0], args[1]);
        case 'sqrt': return Math.sqrt(args[0]);
        case 'sin': return Math.sin(args[0]);
        case 'cos': return Math.cos(args[0]);
        case 'tan': return Math.tan(args[0]);
        case 'asin': return Math.asin(args[0]);
        case 'acos': return Math.acos(args[0]);
        case 'atan': return Math.atan(args[0]);
        case 'sinh': return Math.sinh(args[0]);
        case 'cosh': return Math.cosh(args[0]);
        case 'tanh': return Math.tanh(args[0]);
        case 'log': return Math.log(args[0]);
        case 'log10': return Math.log10(args[0]);
        case 'round': return Math.round(args[0]);
        case 'ceil': return Math.ceil(args[0]);
        case 'floor': return Math.floor(args[0]);
        case 'abs': return Math.abs(args[0]);
        case 'factorial': return factorial(args[0]);
        case 'PI': return Math.PI;
        case 'E': return Math.E;
        default: throw new Error('Unknown operation');
    }


    
}