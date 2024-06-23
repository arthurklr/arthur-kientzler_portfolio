document.addEventListener('DOMContentLoaded', function () {
    const icon = document.querySelector('.icon');
    const pages = document.querySelectorAll('.page');
    const header = document.querySelector('header')
    const h2 = document.querySelectorAll('h2')
    const h4 = document.querySelectorAll('h4')
    const menu = document.querySelector('.menu-bas')
    const menu_bouton = document.querySelectorAll('.element>svg')


    icon.addEventListener('click', function () {
        icon.classList.toggle('nuit');
        icon.classList.toggle('jour');
        if (icon.classList.contains('jour')) {
            pages.forEach(function(page) {
                page.classList.add('clair');
            });
            h2.forEach(function(h2){
                h2.classList.add('clair')
            })
            h4.forEach(function(h4){
                h4.classList.add('clair')
            });
            menu_bouton.forEach(function(menu_bouton){
                menu_bouton.classList.add('menu-clair')
            })
            header.classList.add('clair');
            menu.classList.add('menu-clair')

        } else {
            pages.forEach(function(page) {
                page.classList.remove('clair');
            });
            h2.forEach(function(h2){
                h2.classList.remove('clair')
            })
            h4.forEach(function(h4){
                h4.classList.remove('clair')
            })
            menu_bouton.forEach(function(menu_bouton){
                menu_bouton.classList.remove('menu-clair')
            })
            header.classList.remove('clair')
            menu.classList.remove('menu-clair')
        }
    });

    // Vérifier l'état initial de l'icône pour définir l'état de la page
    if (icon.classList.contains('jour')) {
        pages.forEach(function(page) {
            page.classList.add('clair');
        });
    } else {
        pages.forEach(function(page) {
            page.classList.remove('clair');
        });
    }
});
