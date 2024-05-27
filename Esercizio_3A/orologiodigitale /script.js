var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");

var clock = setInterval(
    function time(){
      var date_now = new Date();
      var hr = date_now.getHours();
      var min = date_now.getMinutes();
      var sec = date_now.getSeconds();
      
      if(hr < 10){
          hr = "0" + hr;
      } 
      if(min < 10){
          min = "0" + min;
      } 
      if(sec < 10){
          sec = "0" + sec;
      }

      hour.textContent = hr;

      const l=80

      const rh = Math.random() * l -l/2
      const xh = Math.random() * l -l/2
      const yh = Math.random() * l -l/2

      const rm = Math.random() * l -l/2
      const xm = Math.random() * l -l/2
      const ym = Math.random() * l -l/2

      const rs = Math.random() * l -l/2
      const xs = Math.random() * l -l/2
      const ys = Math.random() * l -l/2

     


      

      hour.style = "transform: translate("+ xh + "px, " + yh + "px) rotate(" + rh + "deg)"
      
      minute.textContent = min;
      minute.style= "transform: translate("+ xm + "px, " + ym + "px) rotate(" + rm + "deg)"
      
      seconds.textContent = sec;
      seconds.style= "transform: translate("+ xs + "px, " + ys + "px) rotate(" + rs + "deg)"



    },1000
);