(function () {
    'use strict';

    angular
        .module('mangaWords')
        .config(translate);

    /**
     * Configuration of the Hub News Application
     */
    function translate($translateProvider) {
          $translateProvider.translations('en', {
            'play': 'Play',
            'Reveal letter':'Reveal letter',
            'Add coins':'Add coins',
            'Ask a friend':'Ask a friend',
            'Level':'Level',
            'Save':'Save',
            'Next Level':'Next Level',
            'Next Crosswords':'Next Crossword',
            'Back':'Back',
            'Close':'Close',
            'About':'About',
            'Design & programming':'Design & programming',
            'Contents':'Contents',
            'content-about':'Anime Crosswords is free game for all ages that test your knowledge on Manga and Anime .. available on Android and iOS in English, frensh, spanish and russian, So accept this challenge and discover an easy and fun way to test your manga culture. If you have any inquiry or problem with any of our content (including copyrights and mistakes), please contact us',
            'Watch Video':'Watch Video',
            'Connect to Facebook':'Connect to Facebook',
            'Share to Facebook':'Share to Facebook',
            'Invite +3 Friends':'Invite +3 Friends',
            'Language':'Language',
            'LanguageAlert':'If you change the language, you will start from the beginning',

            'newLevelUnlocked':'New Level unlocked',
            'newCwUnlocked':'New Crossword unlocked',
            'shareTitle':'Anime Crosswords : The best Crosswords Application for Manga and Anime',
            'giftTitle':'Daily Gift',
            'giftContent':'You recieved {coins} Coins'
          });
         
          $translateProvider.translations('fr', {
            'play': 'Jouer',
            'Reveal letter':'Une lettre ?',
            'Add coins':'Ajouter coins',
            'Ask a friend':'SOS a un Ami',
            'Level':'Niveau',
            'Save':'Ok',
            'Next Level':'Niveau Suivant',
            'Next Crosswords':'Crossword Suivante',
            'Back':'Retour',
            'Close':'Fermer',
            'About':'A propos',
            'Design & programming':'Design & programmation',
            'Contents':'Contenu',
            'content-about':'Anime Crosswords est un jeu gratuit pour tous les âges qui testent vos connaissances de Manga et Anime .. disponible sur Android et iOS en anglais, francais, espagnole et russe, alors acceptez ce défi et découvrez un moyen facile et amusant de tester votre culture de manga. Si vous avez des questions ou des problèmes avec l\'un de nos contenus (y compris les droits d\'auteur et les erreurs), veuillez nous contacter',
            'Watch Video':'Voir une Video',
            'Connect to Facebook':'Connecter à Facebook',
            'Share to Facebook':'Partager sur Facebook',
            'Invite +3 Friends':'Inviter 3 amis',
            'Language':'Langues',
            'LanguageAlert':'Si vous changez la langue, vous devez recommencer dés le début',

            'newLevelUnlocked':'Niveau suivant débloqué',
            'newCwUnlocked':'Crossword suivante débloqué',
            'shareTitle':'Anime Crosswords : le meilleur jeu de Manga et Anime',
            'giftTitle':'Coins du jour',
            'giftContent':'Vous recievez {coins} Coins',
          });

        $translateProvider.translations('es', {
            'play': 'Jugar',
            'Reveal letter':'Une lettre ?',
            'Add coins':'Ajouter coins',
            'Ask a friend':'SOS a un Ami',
            'Level':'Niveau',
            'Save':'Ok',
            'Next Level':'Niveau Suivant',
            'Next Crosswords':'Crossword Suivante',
            'Back':'Retour',
            'Close':'Fermer',
            'About':'A propos',
            'Design & programming':'Design & programmation',
            'Contents':'Contenu',
            'content-about':'Anime Crosswords est un jeu gratuit pour tous les âges qui testent vos connaissances de Manga et Anime .. disponible sur Android et iOS en anglais, francais, espagnole et russe, alors acceptez ce défi et découvrez un moyen facile et amusant de tester votre culture de manga. Si vous avez des questions ou des problèmes avec l\'un de nos contenus (y compris les droits d\'auteur et les erreurs), veuillez nous contacter',
            'Watch Video':'Voir une Video',
            'Connect to Facebook':'Connecter à Facebook',
            'Share to Facebook':'Partager sur Facebook',
            'Invite +3 Friends':'Inviter 3 amis',
            'Language':'Langues',
            'LanguageAlert':'Si vous changez la langue, vous devez recommencer dés le début',

            'newLevelUnlocked':'Niveau suivant débloqué',
            'newCwUnlocked':'Crossword suivante débloqué',
            'shareTitle':'Anime Crosswords : le meilleur jeu de Manga et Anime',
            'giftTitle':'Coins du jour',
            'giftContent':'Vous recievez {coins} Coins',
          });
         
          $translateProvider.preferredLanguage('en');
    }

})();
