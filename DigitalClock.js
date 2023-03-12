
const stopIntervalFunctionality=document.getElementById('clock');
function setClock(){
    const hour=document.getElementById('hour');
    const minute=document.getElementById('minute');
    const second=document.getElementById('second');


    const currentTime=new Date();
   const hr=currentTime.getHours();

   const min=currentTime.getMinutes();

   const sec=currentTime.getSeconds();


   hour.textContent=hr;
   minute.textContent=min;
   second.textContent=sec;

}
    const intervalTime=setInterval(setClock,1000);






stopIntervalFunctionality.addEventListener('onmouseover',function(){
    console.log("click");
    clearInterval(intervalTime)
     
})