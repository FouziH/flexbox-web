console.log("Hello World!");   
                                                                                     
document.querySelector("#menu").addEventListener('click' , () => {
    document.querySelector('nav ul').classList.toggle('showMenu')
    console.log("clicked")
})
