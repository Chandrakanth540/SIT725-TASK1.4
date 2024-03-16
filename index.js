function changeText() {
  let head = document.getElementsByClassName('heading')[0];
  var textArray = ['text1', 'text2', 'text3', 'text4', 'text5'];
  var index = getRandomNumber(0, textArray.length - 1);
  head.innerHTML = textArray[index];
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
