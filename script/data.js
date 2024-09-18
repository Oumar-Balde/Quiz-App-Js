function Questions(number) {
    let chaine = '';
    switch (number) {
        case 1:
            chaine = 'En quelle année date la version initiale de <strong>HTML</strong>*1987*1998*1993*2000*2';
            break;
        case 2:
            chaine = "Quelle balise permette de revenir à la ligne en HTML*<hr>*<br>*<p>*<em>*1"
            break;
        case 3:
            chaine = "Quelle balise permette de faire un séparateur horizontal *<hr>*<br>*<p>*<em>*0"
            break;
        case 4:
            chaine = "Comment mettre un texte en évidence *<hr>*<mark>*<strong>*<em>*2"
            break;
        case 5:
            chaine = "Il ya combien de niveau de titre en HTML. *3*6*1*4*1"
            break;
        case 6:
            chaine = "Comment mettre un mot en indice *<sub>*<del>*<sup>*<code>*0"
            break;
        case 7:
            chaine = "Comment mettre un mot en exposant *<sub>*<del>*<sup>*<code>*2"
            break;
        case 8:
            chaine = "Quelle balise permette de couper un mot*<hr>*<wbr>*<mark>*<em>*1"
            break;
        case 9:
            chaine = "Comment fusionner les cellules d'un tableau*<rowspan>*<colum>*<row>*<colspan>*3"
            break;
        case 10:
            chaine = "Comment fusionner les lignes d'un tableau*<rowspan>*<colum>*<row>*<colspan>*0"
            break;
        case 11:
            chaine = "Quelles balises est de type <mark>block</mark>*<img>*<a>*<div>*<span>*2"
            break;
        case 12:
            chaine = "Quelles balises est de type <mark>inline</h>*<p>*<section>*<div>*<span>*3"
            break;
        case 13:
            chaine = 'En quelle année date la version initiale de <strong>CSS</strong>*1990*1998*1993*1996*3';
            break;
        case 14:
            chaine = 'Quoi represente une proprieté en CSS .*article*Color*#1234fa*green*1'
            break;
        case 15:
            chaine = 'Quoi represente un selecteur en CSS .*body*Color*#1234fa*padding*0'
            break;
        case 16:
            chaine = 'Quoi represente une valeur en CSS .*article*Color*#1234fa*footer*2'
            break;
        case 17:
            chaine = '<strong>align-content</strong> fonctionne avec <strong>display:</strong> *block*flex*grid*inline*2'
            break;
        case 18:
            chaine = 'On ne peut pas animer un element de type*block*flex*grid*inline*3'
            break;
    }
    return chaine;
}