const timer = document.getElementById('timer');
const startbtn = document.querySelector('.start');
const stopbtn = document.querySelector('.stop');
const resetbtn = document.querySelector('.reset');
let timeleft = 1800;
function updateTimer()
{
    let minute = Math.floor(timeleft/60);
    let second = Math.floor(timeleft%60);
    let time;
    time = `${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`;
    timer.innerHTML=time;
}

startbtn.addEventListener('click',()=>{
    console.log('started');
    interval = setInterval(()=>{
        timeleft--;
        updateTimer();
        if(timeleft==0)
        {
            alert('Time over');
            clearInterval(interval);
            timeleft=1800;
        }
    },1000);

});
stopbtn.addEventListener('click',()=>{
    clearInterval(interval);
});
resetbtn.addEventListener('click',()=>{
    clearInterval(interval);
    timeleft=1800;
    updateTimer();
});