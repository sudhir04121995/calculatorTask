
document.addEventListener("DOMContentLoaded", function() {
    let div1 = document.createElement("div")
    div1.className="div1";
    let calculator = document.createElement("div");
    calculator.className = "container";
    let form = document.createElement("form");
    form.className = "form";

    let inputDiv = document.createElement("div");
    inputDiv.className = "inputDiv";

    let input = document.createElement("input");
    input.className = "input";
    input.setAttribute("placeholder", "Enter expression");

    let formDiv1 = document.createElement("div");
    formDiv1.className = 'formDiv1';

    let buttons = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "=", "/"];

    buttons.forEach(buttonText => {
        let button = document.createElement("button");
        button.innerHTML = buttonText;
        button.addEventListener("click", function(event) {
         event.preventDefault()
            handleButtonClick(buttonText);
        });
        formDiv1.appendChild(button);
    });

    div1.appendChild(calculator);
    calculator.appendChild(form);
    form.appendChild(inputDiv)
    inputDiv.appendChild(input)
    inputDiv.appendChild(formDiv1);
    document.body.appendChild(div1);

    let currentExpression = "";

    
    function handleButtonClick(buttonText) {
        if (buttonText === "=") {
            try {
               
                input.value = eval(currentExpression);
            } catch (error) {
               
                input.value = alert("Error");
            }
            currentExpression = "";
        } else if (buttonText === "C") {
            
            input.value = "";
            currentExpression = "";
        } 
        else if (["+", "-", "*", "/"].includes(buttonText)) {
            if (currentExpression === "") {
                
                alert("only numbers are allowed");
            } else {
                currentExpression += buttonText;
                input.value += buttonText;
            }}
     
        else {
            
            currentExpression += buttonText;
            input.value = currentExpression;
           
        }
    }
});
