        var display = '';
        var operator ='';
        var operand1 = '';
        var operand2 = '';

        function input(num) {
            display += num;
            document.getElementById('display').innerText = display;
        }

        function setOperator(op) {
            operator =op;
            operand1 = display;
            display= '';
        }

        function calculate() {
            operand2 = display;
            var result;

            switch(operator) {
                case '+':
                    result = parseFloat(operand1) + parseFloat(operand2);
                    break;
                case '-':
                    result = parseFloat(operand1) - parseFloat(operand2);
                    break;
                case '*':
                    result = parseFloat(operand1) * parseFloat(operand2);
                    break;
                case '/':
                    if(operand2 != 0) {
                        result = parseFloat(operand1) / parseFloat(operand2);
                    } else {
                    alert("Cannot divide by zero");
                        return;
                    }
                    break;
            }

            display =result.toString();
            document.getElementById('display').innerText = display;
        }

        function clearDisplay() {
            display = '';
            operator= '';
            operand1 ='';
            operand2 = '';
            document.getElementById('display').innerText = display;
        }