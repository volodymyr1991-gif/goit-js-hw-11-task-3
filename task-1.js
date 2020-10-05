const refs = {
  startBtn: document.querySelector("button[data-action=start]"),
  stopBtn: document.querySelector("button[data-action=stop]"),
  body: document.querySelector("body"),
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const changeColor = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    const min = null;
    const max = colors.length;
    this.isActive = true;

    this.intervalId = setInterval(() => {
      refs.body.style.background = colors[randomIntegerFromInterval(min, max)];
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    refs.body.style.background = "";
  },
};

refs.startBtn.addEventListener("click", changeColor.start.bind(changeColor));
refs.stopBtn.addEventListener("click", changeColor.stop.bind(changeColor));

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
