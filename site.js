const brainRain = document.querySelector('.brain-rain');
for (let i = 0; i < 200; i += 1) {
  const brain = document.createElement('span');
  brain.className = 'falling-brain';
  brain.textContent = '🧠';
  brain.style.setProperty('--x', `${Math.random() * 100}%`);
  brain.style.setProperty('--delay', `${Math.random() * 18}s`);
  brain.style.setProperty('--duration', `${8 + Math.random() * 12}s`);
  brain.style.setProperty('--size', `${0.65 + Math.random() * 0.9}rem`);
  brainRain.appendChild(brain);
}
const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.documentElement.dataset.theme = 'light';
  document.documentElement.classList.add('theme-light');
}
const updateThemeButton = () => {
  const light = document.documentElement.dataset.theme === 'light';
  themeToggle.textContent = light ? 'Dark mode' : 'Light mode';
  themeToggle.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
};
updateThemeButton();
themeToggle.addEventListener('click', () => {
  const light = document.documentElement.dataset.theme !== 'light';
  document.documentElement.dataset.theme = light ? 'light' : 'dark';
  document.documentElement.classList.toggle('theme-light', light);
  localStorage.setItem('theme', light ? 'light' : 'dark');
  updateThemeButton();
});
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => { const open = links.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); });
links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => links.classList.remove('open')));
