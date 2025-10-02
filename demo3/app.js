let myImage = document.querySelector(".img");

myImage.onclick = function () {
  let mySrc = "firefox2.png";
  if (mySrc !== myImage.getAttribute("src")) {
    myImage.setAttribute("src", "firefox2.png");
  } else {
    myImage.setAttribute("src", "firefox-icon.png");
  }
};

let myBtn = document.querySelector(".btn");
let myTitle = document.querySelector(".title");

function setUserName() {
  let myName = prompt("请输入你的名字：");
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myTitle.textContent = "Mozilla 酷毙了，" + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myTitle.textContent = "Mozilla 酷毙了，" + storedName;
}

myBtn.onclick = () => {
  setUserName();
};
