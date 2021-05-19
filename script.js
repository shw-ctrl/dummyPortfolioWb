console.log("its working")
let theme = localStorage.getItem('theme')
if(theme = 'null'){
    setTheme('light')
}
else{
    setTheme(theme)
}
let themeDots = document.getElementsByClassName("theme-dot")

for(var i=0; themeDots.length >i ; i++){
    themeDots[i].addEventListener('click' , function(){
        let mode =  this.dataset.mode
        console.log("option clickee: " ,mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    
     if(mode == 'light'){
         document.getElementById('personalized-style').href = 'default.css'
     }
     if(mode == 'green'){
        document.getElementById('personalized-style').href = 'green.css'
    }
    if(mode == 'purple'){
        document.getElementById('personalized-style').href = 'purple.css'
    }
    if(mode == 'blue'){
        document.getElementById('personalized-style').href = 'blue.css'
    }
    console.log("its working on the top")
}