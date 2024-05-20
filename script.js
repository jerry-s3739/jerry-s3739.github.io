let sec = 0;
let min = 0;
let hour = 0;
let SecTimer;

let secHtml = document.getElementById('sec');
let minHtml = document.getElementById('min');
let hourHtml = document.getElementById('hour');

let startB = document.getElementById('start'); 
let stopB = document.getElementById('stop'); 
let resetB = document.getElementById('reset'); 


function setSec(){

    secHtml.innerText = sec < 10 ? "0"+sec : sec;
    minHtml.innerText = min < 10 ? "0"+min : min;
    hourHtml.innerText = hour < 10 ? "0"+hour : hour;

}

function startTimer(){
    SecTimer = setInterval(()=>{
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
        }
    
        if(min == 60){
            min = 0;
            hour++;
        }
        console.log("TIMER");
        setSec();
    
    },1000);
}

startB.addEventListener('click', function () {
    startTimer();
    
});

stopB.addEventListener('click', function () {
    clearInterval(SecTimer);
    setSec();
});

resetB.addEventListener('click', function () {
    sec = "0";
    min = "0";
    hour = "0";

    setSec();
});
