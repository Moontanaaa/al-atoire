// Liste de prénoms et noms étendue
const prenoms = [
    // Prénoms masculins
    "Liam", "Noah", "Oliver", "Elijah", "William",
    "James", "Benjamin", "Lucas", "Henry", "Alexander",
    "Mason", "Michael", "Ethan", "Daniel", "Jacob",
    "Logan", "Jackson", "Levi", "Sebastian", "Mateo",
    "Jack", "Owen", "Theodore", "Aiden", "Samuel",
    "Joseph", "John", "David", "Wyatt", "Matthew",
    "Luke", "Asher", "Carter", "Julian", "Grayson",
    "Leo", "Jayden", "Gabriel", "Isaac", "Lincoln",
    "Anthony", "Hudson", "Dylan", "Ezra", "Thomas",
    "Charles", "Christopher", "Jaxon", "Maverick", "Josiah",
    // Prénoms féminins
    "Olivia", "Emma", "Ava", "Sophia", "Isabella",
    "Charlotte", "Amelia", "Mia", "Harper", "Evelyn",
    "Abigail", "Emily", "Ella", "Elizabeth", "Camila",
    "Luna", "Sofia", "Avery", "Mila", "Aria",
    "Scarlett", "Penelope", "Layla", "Chloe", "Victoria",
    "Madison", "Eleanor", "Grace", "Nora", "Riley",
    "Zoey", "Hannah", "Hazel", "Lily", "Ellie",
    "Violet", "Lillian", "Zoe", "Stella", "Aurora",
    "Natalie", "Emilia", "Everly", "Leah", "Aubrey",
    "Willow", "Addison", "Lucy", "Audrey", "Bella"
];

const noms = [
    // Noms de famille courants
    "Smith", "Johnson", "Williams", "Brown", "Jones",
    "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
    "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris",
    "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
    "Walker", "Young", "Allen", "King", "Wright",
    "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall",
    "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
    "Gomez", "Phillips", "Evans", "Turner", "Diaz",
    "Parker", "Cruz", "Edwards", "Collins", "Reyes",
    "Stewart", "Morris", "Morales", "Murphy", "Cook",
    "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
    "Peterson", "Bailey", "Reed", "Kelly", "Howard",
    "Ramos", "Kim", "Cox", "Ward", "Richardson",
    "Watson", "Brooks", "Chavez", "Wood", "James",
    "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
    "Price", "Alvarez", "Castillo", "Sanders", "Patel",
    "Myers", "Long", "Ross", "Foster", "Jimenez"
];

// Liste des marques de voitures
const marquesVoitures = [
    "Toyota", "Volkswagen", "Ford", "Honda", "Chevrolet",
    "Nissan", "BMW", "Mercedes-Benz", "Hyundai", "Kia",
    "Audi", "Lexus", "Mazda", "Subaru", "Jeep",
    "Tesla", "Volvo", "Jaguar", "Porsche", "Ferrari",
    "Lamborghini", "Fiat", "Renault", "Peugeot", "Citroën",
    "Skoda", "Seat", "Suzuki", "Mitsubishi", "Cadillac",
    "Buick", "Chrysler", "Dodge", "GMC", "Jeep",
    "Infiniti", "Acura", "Alfa Romeo", "Aston Martin", "Bentley",
    "Bugatti", "Rolls-Royce", "Mini", "Maserati", "Pagani"
];

// Liste des animaux
const animaux = [
    "Lion", "Tigre", "Éléphant", "Girafe", "Zèbre",
    "Rhinocéros", "Hippopotame", "Kangourou", "Panda", "Gorille",
    "Chimpanzé", "Léopard", "Crocodile", "Alligator", "Baleine",
    "Dauphin", "Orque", "Phoque", "Manchot", "Pingouin",
    "Aigle", "Faucon", "Hibou", "Colibri", "Papillon",
    "Scarabée", "Fourmi", "Araignée", "Coccinelle", "Chenille",
    "Cheval", "Âne", "Mule", "Vache", "Bélier",
    "Chèvre", "Mouton", "Lapin", "Souris", "Rat",
    "Rongeur", "Singe", "Tamanoir", "Émeu", "Narval",
    "Loup", "Chacal", "Renard", "Hyène", "Loups-garous"
];

// Liste des pays
const pays = [
    "France", "Allemagne", "Espagne", "Italie", "Canada",
    "Brésil", "Chine", "Japon", "Inde", "Australie",
    "Russie", "États-Unis", "Mexique", "Nigeria", "Égypte",
    "Suisse", "Suède", "Norvège", "Pays-Bas", "Belgique",
    "Argentine", "Colombie", "Turquie", "Grèce", "Portugal",
    "Danemark", "Finlande", "Irlande", "Autriche", "Hongrie",
    "Thaïlande", "Vietnam", "Malaisie", "Singapour", "Philippines",
    "Corée du Sud", "Nouvelle-Zélande", "Israël", "Emirats Arabes Unis", "Arabie Saoudite"
];

// Liste des couleurs
const couleurs = [
    "Rouge", "Bleu", "Vert", "Jaune", "Orange",
    "Violet", "Rose", "Noir", "Blanc", "Gris",
    "Marron", "Turquoise", "Magenta", "Cyan", "Indigo",
    "Lavande", "Saumon", "Or", "Argent", "Bronze",
    "Émeraude", "Saphir", "Rubis", "Ambre", "Topaze",
    "Corail", "Bordeaux", "Olive", "Kaki", "Pêche"
];

// Liste des fruits
const fruits = [
    "Pomme", "Banane", "Orange", "Fraise", "Raisin",
    "Mangue", "Ananas", "Kiwi", "Pêche", "Cerise",
    "Prune", "Pastèque", "Melon", "Framboise", "Myrtille",
    "Citron", "Lime", "Grenade", "Papaye", "Noix de coco",
    "Abricot", "Figues", "Poire", "Goyave", "Nectarine"
];

// Fonction pour générer un élément aléatoire à partir d'une liste
function genererElement(liste) {
    return liste[Math.floor(Math.random() * liste.length)];
}

// Générateurs spécifiques
function genererNom() {
    const prenom = genererElement(prenoms);
    const nom = genererElement(noms);
    return `${prenom} ${nom}`;
}

function genererLettre() {
    const lettres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return lettres.charAt(Math.floor(Math.random() * lettres.length));
}

function genererChiffre() {
    return Math.floor(Math.random() * 10).toString();
}

function genererNombre() {
    return Math.floor(Math.random() * 10000) + 1; // Entre 1 et 10,000
}

function genererChiffreOuNombre() {
    const choix = Math.random() < 0.5 ? 'chiffre' : 'nombre';
    return choix === 'chiffre' ? genererChiffre() : genererNombre().toString();
}

function genererMarqueVoiture() {
    return genererElement(marquesVoitures);
}

function genererAnimal() {
    return genererElement(animaux);
}

function genererPays() {
    return genererElement(pays);
}

function genererCouleur() {
    return genererElement(couleurs);
}

function genererFruit() {
    return genererElement(fruits);
}

// Fonction pour ajouter des classes d'animation
function ajouterAnimation(element) {
    element.classList.add('animate');
    setTimeout(() => {
        element.classList.remove('animate');
    }, 500);
}

// Ajouter des écouteurs d'événements aux boutons
document.getElementById('generateNameBtn').addEventListener('click', () => {
    const nomComplet = genererNom();
    const display = document.getElementById('nameDisplay');
    ajouterAnimation(display);
    display.textContent = nomComplet;
});

document.getElementById('generateLetterBtn').addEventListener('click', () => {
    const lettre = genererLettre();
    const display = document.getElementById('letterDisplay');
    ajouterAnimation(display);
    display.textContent = lettre;
});

document.getElementById('generateNumberBtn').addEventListener('click', () => {
    const chiffreOuNombre = genererChiffreOuNombre();
    const display = document.getElementById('numberDisplay');
    ajouterAnimation(display);
    display.textContent = chiffreOuNombre;
});

document.getElementById('generateCarBtn').addEventListener('click', () => {
    const marque = genererMarqueVoiture();
    const display = document.getElementById('carDisplay');
    ajouterAnimation(display);
    display.textContent = marque;
});

document.getElementById('generateAnimalBtn').addEventListener('click', () => {
    const animal = genererAnimal();
    const display = document.getElementById('animalDisplay');
    ajouterAnimation(display);
    display.textContent = animal;
});

document.getElementById('generatePaysBtn').addEventListener('click', () => {
    const paysG = genererPays();
    const display = document.getElementById('paysDisplay');
    ajouterAnimation(display);
    display.textContent = paysG;
});

document.getElementById('generateCouleurBtn').addEventListener('click', () => {
    const couleur = genererCouleur();
    const display = document.getElementById('couleurDisplay');
    ajouterAnimation(display);
    display.textContent = couleur;
});

document.getElementById('generateFruitBtn').addEventListener('click', () => {
    const fruit = genererFruit();
    const display = document.getElementById('fruitDisplay');
    ajouterAnimation(display);
    display.textContent = fruit;
});

// Vous pouvez ajouter d'autres écouteurs pour les nouvelles catégories ici




