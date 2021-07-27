console.log("javascript is working");

function convertCelToFeh() {
  var hiLoSelector = [
    "#hi1 span",
    "#lo1 span",
    "#hi2 span",
    "#lo2 span",
    "#hi3 span",
    "#lo3 span",
    "#hi4 span",
    "#lo4 span",
  ];

  var x = document.getElementById("temperatureConv").selectedIndex;
  console.log(x);

  if (x == 1) {
    for (let i = 0; i < hiLoSelector.length; i++) {
      var hi = document.querySelector(hiLoSelector[i]);
      var tempConv = Math.round(hi.innerText * (9 / 5) + 32);
      hi.innerText = tempConv;
    }
  } else {
    for (let i = 0; i < hiLoSelector.length; i++) {
      var hi = document.querySelector(hiLoSelector[i]);
      var tempConv = Math.round((hi.innerText - 32) * (5 / 9));
      hi.innerText = tempConv;
    }
  }
}

function dismiss() {
  document.querySelector("#footer").style.display = "none";
}
