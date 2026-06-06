const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttons = document.getElementById("buttons");

const stopButton = document.createElement("button");
stopButton.className = "stop";
stopButton.innerText = "Stop";

stopButton.addEventListener("click", () => {
  document.querySelectorAll("audio").forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
});

buttons.appendChild(stopButton);

sounds.forEach(sound => {
  const button = document.createElement("button");
  button.className = "btn";
  button.innerText = sound;

  const audio = document.createElement("audio");
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;

  document.body.appendChild(audio);

  button.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(a => {
      a.pause();
      a.currentTime = 0;
    });

    audio.play();
  });

  buttons.appendChild(button);
});
