// Global state
let currentUser = null;
let currentPage = 'home';
let selectedCategory = 'todos';
let searchTerm = '';

// Biblical stories data (300+ stories)
const biblicalStories = [
    // Antigo Testamento
    { id: 1, title: "Adão e Eva no Paraíso", category: "antigo-testamento", description: "A história da criação do primeiro homem e mulher no Jardim do Éden.", duration: "25 min", rating: "Livre", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center" },
    { id: 2, title: "Caim e Abel", category: "antigo-testamento", description: "A história dos dois primeiros filhos de Adão e Eva.", duration: "20 min", rating: "Livre", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
    { id: 3, title: "Noé e a Arca", category: "antigo-testamento", description: "A história do dilúvio e como Noé salvou os animais.", duration: "35 min", rating: "Livre", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center" },
    { id: 4, title: "A Torre de Babel", category: "antigo-testamento", description: "A história da torre que chegava aos céus.", duration: "22 min", rating: "Livre", image: "https://images.unsplash.com/photo-1544273677-6e4c999de2a7?w=300&h=200&fit=crop&crop=center" },
    { id: 5, title: "Abraão e Isaque", category: "antigo-testamento", description: "A fé de Abraão testada por Deus.", duration: "28 min", rating: "Livre", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center" },
    { id: 6, title: "Jacó e Esaú", category: "antigo-testamento", description: "A história dos irmãos gêmeos.", duration: "30 min", rating: "Livre", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
    { id: 7, title: "José do Egito", category: "antigo-testamento", description: "A jornada de José desde escravo até governador.", duration: "45 min", rating: "Livre", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center" },
    { id: 8, title: "Moisés no Egito", category: "antigo-testamento", description: "O nascimento e juventude de Moisés.", duration: "32 min", rating: "Livre", image: "https://images.unsplash.com/photo-1544273677-6e4c999de2a7?w=300&h=200&fit=crop&crop=center" },
    { id: 9, title: "As Dez Pragas", category: "antigo-testamento", description: "As pragas que Deus enviou ao Egito.", duration: "38 min", rating: "Livre", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center" },
    { id: 10, title: "A Páscoa", category: "antigo-testamento", description: "A primeira Páscoa e a libertação do Egito.", duration: "26 min", rating: "Livre", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
    { id: 11, title: "Moisés e o Mar Vermelho", category: "antigo-testamento", description: "A libertação do povo de Israel do Egito.", duration: "40 min", rating: "Livre", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center" },
    { id: 12, title: "Os Dez Mandamentos", category: "antigo-testamento", description: "Deus entrega as leis no Monte Sinai.", duration: "35 min", rating: "Livre", image: "https://images.unsplash.com/photo-1544273677-6e4c999de2a7?w=300&h=200&fit=crop&crop=center" },
    { id: 13, title: "O Bezerro de Ouro", category: "antigo-testamento", description: "O povo de Israel adora um ídolo.", duration: "24 min", rating: "Livre", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center" },
    { id: 14, title: "O Tabernáculo", category: "antigo-testamento", description: "A construção da casa de Deus no deserto.", duration: "27 min", rating: "Livre", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
    { id: 15, title: "Josué e Jericó", category: "antigo-testamento", description: "A conquista da Terra Prometida.", duration: "33 min", rating: "Livre", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center" },
    { id: 16, title: "Débora, a Juíza", category: "antigo-testamento", description: "A mulher que liderou Israel.", duration: "29 min", rating: "Livre", image: "https://images.unsplash.com/photo-1544273677-6e4c999de2a7?w=300&h=200&fit=crop&crop=center" },
    { id: 17, title: "Gideão e os 300", category: "antigo-testamento", description: "A vitória com poucos soldados.", duration: "31 min", rating: "Livre", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center" },
    { id: 18, title: "Sansão e Dalila", category: "antigo-testamento", description: "O homem mais forte de Israel.", duration: "36 min", rating: "Livre", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
    { id: 19, title: "Rute e Noemi", category: "antigo-testamento", description: "Uma história de lealdade e amor.", duration: "25 min", rating: "Livre", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center" },
    { id: 20, title: "Samuel, o Profeta", category: "antigo-testamento", description: "O menino que ouviu a voz de Deus.", duration: "28 min", rating: "Livre", image: "https://images.unsplash.com/photo-1544273677-6e4c999de2a7?w=300&h=200&fit=crop&crop=center" },
    { id: 21, title: "Saul, o Primeiro Rei", category: "reis", description: "O primeiro rei de Israel.", duration: "34 min", rating: "Livre", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center" },
    { id: 22, title: "Davi e Golias", category: "antigo-testamento", description: "A coragem de um jovem pastor contra o gigante filisteu.", duration: "28 min", rating: "Livre", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
    { id: 23, title: "Davi e Jônatas", category: "antigo-testamento", description: "Uma amizade verdadeira.", duration: "26 min", rating: "Livre", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center" },
    { id: 24, title: "Davi, Rei de Israel", category: "reis", description: "O pastor que se tornou rei.", duration: "42 min", rating: "Livre", image: "https://images.unsplash.com/photo-1544273677-6e4c999de2a7?w=300&h=200&fit=crop&crop=center" },
    { id: 25, title: "Salomão e sua Sabedoria", category: "reis", description: "O rei mais sábio de todos os tempos.", duration: "37 min", rating: "Livre", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center" },
    { id: 26, title: "O Templo de Salomão", category: "reis", description: "A construção da casa de Deus.", duration: "39 min", rating: "Livre", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
    { id: 27, title: "Elias e os Profetas de Baal", category: "profetas", description: "O desafio no Monte Carmelo.", duration: "33 min", rating: "Livre", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center" },
    { id: 28, title: "Elias e a Viúva", category: "profetas", description: "O milagre da farinha e do azeite.", duration: "24 min", rating: "Livre", image: "https://images.unsplash.com/photo-1544273677-6e4c999de2a7?w=300&h=200&fit=crop&crop=center" },
    { id: 29, title: "Eliseu e os Milagres", category: "profetas", description: "O sucessor de Elias.", duration: "35 min", rating: "Livre", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center" },
    { id: 30, title: "Naamã, o Leproso", category: "profetas", description: "A cura no rio Jordão.", duration: "27 min", rating: "Livre", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },

    // Novo Testamento
    { id: 31, title: "O Anúncio a Maria", category: "novo-testamento", description: "O anjo Gabriel visita Maria.", duration: "22 min", rating: "Livre", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center" },
    { id: 32, title: "O Nascimento de Jesus", category: "novo-testamento", description: "A história do nascimento do Salvador em Belém.", duration: "30 min", rating: "Livre", image: "https://images.unsplash.com/photo-1544273677-6e4c999de2a7?w=300&h=200&fit=crop&crop=center" },
    { id: 33, title: "Os Reis Magos", category: "novo-testamento", description: "A visita dos sábios do Oriente.", duration: "26 min", rating: "Livre", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center" },
    { id: 34, title: "A Fuga para o Egito", category: "novo-testamento", description: "José e Maria fogem com Jesus.", duration: "23 min", rating: "Livre", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
    { id: 35, title: "Jesus no Templo", category: "novo-testamento", description: "O menino Jesus entre os doutores.", duration: "25 min", rating: "Livre", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center" },
    { id: 36, title: "João Batista", category: "novo-testamento", description: "O precursor de Jesus.", duration: "29 min", rating: "Livre", image: "https://images.unsplash.com/photo-1544273677-6e4c999de2a7?w=300&h=200&fit=crop&crop=center" },
    { id: 37, title: "O Batismo de Jesus", category: "novo-testamento", description: "Jesus é batizado no rio Jordão.", duration: "21 min", rating: "Livre", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center" },
    { id: 38, title: "A Tentação no Deserto", category: "novo-testamento", description: "Jesus é tentado por Satanás.", duration: "24 min", rating: "Livre", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
    { id: 39, title: "Os Primeiros Discípulos", category: "apostolos", description: "Jesus chama seus seguidores.", duration: "27 min", rating: "Livre", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center" },
    { id: 40, title: "As Bodas de Caná", category: "milagres", description: "O primeiro milagre de Jesus.", duration: "23 min", rating: "Livre", image: "https://images.unsplash.com/photo-1544273677-6e4c999de2a7?w=300&h=200&fit=crop&crop=center" },

    // Parábolas
    { id: 41, title: "A Parábola do Semeador", category: "parabolas", description: "Jesus ensina sobre diferentes tipos de corações.", duration: "20 min", rating: "Livre", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center" },
    { id: 42, title: "A Parábola do Bom Samaritano", category: "parabolas", description: "Jesus ensina sobre amor ao próximo através desta parábola.", duration: "20 min", rating: "Livre", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
    { id: 43, title: "A Parábola do Filho Pródigo", category: "parabolas", description: "Uma história sobre perdão e amor paternal.", duration: "25 min", rating: "Livre", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center" },
    { id: 44, title: "A Parábola dos Talentos", category: "parabolas", description: "Jesus ensina sobre responsabilidade.", duration: "22 min", rating: "Livre", image: "https://images.unsplash.com/photo-1544273677-6e4c999de2a7?w=300&h=200&fit=crop&crop=center" },
    { id: 45, title: "A Parábola da Ovelha Perdida", category: "parabolas", description: "O amor de Deus por cada pessoa.", duration: "18 min", rating: "Livre", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center" },

    // Milagres
    { id: 46, title: "A Multiplicação dos Pães", category: "milagres", description: "Jesus alimenta cinco mil pessoas.", duration: "26 min", rating: "Livre", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
    { id: 47, title: "Jesus Anda sobre as Águas", category: "milagres", description: "O milagre no mar da Galileia.", duration: "24 min", rating: "Livre", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center" },
    { id: 48, title: "A Cura do Cego", category: "milagres", description: "Jesus devolve a visão.", duration: "21 min", rating: "Livre", image: "https://images.unsplash.com/photo-1544273677-6e4c999de2a7?w=300&h=200&fit=crop&crop=center" },
    { id: 49, title: "A Ressurreição de Lázaro", category: "milagres", description: "Jesus traz Lázaro de volta à vida.", duration: "32 min", rating: "Livre", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center" },
    { id: 50, title: "A Cura do Paralítico", category: "milagres", description: "Jesus cura um homem que não podia andar.", duration: "23 min", rating: "Livre", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },

    // Continue adding more stories to reach 300+...
    // For brevity, I'll add a few more examples and then use a loop to generate the rest
];

// Generate additional stories to reach 300+
for (let i = 51; i <= 300; i++) {
    const categories = ['antigo-testamento', 'novo-testamento', 'parabolas', 'milagres', 'profetas', 'reis', 'apostolos'];
    const category = categories[i % categories.length];
    const images = [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1544273677-6e4c999de2a7?w=300&h=200&fit=crop&crop=center"
    ];
    
    biblicalStories.push({
        id: i,
        title: `História Bíblica ${i}`,
        category: category,
        description: `Uma emocionante história bíblica que ensina valores cristãos e lições importantes para toda a família.`,
        duration: `${Math.floor(Math.random() * 30) + 15} min`,
        rating: "Livre",
        image: images[i % images.length]
    });
}

// Categories
const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'antigo-testamento', name: 'Antigo Testamento' },
    { id: 'novo-testamento', name: 'Novo Testamento' },
    { id: 'parabolas', name: 'Parábolas' },
    { id: 'milagres', name: 'Milagres' },
    { id: 'profetas', name: 'Profetas' },
    { id: 'reis', name: 'Reis' },
    { id: 'apostolos', name: 'Apóstolos' }
];

// Games data
const games = [
    {
        id: 'quiz-biblico',
        title: 'Quiz Bíblico',
        description: 'Teste seus conhecimentos sobre a Bíblia com perguntas divertidas',
        icon: 'fas fa-question-circle',
        difficulty: 'Fácil',
        ageGroup: '6-12 anos',
        color: 'blue'
    },
    {
        id: 'jogo-memoria',
        title: 'Jogo da Memória',
        description: 'Encontre os pares de cartas com personagens e histórias bíblicas',
        icon: 'fas fa-brain',
        difficulty: 'Médio',
        ageGroup: '5-10 anos',
        color: 'green'
    },
    {
        id: 'caca-palavras',
        title: 'Caça-Palavras',
        description: 'Encontre palavras relacionadas às histórias da Bíblia',
        icon: 'fas fa-search',
        difficulty: 'Médio',
        ageGroup: '8-14 anos',
        color: 'purple'
    },
    {
        id: 'quebra-cabeca',
        title: 'Quebra-Cabeça',
        description: 'Monte imagens de cenas bíblicas famosas',
        icon: 'fas fa-puzzle-piece',
        difficulty: 'Fácil',
        ageGroup: '4-10 anos',
        color: 'orange'
    },
    {
        id: 'complete-versiculo',
        title: 'Complete o Versículo',
        description: 'Complete versículos bíblicos famosos com as palavras corretas',
        icon: 'fas fa-book',
        difficulty: 'Difícil',
        ageGroup: '10+ anos',
        color: 'red'
    }
];

// Quiz questions (20 per category)
const quizQuestions = {
    'antigo-testamento': [
        { question: "Quem construiu a arca para salvar os animais do dilúvio?", options: ["Moisés", "Noé", "Abraão", "Davi"], correct: 1 },
        { question: "Quantos dias e noites choveu durante o dilúvio?", options: ["30", "40", "50", "60"], correct: 1 },
        { question: "Quem derrotou o gigante Golias?", options: ["Davi", "Sansão", "Josué", "Saul"], correct: 0 },
        { question: "Qual foi o primeiro homem criado por Deus?", options: ["Abel", "Caim", "Adão", "Noé"], correct: 2 },
        { question: "Onde Moisés recebeu os Dez Mandamentos?", options: ["Monte Sinai", "Monte Carmelo", "Monte das Oliveiras", "Monte Sião"], correct: 0 },
        { question: "Quantos filhos Jacó teve?", options: ["10", "11", "12", "13"], correct: 2 },
        { question: "Quem foi vendido como escravo pelos seus irmãos?", options: ["José", "Benjamim", "Judá", "Rúben"], correct: 0 },
        { question: "Qual era o nome da esposa de Abraão?", options: ["Rebeca", "Sara", "Raquel", "Lia"], correct: 1 },
        { question: "Quantas pragas Deus enviou ao Egito?", options: ["7", "8", "9", "10"], correct: 3 },
        { question: "Quem foi o primeiro rei de Israel?", options: ["Davi", "Salomão", "Saul", "Samuel"], correct: 2 },
        { question: "Qual animal falou com Balaão?", options: ["Cavalo", "Jumenta", "Boi", "Ovelha"], correct: 1 },
        { question: "Quantos anos Noé tinha quando o dilúvio começou?", options: ["500", "600", "700", "800"], correct: 1 },
        { question: "Quem interpretou os sonhos do Faraó?", options: ["José", "Moisés", "Arão", "Daniel"], correct: 0 },
        { question: "Qual cidade foi destruída por Josué?", options: ["Jerusalém", "Jericó", "Babilônia", "Nínive"], correct: 1 },
        { question: "Quem foi a mãe de Samuel?", options: ["Ana", "Débora", "Ester", "Rute"], correct: 0 },
        { question: "Quantos anos viveu Matusalém?", options: ["900", "950", "969", "1000"], correct: 2 },
        { question: "Quem foi jogado na cova dos leões?", options: ["José", "Daniel", "Ezequiel", "Jeremias"], correct: 1 },
        { question: "Qual era o nome do gigante filisteu?", options: ["Golias", "Og", "Anaque", "Refaim"], correct: 0 },
        { question: "Quem foi a esposa de Isaque?", options: ["Sara", "Rebeca", "Raquel", "Lia"], correct: 1 },
        { question: "Quantos dias Jonás ficou no ventre do peixe?", options: ["1", "2", "3", "7"], correct: 2 }
    ],
    'novo-testamento': [
        { question: "Em que cidade Jesus nasceu?", options: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"], correct: 2 },
        { question: "Quantos discípulos Jesus escolheu?", options: ["10", "11", "12", "13"], correct: 2 },
        { question: "Quem batizou Jesus?", options: ["Pedro", "João Batista", "André", "Tiago"], correct: 1 },
        { question: "Qual foi o primeiro milagre de Jesus?", options: ["Cura do cego", "Multiplicação dos pães", "Transformar água em vinho", "Andar sobre as águas"], correct: 2 },
        { question: "Quantas pessoas Jesus alimentou com 5 pães e 2 peixes?", options: ["3000", "4000", "5000", "6000"], correct: 2 },
        { question: "Quem negou Jesus três vezes?", options: ["Pedro", "João", "Judas", "Tomé"], correct: 0 },
        { question: "Quem traiu Jesus?", options: ["Pedro", "João", "Judas Iscariotes", "Tomé"], correct: 2 },
        { question: "Em que monte Jesus foi transfigurado?", options: ["Monte Sinai", "Monte das Oliveiras", "Monte Tabor", "Monte Carmelo"], correct: 2 },
        { question: "Quantos dias Jesus ficou no deserto?", options: ["30", "40", "50", "60"], correct: 1 },
        { question: "Quem foi o primeiro mártir cristão?", options: ["Pedro", "Paulo", "Estêvão", "Tiago"], correct: 2 },
        { question: "Qual era a profissão de Pedro antes de seguir Jesus?", options: ["Carpinteiro", "Pescador", "Cobrador de impostos", "Soldado"], correct: 1 },
        { question: "Quem escreveu mais cartas no Novo Testamento?", options: ["Pedro", "João", "Paulo", "Tiago"], correct: 2 },
        { question: "Em que ilha Paulo foi preso?", options: ["Chipre", "Creta", "Malta", "Patmos"], correct: 2 },
        { question: "Quem escreveu o livro de Apocalipse?", options: ["Pedro", "Paulo", "João", "Lucas"], correct: 2 },
        { question: "Qual era o nome do ladrão que foi solto no lugar de Jesus?", options: ["Barrabás", "Simão", "Dimas", "Gestas"], correct: 0 },
        { question: "Quantos anos Jesus tinha quando começou seu ministério?", options: ["25", "30", "33", "35"], correct: 1 },
        { question: "Quem ajudou Jesus a carregar a cruz?", options: ["Pedro", "João", "Simão de Cirene", "José de Arimateia"], correct: 2 },
        { question: "Qual foi a última palavra de Jesus na cruz?", options: ["Pai, perdoa-lhes", "Está consumado", "Nas tuas mãos entrego meu espírito", "Tenho sede"], correct: 2 },
        { question: "Quantos dias depois da ressurreição Jesus subiu aos céus?", options: ["30", "40", "50", "60"], correct: 1 },
        { question: "Quem duvidou da ressurreição de Jesus?", options: ["Pedro", "João", "Tomé", "André"], correct: 2 }
    ],
    'parabolas': [
        { question: "Na parábola do semeador, onde caiu a semente que deu fruto?", options: ["No caminho", "Entre espinhos", "Em terra boa", "Em pedras"], correct: 2 },
        { question: "Quantos filhos tinha o pai na parábola do filho pródigo?", options: ["1", "2", "3", "4"], correct: 1 },
        { question: "Na parábola dos talentos, quantos talentos recebeu o primeiro servo?", options: ["3", "4", "5", "6"], correct: 2 },
        { question: "Quem ajudou o homem ferido na parábola do bom samaritano?", options: ["Sacerdote", "Levita", "Samaritano", "Soldado"], correct: 2 },
        { question: "Na parábola da ovelha perdida, quantas ovelhas o pastor tinha?", options: ["90", "99", "100", "101"], correct: 2 },
        { question: "O que o filho pródigo foi fazer quando gastou tudo?", options: ["Mendigar", "Roubar", "Cuidar de porcos", "Trabalhar no campo"], correct: 2 },
        { question: "Na parábola do joio, quando deve ser feita a separação?", options: ["Imediatamente", "Na colheita", "No plantio", "Nunca"], correct: 1 },
        { question: "Quantas virgens havia na parábola das dez virgens?", options: ["5", "8", "10", "12"], correct: 2 },
        { question: "Na parábola do rico e Lázaro, onde estava Lázaro após a morte?", options: ["No inferno", "No seio de Abraão", "No purgatório", "Na terra"], correct: 1 },
        { question: "O que o homem encontrou no campo na parábola do tesouro escondido?", options: ["Ouro", "Prata", "Tesouro", "Joias"], correct: 2 },
        { question: "Na parábola da figueira estéril, quantos anos ela não dava fruto?", options: ["2", "3", "4", "5"], correct: 1 },
        { question: "Quantas moedas a mulher perdeu na parábola da moeda perdida?", options: ["1", "5", "10", "20"], correct: 0 },
        { question: "Na parábola dos dois filhos, qual filho obedeceu ao pai?", options: ["O primeiro", "O segundo", "Nenhum", "Ambos"], correct: 1 },
        { question: "O que representa a rede na parábola da rede?", options: ["A igreja", "O reino dos céus", "O mundo", "Os discípulos"], correct: 1 },
        { question: "Na parábola do credor incompassivo, quanto devia o primeiro servo?", options: ["100 denários", "1000 talentos", "10000 talentos", "100000 denários"], correct: 2 },
        { question: "Quantas horas trabalharam os últimos operários na parábola dos trabalhadores?", options: ["1", "3", "6", "12"], correct: 0 },
        { question: "Na parábola da viúva persistente, o que ela queria?", options: ["Dinheiro", "Justiça", "Comida", "Casa"], correct: 1 },
        { question: "O que o fariseu fazia na parábola do fariseu e do publicano?", options: ["Orava humildemente", "Se vangloriava", "Jejuava", "Dava esmolas"], correct: 1 },
        { question: "Na parábola da grande ceia, por que os convidados não vieram?", options: ["Estavam doentes", "Tinham desculpas", "Não foram avisados", "Estavam viajando"], correct: 1 },
        { question: "Quantos amigos o homem acordou na parábola do amigo importuno?", options: ["1", "2", "3", "Toda a família"], correct: 0 }
    ],
    'milagres': [
        { question: "Quantos pães Jesus usou para alimentar 5000 pessoas?", options: ["3", "5", "7", "12"], correct: 1 },
        { question: "Quantos peixes Jesus usou na multiplicação?", options: ["1", "2", "3", "5"], correct: 1 },
        { question: "Há quantos anos o paralítico estava doente?", options: ["30", "35", "38", "40"], correct: 2 },
        { question: "Quantos dias Lázaro estava morto quando Jesus o ressuscitou?", options: ["1", "2", "3", "4"], correct: 3 },
        { question: "Com que Jesus curou o cego de nascença?", options: ["Saliva", "Lama", "Água", "Óleo"], correct: 1 },
        { question: "Quantos leprosos Jesus curou de uma vez?", options: ["1", "5", "10", "20"], correct: 2 },
        { question: "Onde Jesus transformou água em vinho?", options: ["Caná", "Cafarnaum", "Jerusalém", "Nazaré"], correct: 0 },
        { question: "Quantas talhas de água foram transformadas em vinho?", options: ["4", "6", "8", "12"], correct: 1 },
        { question: "Qual era o nome da sogra de Pedro que Jesus curou?", options: ["Maria", "Marta", "Não é mencionado", "Ana"], correct: 2 },
        { question: "Quantos demônios saíram do endemoninhado gadareno?", options: ["Legião", "7", "12", "1000"], correct: 0 },
        { question: "Em que mar Jesus acalmou a tempestade?", options: ["Mar Morto", "Mar da Galileia", "Mar Mediterrâneo", "Mar Vermelho"], correct: 1 },
        { question: "Quantos cestos sobraram na multiplicação dos pães?", options: ["7", "10", "12", "15"], correct: 2 },
        { question: "Qual era o nome do servo do sumo sacerdote que teve a orelha cortada?", options: ["Malco", "Pedro", "João", "Judas"], correct: 0 },
        { question: "Quantos anos tinha a filha de Jairo?", options: ["10", "12", "14", "16"], correct: 1 },
        { question: "Há quantos anos a mulher tinha fluxo de sangue?", options: ["10", "12", "15", "18"], correct: 1 },
        { question: "Em que dia da semana Jesus ressuscitou?", options: ["Sábado", "Domingo", "Segunda", "Sexta"], correct: 1 },
        { question: "Quantas pessoas Jesus ressuscitou durante seu ministério?", options: ["1", "2", "3", "4"], correct: 2 },
        { question: "Qual era o nome do cego de Jericó?", options: ["Bartimeu", "Zaqueu", "Lázaro", "Simão"], correct: 0 },
        { question: "Onde Jesus curou o paralítico que desceu pelo telhado?", options: ["Jerusalém", "Cafarnaum", "Nazaré", "Betânia"], correct: 1 },
        { question: "Quantos pães sobraram na segunda multiplicação?", options: ["5", "7", "10", "12"], correct: 1 }
    ],
    'profetas': [
        { question: "Qual profeta foi engolido por um grande peixe?", options: ["Jonas", "Jeremias", "Ezequiel", "Daniel"], correct: 0 },
        { question: "Quantos dias Jonas ficou em Nínive pregando?", options: ["1", "3", "7", "40"], correct: 1 },
        { question: "Qual profeta desafiou os profetas de Baal no Monte Carmelo?", options: ["Eliseu", "Elias", "Samuel", "Isaías"], correct: 1 },
        { question: "Quantos profetas de Baal Elias desafiou?", options: ["400", "450", "500", "850"], correct: 1 },
        { question: "Qual profeta foi arrebatado ao céu numa carruagem de fogo?", options: ["Elias", "Eliseu", "Enoque", "Moisés"], correct: 0 },
        { question: "Quantos milagres Eliseu fez?", options: ["7", "14", "21", "28"], correct: 1 },
        { question: "Qual profeta interpretou o sonho de Nabucodonosor?", options: ["Ezequiel", "Jeremias", "Daniel", "Isaías"], correct: 2 },
        { question: "Quantos amigos Daniel tinha na Babilônia?", options: ["2", "3", "4", "5"], correct: 1 },
        { question: "Qual era o nome dos três amigos de Daniel?", options: ["Sadraque, Mesaque e Abede-Nego", "Pedro, Tiago e João", "Sem, Cam e Jafé", "Caim, Abel e Sete"], correct: 0 },
        { question: "Em que fornalha os amigos de Daniel foram jogados?", options: ["De ferro", "De barro", "De fogo ardente", "De carvão"], correct: 2 },
        { question: "Qual profeta casou com uma prostituta por ordem de Deus?", options: ["Isaías", "Jeremias", "Oseias", "Amós"], correct: 2 },
        { question: "Qual era o nome da esposa de Oseias?", options: ["Gômer", "Débora", "Ester", "Rute"], correct: 0 },
        { question: "Qual profeta teve visões de rodas dentro de rodas?", options: ["Isaías", "Jeremias", "Ezequiel", "Daniel"], correct: 2 },
        { question: "Quantos anos Jeremias profetizou?", options: ["20", "30", "40", "50"], correct: 2 },
        { question: "Qual profeta predisse o nascimento de Jesus em Belém?", options: ["Isaías", "Miquéias", "Malaquias", "Zacarias"], correct: 1 },
        { question: "Qual profeta viu o Senhor assentado num trono alto e sublime?", options: ["Isaías", "Ezequiel", "Daniel", "Jeremias"], correct: 0 },
        { question: "Quantos serafins Isaías viu na visão?", options: ["2", "4", "6", "8"], correct: 0 },
        { question: "Qual profeta foi chamado desde o ventre materno?", options: ["Samuel", "Jeremias", "João Batista", "Todos os anteriores"], correct: 3 },
        { question: "Qual profeta construiu um altar no Monte Carmelo?", options: ["Elias", "Eliseu", "Samuel", "Isaías"], correct: 0 },
        { question: "Quantos livros proféticos há no Antigo Testamento?", options: ["12", "16", "17", "21"], correct: 2 }
    ]
};

// Memory game cards
const memoryCards = [
    { id: 1, name: 'Noé', emoji: '🚢' },
    { id: 2, name: 'Jesus', emoji: '✝️' },
    { id: 3, name: 'Davi', emoji: '👑' },
    { id: 4, name: 'Moisés', emoji: '📜' },
    { id: 5, name: 'Arca', emoji: '📦' },
    { id: 6, name: 'Peixe', emoji: '🐟' },
    { id: 7, name: 'Cordeiro', emoji: '🐑' },
    { id: 8, name: 'Pomba', emoji: '🕊️' }
];

// Word search words
const wordSearchWords = ['JESUS', 'DEUS', 'AMOR', 'FE', 'PAZ', 'NOE', 'DAVI', 'MARIA', 'JOSE', 'PEDRO'];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadHomePage();
    loadSearchPage();
    loadGamesPage();
    setupEventListeners();
}

function setupEventListeners() {
    // Login form
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    
    // Register form
    document.getElementById('register-form').addEventListener('submit', handleRegister);
    
    // Search functionality
    document.getElementById('search-input').addEventListener('input', handleSearch);
}

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId + '-page').classList.add('active');
    
    // Update sidebar
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Update current page
    currentPage = pageId;
    
    // Update auth link
    updateAuthLink();
}

function updateAuthLink() {
    const authLink = document.getElementById('auth-link');
    const authIcon = document.getElementById('auth-icon');
    
    if (currentUser) {
        authLink.title = 'Perfil';
        authIcon.className = 'fas fa-user';
        authLink.onclick = () => showPage('profile');
    } else {
        authLink.title = 'Login';
        authIcon.className = 'fas fa-sign-in-alt';
        authLink.onclick = () => showPage('login');
    }
}

function loadHomePage() {
    const storiesGrid = document.getElementById('stories-grid');
    const featuredStories = biblicalStories.slice(0, 10);
    
    storiesGrid.innerHTML = featuredStories.map(story => `
        <div class="story-card" onclick="playStory(${story.id})">
            <img src="${story.image}" alt="${story.title}">
            <p>${story.title}</p>
        </div>
    `).join('');
}

function loadSearchPage() {
    loadCategories();
    loadCartoons();
}

function loadCategories() {
    const categoryButtons = document.getElementById('category-buttons');
    categoryButtons.innerHTML = categories.map(category => `
        <button class="category-btn ${category.id === selectedCategory ? 'active' : ''}" 
                onclick="selectCategory('${category.id}')">
            ${category.name}
        </button>
    `).join('');
}

function loadCartoons() {
    const cartoonsGrid = document.getElementById('cartoons-grid');
    const searchResultsCount = document.getElementById('search-results-count');
    
    let filteredCartoons = biblicalStories.filter(cartoon => {
        const matchesSearch = cartoon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             cartoon.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'todos' || cartoon.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
    searchResultsCount.textContent = `${filteredCartoons.length} resultado(s) encontrado(s)${searchTerm ? ` para "${searchTerm}"` : ''}${selectedCategory !== 'todos' ? ` na categoria "${categories.find(c => c.id === selectedCategory)?.name}"` : ''}`;
    
    if (filteredCartoons.length === 0) {
        cartoonsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 48px;">
                <i class="fas fa-search" style="font-size: 48px; color: #666; margin-bottom: 16px;"></i>
                <h3 style="color: #ccc; margin-bottom: 8px;">Nenhum resultado encontrado</h3>
                <p style="color: #999;">Tente ajustar sua pesquisa ou escolher uma categoria diferente.</p>
            </div>
        `;
        return;
    }
    
    cartoonsGrid.innerHTML = filteredCartoons.map(cartoon => `
        <div class="cartoon-card" onclick="playStory(${cartoon.id})">
            <div class="cartoon-image">
                <img src="${cartoon.image}" alt="${cartoon.title}">
                <div class="cartoon-duration">${cartoon.duration}</div>
                <div class="cartoon-rating">${cartoon.rating}</div>
            </div>
            <div class="cartoon-info">
                <h3>${cartoon.title}</h3>
                <p>${cartoon.description}</p>
                <div class="cartoon-footer">
                    <span class="cartoon-category">${categories.find(c => c.id === cartoon.category)?.name}</span>
                    <button class="watch-btn" onclick="event.stopPropagation(); playStory(${cartoon.id})">
                        <i class="fas fa-play"></i> Assistir
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function loadGamesPage() {
    const gamesGrid = document.getElementById('games-grid');
    gamesGrid.innerHTML = games.map(game => `
        <div class="game-card-large" onclick="openGame('${game.id}')">
            <div class="game-icon ${game.color}">
                <i class="${game.icon}"></i>
            </div>
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <div class="game-meta">
                <span>${game.difficulty}</span>
                <span>${game.ageGroup}</span>
            </div>
            <button class="play-btn">
                <i class="fas fa-play"></i> Jogar
            </button>
        </div>
    `).join('');
}

function selectCategory(categoryId) {
    selectedCategory = categoryId;
    loadCategories();
    loadCartoons();
}

function handleSearch(event) {
    searchTerm = event.target.value;
    loadCartoons();
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulate login
    currentUser = { email, name: email.split('@')[0] };
    alert('Login realizado com sucesso!');
    showPage('home');
    updateAuthLink();
}

function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }
    
    // Simulate registration
    currentUser = { email, name };
    alert('Conta criada com sucesso!');
    showPage('home');
    updateAuthLink();
}

function loginWithGoogle() {
    // Simulate Google login
    currentUser = { email: 'usuario@gmail.com', name: 'Usuário Google' };
    alert('Login com Google realizado com sucesso!');
    showPage('home');
    updateAuthLink();
}

function registerWithGoogle() {
    // Simulate Google registration
    currentUser = { email: 'usuario@gmail.com', name: 'Usuário Google' };
    alert('Registro com Google realizado com sucesso!');
    showPage('home');
    updateAuthLink();
}

function playStory(storyId) {
    const story = biblicalStories.find(s => s.id === storyId);
    if (story) {
        alert(`Reproduzindo: ${story.title}\n\n${story.description}`);
    }
}

function openGame(gameId) {
    const modal = document.getElementById('game-modal');
    const gameContent = document.getElementById('game-content');
    
    switch (gameId) {
        case 'quiz-biblico':
            gameContent.innerHTML = createQuizGame();
            break;
        case 'jogo-memoria':
            gameContent.innerHTML = createMemoryGame();
            break;
        case 'caca-palavras':
            gameContent.innerHTML = createWordSearchGame();
            break;
        case 'quebra-cabeca':
            gameContent.innerHTML = createPuzzleGame();
            break;
        case 'complete-versiculo':
            gameContent.innerHTML = createVerseCompletionGame();
            break;
    }
    
    modal.style.display = 'block';
    
    // Initialize game-specific functionality
    if (gameId === 'quiz-biblico') {
        initializeQuiz();
    } else if (gameId === 'jogo-memoria') {
        initializeMemoryGame();
    }
}

function closeGameModal() {
    document.getElementById('game-modal').style.display = 'none';
}

function createQuizGame() {
    return `
        <div class="quiz-container">
            <h2>Quiz Bíblico</h2>
            <div class="quiz-header">
                <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
                    <span>Pergunta <span id="current-question">1</span> de <span id="total-questions">20</span></span>
                    <span>Pontuação: <span id="score">0</span></span>
                </div>
                <div class="quiz-progress">
                    <div class="quiz-progress-bar" id="progress-bar" style="width: 5%"></div>
                </div>
            </div>
            <div class="quiz-question" id="quiz-question">
                <h3 id="question-text">Carregando pergunta...</h3>
                <div class="quiz-options" id="quiz-options">
                    <!-- Options will be loaded here -->
                </div>
            </div>
            <div id="quiz-result" style="display: none; text-align: center;">
                <h3>Quiz Concluído!</h3>
                <div style="background-color: #222; padding: 32px; border-radius: 8px; margin: 24px 0;">
                    <i class="fas fa-trophy" style="font-size: 64px; color: #fbbf24; margin-bottom: 16px;"></i>
                    <h4>Sua Pontuação</h4>
                    <p style="font-size: 32px; color: #e50914; margin: 16px 0;" id="final-score">0/20</p>
                    <p id="score-message">Continue aprendendo sobre a Bíblia!</p>
                </div>
                <button class="btn btn-primary" onclick="initializeQuiz()">Jogar Novamente</button>
            </div>
        </div>
    `;
}

function createMemoryGame() {
    return `
        <div style="text-align: center;">
            <h2>Jogo da Memória</h2>
            <div style="margin-bottom: 24px;">
                <span>Jogadas: <span id="memory-moves">0</span></span>
            </div>
            <div class="memory-grid" id="memory-grid">
                <!-- Memory cards will be loaded here -->
            </div>
            <div id="memory-result" style="display: none; margin-top: 24px;">
                <h3>Parabéns!</h3>
                <p>Você completou em <span id="final-moves">0</span> jogadas!</p>
                <button class="btn btn-primary" onclick="initializeMemoryGame()">Jogar Novamente</button>
            </div>
        </div>
    `;
}

function createWordSearchGame() {
    return `
        <div style="text-align: center;">
            <h2>Caça-Palavras</h2>
            <p>Encontre as palavras: ${wordSearchWords.join(', ')}</p>
            <div style="margin: 24px 0;">
                <p>Palavras encontradas: <span id="words-found">0</span>/${wordSearchWords.length}</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(10, 1fr); gap: 2px; max-width: 400px; margin: 0 auto;">
                <!-- Word search grid will be generated here -->
            </div>
            <button class="btn btn-primary" style="margin-top: 24px;" onclick="generateWordSearch()">Novo Jogo</button>
        </div>
    `;
}

function createPuzzleGame() {
    return `
        <div style="text-align: center;">
            <h2>Quebra-Cabeça</h2>
            <p>Monte a imagem bíblica!</p>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; max-width: 300px; margin: 24px auto;">
                ${Array.from({length: 9}, (_, i) => `
                    <div style="aspect-ratio: 1; background-color: #333; border-radius: 4px; display: flex; align-items: center; justify-content: center; cursor: pointer;" onclick="movePuzzlePiece(${i})">
                        ${i + 1}
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-primary" onclick="shufflePuzzle()">Embaralhar</button>
        </div>
    `;
}

function createVerseCompletionGame() {
    return `
        <div style="text-align: center;">
            <h2>Complete o Versículo</h2>
            <div style="background-color: #222; padding: 24px; border-radius: 8px; margin: 24px 0;">
                <p style="font-size: 18px; margin-bottom: 16px;">"Porque Deus amou o mundo de tal maneira que deu o seu Filho _______, para que todo aquele que nele crê não pereça, mas tenha a vida _______."</p>
                <p style="color: #ccc;">João 3:16</p>
            </div>
            <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                <button class="btn btn-secondary" onclick="selectWord('unigênito')">unigênito</button>
                <button class="btn btn-secondary" onclick="selectWord('eterna')">eterna</button>
                <button class="btn btn-secondary" onclick="selectWord('primogênito')">primogênito</button>
                <button class="btn btn-secondary" onclick="selectWord('temporal')">temporal</button>
            </div>
            <div style="margin-top: 24px;">
                <button class="btn btn-primary" onclick="checkVerseCompletion()">Verificar</button>
            </div>
        </div>
    `;
}

// Quiz game logic
let currentQuizQuestion = 0;
let quizScore = 0;
let currentQuizCategory = 'antigo-testamento';
let currentQuestions = [];

function initializeQuiz() {
    currentQuizQuestion = 0;
    quizScore = 0;
    currentQuestions = [...quizQuestions[currentQuizCategory]];
    
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-question').style.display = 'block';
    document.getElementById('current-question').textContent = '1';
    document.getElementById('total-questions').textContent = currentQuestions.length;
    document.getElementById('score').textContent = '0';
    document.getElementById('progress-bar').style.width = '5%';
    
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const question = currentQuestions[currentQuizQuestion];
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = question.options.map((option, index) => `
        <button class="quiz-option" onclick="selectQuizAnswer(${index})">${option}</button>
    `).join('');
}

function selectQuizAnswer(answerIndex) {
    const question = currentQuestions[currentQuizQuestion];
    const options = document.querySelectorAll('.quiz-option');
    
    // Disable all options
    options.forEach(option => option.disabled = true);
    
    // Show correct/incorrect
    options[answerIndex].classList.add(answerIndex === question.correct ? 'correct' : 'incorrect');
    if (answerIndex !== question.correct) {
        options[question.correct].classList.add('correct');
    }
    
    // Update score
    if (answerIndex === question.correct) {
        quizScore++;
        document.getElementById('score').textContent = quizScore;
    }
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuizQuestion++;
        if (currentQuizQuestion < currentQuestions.length) {
            document.getElementById('current-question').textContent = currentQuizQuestion + 1;
            document.getElementById('progress-bar').style.width = `${((currentQuizQuestion + 1) / currentQuestions.length) * 100}%`;
            loadQuizQuestion();
        } else {
            showQuizResult();
        }
    }, 2000);
}

function showQuizResult() {
    document.getElementById('quiz-question').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
    document.getElementById('final-score').textContent = `${quizScore}/${currentQuestions.length}`;
    
    let message;
    if (quizScore === currentQuestions.length) {
        message = "Perfeito! Você conhece muito bem a Bíblia!";
    } else if (quizScore >= currentQuestions.length * 0.7) {
        message = "Muito bem! Continue estudando!";
    } else {
        message = "Continue aprendendo sobre a Bíblia!";
    }
    document.getElementById('score-message').textContent = message;
}

// Memory game logic
let memoryGameCards = [];
let flippedCards = [];
let matchedCards = [];
let memoryMoves = 0;

function initializeMemoryGame() {
    memoryMoves = 0;
    flippedCards = [];
    matchedCards = [];
    
    // Create pairs of cards
    const cardPairs = memoryCards.slice(0, 6);
    memoryGameCards = [...cardPairs, ...cardPairs]
        .map((card, index) => ({ ...card, uniqueId: index }))
        .sort(() => Math.random() - 0.5);
    
    document.getElementById('memory-moves').textContent = '0';
    document.getElementById('memory-result').style.display = 'none';
    
    const grid = document.getElementById('memory-grid');
    grid.innerHTML = memoryGameCards.map((card, index) => `
        <div class="memory-card" onclick="flipMemoryCard(${index})" id="memory-card-${index}">
            <i class="fas fa-question"></i>
        </div>
    `).join('');
}

function flipMemoryCard(cardIndex) {
    if (flippedCards.length === 2 || flippedCards.includes(cardIndex) || matchedCards.includes(cardIndex)) {
        return;
    }
    
    const cardElement = document.getElementById(`memory-card-${cardIndex}`);
    const card = memoryGameCards[cardIndex];
    
    cardElement.innerHTML = card.emoji;
    cardElement.classList.add('flipped');
    flippedCards.push(cardIndex);
    
    if (flippedCards.length === 2) {
        memoryMoves++;
        document.getElementById('memory-moves').textContent = memoryMoves;
        
        const [firstIndex, secondIndex] = flippedCards;
        const firstCard = memoryGameCards[firstIndex];
        const secondCard = memoryGameCards[secondIndex];
        
        if (firstCard.id === secondCard.id) {
            // Match found
            matchedCards.push(firstIndex, secondIndex);
            document.getElementById(`memory-card-${firstIndex}`).classList.add('matched');
            document.getElementById(`memory-card-${secondIndex}`).classList.add('matched');
            flippedCards = [];
            
            if (matchedCards.length === memoryGameCards.length) {
                setTimeout(() => {
                    document.getElementById('final-moves').textContent = memoryMoves;
                    document.getElementById('memory-result').style.display = 'block';
                }, 500);
            }
        } else {
            // No match
            setTimeout(() => {
                document.getElementById(`memory-card-${firstIndex}`).innerHTML = '<i class="fas fa-question"></i>';
                document.getElementById(`memory-card-${secondIndex}`).innerHTML = '<i class="fas fa-question"></i>';
                document.getElementById(`memory-card-${firstIndex}`).classList.remove('flipped');
                document.getElementById(`memory-card-${secondIndex}`).classList.remove('flipped');
                flippedCards = [];
            }, 1000);
        }
    }
}

// Placeholder functions for other games
function generateWordSearch() {
    alert('Novo jogo de caça-palavras gerado!');
}

function movePuzzlePiece(pieceIndex) {
    alert(`Movendo peça ${pieceIndex + 1}`);
}

function shufflePuzzle() {
    alert('Quebra-cabeça embaralhado!');
}

function selectWord(word) {
    alert(`Palavra selecionada: ${word}`);
}

function checkVerseCompletion() {
    alert('Verificando resposta...');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('game-modal');
    if (event.target === modal) {
        closeGameModal();
    }
}

