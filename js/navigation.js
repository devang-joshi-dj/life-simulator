import * as elements from './elements.js'

const navigationElements = [elements.homeElement, elements.universityElement, elements.jobElement, elements.bankElement, elements.gymElement, elements.mallElement, elements.worshipElement, elements.clubElement, elements.restaurantElement, elements.spaElement]

const navigationContentElements = [elements.homeContentElement, elements.universityContentElement, elements.jobContentElement, elements.bankContentElement, elements.gymContentElement, elements.mallContentElement, elements.worshipContentElement, elements.clubContentElement, elements.restaurantContentElement, elements.spaContentElement]

const toggleVisibility = (visibility, element) => {
    // function to change the visibility of element
    element.style.display = visibility;
}

const toggleNavigation = (element, i) => {
    // for navigation among multiple content elements by using visibility property
    if (navigationElements[i] === element) {
        navigationElements[i].addEventListener('click', () => {
            for (let j = 0; j < navigationElements.length; j++) {
                toggleVisibility('none', navigationContentElements[j])
            }
            toggleVisibility('block', navigationContentElements[i])
        })
    }
}

for (let i = 0; i < navigationElements.length; i++) {
    // executing toggleNavigation function on each and every navigationElements
    toggleNavigation(navigationElements[i], i)
}