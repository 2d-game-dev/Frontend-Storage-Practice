const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const submitBtn = document.getElementById('btn');
const rememberBtn = document.getElementById('btn1');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();

  if (!name || !surname) {
    alert("Please enter both name and surname to proceed!");
    return;
  }

  alert(`Hello, ${name} ${surname}!`);
});

rememberBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();

  if (!name || !surname) {
    alert("Please enter both name and surname to remember your info!");
    return;
  }

  // Store in cookie for 3 days
  document.cookie = `name=${encodeURIComponent(name)}; max-age=${3 * 24 * 60 * 60}`;
  document.cookie = `surname=${encodeURIComponent(surname)}; max-age=${3 * 24 * 60 * 60}`;

  // Store in localStorage
  localStorage.setItem('name', name);
  localStorage.setItem('surname', surname);

  alert("Name and surname saved for 3 days");
});

// Load saved info on page load
window.addEventListener('load', () => {
  const cookies = document.cookie.split(";");
  let savedName = "";
  let savedSurname = "";

  cookies.forEach(cookie => {
    const [key, value] = cookie.trim().split("=");
    if (key === "name") savedName = decodeURIComponent(value);
    if (key === "surname") savedSurname = decodeURIComponent(value);
  });

  if (savedName && savedSurname) {
    nameInput.value = savedName;
    surnameInput.value = savedSurname;
  }
});
