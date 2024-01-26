function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#generated-poem");

  new Typewriter("#generated-poem", {
    strings:
      "My life, - <br> How much more of it remains? <br> The night is brief. <br>",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
