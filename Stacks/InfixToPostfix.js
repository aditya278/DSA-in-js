const precedence = {
    '^' : 2,
    '/' : 1,
    '*' : 1,
    '+' : 0,
    '-' : 0
}

const isOperand = (char) => {
    const regex = /[a-z0-9]/ig;
    return regex.test(char);
}

const convert = (infix) => {
    let postfix = [];
    let stack = [];

    infix.split('').forEach(char => {
        
        //If it is an Operand
        if(isOperand(char))
            postfix.push(char)
        
        //If it is a '('
        else if(char === '(') 
            stack.push(char);

        //If it is a ')'
        else if(char === ')') {
            while(stack.length !== 0 && stack[stack.length-1] !== '(') {
                postfix.push(stack.pop());
            }
            if(stack[stack.length-1] === '(')
                stack.pop();
        }

        //If it is an operator
        else {
            while(stack.length !== 0 && precedence[stack[stack.length-1]] >= precedence[char]) {
                postfix.push(stack.pop());
            }
            stack.push(char);
        }
    });

    while(stack.length !== 0) {
        postfix.push(stack.pop());
    }

    return postfix.join('');
}

const userInput = "a+b*(c^d-e)^(f+g*h)-i";
console.log(convert(userInput));