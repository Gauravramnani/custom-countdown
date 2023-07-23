let inputcontainer = document.getElementById('input-container');
let countdownform = document.getElementById('countdownForm');
let dateEl = document.getElementById('date-picker');
let countdownActive ='';

let countdowntitle = '';
let countdowndate = '';
let countdownvalue = '';

let countDownEl = document.getElementById('countdown');
let countdownElTitle = document.getElementById('countdown-title');
let countdownBtn = document.getElementById('countdown-button');
let titleElements = document.querySelectorAll('span');

let completeEl = document.getElementById('complete');
let completeElinfo =document.getElementById('complete-info');
let completeBtn = document.getElementById('complete-button');

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;


let today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min',today); // minimum time of the date


console.log(today);

function updateDOM(){

    countdownActive = setInterval(() => {
        
    let now = new Date().getTime();
    let distance = countdownvalue - now;
    console.log("Distance time",distance);

    let days = Math.floor(distance / day);
    let hours = Math.floor((distance % day) / hour);
    let minutes = Math.floor((distance % hour) / minute);
    let seconds = Math.floor((distance % minute) / second);

    console.log(days,hours,minutes,seconds);

        
    //hide inputs
    inputcontainer.hidden = true;

    //if countdown has ended , show thc complete
    if(distance < 0){
        countDownEl.hidden = true;
        clearInterval(countdownActive);
        completeElinfo.textContent =`${countdowntitle} finished on ${countdowndate}`
        completeEl.hidden = false ;
    }else{
    //else, the show the coundiwn in the process

    //populated countdown
    countdownElTitle.textContent = `${countdowntitle}`;
    titleElements[0].textContent = `${days}`;    
    titleElements[1].textContent = `${hours}`;
    titleElements[2].textContent = `${minutes}`;
    titleElements[3].textContent = `${seconds}`;

    completeEl.hidden =true;
    countDownEl.hidden = false;

    }



    },second /*1000*/);
}

function updatecountdown(e){

    e.preventDefault();
    countdowntitle = e.srcElement[0].value;
    countdowndate = e.srcElement[1].value
    console.log(countdowntitle,countdowndate)

    // check the valid date

    if(countdowndate === ''){
        alert('please select the date')
    }
    else{
        //Get  number version of current Date
    countdownvalue = new Date(countdowndate).getTime();
    console.log("current Time",countdownvalue)
    updateDOM();
    
    }
}

//Reset all values
function reset(){

    //hide countdown and show the inputs
    countDownEl.hidden = true;
    completeEl.hidden = true;
    inputcontainer.hidden = false;

    //stop the countdown
    clearInterval(countdownActive);

    //Reset the value
    countdowntitle = '';
    countdowndate = '';
}

countdownform.addEventListener("submit",updatecountdown);
countdownBtn.addEventListener("click",reset);
completeBtn.addEventListener("click",reset);