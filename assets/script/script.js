/* Construction de la fonction de chiffrement du message, prenant en compte le positionnement Ascii, 
la transformation en majuscule pour que les minuscules soient prises en compte dans mon modulo 26
et la gestion des espaces (qui ne seront pas codés) */

function chiffrerMessage (texte) {
    var k = 7;
    var resultat = "";
    
    
    for (let i = 0; i < texte.length; i++) {
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