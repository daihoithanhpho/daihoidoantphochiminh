const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let countDownFunction = () => {
  // Set the date we're counting down to
  var countDownDate = new Date("October, 15 2022 07:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.querySelector("#countdown .days h3").innerText = days;
    document.querySelector("#countdown .hours h3").innerText = hours;
    document.querySelector("#countdown .minutes h3").innerText = minutes;
    document.querySelector("#countdown .seconds h3").innerText = seconds;


    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "";
    }
  }, 1000);
}

countDownFunction();