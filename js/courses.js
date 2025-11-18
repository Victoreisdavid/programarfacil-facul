const courses = [
    {
        logo: "img/python-package-index.svg",
        name: "Introdução ao Python",
        description: "Python foi desenvolvido em 1980, focado em ser uma alternativa mais simples e rápida para desenvolver.",
        link: "https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0"
    },
    {
        logo: "img/php.svg",
        name: "Introdução ao PHP",
        description: "PHP foi desenvolvido em 1994, para criar páginas da web dinâmicas.",
        link: "https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0"
    },
    {
        logo: "img/golang.svg",
        name: "Introdução a GOLANG",
        description: "GO foi desenvolvido pela Google em 2007, juntando a simplicidade do Python e a performance ultra-rápida do C.",
        link: "https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0"
    },
    {
        logo: "img/javascript.svg",
        name: "Introdução a Javascript",
        description: "Javascript foi desenvolvido em 1995, feito para adicionar interatividade em páginas da web.",
        link: "https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0"
    }
]

function ListCourses(target, searchQuery) {
    const targetElement = document.querySelector(target)

    targetElement.innerHTML = ""

    const cardsElement = document.createElement("div")
    cardsElement.classList.add("cards")

    for (const course of getCourses(searchQuery)) {
        const courseCardElement = document.createElement("div")
        courseCardElement.classList.add("card")

        const courseTargetElement = document.createElement("div")
        courseTargetElement.classList.add("target")

        const courseImg = document.createElement("img")
        courseImg.src = course.logo
        courseImg.width = 100
        courseImg.height = 100
        courseImg.alt = ""

        const courseAboutElement = document.createElement("div")
        courseAboutElement.classList.add("about")

        const courseName = document.createElement("p")
        courseName.classList.add("name")
        courseName.textContent = course.name

        const courseDescription = document.createElement("p")
        courseDescription.textContent = course.description

        const ctaElement = document.createElement("a")
        ctaElement.classList.add("cta")
        ctaElement.href = course.link
        ctaElement.target = "_blank"
        ctaElement.textContent = "Acessar"

        courseTargetElement.appendChild(courseImg)
        
        courseAboutElement.appendChild(courseName)
        courseAboutElement.appendChild(courseDescription)
        courseAboutElement.appendChild(ctaElement)

        courseCardElement.appendChild(courseTargetElement)
        courseCardElement.appendChild(courseAboutElement)

        cardsElement.appendChild(courseCardElement)
    }

    targetElement.appendChild(cardsElement)
}

function getCourses(searchQuery) {
    if(!searchQuery) {
        return courses
    } else {
        return courses.filter(course => course.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }
}