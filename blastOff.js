    /* 
    Brandon Davis
    6/9/22
    CSC102   
    */
    var firstAndLastName = prompt("Type your first and last name");
    var badgeNumber = prompt("Enter your 3-didgit badge number");
    var check = 0;

        // Checks if the first and last name is between 1 and 20 characters
        while(firstAndLastName.length <= 0 || firstAndLastName.length > 20) {
            firstAndLastName = prompt("Please enter a name between 1 and 20 characters");
            
        }

        // Checks if the badge number is actually a number and checks if it is a 3 digit number
        while(isNaN(badgeNumber) == true || badgeNumber.length != 3) {      
                badgeNumber = prompt("Please enter a 3-didgit badge number");
                
        }
    
        // Prints the first and last name and badge number messages
        printCheck = setInterval(infoPrint, 100);

        // Function that has the name and badge messages
        function infoPrint() {
            document.getElementById("initiateWelcome").innerHTML = "Welcome " + firstAndLastName + " to the UAT space inititiate program!";
            document.getElementById("initiateBadge").innerHTML = "Your badge number is: " + badgeNumber;
            check = 1;

            // Stops repeated prints of the name and badge messages
            if(check == 1) {
                clearInterval(printCheck);

            }
        }

        //document.getElementById("initiateWelcome").innerHTML = "Welcome " + firstAndLastName + " to the UAT space inititiate program!";
        //document.getElementById("initiateBadge").innerHTML = "Your badge number is: " + badgeNumber;

    

    // Declared countdown variable
    var countDown = 10;
    // Declaring blastCounter timer before initialzing setInterval
    var blastCounter;
    // Variable that is used to check and reset the timer mid-countdown
    var counterActive = 0;
    
    // Function that resets the countdown, counterActive, and the blastCounter timer
    function killTheIgnition() {
        // clearInterval stops setInterval from calling the countDownUpdater function
        clearInterval(blastCounter);
        // Updates the console whenever the ignition is killed
        console.log("************************");
        console.log("Killing the ignition!!!");
        countDown = 10;
        counterActive = 0;

    }

    // Function that begins the countdown
    function startTheCountDown() {
        // Changed the text on the blastoff button to "Kill the Ignition!"
        document.getElementById("button_style").innerHTML = "Kill the Ignition!";
        
        // If statment that checks if counterActive = 0 and initializes the blastCounter timer
        if (counterActive == 0) {
        // setInterval calls the countDownUpdater function every 1000 milliseconds(1 second)
        blastCounter = setInterval(countDownUpdater, 1000);
        }

        // Updates counterActive plus 1 when the startTheCountDown function is called
        counterActive++;
        // Updates the console whenever the startTheCountDown function is called with countDown and CounterActive values
        console.log("************************");
        console.log("Launch has begun!");
        console.log("Count Down is at: " + countDown);
        console.log("Counter Active is at: " + counterActive);

        /* 
         When the blastoff button is clicked it calls startTheCountDown function and adds 
         plus 1 to counterActive, when counterActive equals 1 it means that the counter is
         currently active hense the name.
         When you click the blastoff button again it adds 1 to counterActive which trips this
         if statment killing the ignition and resetting the launch
        */
        if (counterActive >= 2) {
            killTheIgnition();
            // Changes the text on the blastoff button back to "Get Ready for Blastoff!!"
            document.getElementById("button_style").innerHTML = "Get Ready for Blastoff!!";
            // Gets rid of the countown window
            document.getElementById("countDownNumbers").innerHTML = "";
            // Updates the console whenever the launch is reset
            console.log("************************");
            console.log("Launch Reset!");
            console.log("Count Down is at: " + countDown);
            console.log("Counter Active is at: " + counterActive);
            
        }

    }

    // Function that updates the countdown and kills the countdown when it hits 0
    function countDownUpdater() {
        // Updates the countdown number in the countdown window
        document.getElementById("countDownNumbers").innerHTML = countDown;
        //  Updates the countdown number variable
        countDown--;
        // Updates the console whenever the countdown goes down
        console.log("************************");
        console.log("Count Down is at: " + countDown);
        console.log("Counter Active is at: " + counterActive);

        /* 
         Block of if else statments that change the colors of the countdown numbers
         staring at 3 going down to 0 going in the color order red, orange, yellow, white
         and then if the countdown isn't 3, 2, 1, or 0 it makes the numbers black
        */
        if (countDown == 2) {
            document.getElementById("countDownNumbers").style.color = "red";

        } else if (countDown == 1) {
            document.getElementById("countDownNumbers").style.color = "orange";

        } else if (countDown == 0) {
            document.getElementById("countDownNumbers").style.color = "yellow";

        } else if (countDown == -1) {
            document.getElementById("countDownNumbers").style.color = "white";
            
        } else {
            document.getElementById("countDownNumbers").style.color = "black";

        }

        // If statment that warns user when the countdown is less than halfway till blastoff
        if (countDown < 5) {
            document.getElementById("countDownNumbers").innerHTML = "Warning Less than ½ way to launch, time left = " + countDown;

        }

        // If statment that kills the countdown when it displays zero
        if (countDown < 0) {
            killTheIgnition();
            alert("Blastoff Complete!!!");
            // Updates console that the countdown has been successful
            console.log("************************");
            console.log("Launch successful! Interval Cleared!");
            console.log("Count Down is at: " + countDown);
            console.log("Counter Active is at: " + counterActive);
            // Changes the blastoff button to say "Click to initiate countdown again!"
            document.getElementById("button_style").innerHTML = "Click to initiate countdown again!";
            // Gets rid of the countdown window
            document.getElementById("countDownNumbers").innerHTML = "";

        }

    }
    