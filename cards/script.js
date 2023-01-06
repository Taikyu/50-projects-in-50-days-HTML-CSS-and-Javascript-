const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        clearActive()
        panel.classList.add("active")
    })
})



function clearActive() {
    
panels.forEach((panel) => {
    panel.classList.remove("active")
})

}