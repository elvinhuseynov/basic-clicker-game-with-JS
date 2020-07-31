const startingTime = 3;
var time = startingTime;
var point = 0;

function startGame() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("game").style.display = "block";



  setInterval(updateCountdown, 500);

  function updateCountdown() {
    let seconds = time;

    if (Number(document.getElementById("timer-text").value) != 0) {
      document.getElementById("timer-text").value = `${seconds}`;
      time--;

    }else{
      document.getElementById("game").style.display = "none";
      document.getElementById("end-game").style.display = "block";
      document.getElementById("last-point").innerHTML = `Your Point: ${point}`
    }
  }
}

function firstBoxVisible() {
  var firstRandomBox = Math.floor(Math.random() * 9 + 1);

  if (firstRandomBox == 1) {
    document.getElementById("box1").style.visibility = "unset";
  } else if (firstRandomBox == 2) {
    document.getElementById("box2").style.visibility = "unset";
  } else if (firstRandomBox == 3) {
    document.getElementById("box3").style.visibility = "unset";
  } else if (firstRandomBox == 4) {
    document.getElementById("box4").style.visibility = "unset";
  } else if (firstRandomBox == 5) {
    document.getElementById("box5").style.visibility = "unset";
  } else if (firstRandomBox == 6) {
    document.getElementById("box6").style.visibility = "unset";
  } else if (firstRandomBox == 7) {
    document.getElementById("box7").style.visibility = "unset";
  } else if (firstRandomBox == 8) {
    document.getElementById("box8").style.visibility = "unset";
  } else if (firstRandomBox == 9) {
    document.getElementById("box9").style.visibility = "unset";
  }
}

function boxInvisible() {
  document.getElementById("box1").style.visibility = "hidden";
  document.getElementById("box2").style.visibility = "hidden";
  document.getElementById("box3").style.visibility = "hidden";
  document.getElementById("box4").style.visibility = "hidden";
  document.getElementById("box5").style.visibility = "hidden";
  document.getElementById("box6").style.visibility = "hidden";
  document.getElementById("box7").style.visibility = "hidden";
  document.getElementById("box8").style.visibility = "hidden";
  document.getElementById("box9").style.visibility = "hidden";
}

function boxClickRandom() {
  var RandomBox = Math.floor(Math.random() * 9 + 1);

  if (RandomBox == 1) {
    document.getElementById("box1").style.visibility = "unset";
    time = 2;
    point++;
    document.getElementById("point-text").value = `${point}`
  } else if (RandomBox == 2) {
    document.getElementById("box2").style.visibility = "unset";
    time = 2;
    point++;
    document.getElementById("point-text").value = `${point}`
  } else if (RandomBox == 3) {
    document.getElementById("box3").style.visibility = "unset";
    time = 2;
    point++;
    document.getElementById("point-text").value = `${point}`
  } else if (RandomBox == 4) {
    document.getElementById("box4").style.visibility = "unset";
    time = 2;
    point++;
    document.getElementById("point-text").value = `${point}`
  } else if (RandomBox == 5) {
    document.getElementById("box5").style.visibility = "unset";
    time = 2;
    point++;
    document.getElementById("point-text").value = `${point}`
  } else if (RandomBox == 6) {
    document.getElementById("box6").style.visibility = "unset";
    time = 2;
    point++;
    document.getElementById("point-text").value = `${point}`
  } else if (RandomBox == 7) {
    document.getElementById("box7").style.visibility = "unset";
    time = 2;
    point++;
    document.getElementById("point-text").value = `${point}`
  } else if (RandomBox == 8) {
    document.getElementById("box8").style.visibility = "unset";
    time = 2;
    point++;
    document.getElementById("point-text").value = `${point}`
  } else if (RandomBox == 9) {
    document.getElementById("box9").style.visibility = "unset";
    time = 2;
    point++;
    document.getElementById("point-text").value = `${point}`
  }
}
