const panels = document.querySelectorAll('.panel');

panels.forEach(panel => { // Iterate on each panel
    panel.addEventListener('click', () => { // When a panel is clicked, do something
        panels.forEach(panel => { // Remove the class 'active' on all panels
            panel.classList.remove('active')
        })
        panel.classList.add('active')// Add the class 'active' on the clicked panel
    })
})
