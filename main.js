const img = document.getElementById("rotatingImage");
let angle = 0;
if (img) {
  setInterval(() => {
    angle = (angle + 1) % 360;
    img.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  }, 30);
}


// ハンバーガーメニュー
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => { navLinks.classList.remove('active'); });
  });
}
