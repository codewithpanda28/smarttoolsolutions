
// Mobile menu
const btn = document.getElementById('menuBtn');
const links = document.getElementById('navLinks');
if (btn && links) {
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('show');
    btn.setAttribute('aria-expanded', String(open));
  });
}
// Tabs
function setActiveTab(tabId) {
  document.querySelectorAll('.tab-button').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-content').forEach(el => {
    el.classList.toggle('active', el.id === tabId);
  });
}
document.querySelectorAll('.tab-button').forEach(b => {
  b.addEventListener('click', () => setActiveTab(b.dataset.tab));
});
