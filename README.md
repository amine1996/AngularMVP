# Angular Website

Projet utilisant Angular CLI version 1.7.0


## Auteurs

Amine ISMAIL, Thierry GIRARD, Margaux DEBURE, Hussein Ait-Lahcen

## Explications

### Installation et lancement : 

```
git clone https://github.com/amine1996/AngularMVP
cd AngularMVP
npm install
json-server --watch db.json
ng serve
```

### Fonctionnement du create :

*   Création d'un component create qui sera affiché sur la route **create**

*   Une fois le formulaire rempli, lorsqu'on clique sur le bouton **Create**, à partir du **service articles** on va envoyer une requête **POST** qui contient un objet basé sur le RawArticle (qui est un article sans ID), l'ID est crée automatiquement

*   Une fois l'article crée, l'utilisateur est redirigé vers la route **articles**

### Fonctionnement du delete

*   Lorsqu'on clique sur le bouton delete sur l'article, un évenement **deletedObject** est émis vers le component **articles**, cet évenement contient un objet basé sur l'interface **Article**

*   Une fois l'évenement intercepté par le component **articles**, alors on va récupérer l'ID est envoyé une requête **DELETE** à la base de donnée puis récupérer une liste d'article mise à jour

### Fonctionnement de l'update :

*   Création d'un component de modification d'article
*   Lorsque l'on clique sur le bouton **"Modify"**, un évenement **modifiedArticle** est émis vers le componenent articles, cet évenement contient l'article que l'on souhaite modifier.

*   Lorsque l'événement est intercepté par le component articles, on sauvegarde l'article à modifier dans une variable pour pouvoir le retrouver lorsque l'on affiche les articles

*   Lorsque l'on affiche les articles dans le component articles, on va afficher le component de modification d'article à la place de l'article que l'on souhaite modifier.

*   Pour modifier l'article dans la base de données, on utilise une requête **PUT** avec l'id de l'article et les nouvelles données.

### Fonctionnement du search :

*   Création d'un component search qui contient un formulaire et qui sera affiché sur la route **search**

*   Possibilité de chercher en matchant exactement l'élement ou alors si l'élement contient la recherche (en utilisant les fonctionnalités de json-server)

*   Une fois le formulaire rempli, on est redirigé vers la route **articles** avec des queryParams qui vont être utilisés en tant que filtre pour la query vers json-server.
