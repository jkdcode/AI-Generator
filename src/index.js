function displayPoem(response) {
  new Typewriter("#generated-poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
  response.data.answer;
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "7a1b7bb3a54afd03ao8ta3f7b40acb43";
  let prompt = `User instructions: Please generate a haiku inspired by ${instructionsInput.value}, in basic html. Add "<i>~ SheCodes AI</i>" after the last line of the poem.`;
  let context =
    "you know haiku style requirements and tradition. Follow the user instructions, and separate each line with a <br> to respect haiku style requirements";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#generated-poem");
  poemElement.innerHTML = `<div class="generating">Generating...</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
