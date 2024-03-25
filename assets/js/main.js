'use strict';



//Fonction toggle por ativer ou désactiver la fenêtre modale de la newsletter

// Ce code ajoute un gestionnaire de clic à tous les éléments ayant la classe "show__newsletter".
// Lorsque l'un de ces éléments est cliqué, il bascule l'état de visibilité de l'élément ayant la classe "newsletter" en ajoutant ou en supprimer la classe "acive".
// Cela permet de montrer ou de cacher la newwsletter, selon son état actuel.

// const SHOW_NEWSLETTER = document.getElementByClassName("show__nenwsletter");

// Cette ligne sélectionne tous les éléments de la page HTML qui ont la classe 'show__newsletter" et les stocke dans une variable appelée SHOW_NEWSLETTER.
// Cela retourne un objet semblable à un tableau, appelée une collection HTML.


const SHOW__NEWSLETTER = document.getElementsByClassName('show__newsletter');
// console.log(SHOW__NEWSLETTER);

// for (const show of SHOW_NEWSLETTER).
// Cette ligne initialise une boucle for...of qui parcourt chaque élément de la collection
// SHOW_NEWSLETTER.
for(const show of SHOW__NEWSLETTER) {

// Cette ligne sélectionne le premier élément de la page HTML ayant la classe
// "newsletter".
// La méthode querySelector retourne uniquement le premier élément correspondant à la requêtre spécifiée.
// La méthode classList.toggle ajoute ou supprime la classe active de l'élément newsletter. 
// Si l'élément a déjà la classe "active", elle est supprimée; sinon, elle est ajoutée. 
// Cela permet de basculer l'état de visibilité de l'élément.
    show.addEventListener('click', () => {
        document.querySelector('.newsletter')
        .classList.toggle('active');
    });
}

//  Déclaration du compte à rebours 

const COUNTDOWN_ELEMENTS = {
    days: document.querySelector('.day'),
    hours: document.querySelector('.hour'),
    minutes: document.querySelector('.minute'),
    seconds: document.querySelector('.second'),
    
};
// console.log(document.querySelector('.second'));

// Fonction pour calculer le compte à rebours

function calculateCountDown(targetDate) {
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    // Si la différence est inférieure ou égal à zéro, le compte à rebours est terminé.
    if (timeDifference <= 0) {
        return {
            days : 0,
            hours : 0,
            minutes: 0,
            seconds:0,
        };
    } else {

    // Calcul des jours, heures, munites et secondes restantes
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes/ 60);
    const days = Math.floor(hours / 24);

    return {
        days,
        hours : hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
    };
}
}

// Fonction pour mettre à jour le compte à rebours affiché dans la page

function updateCountdown(countdown) {
  COUNTDOWN_ELEMENTS.days.textContent = countdown.days;
  console.log(COUNTDOWN_ELEMENTS);
  COUNTDOWN_ELEMENTS.hours.textContent = countdown.hours;
  COUNTDOWN_ELEMENTS.minutes.textContent = countdown.minutes;
  COUNTDOWN_ELEMENTS.seconds.textContent = countdown.seconds;

  // Vérification si le compte à rebours est terminé
if (countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 
    && countdown.seconds === 0) {
        // Arrêter l'intervalle du  compte à rebours
        clearInterval(COUNTDOWN_INTERVAL)
            // Cacher certains éléments de la page
    const hideContent = {
        firstH2: document.getElementsByTagName("h2")[0],
        firstParagraph: document.getElementsByTagName("p")[0],
        countDown: document.querySelector('.countDown'),
        secondCTA: document.getElementsByClassName("btn__cta")[1]
        }
        for (const contentName in hideContent) {
            if(hideContent.hasOwnProperty(contentName)) {
                const content = hideContent[contentName]
                if(content) {
                    content.style.display = "none";
                }
            }
        }
    }

}

// Date de lancement du site (remplacez les valeurs par celles de votre choix)
const LAUNCH_DATE = new Date("September 8, 2024 12:00:00:00");
// console.log(LAUNCH_DATE);
// Interval pour mettre à jour le compte à rebours toutes les secondes
const COUNTDOWN_INTERVAL  = setInterval(() => {
    const countdown = calculateCountDown(LAUNCH_DATE);
    // console.log(countdown);
    updateCountdown(countdown);
    // console.log(countdown);
    // console.log(updateCountdown(countdown));
},1000)

// Mettre à jour automatiquement l'année dans votre footer
const CURRENT_YEAR_FOOTER = document.getElementById("current-year");
const CURRENT_YEAR = new Date().getFullYear();
CURRENT_YEAR_FOOTER.textContent = CURRENT_YEAR;
