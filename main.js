const text = "なかもとりょうすけと申します。";
const circleText = document.getElementById("circleText");
const chars = text.split('');
const radius = 80; // 画像に合わせて調整

circleText.innerHTML = chars.map((char, i) => {
  const deg = (360 / chars.length) * i;
  return `
    <span style="
      position: absolute;
      left: 50%; top: 50%;
      transform: rotate(${deg}deg)
                translate(${radius}px)
                rotate(-${deg}deg);
      transform-origin: 0 0;
      font-size: 1rem;
      color: #232323;
      white-space: pre;
    ">${char}</span>
  `;
}).join('');

// 円形全体の回転のみを動かす（移動しないようにする）
let angle = 0;
setInterval(() => {
  angle = (angle + 1) % 360;
  circleText.style.transform = `rotate(${angle}deg)`;
  circleText.style.transformOrigin = "50% 50%";
}, 30);
