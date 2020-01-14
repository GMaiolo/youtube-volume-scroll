const video = document.querySelector("video");
const container = document.querySelector(".html5-video-container");
const volumeTextStyles = `
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 3rem;
  color: red;
  display: none;
`;

const volumeText = document.createElement("div");
volumeText.setAttribute("style", volumeTextStyles);
volumeText.textContent = (video.volume * 100).toFixed(0);
container.appendChild(volumeText);

let hideTimeout = null;

video.addEventListener("wheel", e => {
  e.preventDefault();
  if (e.deltaY < 0) {
    // scrolling up
    video.volume = Math.min(1, video.volume + 0.01);
  } else {
    video.volume = Math.max(0, video.volume - 0.01);
  }
  volumeText.textContent = (video.volume * 100).toFixed(0);
  volumeText.style.display = "block";
  if (hideTimeout) clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    volumeText.style.display = "none";
  }, 1000);
});
