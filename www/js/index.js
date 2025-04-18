
/* js/script.js */
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target.id.replace('nav-', '') + '-section';
    document.querySelectorAll('main section').forEach(sec => sec.classList.add('hidden'));
    const section = document.getElementById(target);
    if (section) section.classList.remove('hidden');
  });
});

document.getElementById('login-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  alert(`Logging in as ${username}...`);
  // TODO: call backend API for authentication
});
