console.log('hello there');
document.getElementById("appointment").addEventListener("click", dropDown);
document.getElementById("appointment").addEventListener("click", () => {
  timeUpdate();
  setInterval(timeUpdate, 1000);
});
document.getElementById('information-form').addEventListener('submit', setCookie);
window.addEventListener('load', checkCookie);

let time = document.getElementById('time');

function timeUpdate() {
  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  let IsPM = (h >= 12);
  time.innerHTML = ((h%12 == 0)?'12':(h%12)) +':'+m+':'+s+' '+(IsPM?'PM':'AM');
}

function dropDown() {
    let id = null;
    const elem = document.getElementById("animation-container");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 3);
    window.scrollTo();
    elem.scrollIntoView({behavior: "smooth", block: "start"});
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos+= 5;
        elem.style.height = pos + 'px';
      }
    }
}

function clearCookie() {
  let ca = document.cookie.split(';');
  document.cookie = "";
  for (let i = 0; i < ca.length; i++) {
    document.cookie = ca[i] + "=;";
  }
  document.cookie +=  "expires=" + new Date(0).toUTCString() + ";max-age=0;";
  console.log("Cookie is: " + document.cookie);
}

//fname, fvalue, lname, lvalue, tphone, tvalue, exdays
function setCookie(event) {
  let fname = "firstName";
  let fvalue = document.getElementById("first-name").value;
  let lname = 'lastName';
  let lvalue = document.getElementById("last-name").value;
  let tphone = 'telephone';
  let tvalue = document.getElementById("tel-number").value;
  let exdays = 21;

  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = fname + '=' + fvalue;
  document.cookie = lname + '=' + lvalue;
  document.cookie = tphone + '=' + tvalue;
  document.cookie = expires + ";path=/; secure";
  console.log(document.cookie);
  // event.preventDefault();
}

function checkCookie() {
  let telephone = getCookie('telephone');
  if (telephone != "") {
    document.getElementById("first-name").setAttribute('placeholder', getCookie('firstName'));
    document.getElementById("last-name").setAttribute('placeholder', getCookie('lastName'));
    document.getElementById("tel-number").setAttribute('placeholder', getCookie('telephone'));
  } else {

  }
}
  
function getCookie(param) {
  let wanted = param + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(wanted) == 0) {
      return c.substring(wanted.length, c.length);
    }
  }
  return "";
}
  
//window.location.assign('about.html'); works
