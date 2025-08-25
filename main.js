// 円形テキストアニメーション
const text = "なかもとりょうすけと申します。";
const circleText = document.getElementById("circleText");
const chars = text.split('');
const radius = 120;
const n = chars.length;

circleText.innerHTML = chars.map((char, i) => {
  const angle = (360 / n) * i;
  return `<span style="
    position:absolute;
    left:50%;top:50%;
    transform: rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg);
    transform-origin: 0 0;
    font-size:1rem;
    color:#232323;">${char}</span>`;
}).join('');

// 円周上を回転させるアニメーション
let deg = 0;
setInterval(() => {
  deg += 0.7; // 回転速度
  circleText.style.transform = `rotate(${deg}deg)`;
}, 30);

// ハンバーガーメニュー
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => { navLinks.classList.remove('active'); });
});
