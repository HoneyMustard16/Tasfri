const chart = document.getElementById("chart");
const data = [
  { from: 10, to: 10.4, color: "hsl(0, 100%, 50%)" },
  { from: 10.4, to: 10.45, color: "hsl(30, 100%, 50%)" },
  { from: 10.5, to: 10.55, color: "hsl(60, 100%, 50%)" },
  { from: 10.6, to: 10.68, color: "hsl(90, 100%, 50%)" },
  { from: 10.7, to: 10.95, color: "hsl(120, 100%, 50%)" },
  { from: 10.45, to: 10.5, color: "hsl(150, 100%, 50%)" },
  { from: 10.55, to: 10.6, color: "hsl(180, 100%, 50%)" },
  { from: 10.68, to: 10.7, color: "hsl(210, 100%, 50%)" },
  { from: 10.95, to: 11.2, color: "hsl(240, 100%, 50%)" },
  { from: 11.2, to: 11.45, color: "hsl(270, 100%, 50%)" },
  { from: 11.7, to: 12.2, color: "hsl(300, 100%, 50%)" },
  { from: 11.45, to: 11.7, color: "hsl(330, 100%, 50%)" },
  { from: 12.2, to: 12.5, color: "hsl(360, 100%, 50%)" },
  { from: 12.5, to: 12.75, color: "hsl(45, 100%, 50%)" },
  { from: 12.75, to: 13.25, color: "hsl(75, 100%, 50%)" },
  { from: 13.4, to: 13.65, color: "hsl(105, 100%, 50%)" },
];

data.forEach((entry) => {
  const bar = document.createElement("div");
  const barInner = document.createElement("div");
  const width = (entry.to - entry.from) * 100 + "%";

  bar.className = "bar";
  barInner.className = "bar-inner";
  barInner.style.width = width;
  barInner.style.backgroundColor = entry.color;
  bar.appendChild(barInner);
  chart.appendChild(bar);
});
