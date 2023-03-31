const player = document.querySelector(".player")
const piper = document.querySelector(".piper")
const h1 = document.querySelector("h1")
const btn = document.querySelector("button")

let count = 0

const start = function() {

    piper.classList.add("start")

    const jump = function(){
        player.classList.add("jump")

        setTimeout( function() {

            player.classList.remove("jump")

        } ,500)

    }
    
    const jumpMobile = function(){
        player.classList.add("jump")

        setTimeout( function() {

            player.classList.remove("jump")

        } ,500)

    }

    window.onkeydown = jump;
    window.onclick = jumpMobile

    const loopCount = setInterval(
        function(){

            count += 1
            
            h1.innerHTML = count
        
        }
    ,100)

    const loop = setInterval( 
        function() {
            let positionPlayerBottom = window.getComputedStyle(player).bottom
            let positionPlayerLeft = player.offsetWidth
            let positionPipe = piper.offsetLeft

            console.log(positionPlayerBottom)

            if(positionPipe <= positionPlayerLeft && positionPlayerBottom <= "100px"){

                piper.style.animation = "none"
                clearInterval(loopCount)
                
                player.src = "https://i.gifer.com/origin/d7/d7ac4f38b77abe73165d85edf2cbdb9e_w200.gif"

                setTimeout(() => {
                    
                    alert(`You Lose: time ${count}`)
                    location.reload()
                
                }, 400);

            }

        },10)

}
const startPlay = function(){
 
    start() 

    btn.remove()  

}

btn.onclick = startPlay
