const text = document.querySelector("#dynamic-text");
const phrases = ["Ventas bajas", "Poca visibilidad"];

let i = 0;
let j = 0;
let isTyping = true;
let phrase = [];

function loop() {
  text.innerHTML = phrase.join("");

  if (isTyping) {
    if (j < phrases[i].length) {
      phrase.push(phrases[i].charAt(j));
      j++;
      setTimeout(loop, 100); // Continue typing with a delay of 100ms
    } else {
      isTyping = false;
      setTimeout(loop, 1000); // Wait for 1 second before starting to delete
    }
  } else {
    if (phrase.length > 0) {
      phrase.pop();
      j--;
      setTimeout(loop, 100); // Continue deleting with a delay of 100ms
    } else {
      isTyping = true;
      i = (i + 1) % phrases.length; // Move to the next phrase
      j = 0;
      setTimeout(loop, 1000); // Wait for 1 second before starting to type the next phrase
    }
  }
}

loop();
