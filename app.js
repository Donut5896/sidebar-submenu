// expander menu
const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

    if(toggle && navbar){
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('expander')

            bodypadding.classList.toggle('body-pd')
        })
    }
}
showMenu('nav-toggle', 'navbar', 'body-pd');

// link active
const linkColor = document.querySelectorAll('.nav_link');

function colorLink(){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

// collapse menu
const linkCollapse = document.getElementsByClassName('collapse_link');
let i;

for(i = 0; i < linkCollapse.length; i++){
    linkCollapse[i].addEventListener('click', function(){
        const collapseMenu = this.nextElementSibling;
        collapseMenu.classList.toggle('showCollapse')

        //rotate icon
        const rotate = collapseMenu.previousElementSibling;
        rotate.classList.toggle('rotate')
    })
}