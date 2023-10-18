const btn = document.querySelector('div.mobileBtn')
const navMobile = document.querySelector('ul.mobileList')

let debounce = false

btn.addEventListener('click', toggleMenu)

function toggleMenu() {

    if(debounce === false) {

        navMobile.style.display = 'block'

        debounce = true


    }else {

        navMobile.style.display = 'none'

        debounce = false

    }

}
