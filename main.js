// main.js

// --- COMPONENT: Loader de componentes HTML ---
async function loadComponent(id, path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Erro ao carregar ${path}: ${res.status}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (e) {
    document.getElementById(id).innerHTML = `<div style="color:red;">Erro ao carregar componente: ${path}<br>${e.message}</div>`;
    console.error(e);
  }
}

// Função utilitária para mesclar dados comuns e específicos
function buildProjects(base, specifics) {
  return specifics.map((spec, idx) => ({ ...base[idx], ...spec }));
}

// --- COMPONENT: Translations e dados dos projetos ---
// Campos comuns dos projetos (não dependem do idioma)
const projectsBase = [
  {
    id: 0,
    image: "media/project-main.png",
    gallery: [
      "media/project-main.png",
      "media/project-more1.png",
      "media/project-more2.png"
    ],
    liveUrl: "https://www.youtube.com/live/nrE5V41hrzI?si=IuwOfGSmIQVJO7z8&t=80",
    repoUrl: "",
    articleUrl: "https://link.springer.com/chapter/10.1007/978-3-031-61963-2_5"
  },
  {
    id: 1,
    image: "media/project1-main.png",
    gallery: [
      "media/project1-main.png",
      "media/project1-more1.png",
      "media/project1-more2.png",
      "media/project1-more3.png",
      "media/project1-more4.png",
      "media/project1-more5.png"
    ],
    liveUrl: "",
    repoUrl: "",
    articleUrl: "https://www.sciencedirect.com/science/article/abs/pii/S1875952119300461"
  },
  {
    id: 2,
    image: "media/project2-main.png",
    gallery: [
      "media/project2-main.png",
      "media/project2-more1.png",
      "media/project2-more2.png",
      "media/project2-more3.png"
    ],
    liveUrl: "",
    repoUrl: "",
    articleUrl: "https://ieeexplore.ieee.org/abstract/document/8921041"
  },
  {
    id: 3,
    image: "media/project3-main.png",
    gallery: [
      "media/project3-main.png",
      "media/project3-more1.png"
    ],
    liveUrl: "",
    repoUrl: "",
    articleUrl: ""
  },
  {
    id: 4,
    image: "media/project4-main.png",
    gallery: [
      "media/project4-main.png",
      { type: "youtube", src: "https://youtu.be/94Vr1fMoIQM" }
    ],
    liveUrl: "https://maquiavelds.itch.io/powerloop",
    repoUrl: "",
    articleUrl: ""
  }
];

const projectsEn = [
  {
    id: 0,
    title: "Interactive 3D Avatar",
    category: "Interaction",
    description: "Project consisting of an interactive 3D avatar used as a virtual presenter for the company. The project was developed in two stages, the first using Unity and then migrated to Unreal Engine to achieve better graphic results. This project was used by Samsung in several of its live shops available on YouTube.",
    tags: ["Interaction", "Artificial Intelligence", "Unreal", "Unity"]
  },
  {
    id: 1,
    title: "Heavy Machinery Simulator",
    category: "Virtual Reality",
    description: "This project was carried out for one of the largest home appliance manufacturers in the country. The demand arose due to lost production time to teach new employees, which requires stopping the process of a machinery, in addition to trying to reduce the chances of potential problems that could occur for both the machinery and the employee in training. The project was carried out using Unreal Engine 4, and tried to be as faithful as possible to the machinery used in a steel sheet manufacturing process. The simulator also contains gamification elements to help employees engage with training.",
    tags: ["Unreal", "Blueprint", "C++", "Simulation"]
  },
  {
    id: 2,
    title: "Vestibular Rehabilitation in VR",
    category: "Virtual Reality",
    description: "This project carried out in Unity 3D aimed to transform mechanical stimuli performed by doctors into stimuli in Virtual Reality, to improve the work of the doctors, giving new possibilities for configurations for these stimuli, and at the same time adding a feedback, obtained through a scale with USB connection. , which tells the app the trends of the patient's balance problems. The stimuli have options that can be configured in real time by the doctor through a cloud system that connects directly to the Virtual Reality application. The project also has minigames to help with treatment.",
    tags: ["Unity", "C#", "Virtual Reality", "Android"]
  },
  {
    id: 3,
    title: "Eyes of the City",
    category: "Artificial Intelligence",
    description: "The Eyes of the City project consists of a system designed to be implemented in city hall vehicles and that of its partners to collect information about garbage found on public roads. This project was prototyped in Unreal Engine 4, but its final version targeted a low-cost mobile device with a camera attached. For this device, a software was implemented that uses artificial intelligence and computer vision techniques to detect and transmit in real time information about places where garbage accumulated in inappropriate places on the street was found.",
    tags: ["Unreal", "Blueprint", "Python", "AI", "Computer Vision"]
  },
  {
    id: 4,
    title: "PowerLoop",
    category: "Game",
    description: "PowerLoop was a game developed for the GameJam CTRL ALT JAM, in which I participated as Programmer and VoiceOver.",
    tags: ["Unity", "C#"]
  }
];

const projectsPt = [
  {
    id: 0,
    title: "Avatar 3D Interativo",
    category: "Interação",
    description: "Projeto que consiste em um avatar 3D interativo utilizado como um apresentador virtual da empresa. O projeto foi desenvolvido em duas etapas, a primeira utilizando Unity e depois migrado para Unreal Engine, para atingir melhores resultados gráficos. Esse projeto foi utilizado pela Samsung em diversas de suas live shops disponíveis no YouTube.",
    tags: ["Interação", "Inteligência Artificial", "Unreal", "Unity"]
  },
  {
    id: 1,
    title: "Simulador de Máquinas Pesadas",
    category: "Realidade Virtual",
    description: "Este projeto foi realizado para um dos maiores fabricantes de eletrodomésticos do país. A demanda surgiu devido ao tempo de produção perdido para ensinar novos funcionários, o que exige a parada do processo de uma máquina, além de tentar reduzir as chances de potenciais problemas que poderiam ocorrer tanto para a máquina quanto para o funcionário em treinamento. O projeto foi realizado utilizando Unreal Engine 4, buscando ser o mais fiel possível à máquina utilizada em um processo de fabricação de chapas de aço. O simulador também contém elementos de gamificação para ajudar os funcionários a se engajarem com o treinamento.",
    tags: ["Unreal", "Blueprint", "C++", "Simulação"]
  },
  {
    id: 2,
    title: "Reabilitação Vestibular em VR",
    category: "Realidade Virtual",
    description: "Este projeto realizado em Unity 3D teve como objetivo transformar estímulos mecânicos realizados por médicos em estímulos em Realidade Virtual, para aprimorar o trabalho dos médicos, oferecendo novas possibilidades de configurações para esses estímulos e, ao mesmo tempo, adicionando um feedback, obtido por meio de uma balança com conexão USB, que informa ao aplicativo as tendências dos problemas de equilíbrio do paciente. Os estímulos possuem opções que podem ser configuradas em tempo real pelo médico através de um sistema em nuvem que se conecta diretamente ao aplicativo de Realidade Virtual. O projeto também possui minijogos para auxiliar no tratamento.",
    tags: ["Unity", "C#", "Realidade Virtual", "Android"]
  },
  {
    id: 3,
    title: "Olhos da Cidade",
    category: "Inteligência Artificial",
    description: "O projeto Olhos da Cidade consiste em um sistema projetado para ser implementado em veículos da prefeitura e de seus parceiros para coletar informações sobre lixo encontrado em vias públicas. Este projeto foi prototipado na Unreal Engine 4, mas sua versão final teve como alvo um dispositivo móvel de baixo custo com uma câmera acoplada. Para este dispositivo, foi implementado um software que utiliza inteligência artificial e técnicas de visão computacional para detectar e transmitir em tempo real informações sobre locais onde lixo acumulado em locais inadequados na rua foi encontrado.",
    tags: ["Unreal", "Blueprint", "Python", "IA", "Visão Computacional"]
  },
  {
    id: 4,
    title: "PowerLoop",
    category: "Jogo",
    description: "PowerLoop foi um jogo desenvolvido para a GameJam CTRL ALT JAM, na qual participei como Programador e VoiceOver.",
    tags: ["Unity", "C#"]
  }
];

const translations = {
  en: {
    pageTitle: "Matheus Nogueira | Game & VR Developer",
    yourName: "Matheus Nogueira",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    navAboutMobile: "About",
    navProjectsMobile: "Projects",
    navContactMobile: "Contact",
    heroTitle:
      "Building <span class='gradient-text'>immersive worlds</span>.",
    heroSubtitle:
      "Hi, I'm Matheus Nogueira. A Game and VR Developer passionate about creating engaging, interactive, and memorable experiences.",
    heroBtnProjects: "My Projects",
    heroBtnContact: "Get in Touch",
    aboutTitle: "About Me",
    aboutP1:
      "I'm a developer with 7 years of experience, specializing in game and VR application development using Unity and C#. My journey in programming began with a passion for video games, and since then, I've been fascinated by the power of interactive technology to tell stories and create new realities.",
    aboutP2:
      "To pursue this career, I graduated with a bachelor's degree in Computer Science and a master's degree in Applied Informatics, both from the University of Fortaleza. During my undergraduate studies, I worked at the Research and Innovation Laboratory (LAPIN), where I had my first professional experience developing research projects with the tools Unity 3D and Unreal Engine for real clients. Also I've been using AI models to get Innovation into those applications.",
    skillsTitle: "My Skills",
    projectsTitle: "Projects I've Built",
    projectsSubtitle:
      "Here are some of the projects I've worked on. Click to see more details.",
    contactTitle: "Let's Connect?",
    contactSubtitle:
      "I'm always open to new opportunities and collaborations. Feel free to get in touch.",
    footerText: "© 2025 Matheus Nogueira. All rights reserved.",
    projectDetailsButton: "Learn More",
    modalLiveButton: "View Live",
    modalRepoButton: "Repository",
    modalArticleButton: "Article",
    projects: buildProjects(projectsBase, projectsEn)
  },
  pt: {
    pageTitle: "Matheus Nogueira | Desenvolvedor de Jogos e VR",
    yourName: "Matheus Nogueira",
    navAbout: "Sobre",
    navProjects: "Projetos",
    navContact: "Contato",
    navAboutMobile: "Sobre",
    navProjectsMobile: "Projetos",
    navContactMobile: "Contato",
    heroTitle:
      "Construindo <span class='gradient-text'>mundos imersivos</span>.",
    heroSubtitle:
      "Olá, sou Matheus Nogueira. Um Desenvolvedor de Jogos e VR apaixonado por criar experiências engajantes, interativas e memoráveis.",
    heroBtnProjects: "Meus Projetos",
    heroBtnContact: "Entre em Contato",
    aboutTitle: "Sobre Mim",
    aboutP1:
      "Sou desenvolvedor com 7 anos de experiência, especializado em desenvolvimento de jogos e aplicativos de RV usando Unity e C#. Minha jornada na programação começou com uma paixão por videogames e, desde então, tenho me fascinado pelo poder da tecnologia interativa para contar histórias e criar novas realidades.",
    aboutP2:
      "Para seguir essa carreira, formei-me em Ciência da Computação e fiz mestrado em Informática Aplicada, ambos pela Universidade de Fortaleza. Durante a graduação, trabalhei no Laboratório de Pesquisa e Inovação (LAPIN), onde tive minha primeira experiência profissional desenvolvendo projetos de pesquisa com as ferramentas Unity 3D e Unreal Engine para clientes reais. Também tenho utilizado modelos de IA para trazer inovação para essas aplicações.",
    skillsTitle: "Minhas Habilidades",
    projectsTitle: "Projetos que Construí",
    projectsSubtitle:
      "Aqui estão alguns dos projetos em que trabalhei. Clique para ver mais detalhes.",
    contactTitle: "Vamos Conversar?",
    contactSubtitle:
      "Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.",
    footerText:
      "© 2025 Matheus Nogueira. Todos os direitos reservados.",
    projectDetailsButton: "Saber Mais",
    modalLiveButton: "Ver ao Vivo",
    modalRepoButton: "Repositório",
    modalArticleButton: "Artigo",
    projects: buildProjects(projectsBase, projectsPt)
  }
};

// --- COMPONENT: Idioma ---
let currentLang = localStorage.getItem("language") || "en";

function setLanguage(lang) {
  try {
    console.log("Setting language to:", lang);
    currentLang = lang;
    localStorage.setItem("language", lang);
    
    // Update all translatable elements
    document.querySelectorAll("[data-key]").forEach((element) => {
      const key = element.dataset.key;
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
    
    document.documentElement.lang = lang === "en" ? "en-US" : "pt-BR";
    document.querySelectorAll(".lang-button").forEach((btn) => {
      btn.classList.remove("active");
      if (btn.id.includes(lang)) {
        btn.classList.add("active");
      }
    });
    
    console.log("Language updated successfully");
    renderProjects();
  } catch (error) {
    console.error("Error setting language:", error);
  }
}

// --- COMPONENT: Projetos ---
function renderProjects() {
  try {
    if (!currentLang || !translations[currentLang]) {
      console.error("No valid language selected");
      return;
    }

    const projectsGrid = document.getElementById("projects-grid");
    if (!projectsGrid) {
      console.error("Projects grid element not found");
      return;
    }

    const currentProjects = translations[currentLang].projects;
    if (!currentProjects || !Array.isArray(currentProjects)) {
      console.error("No projects found for language:", currentLang);
      return;
    }

  console.log(`Rendering ${currentProjects.length} projects for language: ${currentLang}`);
  console.log('Conteúdo de translations[currentLang].projects:', currentProjects);

    projectsGrid.innerHTML = "";
    currentProjects.forEach(function(project, index) {
      var projectCard = document.createElement("div");
      projectCard.className = "bg-gray-900 rounded-xl overflow-hidden group animate-on-scroll is-visible";
      projectCard.style.transitionDelay = (index * 100) + "ms";
      projectCard.innerHTML = `
        <div class="overflow-hidden">
          <img src="${project.image}" alt="${project.title}" class="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500">
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold">${project.title}</h3>
          <p class="text-indigo-400 text-sm mt-1">${project.category}</p>
          <button data-project-id="${project.id}" class="open-modal-button mt-4 text-sm font-semibold text-white hover:text-indigo-300 transition-colors duration-300">
            ${translations[currentLang].projectDetailsButton} <i class='bx bx-right-arrow-alt align-middle'></i>
          </button>
        </div>
      `;
      projectsGrid.appendChild(projectCard);
    });
    document.querySelectorAll(".open-modal-button").forEach(function(button) {
      button.addEventListener("click", function() {
        openModal(button.dataset.projectId);
      });
    });
  } catch (error) {
    console.error("Error rendering projects:", error);
  }
}

// --- COMPONENT: Modal ---
function openModal(projectId) {
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");
  const project = translations[currentLang].projects.find((p) => p.id == projectId);
  if (!project) return;
  let modalButtons = '';
  if (project.liveUrl) {
    modalButtons += `<a href="${project.liveUrl}" target="_blank" class="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">${translations[currentLang].modalLiveButton}</a>`;
  }
  if (project.repoUrl) {
    modalButtons += `<a href="${project.repoUrl}" target="_blank" class="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">${translations[currentLang].modalRepoButton}</a>`;
  }
  if (project.articleUrl) {
    modalButtons += `<a href="${project.articleUrl}" target="_blank" class="flex-1 text-center bg-pink-700 hover:bg-pink-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">${translations[currentLang].modalArticleButton}</a>`;
  }
  // Renderização da galeria (imagem, vídeo, youtube)
  let mainGalleryItem = project.gallery[0];
  let mainGalleryHtml = '';
  if (typeof mainGalleryItem === 'string') {
    mainGalleryHtml = `<img id="modal-main-image" src="${mainGalleryItem}" alt="Imagem principal de ${project.title}" class="w-full h-auto max-h-[450px] object-contain rounded-lg mb-4 bg-black/20">`;
  } else if (mainGalleryItem.type === 'video') {
    mainGalleryHtml = `<video id="modal-main-video" src="${mainGalleryItem.src}" controls class="w-full h-auto max-h-[450px] object-contain rounded-lg mb-4 bg-black/20"></video>`;
  } else if (mainGalleryItem.type === 'youtube') {
    let ytId = mainGalleryItem.src.split('youtu.be/')[1] || mainGalleryItem.src.split('v=')[1];
    if (ytId && ytId.includes('?')) ytId = ytId.split('?')[0];
    mainGalleryHtml = `<div class="w-full max-h-[450px] aspect-video rounded-lg mb-4 bg-black/20 flex items-center justify-center"><iframe id="modal-main-youtube" src="https://www.youtube.com/embed/${ytId}" frameborder="0" allowfullscreen class="w-full h-full rounded-lg"></iframe></div>`;
  }
  // Miniaturas
  let thumbnailsHtml = project.gallery.map((item, index) => {
    if (typeof item === 'string') {
      return `<img data-gallery-index="${index}" src="${item}" alt="Miniatura ${index + 1}" class="gallery-thumbnail w-24 h-16 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-all">`;
    } else if (item.type === 'video') {
      return `<video data-gallery-index="${index}" src="${item.src}" class="gallery-thumbnail w-24 h-16 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-all"></video>`;
    } else if (item.type === 'youtube') {
      let ytId = item.src.split('youtu.be/')[1] || item.src.split('v=')[1];
      if (ytId && ytId.includes('?')) ytId = ytId.split('?')[0];
      return `<img data-gallery-index="${index}" src="https://img.youtube.com/vi/${ytId}/hqdefault.jpg" alt="YouTube" class="gallery-thumbnail w-24 h-16 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-all">`;
    }
  }).join('');
  modalContent.innerHTML = `
    <button id="modal-close-button" class="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl z-10" style="font-size:2rem;line-height:1;">&times;</button>
    <div class="mb-6">
      <div id="modal-main-media">${mainGalleryHtml}</div>
      <div class="flex gap-2 justify-center flex-wrap">
        ${thumbnailsHtml}
      </div>
    </div>
    <div class="px-2">
      <h2 class="text-3xl font-bold mb-2">${project.title}</h2>
      <div class="flex flex-wrap gap-2 mb-6">
        ${project.tags.map((tag) => `<span class="bg-gray-800 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full">${tag}</span>`).join("")}
      </div>
      <p class="text-gray-400 mb-6">${project.description}</p>
      <div class="flex gap-4">
        ${modalButtons}
      </div>
    </div>
  `;
  modal.classList.remove("opacity-0", "pointer-events-none");
  modalContent.classList.remove("scale-95");
  document.body.style.overflow = "hidden";
  // Gallery Logic
  const mainMediaDiv = document.getElementById('modal-main-media');
  const thumbnails = modalContent.querySelectorAll('.gallery-thumbnail');
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.getAttribute('data-gallery-index'));
      const item = project.gallery[idx];
      let html = '';
      if (typeof item === 'string') {
        html = `<img id=\"modal-main-image\" src=\"${item}\" alt=\"Imagem principal de ${project.title}\" class=\"w-full h-auto max-h-[450px] object-contain rounded-lg mb-4 bg-black/20\">`;
      } else if (item.type === 'video') {
        html = `<video id=\"modal-main-video\" src=\"${item.src}\" controls class=\"w-full h-auto max-h-[450px] object-contain rounded-lg mb-4 bg-black/20\"></video>`;
      } else if (item.type === 'youtube') {
        let ytId = item.src.split('youtu.be/')[1] || item.src.split('v=')[1];
        if (ytId && ytId.includes('?')) ytId = ytId.split('?')[0];
        html = `<div class=\"w-full max-h-[450px] aspect-video rounded-lg mb-4 bg-black/20 flex items-center justify-center\"><iframe id=\"modal-main-youtube\" src=\"https://www.youtube.com/embed/${ytId}\" frameborder=\"0\" allowfullscreen class=\"w-full h-full rounded-lg\"></iframe></div>`;
      }
      mainMediaDiv.innerHTML = html;
      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
  if(thumbnails.length > 0) {
    thumbnails[0].classList.add('active');
  }
  // Adiciona event listener para fechar o modal
  document.getElementById("modal-close-button").addEventListener("click", closeModal);
}
function closeModal() {
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");
  modal.classList.add("opacity-0", "pointer-events-none");
  modalContent.classList.add("scale-95");
  document.body.style.overflow = "auto";
}

// --- COMPONENT: Eventos globais e inicialização ---
function setupEventListeners() {
  document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
  document.getElementById("lang-pt").addEventListener("click", () => setLanguage("pt"));
  document.getElementById("lang-en-mobile").addEventListener("click", () => setLanguage("en"));
  document.getElementById("lang-pt-mobile").addEventListener("click", () => setLanguage("pt"));
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuButton.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
  mobileMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") mobileMenu.classList.add("hidden");
  });
  
  // Modal close button event listener
  const modalCloseButton = document.getElementById("modal-close-button");
  if (modalCloseButton) {
    modalCloseButton.addEventListener("click", closeModal);
  }
}

function setupAnimations() {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  animatedElements.forEach((el) => observer.observe(el));
}

// --- Inicialização ---
async function startApp() {
  try {
    console.log("Starting app initialization...");

    // Load all components first
    await Promise.all([
      loadComponent("header-container", "components/header.html"),
      loadComponent("footer-container", "components/footer.html"),
      loadComponent("modal-container", "components/modal.html")
    ]);

    console.log("Components loaded successfully");

    // Wait for DOM updates
    await new Promise(resolve => requestAnimationFrame(resolve));

    // Setup event listeners and animations
    setupEventListeners();
    setupAnimations();

    // First render the projects
    console.log("Initial project render");
    renderProjects();

    // Then update all language strings
    console.log("Setting initial language");
    setLanguage(currentLang);

    console.log("App started successfully");
  } catch (error) {
    console.error("Error starting app:", error);
  }
}

document.addEventListener("DOMContentLoaded", startApp);
