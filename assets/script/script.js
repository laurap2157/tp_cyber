// Exercice 1 //

// On commence par récupérer ce que l'utilisateur tape dans Saisir message secret //

var resultat = document.querySelector("#resultat");
var chiffrer = document.querySelector("#btnChiffrer");

function lancerChiffrement() {
    var texte = document.querySelector("#messageClair").value;
    var messageChiffre = chiffrerMessage(texte);
    resultat.innerText = messageChiffre;
}

chiffrer.addEventListener("click", lancerChiffrement);

/* Construction de la fonction de chiffrement du message, prenant en compte le positionnement Ascii, 
la transformation en majuscule pour que les minuscules soient prises en compte dans le modulo 26
et la gestion des espaces (qui ne seront pas codés) */

function chiffrerMessage (texte) {
    var k = 7;
    var resultat = "";
    
    for (var i = 0; i < texte.length; i++) {
        var lettre = texte[i].toUpperCase();
        if (lettre.charCodeAt(0) === 32) { // Si la lettre est un espace, on l'ajoute telle quelle au résultat //
            resultat += lettre;
            } else {
                var x = lettre.charCodeAt(0) - 65;
                var r = (k * x) % 26;
                var lettreChiffree = String.fromCharCode(r + 65);
                resultat += lettreChiffree;
        }
    }

    return resultat;
}

/* La fonction de déchiffrement est exactement la même que la fonction de chiffrement
avec comme seul changement la variable k qui doit être l'inverse de celle de la fonction de chiffrement (k * k-1 congru à 1 modulo 26)
Pour 7, k-1 est égal à 15 */

var dechiffrer = document.querySelector("#btnDechiffrer");

function lancerDechiffrement() {
    var texte = document.querySelector("#messageClair").value;
    var messageDechiffre = dechiffrerMessage(texte);
    resultat.innerText = messageDechiffre;
}

dechiffrer.addEventListener("click", lancerDechiffrement);

function dechiffrerMessage (texte) {
    var k = 15;
    var resultat = "";
    
    for (var i = 0; i < texte.length; i++) {
        var lettre = texte[i].toUpperCase();
        if (lettre.charCodeAt(0) === 32) {
            resultat += lettre;
            } else {
                var x = lettre.charCodeAt(0) - 65;
                var r = (k * x) % 26;
                var lettreChiffree = String.fromCharCode(r + 65);
                resultat += lettreChiffree;
        }
    }

    return resultat;
}

// Exercice 2 //

var btnForceBrute = document.querySelector("#btnForceBrute");
var zoneResultats = document.querySelector("#resultats-brute");

function messageCesar () {
    zoneResultats.innerText = "";
    var decalage = 1;
    var message = "QJ HTIJ XJHWJY JXY HFHMJ IFSX QJ KNHMNJW OFAFXHWNUY";

// Grâce à un décalage dans l'alphabet et à l'aide du code Ascii, on génère les 25 possibilités de déchiffrement du message codé en César, tout en gérant aussi les espaces //

    while (decalage <= 25) {
        var texteDecode = "";
        for (var j = 0; j < message.length; j++) {
            var lettreCesar = message[j];
            if (lettreCesar.charCodeAt(0) === 32) {
                texteDecode = texteDecode + " ";
            } else {
                var position = lettreCesar.charCodeAt(0) - 65;
                var nouvellePosition = (position - decalage + 26) % 26;
                var lettreDecodee = String.fromCharCode(nouvellePosition + 65);
                texteDecode = texteDecode + lettreDecodee;
            }
        }

        zoneResultats.innerText += texteDecode + "\n";
        decalage += 1;
    }
}

btnForceBrute.addEventListener("click", messageCesar);