// time function
let time = document.querySelector('.time')
let second = 40;
let t;
function decompte(second) {
        t = setInterval(() => {
                time.textContent = `Time : ${second - 1} s`;
                second--;
                if (second === 0) {
                        clearInterval(t)
                        showScore()
                }
        }, 1000)
}
/*function pour debuter*/
let btnDeb = document.querySelectorAll(".btn");
let incre = document.querySelector(".incre");
let jouer = false;
let monNbAlea = "";
let nbAlea = 0;
let score = 0;
let nbQuestions = 0;
let limit = 10;
btnDeb.forEach(btn => {
        btn.addEventListener("click", () => {
                modale.classList.remove("visible")
                main.classList.remove('hidden')
                container.classList.remove("hidden")
                jouer = true;
                monNbAlea = "";
                QuestionsAlea()
                Init()
                decompte(second)
        })
})
// fonction pour remettre  a 0
function Init() {
        incre.textContent = 0;
        score = 0;
        nbQuestions = 0;
        time.textContent = second
        clearInterval(t)
}
// generer des Questions aleatoire
function QuestionsAlea() {
        if (jouer == false) {
                return;
        }
        nbAlea = 0;
        let test = true;
        while (test == true) {
                nbAlea = Math.floor(Math.random() * 18) + 1;
                if (monNbAlea.indexOf('-' + nbAlea + '-') > -1) {
                        nbAlea = Math.floor(Math.random() * 18) + 1
                }
                else {
                        test = false;
                        monNbAlea += '-' + nbAlea + '-';
                }
        }
        let chaineQustions = Questions(nbAlea);
        let tabChaine = chaineQustions.split('*')
        let i;
        document.querySelector("h3.question").innerHTML = tabChaine[0];
        for (i = 1; i <= 4; i++) {
                document.querySelector(`#rep${i}`).textContent = tabChaine[i]
        }
        bonRep = tabChaine[5]

}
// validation des options
let bonRep;
let options = document.querySelectorAll('.rep');
let modale = document.querySelector(".modale");
let scoreInner = document.querySelector('.score')
let main = document.querySelector(".main")
let container = document.querySelector(".container")
let obser = document.querySelector(".obsrv")
let emoji = document.querySelector(".emoji")
function showScore() {
        modale.classList.add('visible')
        main.classList.add("hidden")
        container.classList.add("hidden")
        scoreInner.textContent = "Score: " + score + " sur " + limit
        if (score <= 5) {
                emoji.innerText = '😢😢😢'
                obser.innerText = "Oups vous êtes Débutant"
        }
        if (score > 5 && score <= 7) {
                emoji.innerText = '😊😊😊'
                obser.innerText = "Du courage Vous perseverez"
        }
        if (score > 7) {
                emoji.innerText = '💖💖💖'
                obser.innerText = "Genial c'est trop cool"
        }
        if (score === limit) {
                emoji.innerText = '💖💖💖'
                obser.innerText = "Excellent !!! Tu as tout dechiré "
        }
        jouer = false;
        Init()
        QuestionsAlea()
}
options.forEach(function (option, index) {
        option.addEventListener('click', () => {
                if (jouer == false) {
                        return
                }
                if (index == bonRep) {
                        score++;
                }
                nbQuestions++;
                if (nbQuestions == limit) {
                        showScore()
                }
                incre.textContent = nbQuestions
                QuestionsAlea()
        })
})