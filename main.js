// 画像回転
const img = document.getElementById("rotatingImage");
let angle = 0;
setInterval(() => {
  angle = (angle + 1) % 360;
  img.style.transform = `rotate(${angle}deg)`;
}, 30);

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => { navLinks.classList.remove('active'); });
});
