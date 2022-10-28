let arr = [1,2,3,4,5,6,7,8,9]
let giftAddress = [];
let userStepCount = 0;

let gift1 = false;
let gift2 = false;
let gift3 = false;
let skull1 = false;

let btnid; // user clicked button.
let userInp = btnid;
console.log("UserInp " + userInp);


for(let i = 0; i < 4; i++){
    // Generate random number
    var randomNumber = Math.floor(Math.random() * 16);

    if (giftAddress[0] == randomNumber || giftAddress[1] == randomNumber || giftAddress[2] == randomNumber) {
        i--;
    }
    else{
        giftAddress[i] = randomNumber;
    }
}

for (let index = 0; index < 4; index++) {
    giftAddress[index] = 'a' + giftAddress[index];
    
}

for (let index = 0; index < 4; index++) {
    console.log(giftAddress[index]);
    
}
 /* User click*/

    const buttons = document.getElementsByTagName("button");

        const buttonPressed = e => {
        console.log(e.target.id);  // Get ID of Clicked Element
        let btnid = e.target.id;
        // document.getElementById(e.target.id).innerHTML = "Clicked";
        check(btnid);
        }

        for (let button of buttons) {
            button.addEventListener("click", buttonPressed);
        }

/* END */

function check(userInput){
    checkWin();

    let userInp = userInput;
    console.log("check "+userInp);
    if (skull1 == false) {
        if (userInp == giftAddress[0]) {
            let creId = userInp;
            document.getElementById(creId).innerHTML = "Gift";
            gift1 = true;
        }
        else if (userInp == giftAddress[1]) {
            let creId =userInp;
            document.getElementById(creId).innerHTML = "Gift";
            gift2 = true;
        }
        else if (userInp == giftAddress[2]) {
            let creId = userInp;
            document.getElementById(creId).innerHTML = "Gift";
            gift3 = true;
        }
        else if (userInp == giftAddress[3]) {
            let creId = userInp;
            document.getElementById(creId).innerHTML = "Danger";
            skull1 = true;
        }
        else{
            let creId = userInp;
            document.getElementById(creId).innerHTML = "MISS";
        }
        userStepCount = userStepCount + 1;
    }
    else{
        alert("you loss");
    }
    document.getElementById('stepCount').innerHTML = "Step Count = " + userStepCount;
}

function checkWin(){

    if (gift1 == true && gift2 == true && gift3 == true) {
        alert("You won the match");
    }
}