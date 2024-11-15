const projetos = [
    {
        imagem: './Assets/ApiAdoptionSwagger.png', 
        linguagens: ['java', 'spring', 'swagger', 'railway'],
        nome: 'API Adoção de Animal',
        github: 'https://github.com/RenataGodoy/Adocao',
        demo: 'https://adocao-production-09ee.up.railway.app/swagger-ui/index.html#/'
    },
    {
        imagem: './Assets/Petshop-reactNative.png', 
        linguagens: ['reactnative', 'Firebase'],
        nome: 'Petshop - App Mobile',
        github: 'https://github.com/RenataGodoy/Petshop---ReactNative',
        demo: 'https://snack.expo.dev/czewM17jB2VBqeE-Nu57h'
    },
    {
        imagem: './Assets/Petshop-reactNative.png', 
        linguagens: ['php', 'Laravel', 'bootstrap'],
        nome: 'Ramal - Laravel',
        github: 'https://github.com/RenataGodoy/Petshop---ReactNative',
        demo: 'https://snack.expo.dev/czewM17jB2VBqeE-Nu57h'
    },

];

// Mapeia as linguagens para as classes de ícones Devicons
const iconMap = {
    java: '<i class="devicon-java-plain-wordmark colored" linguagem-icon></i>',
    spring: '<i class="devicon-spring-original-wordmark colored" linguagem-icon></i>',
    swagger: '<i class="devicon-swagger-plain-wordmark colored" linguagem-icon></i>',
    railway:   '<i class="devicon-railway-original-wordmark colored" linguagem-icon></i>',
    firebase: '<i class="devicon-firebase-plain-wordmark" linguagem-icon></i>',
    reactnative: '<i class="devicon-react-original-wordmark colored" linguagem-icon></i>',
    php: '<i class="devicon-php-plain colored" linguagem-icon></i>',
    laravel: '<i class="devicon-laravel-original-wordmark colored" linguagem-icon></i>',
    bootstrap: '<i class="devicon-bootstrap-plain-wordmark colored" linguagem-icon></i>',


    


    

};

const carrossel = document.querySelector('.carrossel');

// Limpa o conteúdo existente no carrossel para evitar duplicação
carrossel.innerHTML = '';

projetos.forEach(projeto => {
    const div = document.createElement('div');
    div.classList.add('projeto'); // Classe de estilo para o projeto
    
    // Gera os ícones usando o mapeamento
    const linguagensIcons = projeto.linguagens.map(lang => iconMap[lang.toLowerCase()] || lang).join(' ');
    
    div.innerHTML = `
        <img src="${projeto.imagem}" alt="${projeto.nome}" class="projeto-imagem">
        <p class="linguagens">${linguagensIcons}</p>
        <h3>${projeto.nome}</h3>
        <div class="projeto-links">
            <a href="${projeto.github}" target="_blank" div class ="links_projeto">GitHub</a>
            <a href="${projeto.demo}" target="_blank" div class ="links_projeto">Demo</a>
        </div>
    `;
    
    carrossel.appendChild(div);
});
