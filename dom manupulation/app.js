const minKnapp = document.getElementById("btn");
minKnapp.addEventListener("click", () => {
  document.getElementById("Hello-world-div").textContent = "Hello world";
});

const entillknapp = document.querySelector("#btn1");
const newtext = document.querySelector(".newtext");

entillknapp.addEventListener("click", () => {
  const input = document.getElementById("input");

  newtext.textContent = input.value;
});

const remove = document.querySelector("#remove");

const content = document.querySelector("#content");

remove.addEventListener("click", () => {
  content.remove();
});
