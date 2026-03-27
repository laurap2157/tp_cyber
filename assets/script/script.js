// On commence par récupérer ce que l'utilisateur tape dans le text area Saisir un message secret //

var resultat = document.querySelector("#resultat");
var chiffrer = document.querySelector("#btnChiffrer");

function lancerChiffrement() {
    var texte = document.querySelector("#messageClair").value;
    var messageChiffre = chiffrerMessage(texte);
    resultat.innerText = messageChiffre;
}

chiffrer.addEventListener("click", lancerChiffrement);

/* Construction de la fonction de chiffrement du message, prenant en compte le positionnement Ascii, 
la transformation en majuscule pour que les minuscules soient prises en compte dans mon modulo 26
et la gestion des espaces (qui ne seront pas codés) */

function chiffrerMessage (texte) {
    var k = 7;
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

/* La fonction de déchiffrement est exactement la même que la fonction de chiffrement
J'ai juste changé ma variable k pour qu'elle soit l'inverse de celle de la fonction de chiffrement (k * k-1 congru à 1 modulo 26)
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

