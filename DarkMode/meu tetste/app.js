const moonPath = 'M15.5 27.5C15.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 15.5 12.3122 15.5 27.5Z'
const sunPath = 'M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z'
const darkMode = document.querySelector('#darkMode')
let toggle = false


darkMode.addEventListener("click", ()=> {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo",
    })

    timeline.add({
        targets: '.sol',
        d: [{value: toggle ? sunPath : moonPath}],
    })

    .add({
        targets: '#darkMode',
        rotate: 320,
    }, '-= 220')


    .add({
        targets: 'body',
        color: toggle ? "#000" : "#fff",
        backgroundColor: toggle ? 'rgb(255, 255, 255)' : 'rgb(22,22,22)',
    }, '-= 220')

    .add({
        targets: 'header',
        // color: toggle ? "#000" : "#fff",
        backgroundColor: toggle ? 'rgb(22,22,22)' : ' rgb(255, 247, 230)',
    }, '-= 220')

    .add({
        targets: 'a',
        color: toggle ? "#fff" : "#000"
    })

    .add({
        targets: 'button',
         backgroundColor: toggle ? '#fc1c1c' : '#1c20fc'
    }, '-= 220')
    
    if(!toggle){
        toggle = true
    }else{
        toggle = false
    }
})


