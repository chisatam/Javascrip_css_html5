var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");



function myFunction(x) {
  if (x.matches) { // ถ้า size น้อยกว่า 700px
    // document.getElementById("exercise_first").style.fontSize="10px";
    // document.getElementById("exercise_first").style.width="30%";
    // document.getElementById("input_style1").style.width="50%";
    // document.getElementById("input_style2").style.width="50%";
    // document.getElementById("input_style3").style.width="50%";
    // document.getElementById("input_style4").style.width="50%";
    // document.getElementById("label1").style.fontSize="10px";
    // document.getElementById("label2").style.fontSize="10px";
    // document.getElementById("label3").style.fontSize="10px";
    // document.getElementById("label4").style.fontSize="10px";
    
  } 
  // ถ้า size มากกว่า 700px
  else {
    // document.getElementById("exercise_first").style.fontSize="20px";
    // document.getElementById("exercise_first").style.width="40%";
    // document.getElementById("input_style1").style.width="50%";
    // document.getElementById("input_style2").style.width="50%";
    // document.getElementById("input_style3").style.width="50%";
    // document.getElementById("input_style4").style.width="50%";
    // document.getElementById("label1").style.fontSize="15px";
    // document.getElementById("label2").style.fontSize="15px";
    // document.getElementById("label3").style.fontSize="15px";
    // document.getElementById("label4").style.fontSize="15px";

  //  document.body.style.fontSize="16px";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x)

// x.addListener(myFunction)
x.addEventListener("change", myFunction)
