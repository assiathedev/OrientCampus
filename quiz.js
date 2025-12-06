/* ==========================================
   QUIZ D'ORIENTATION - JAVASCRIPT
   ==========================================*/

// ============================================
// DONNÉES DU QUIZ
// ============================================

const quizData = [
    {
        id: 1,
        question: "Quel type d'activités préfères-tu ?",
        options: [
            { text: "Résoudre des problèmes techniques et logiques", category: "tech" },
            { text: "Aider et conseiller les autres", category: "social" },
            { text: "Créer et innover artistiquement", category: "art" },
            { text: "Analyser des données et des chiffres", category: "science" }
        ]
    },
    {
        id: 2,
        question: "Dans quel environnement te sens-tu le plus à l'aise ?",
        options: [
            { text: "Laboratoire ou bureau technique", category: "science" },
            { text: "Contact direct avec les gens", category: "social" },
            { text: "Atelier créatif ou studio", category: "art" },
            { text: "Environnement structuré avec des règles claires", category: "tech" }
        ]
    },
    {
        id: 3,
        question: "Quelle matière scolaire apprécies-tu le plus ?",
        options: [
            { text: "Mathématiques et Informatique", category: "tech" },
            { text: "Sciences Naturelles et Physique", category: "science" },
            { text: "Langues et Sciences Humaines", category: "social" },
            { text: "Arts et Design", category: "art" }
        ]
    },
    {
        id: 4,
        question: "Comment préfères-tu travailler ?",
        options: [
            { text: "En équipe avec beaucoup d'interactions", category: "social" },
            { text: "De manière autonome sur des projets créatifs", category: "art" },
            { text: "En équipe sur des projets techniques", category: "tech" },
            { text: "De façon méthodique et analytique", category: "science" }
        ]
    },
    {
        id: 5,
        question: "Qu'est-ce qui te motive le plus dans un métier ?",
        options: [
            { text: "Innover et créer quelque chose de nouveau", category: "tech" },
            { text: "Aider les autres et avoir un impact social", category: "social" },
            { text: "Exprimer ma créativité", category: "art" },
            { text: "Découvrir et comprendre comment les choses fonctionnent", category: "science" }
        ]
    },
    {
        id: 6,
        question: "Quel type de projet t'intéresserait le plus ?",
        options: [
            { text: "Développer une application mobile", category: "tech" },
            { text: "Mener une recherche scientifique", category: "science" },
            { text: "Organiser un événement communautaire", category: "social" },
            { text: "Concevoir une campagne publicitaire", category: "art" }
        ]
    },
    {
        id: 7,
        question: "Quelles sont tes compétences naturelles ?",
        options: [
            { text: "Logique et résolution de problèmes", category: "tech" },
            { text: "Communication et empathie", category: "social" },
            { text: "Imagination et sens artistique", category: "art" },
            { text: "Observation et analyse critique", category: "science" }
        ]
    },
    {
        id: 8,
        question: "Dans 10 ans, tu te vois plutôt...",
        options: [
            { text: "Ingénieur ou développeur dans une entreprise tech", category: "tech" },
            { text: "Chercheur ou scientifique", category: "science" },
            { text: "Travailleur social ou enseignant", category: "social" },
            { text: "Designer ou artiste professionnel", category: "art" }
        ]
    },
    {
        id: 9,
        question: "Quel est ton style d'apprentissage ?",
        options: [
            { text: "Pratique et expérimental", category: "tech" },
            { text: "Théorique et conceptuel", category: "science" },
            { text: "Interactif et collaboratif", category: "social" },
            { text: "Visuel et créatif", category: "art" }
        ]
    },
    {
        id: 10,
        question: "Qu'est-ce qui te stresse le moins ?",
        options: [
            { text: "Les problèmes techniques complexes", category: "tech" },
            { text: "Les situations sociales et relationnelles", category: "social" },
            { text: "Les projets créatifs sans cadre strict", category: "art" },
            { text: "Les analyses et recherches approfondies", category: "science" }
        ]
    }
];

// Profils et recommandations
const profiles = {
    tech: {
        icon: "💻",
        title: "Profil Technologique",
        description: "Tu as un esprit logique et analytique. Tu aimes résoudre des problèmes techniques et créer des solutions innovantes.",
        traits: ["Logique", "Innovant", "Analytique", "Méthodique"],
        fields: [
            { name: "Génie Informatique", icon: "💻", match: "95%" },
            { name: "Génie Électrique", icon: "⚡", match: "90%" },
            { name: "Télécommunications", icon: "📡", match: "85%" },
            { name: "Cybersécurité", icon: "🔒", match: "88%" }
        ]
    },
    science: {
        icon: "🔬",
        title: "Profil Scientifique",
        description: "Tu es curieux et méthodique. Tu aimes comprendre comment les choses fonctionnent et mener des recherches approfondies.",
        traits: ["Curieux", "Méthodique", "Rigoureux", "Observateur"],
        fields: [
            { name: "Physique-Chimie", icon: "⚗️", match: "95%" },
            { name: "Biologie", icon: "🧬", match: "92%" },
            { name: "Mathématiques", icon: "📐", match: "90%" },
            { name: "Géologie", icon: "🌍", match: "85%" }
        ]
    },
    social: {
        icon: "🤝",
        title: "Profil Social",
        description: "Tu es empathique et communicatif. Tu aimes aider les autres et travailler en équipe pour un impact positif.",
        traits: ["Empathique", "Communicatif", "Altruiste", "Leader"],
        fields: [
            { name: "Psychologie", icon: "🧠", match: "95%" },
            { name: "Travail Social", icon: "❤️", match: "92%" },
            { name: "Enseignement", icon: "👨‍🏫", match: "90%" },
            { name: "Sciences Politiques", icon: "🏛️", match: "85%" }
        ]
    },
    art: {
        icon: "🎨",
        title: "Profil Créatif",
        description: "Tu as une imagination débordante et un sens artistique développé. Tu aimes créer et t'exprimer à travers l'art.",
        traits: ["Créatif", "Imaginatif", "Original", "Expressif"],
        fields: [
            { name: "Design Graphique", icon: "🎨", match: "95%" },
            { name: "Architecture", icon: "🏗️", match: "90%" },
            { name: "Communication", icon: "📢", match: "88%" },
            { name: "Arts Visuels", icon: "📸", match: "92%" }
        ]
    }
};

// ============================================
// VARIABLES GLOBALES
// ============================================

let currentQuestionIndex = 0;
let userAnswers = [];
let scores = {
    tech: 0,
    science: 0,
    social: 0,
    art: 0
};

// ============================================
// FONCTIONS PRINCIPALES
// ============================================

function startQuiz() {
    // Cache l'écran d'accueil
    document.getElementById('welcome-screen').classList.remove('active');
    
    // Affiche l'écran du quiz
    document.getElementById('quiz-screen').classList.add('active');
    
    // Réinitialise les variables
    currentQuestionIndex = 0;
    userAnswers = [];
    scores = { tech: 0, science: 0, social: 0, art: 0 };
    
    // Affiche la première question
    showQuestion();
}

function showQuestion() {
    const question = quizData[currentQuestionIndex];
    const totalQuestions = quizData.length;
    
    // Met à jour la barre de progression
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    
    // Affiche la question
    document.getElementById('questionTitle').textContent = question.question;
    
    // Affiche les options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.onclick = () => selectOption(index);
        
        // Vérifie si cette option a déjà été sélectionnée
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add('selected');
        }
        
        optionsContainer.appendChild(button);
    });
    
    // Gère les boutons de navigation
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').disabled = userAnswers[currentQuestionIndex] === undefined;
}

function selectOption(optionIndex) {
    // Enregistre la réponse
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Met à jour le score
    const question = quizData[currentQuestionIndex];
    const selectedOption = question.options[optionIndex];
    
    // Met à jour visuellement
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        if (index === optionIndex) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
    
    // Active le bouton Suivant
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        // Quiz terminé, affiche les résultats
        calculateResults();
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function calculateResults() {
    // Réinitialise les scores
    scores = { tech: 0, science: 0, social: 0, art: 0 };
    
    // Calcule les scores basés sur les réponses
    userAnswers.forEach((answerIndex, questionIndex) => {
        const question = quizData[questionIndex];
        const answer = question.options[answerIndex];
        scores[answer.category]++;
    });
}

function showResults() {
    // Cache l'écran du quiz
    document.getElementById('quiz-screen').classList.remove('active');
    
    // Affiche l'écran des résultats
    document.getElementById('result-screen').classList.add('active');
    
    // Trouve le profil dominant
    let maxScore = 0;
    let dominantProfile = 'tech';
    
    for (let category in scores) {
        if (scores[category] > maxScore) {
            maxScore = scores[category];
            dominantProfile = category;
        }
    }
    
    const profile = profiles[dominantProfile];
    
    // Affiche l'icône du résultat
    document.getElementById('resultIcon').textContent = profile.icon;
    
    // Affiche le profil
    const profileCard = document.getElementById('profileCard');
    profileCard.innerHTML = `
        <div class="profile-type">${profile.title}</div>
        <div class="profile-description">${profile.description}</div>
        <div class="profile-traits">
            ${profile.traits.map(trait => `<span class="trait-badge">${trait}</span>`).join('')}
        </div>
    `;
    
    // Affiche les filières recommandées
    const recommendedFields = document.getElementById('recommendedFields');
    recommendedFields.innerHTML = `
        <h3 class="fields-title">📚 Filières Recommandées Pour Toi</h3>
        <div class="fields-grid">
            ${profile.fields.map(field => `
                <div class="field-card">
                    <div class="field-icon">${field.icon}</div>
                    <div class="field-name">${field.name}</div>
                    <div class="field-match">Match: ${field.match}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function restartQuiz() {
    // Cache l'écran des résultats
    document.getElementById('result-screen').classList.remove('active');
    
    // Affiche l'écran d'accueil
    document.getElementById('welcome-screen').classList.add('active');
    
    // Réinitialise tout
    currentQuestionIndex = 0;
    userAnswers = [];
    scores = { tech: 0, science: 0, social: 0, art: 0 };
}

// ============================================
// ÉVÉNEMENTS CLAVIER
// ============================================

document.addEventListener('keydown', function(e) {
    const quizScreen = document.getElementById('quiz-screen');
    
    if (quizScreen.classList.contains('active')) {
        // Flèche droite = Suivant
        if (e.key === 'ArrowRight' && !document.getElementById('nextBtn').disabled) {
            nextQuestion();
        }
        
        // Flèche gauche = Précédent
        if (e.key === 'ArrowLeft' && !document.getElementById('prevBtn').disabled) {
            previousQuestion();
        }
        
        // Touches 1-4 = Sélectionner une option
        if (e.key >= '1' && e.key <= '4') {
            const optionIndex = parseInt(e.key) - 1;
            const buttons = document.querySelectorAll('.option-btn');
            if (buttons[optionIndex]) {
                selectOption(optionIndex);
            }
        }
    }
});

// ============================================
// ANIMATIONS AU CHARGEMENT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('%c🎯 Quiz d\'Orientation - OrientCampus', 'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%cDéveloppé par Triple A Team', 'color: #6b7280; font-size: 14px;');
    console.log('%cBonne chance ! 🍀', 'color: #10b981; font-size: 12px;');
});