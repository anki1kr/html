onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I LOVE U').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 700); // 700ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

window.addEventListener('load', function () {
  document.getElementById('preloader').style.display = 'none';
});