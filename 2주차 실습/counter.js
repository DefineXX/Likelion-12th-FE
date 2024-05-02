var buttonUp = document.getElementById("up"),
    buttonDown = document.getElementById("down"),
    buttonReset = document.getElementById("reset"),
    count = 0;

buttonUp.onclick = function() {
  count += 1;
  document.getElementById("count").innerHTML = count;
};
buttonDown.onclick = function() {
  count -= 1;
  document.getElementById("count").innerHTML = count;
};

buttonReset.onclick = function() {
  count = 0;
  document.getElementById("count").innerHTML = count;
}