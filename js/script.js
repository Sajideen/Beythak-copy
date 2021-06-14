const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target= document.querySelector(tab.dataset.tabTarget) //target the tab where we have to click
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('active') //remove all the tabs
         } )
        target.classList.add('active') //active the selected one
    })
}
)