const message = window.prompt("give me a number");
        const number = Number(message);
        let message2 = "";
        if(isNaN(message)){
           message2 = "Please enter #";
        } else{
           message7 = `number is ${message *2}`;
        }
        window.alert(message2)