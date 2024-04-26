const mobileBtn = document.querySelector('div.mobileBtn')
const navMobile = document.querySelector('ul.mobileList')
const menuButtons = document.querySelectorAll('nav a')

let debounce = false

mobileBtn.addEventListener('click', toggleMenu)

function toggleMenu() {

    navMobile.classList.toggle('hidden')

}

menuButtons.forEach(btn => {
    
    btn.addEventListener('click', (e) => {
    
        e.preventDefault()

        if (document.querySelector('.'+e.target.name) !== null && document.querySelector('.'+e.target.name) !== undefined) {

            let el = document.querySelector('.'+e.target.name)

            el.scrollIntoView({behavior: 'smooth'})
            mobileBtn.click()

        }

    })

});
