const mobileBtn = document.querySelector('div.mobileBtn')
const navMobile = document.querySelector('ul.mobileList')
const menuButtons = document.querySelectorAll('nav a')

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

let options = {
    root: null,
    threshold: 1.0,
  };
  
let observer = new IntersectionObserver(([entry]) => {

    if (entry.isIntersecting) {
        console.log("aaaaa")
    }

    document.querySelector("#hello").classList.toggle('translate-x-1/2')

}, options);

observer.observe(document.querySelector("#hello"))

window.addEventListener("scroll", () => {

    let header = document.querySelector('header')

    header.classList.toggle('p-4', window.scrollY > 100)

})

