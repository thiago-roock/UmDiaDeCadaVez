// pegamos o valor no localStorage
const nightModeStorage = localStorage.getItem('modoDarkStorage')
const nightMode = document.querySelector('#switch-flat')

// pega o valor do meta tag
const metaThemeColor = document.querySelector('meta[name=theme-color]')

// caso tenha o valor no localStorage
if (nightModeStorage) {
  // ativa o night mode
  document.documentElement.classList.add('night-mode')
  jQuery("#corpo").addClass("bg-dark text-light");
  jQuery("#rodapeT").removeClass("text-dark");

  // já deixa o input marcado como ativo
  nightMode.checked = true
}

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night-mode')

  // se tiver a classe night-mode
  if (document.documentElement.classList.contains('night-mode')) {
    // salva o tema no localStorage
    jQuery("#corpo").addClass("bg-dark text-light");
    jQuery("#rodapeT").removeClass("text-dark");

    localStorage.setItem('modoDarkStorage', true)

    return
  }
  // senão remove
        jQuery("#corpo").removeClass("bg-dark text-light");
        jQuery("#rodapeT").addClass("text-dark");
        jQuery(".modoDark").show();
        jQuery(".modoWhite").hide();
        localStorage.removeItem('modoDarkStorage')
})
