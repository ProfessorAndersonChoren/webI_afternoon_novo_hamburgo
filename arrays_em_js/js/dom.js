// Elementos HTML
let buttons = document.getElementsByTagName("button");
let paragraphs = document.getElementsByTagName("p");
let length = 16;

// Botão aumentar
buttons[0].addEventListener("click", () => {
  console.log("Aumentar fonte");
  length += 2;
  for (const p of paragraphs) {
    p.style = `font-size:${length}px`;
  }
});

// Botão aumentar
buttons[1].addEventListener("click", () => {
  console.log("Diminuir fonte");
  length -= 2;
  for (const p of paragraphs) {
    p.style = `font-size:${length}px`;
  }
});