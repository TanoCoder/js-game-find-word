//init
const WORD = ['bleu', 'super', 'autre', 'bizarre', 'difficile', 'drôle', 'étrange', 'facile', 'grave', 'impossible', 'jeune', 'juste', 'libre', 'malade', 'même', 'pauvre', 'possible', 'propre', 'rouge', 'sale', 'simple', 'tranquille', 'triste', 'vide', 'bonne', 'toute', 'doux', 'français', 'gros', 'heureux', 'mauvais', 'sérieux', 'vieux', 'ancien', 'beau', 'blanc', 'certain', 'chaud', 'cher', 'clair', 'content', 'dernier', 'désolé', 'différent', 'droit', 'entier', 'fort', 'froid', 'gentil', 'grand', 'haut', 'humain', 'important', 'joli', 'léger', 'long', 'meilleur', 'mort', 'noir', 'nouveau', 'pareil', 'petit', 'plein', 'premier', 'prêt', 'prochain', 'quoi', 'seul', 'tout', 'vert', 'vivant', 'aide', 'chef', 'enfant', 'garde', 'gauche', 'geste', 'gosse', 'livre', 'merci', 'mort', 'ombre', 'part', 'poche', 'professeur', 'tour', 'fois', 'madame', 'paix', 'voix', 'affaire', 'année', 'arme', 'armée', 'attention', 'balle', 'boîte', 'bouche', 'carte', 'cause', 'chambre', 'chance', 'chose', 'classe', 'confiance', 'couleur', 'cour', 'cuisine', 'dame', 'dent', 'droite', 'école', 'église', 'envie', 'épaule', 'époque', 'équipe', 'erreur', 'espèce', 'face', 'façon', 'faim', 'famille', 'faute', 'femme', 'fenêtre', 'fête', 'fille', 'fleur', 'force', 'forme', 'guerre', 'gueule', 'habitude', 'heure', 'histoire', 'idée', 'image', 'impression', 'jambe', 'joie', 'journée', 'langue', 'lettre', 'lèvre', 'ligne', 'lumière', 'main', 'maison', 'maman', 'manière', 'marche', 'merde', 'mère', 'minute', 'musique', 'nuit', 'odeur', 'oreille', 'parole', 'partie', 'peau', 'peine', 'pensée', 'personne', 'peur', 'photo', 'pièce', 'pierre', 'place', 'police', 'porte', 'présence', 'prison', 'question', 'raison', 'réponse', 'robe', 'route', 'salle', 'scène', 'seconde', 'sécurité', 'semaine', 'situation', 'soeur', 'soirée', 'sorte', 'suite', 'table', 'terre', 'tête', 'vérité', 'ville', 'voiture', 'avis', 'bois', 'bras', 'choix', 'corps', 'cours', 'gars', 'mois', 'pays', 'prix', 'propos', 'sens', 'temps', 'travers', 'vieux', 'accord', 'agent', 'amour', 'appel', 'arbre', 'argent', 'avenir', 'avion', 'bateau', 'bébé', 'besoin', 'bonheur', 'bonjour', 'bord', 'boulot', 'bout', 'bruit', 'bureau', 'café', 'camp', 'capitaine', 'chat', 'chemin', 'chéri', 'cheval', 'cheveu', 'chien', 'ciel', 'client', 'cœur', 'coin', 'colonel', 'compte', 'copain', 'côté', 'coup', 'courant', 'début', 'départ', 'dieu', 'docteur', 'doigt', 'dollar', 'doute', 'droit', 'effet', 'endroit', 'ennemi', 'escalier', 'esprit', 'état', 'être', 'exemple', 'fait', 'film', 'flic', 'fond', 'français', 'frère', 'front', 'garçon', 'général', 'genre', 'goût', 'gouvernement', 'grand', 'groupe', 'haut', 'homme', 'honneur', 'hôtel', 'instant', 'intérêt', 'intérieur', 'jardin', 'jour', 'journal', 'lieu', 'long', 'maître', 'mari', 'mariage', 'matin', 'médecin', 'mètre', 'milieu', 'million', 'moment', 'monde', 'monsieur', 'mouvement', 'moyen', 'noir', 'nouveau', 'numéro', 'oeil', 'oiseau', 'oncle', 'ordre', 'papa', 'papier', 'parent', 'passage', 'passé', 'patron', 'père', 'petit', 'peuple', 'pied', 'plaisir', 'plan', 'point', 'pouvoir', 'premier', 'présent', 'président', 'prince', 'problème', 'quartier', 'rapport', 'regard', 'reste', 'retard', 'retour', 'rêve', 'revoir', 'salut', 'sang', 'secret', 'seigneur', 'sentiment', 'service', 'seul', 'siècle', 'signe', 'silence', 'soir', 'soldat', 'soleil', 'sourire', 'souvenir', 'sujet', 'téléphone', 'tout', 'train', 'travail', 'trou', 'truc', 'type', 'vent', 'ventre', 'verre', 'village', 'visage', 'voyage', 'fils', 'gens', 'abandonner', 'accepter', 'accompagner', 'acheter', 'adorer', 'agir', 'aider', 'aimer', 'ajouter', 'aller', 'amener', 'amuser', 'annoncer', 'apercevoir', 'apparaître', 'appeler', 'apporter', 'apprendre', 'approcher', 'arranger', 'arrêter', 'arriver', 'asseoir', 'assurer', 'attaquer', 'atteindre', 'attendre', 'avancer', 'avoir', 'baisser', 'battre', 'boire', 'bouger', 'brûler', 'cacher', 'calmer', 'casser', 'cesser', 'changer', 'chanter', 'charger', 'chercher', 'choisir', 'commencer', 'comprendre', 'compter', 'conduire', 'connaître', 'continuer', 'coucher', 'couper', 'courir', 'couvrir', 'craindre', 'crier', 'croire', 'danser', 'décider', 'découvrir', 'dégager', 'demander', 'descendre', 'désoler', 'détester', 'détruire', 'devenir', 'deviner', 'devoir', 'dire', 'disparaître', 'donner', 'dormir', 'échapper', 'écouter', 'écrire', 'éloigner', 'embrasser', 'emmener', 'empêcher', 'emporter', 'enlever', 'entendre', 'entrer', 'envoyer', 'espérer', 'essayer', 'être', 'éviter', 'excuser', 'exister', 'expliquer', 'faire', 'falloir', 'fermer', 'filer', 'finir', 'foutre', 'frapper', 'gagner', 'garder', 'glisser', 'habiter', 'ignorer', 'imaginer', 'importer', 'inquiéter', 'installer', 'intéresser', 'inviter', 'jeter', 'jouer', 'jurer', 'lâcher', 'laisser', 'lancer', 'lever', 'lire', 'maintenir', 'manger', 'manquer', 'marcher', 'marier', 'mener', 'mentir', 'mettre', 'monter', 'montrer', 'mourir', 'naître', 'obliger', 'occuper', 'offrir', 'oser', 'oublier', 'ouvrir', 'paraître', 'parler', 'partir', 'passer', 'payer', 'penser', 'perdre', 'permettre', 'plaire', 'pleurer', 'porter', 'poser', 'pousser', 'pouvoir', 'préférer', 'prendre', 'préparer', 'présenter', 'prévenir', 'prier', 'promettre', 'proposer', 'protéger', 'quitter', 'raconter', 'ramener', 'rappeler', 'recevoir', 'reconnaître', 'réfléchir', 'refuser', 'regarder', 'rejoindre', 'remarquer', 'remettre', 'remonter', 'rencontrer', 'rendre', 'rentrer', 'répéter', 'répondre', 'reposer', 'reprendre', 'ressembler', 'rester', 'retenir', 'retirer', 'retourner', 'retrouver', 'réussir', 'réveiller', 'revenir', 'rêver', 'revoir', 'rire', 'risquer', 'rouler', 'sauter', 'sauver', 'savoir', 'sembler', 'sentir', 'séparer', 'serrer', 'servir', 'sortir', 'souffrir', 'sourire', 'souvenir', 'suffire', 'suivre', 'taire', 'tendre', 'tenir', 'tenter', 'terminer', 'tirer', 'tomber', 'toucher', 'tourner', 'traîner', 'traiter', 'travailler', 'traverser', 'tromper', 'trouver', 'tuer', 'utiliser', 'valoir', 'vendre', 'venir', 'vivre', 'voir', 'voler', 'vouloir'];

const w4 = [];
const w5 = [];
const w6 = [];
const w7 = [];
const w8 = [];
const w9 = [];
const w10 = [];
const w11 = [];
const w12 = [];

let isCreationDone = false;

let level = 1;
let nbGuessed = 0;
let nbTry = 0;
const nbMaxTry = 9;
let randomNumber = 0;
let wordToGuess = "";

let btn = [];
let span = [];  
let letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let htmlLevel = document.getElementById("level");
htmlLevel.style.display = "none";

let htmlGuess = document.getElementById("guess");
htmlGuess.style.display = "none";

let htmlButtonWraper = document.getElementById("button_wraper");
htmlButtonWraper.style.display = "none";

let htmlTry = document.getElementById("try");
htmlTry.style.display = "none";

// init canvas
// ___________
let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
ctx.height = 430;
ctx.width = 700;
let midleCanvasW = ctx.width / 2;

// event listenner
let btnStart = document.getElementById("start")
btnStart.disabled = false; 
btnStart.style.color = "brown";
btnStart.addEventListener("click", start);

//face
let face = new Image();

function drawBody(){
  // body
  let body = new Image();
  body.src = "assets/img/body-02.png";
  body.onload = function () {      
    ctx.drawImage(body, midleCanvasW - 60, ctx.height - 198, 150, 200);  
    drawFace("assets/img/happy-01.png",40,325);
  }
}

function drawBodyDone(){
  let body = new Image();
  body.src = "assets/img/body-done.png";
  body.onload = function () {      
  ctx.drawImage(body, midleCanvasW - 60, ctx.height - 198, 150, 200);  
  drawFace("assets/img/body-done.png",40,325);
  }
}

drawBody();

function drawFace(source, minusW, minusH){
  face.src = source;
  face.onload = function () {      
    ctx.drawImage(face, midleCanvasW - minusW, ctx.height - minusH, 100, 140);    
  }
}

function drawWood(p_part = 0){
  //alert("p_part: " +p_part);
  if(p_part == 1){
    ctx.beginPath();
    ctx.moveTo(100,400);
    ctx.lineTo(50,400);
    ctx.lineWidth = 15;
    ctx.strokeStyle = "black";
    ctx.stroke();
  }
  if(p_part == 2){
    ctx.beginPath();
    ctx.moveTo(100,50);
    ctx.lineTo(100,400);
    ctx.lineWidth = 15;
    ctx.strokeStyle = "black";
    ctx.stroke();
  }
  if(p_part == 3){
    ctx.beginPath();
    ctx.moveTo(150,400);
    ctx.lineTo(50,400);
    ctx.lineWidth = 15;
    ctx.strokeStyle = "black";
    ctx.stroke();
  } 

  if(p_part == 4){
    ctx.beginPath();
    ctx.moveTo(100,50);
    ctx.lineTo(270,100);
    ctx.lineWidth = 15;
    ctx.strokeStyle = "black";
    ctx.stroke();
  } 

  if(p_part == 5){
    ctx.beginPath();
    ctx.moveTo(270,100);
    ctx.lineTo(270,150);
    ctx.lineWidth = 15;
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  if(p_part == 6){
    ctx.beginPath();
    ctx.moveTo(270,150);
    ctx.lineTo(270,200);
    ctx.lineWidth = 15;
    ctx.strokeStyle = "brown";
    ctx.stroke();
  }

  if(p_part == 7){
    ctx.beginPath();
    ctx.moveTo(270,200);
    ctx.lineTo(270,250);
    ctx.lineWidth = 15;
    ctx.strokeStyle = "orange";
    ctx.stroke();
  }

  if(p_part == 8){
    ctx.beginPath();
    ctx.moveTo(270,250);
    ctx.lineTo(270,300);
    ctx.lineWidth = 15;
    ctx.strokeStyle = "red";
    ctx.stroke();
  }

}

// data init
WORD.forEach(w =>{
  //console.log(`${w} len:${w.length}`);
  switch (w.length){
    case 1:
      //alert("1");
      break;
    case 2:
      //alert("2");
      break;
    case 3:
      //alert("3");
      break;
    case 4:
      w4.push(w);      
      break;
    case 5:
      w5.push(w);
      break;
    case 6:
      w6.push(w);
      break;
    case 7:
      w7.push(w);
      break;
    case 8:
      w8.push(w);
      break;
    case 9:
      w9.push(w);
      break;
    case 10:
      w10.push(w);      
      break;
    case 11:
      w11.push(w);
      break;
    case 12:
      w12.push(w);
      break;

    default:
      //alert(w.length);  
  }
});

// creation span and button letter
// --------------------------------
//console.log(htmlGuess);
// number of char to guess is based on current level

for(let i=1;i <= 12;i++){
  //console.log("span " +i);
  span[i-1] = document.createElement("SPAN");
  let t = document.createTextNode("_");
  span[i-1].setAttribute("id",i);    
  span[i-1].style.display = "none";
  span[i-1].appendChild(t);
  
  htmlGuess.appendChild(span[i-1]);
}

  //26 letters of the alphabet
htmlButtonWraper.style.display = "none";

for(let i = 0; i < 26;i++){
  btn[i] = document.createElement("BUTTON");
  btn[i].setAttribute("id",(i+1));
  btn[i].setAttribute("class","all-btn-letter");
  btn[i].innerText = letter[i];
  btn[i].style.display = "none";  
  htmlButtonWraper.appendChild(btn[i]);
}

// create one time event listener for all button letter
btn.forEach(b => {   
  b.addEventListener("click",() => {
    
    nbTry = nbTry +1;      
    let indiceLetter = 0;
  
    // show nb try
    htmlTry.style.display = "block";
    htmlTry.innerText = `TRY ${nbTry} / ${nbMaxTry}`;  
    // if the letter clicked is in the wordToGuess
    // then diplay the span that has all the same letter.
    //alert(letter[i].toLowerCase());
    //ES6
        
    indiceLetter = Number(b.getAttribute("id") - 1);
    //alert(indiceLetter);
    //alert (letter[Number(b.getAttribute("id"))]);
    let position = 1;   
    let isBtnLetterInWordToGuess = false;   
    
    [...wordToGuess].forEach(wtg =>{          
      //check accent
      // -----------
      // A
      if(letter[indiceLetter] == "A"){
        if(wtg.toLowerCase() == "à"){
          //alert("ok =");          
          span[position -1].innerText = "à"; 
          nbGuessed++;
          isBtnLetterInWordToGuess = true; 
         }                 
      }
      // E
      if(letter[indiceLetter] == "E"){
        if(wtg.toLowerCase() == "é"){
         //alert("ok =");          
         span[position -1].innerText = "é"; 
         nbGuessed++;
         isBtnLetterInWordToGuess = true; 
        }
        if(wtg.toLowerCase() == "è"){
          //alert("ok =");          
          span[position -1].innerText = "è"; 
          nbGuessed++;
          isBtnLetterInWordToGuess = true; 
         }
         if(wtg.toLowerCase() == "ê"){
          //alert("ok =");          
          span[position -1].innerText = "ê"; 
          nbGuessed++;
          isBtnLetterInWordToGuess = true; 
         }
         if(wtg.toLowerCase() == "ë"){
          //alert("ok =");          
          span[position -1].innerText = "ë"; 
          nbGuessed++;
          isBtnLetterInWordToGuess = true; 
         }
      } // end if(letter[indiceLetter] == "E")
      
      //I
      if(letter[indiceLetter] == "I"){
        if(wtg.toLowerCase() == "î"){
          //alert("ok =");          
          span[position -1].innerText = "î"; 
          nbGuessed++;
          isBtnLetterInWordToGuess = true; 
         }
         if(wtg.toLowerCase() == "ï"){
          //alert("ok =");          
          span[position -1].innerText = "ï"; 
          nbGuessed++;
          isBtnLetterInWordToGuess = true; 
         }        
      }

      // O
      if(letter[indiceLetter] == "O"){
        if(wtg.toLowerCase() == "ô"){
          //alert("ok =");          
          span[position -1].innerText = "ô"; 
          nbGuessed++;
          isBtnLetterInWordToGuess = true; 
         }                 
      }

      // U
      if(letter[indiceLetter] == "U"){
        if(wtg.toLowerCase() == "ù"){
          //alert("ok =");          
          span[position -1].innerText = "ù"; 
          nbGuessed++;
          isBtnLetterInWordToGuess = true; 
         }                 
      }

      if (letter[indiceLetter].toLowerCase() == wtg.toLowerCase()){ 
         //alert("ok =");          
         span[position -1].innerText = letter[indiceLetter].toLowerCase(); 
         nbGuessed++;
         isBtnLetterInWordToGuess = true;
       }
       position++;
    });

    if(isBtnLetterInWordToGuess){
      nbTry--;
      htmlTry.innerText = `TRY ${nbTry} / ${nbMaxTry}`;  
    }
    
    btn[indiceLetter].style.color = "grey";
    btn[indiceLetter].disabled = true;

    if(!isBtnLetterInWordToGuess){
      //draw next part of wood      
      drawWood(nbTry);
    }
 
    if (nbGuessed == wordToGuess.length){      
      level++;

      if(level == 10){
        level = 1;
          nbTry = 0;
          nbGuessed = 0;
                    
          btn.forEach(b =>{            
            b.disabled = true;
            b.style.color = "grey";
          });
          
          btnStart.style.visibility = "visible";
          btnStart.disabled = false;
          btnStart.style.color = "brown";   
          
          ctx.font = "30px Comic Sans MS";
          ctx.fillStyle = "red";
          ctx.textAlign = "center";
          ctx.fillText("NO MORE LEVEL, WELL DONE!", canvas.width / 2, 50);

          alert("NO MORE LEVEL, WELL DONE! -- RESTART ;-) --");
          
      } else {
        nbTry = 0;
      nbGuessed = 0;
            
      drawFace("assets/img/happy-03.jpg",38,325);
      
      ctx.font = "30px Comic Sans MS";
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText("WELL DONE, GO TO THE NEXT LEVEL", canvas.width / 2, 50);

      alert("WELL DONE, YOU CAN GO TO THE NEXT LEVEL");

      htmlTry.innerText = `TRY ${nbTry} / ${nbMaxTry}`;  
      wordToGuess = resetRandom();
      resetSpan(wordToGuess);

      btn.forEach(b =>{    
        b.style.display = "flex";  
        b.style.visibility = "visible";
        b.disabled = false;
        b.style.color = "blue";
      });

      setTimeout(() =>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBody();
      }, 1500);

      htmlLevel.innerText = `LEVEL ${level}`;
      }
      
    } else {
      drawFace("assets/img/little-bg-white.png",70,325);
      drawFace("assets/img/little-bg-white.png",40,325);
      drawFace("assets/img/little-bg-white.png",30,325);
      switch(nbTry){
        case 0:
          drawFace("assets/img/happy-02.jpg",40,325);          
          break;

        case 1:
          if(isBtnLetterInWordToGuess){            
            drawFace("assets/img/happy-02.jpg",40,325);
          } else {            
            drawFace("assets/img/middle-01.jpg",38,325);                 
          }          
          break;
  
        case 2:
          if(isBtnLetterInWordToGuess){
            drawFace("assets/img/happy-01.png",40,325);
          } else {
            drawFace("assets/img/middle-02.jpg",40,325);  
          }
          break;
  
        case 3:
          if(isBtnLetterInWordToGuess){
            drawFace("assets/img/happy-01.png",40,325);
          } else {            
            drawFace("assets/img/middle-01.jpg",38,325);  
          }
          break;
  
        case 4:
          if(isBtnLetterInWordToGuess){
            drawFace("assets/img/happy-02.jpg",40,325);
          } else {
            drawFace("assets/img/middle-02.jpg",40,325);  
          }
          break;
  
        case 5:
          if(isBtnLetterInWordToGuess){            
            drawFace("assets/img/middle-01.jpg",38,325);  
          } else {
            drawFace("assets/img/panic-01.jpg",40,325);  
          }
          break;
  
        case 6:
          if(isBtnLetterInWordToGuess){
            drawFace("assets/img/panic-02.jpg",40,325);
          } else {
            drawFace("assets/img/hungry-01.jpg",40,325);  
          }
          break;
        
        case 7:
          if(isBtnLetterInWordToGuess){
            drawFace("assets/img/panic-02.jpg",40,325);
          } else {
            drawFace("assets/img/panic-03.jpg",40,325);  
          }
          break;
        
        case 8:
          if(isBtnLetterInWordToGuess){
            drawFace("assets/img/panic-01.jpg",40,325);
          } else {
            drawFace("assets/img/panic-03.jpg",40,325);  
          }
          break;
        
        case 9:
          drawBodyDone("assets/img/body-done.png",40,325);
          break;
                         
        default:
          alert("ERROR NB TRY!");       
      }

      //alert(`nbTry: ${nbTry}`);
      if (nbTry == nbMaxTry){
        if (level == 1){
          // Game Over
          //ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.font = "30px Comic Sans MS";
          ctx.fillStyle = "red";
          ctx.textAlign = "center";
          ctx.fillText("GAME OVER (Try Again...)", canvas.width / 2, 50);  
          
          drawBodyDone();
          
          level = 1;
          nbTry = 0;
          nbGuessed = 0;
                    
          btn.forEach(b =>{            
            b.disabled = true;
            b.style.color = "grey";
          });
          
          btnStart.style.visibility = "visible";
          btnStart.disabled = false;
          btnStart.style.color = "brown";           
  
        } else {
          // You lose a level
          level--;
        nbTry = 0;
        nbGuessed = 0;
              
        drawFace("assets/img/panic-01.jpg",38,325);
        
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("YOU LOOSE A LEVEL!", canvas.width / 2, 50);

        alert("YOU LOOSE A LEVEL!");

        htmlTry.innerText = `TRY ${nbTry} / ${nbMaxTry}`;  
        wordToGuess = resetRandom();
        resetSpan(wordToGuess);

        btn.forEach(b =>{    
          b.style.display = "flex";  
          b.style.visibility = "visible";
          b.disabled = false;
          b.style.color = "blue";
        });

        setTimeout(() =>{
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawBody();
        }, 1500);

        htmlLevel.innerText = `LEVEL ${level}`;              
  
        }
      }  
    }
  });  
});
// end creation span and button letter  


/*
console.log(WORD.length);
console.log(`w4[] nb word: ${w4.length}`);
console.log(`w5[] nb word: ${w5.length}`);
console.log(`w6[] nb word: ${w6.length}`);
console.log(`w7[] nb word: ${w7.length}`);
console.log(`w8[] nb word: ${w8.length}`);
console.log(`w9[] nb word: ${w9.length}`);
console.log(`w10[] nb word: ${w10.length}`);
console.log(`w11[] nb word: ${w11.length}`);
console.log(`w12[] nb word: ${w12.length}`);
*/

function start(){  
  // now reset canvas
  // ---------
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBody();

  nbTry = 0;   
  level = 1; 
  nbGuessed = 0;
  
  htmlButtonWraper.style.display = "flex";
  htmlGuess.style.display ="flex";

  btnStart.disabled = true; 
  btnStart.style.color = "grey";  
  btnStart.style.visibility = "hidden";

  htmlLevel.style.visibility = "visible";
  htmlLevel.style.display = "flex";
  htmlLevel.innerText = `LEVEL ${level}`; 
  htmlTry.innerText = `TRY ${nbTry} / ${nbMaxTry}`;
  
  // New Random
  //random number based on the level based on the len of the word  
  wordToGuess = resetRandom();  
     
  btn.forEach(b =>{    
    b.style.display = "flex";  
    b.style.visibility = "visible";
    b.disabled = false;
    b.style.color = "blue";
  });
 
  resetSpan(wordToGuess);
   
  
} // end function start

function resetSpan(w = ""){  
  //alert(`w into resetspan: ${w}`)  
  span.forEach(s =>{   
    if(Number(s.getAttribute("id")) <= w.length){
      s.style.display = "flex";
      s.style.visibility = "visible";    
      s.innerText = "_";   
    } else {
      s.style.display = "none";
    }         
  });
}

function resetRandom(){    
  // Math.random() * 10     // returns a random from 0 to 9
  switch (level){
    case 1:
      randomNumber = Math.floor(Math.random() * w4.length); 
      return w4[randomNumber];
      //alert(wordToGuess);     
      break;
    case 2:
      randomNumber = Math.floor(Math.random() * w5.length);
      return w5[randomNumber];
      break;
    case 3:
      randomNumber = Math.floor(Math.random() * w6.length);
      return w6[randomNumber];
      break;
    case 4:
      randomNumber = Math.floor(Math.random() * w7.length);
      return w7[randomNumber];
      break;
    case 5:
      randomNumber = Math.floor(Math.random() * w8.length);
      return w8[randomNumber];
      break;
    case 6:
      randomNumber = Math.floor(Math.random() * w9.length);
      return w9[randomNumber];
      break;
    case 7:
      randomNumber = Math.floor(Math.random() * w10.length);
      return w10[randomNumber];
      break;
    case 8:
      randomNumber = Math.floor(Math.random() * w11.length);
      return w11[randomNumber];
      break;
    case 9:
      randomNumber = Math.floor(Math.random() * w12.length);
      return w12[randomNumber];
      break;
    default:
    alert("NO MORE LEVEL!, Restart the Game!")     
    return "NO MORE LEVEL!"   
  }
    
  } 

// end start function

