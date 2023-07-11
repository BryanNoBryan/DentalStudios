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
  if (m-10<0) m = "0" + m;
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

//can also use max-age
function clearCookies() {
  let ca = decodeURIComponent(document.cookie).split(';');
  for (let i = 0; i < ca.length; i++) {
    let caKey = ca[i].split('=', 1)[0];
    document.cookie = caKey + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure";
  }
  console.log("Cookies Cleared.");
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
  let footer = expires + ";path=/; secure;";
  document.cookie = fname + '=' + fvalue + ";" + footer;
  document.cookie = lname + '=' + lvalue + ";" + footer;
  document.cookie = tphone + '=' + tvalue + ";" + footer;
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
  let ca = decodeURIComponent(document.cookie).split(';');
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
