function changeLanguage(lang) {
    // Pega todos os elementos na página que têm os atributos 'data-translation-pt', 'data-translation-en' e 'data-translation-es'
    const elements = document.querySelectorAll('[data-translation-pt], [data-translation-en], [data-translation-es]');

    // Para cada elemento encontrado...
    elements.forEach(element => {
        if (lang === 'BR' || lang === 'PT-BR') {
            element.innerText = element.getAttribute('data-translation-pt');
        } else if (lang === "EN") {
            element.innerText = element.getAttribute('data-translation-en');
        } else {
            element.innerText = element.getAttribute('data-translation-es');
        }
    });

    // Muda o texto do elemento com o id 'selected-language' para o idioma selecionado
    document.getElementById('selected-language').innerText = lang;

    // Muda o atributo 'lang' do elemento principal (HTML)
    document.documentElement.lang = lang === 'BR' ? 'pt-br' : lang.toLowerCase();

    // Trocando a classe para alterar a bandeira
    const selectedLanguageElement = document.getElementById('selected-language');

    if (lang === 'BR' || lang === 'PT-BR') {
        selectedLanguageElement.classList.remove('change-en');
        selectedLanguageElement.classList.add('change-br'); // Adiciona a classe que altera para a bandeira do Brasil
    } else if (lang === 'EN') {
        selectedLanguageElement.classList.remove('change-br');
        selectedLanguageElement.classList.add('change-en'); // Adiciona a classe que altera para a bandeira dos EUA
    }
}        