function switchTheme() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
}

const inverteMundosBotao = document.querySelector('#switch-theme-button');
inverteMundosBotao.addEventListener('click', switchTheme);