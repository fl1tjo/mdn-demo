let myTitle = document.querySelector('.titleTxt');
let myImg = document.querySelector('.imgs');
let myBtn = document.querySelector('.btn');

myImg.addEventListener('click', function(){
  let imgSrc = myImg.getAttribute("src");
  if(imgSrc === "images/firefox-icon.png") {
    myImg.setAttribute("src", "images/firefox2.png");
  } else {
    myImg.setAttribute("src", "images/firefox-icon.png");
  }
});

function setUserName() {
  let myName = prompt('请输入你的名字');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myTitle.textContent = 'Mozilla is cool, ' + myName;
  }
};

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myTitle.innerHTML = 'Mozilla is cool, ' + storedName;
}

myBtn.onclick = function() {
  setUserName();
}