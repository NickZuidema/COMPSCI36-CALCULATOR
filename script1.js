document.getElementById("calc").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); 
      document.getElementById("equal").click(); 
    }

    if(event.key === "Backspace"){
        event.preventDefault(); 
        document.getElementById("del").click(); 
    }
  });

function conc(num){
    //Appends the newly pressed value of the pressed button to the display
    document.getElementById("display").value += num;
}

function del(){
    //Deletes the right-most value of the display
    document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
}

function clr(){
    //Clears the display of the calculator
    document.getElementById("display").value = "";

    //If elements are disabled, they become enabled
    if(document.getElementById("display").disabled = true){
        disableAll(false);//Enables display and all buttons
    }
}

function equal(){
    var equation, result;
    equation = (document.getElementById("display").value);

    try{
        //Attempts to solve the equation on the display as an expression through the eval() method
        result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;//If solved successfully, answer will be displayed

        //Checks if the result is not a number
        if(isNaN(result)){
            disableAll(true);//If result is not a number, display and all buttons are disabled
        }
        //passToPHP(equation, result);//Sends equation and result to the passToPHP function, regardless is it is a number ot not
    }
    catch(err){
        //If an error occurs during the solving process instead
        disableAll(true);//Disables display and all buttons, except 'C'
        
        //Displays the error
        document.getElementById("display").value = err;
        //passToPHP(equation, result);//Sends equation and error to the passToPHP function
    } 
}

/*function passToPHP(equation, result){
    //Sends the given equation and result to the PHP script
    $.ajax({
        type: 'POST',
        url: 'conn.php',
        data: { 
            equation: equation,
            result: result 
        },
        success: function(response) {
            alert(response);
        }
    });
}*/

function disableAll(dec){
    //Disables the display and all buttons, except 'C'
    document.getElementById("display").disabled = dec;
    document.getElementById("7").disabled = dec;
    document.getElementById("8").disabled = dec;
    document.getElementById("9").disabled = dec;
    document.getElementById("del").disabled = dec;
    document.getElementById("4").disabled = dec;
    document.getElementById("5").disabled = dec;
    document.getElementById("6").disabled = dec;
    document.getElementById("multiply").disabled = dec;
    document.getElementById("divide").disabled = dec;
    document.getElementById("1").disabled = dec;
    document.getElementById("2").disabled = dec;
    document.getElementById("3").disabled = dec;
    document.getElementById("add").disabled = dec;
    document.getElementById("subtract").disabled = dec;
    document.getElementById("0").disabled = dec;
    document.getElementById("dot").disabled = dec;
    document.getElementById("parL").disabled = dec;
    document.getElementById("parR").disabled = dec;
    document.getElementById("equal").disabled = dec;
}

function checkInput(event){
    //ASCII code of the pressed keyboard key is assigned to the var input
    var input = event.which ? event.which : event.keyCode;

    //Checks if the var input is among the numbers or symbols in the calculator
    if((input >= 48 && input <= 57) || (input >= 40 && input <= 43) || (input >= 45 && input <= 47)){
        return true;//Allow input
    } else {
        return false;//Prevent input
    }
}
