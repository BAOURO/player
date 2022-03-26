var volume = document.getElementById('volume-progress')
var iconPlay = document.getElementById('icon')
var player = new Audio('./IMG_0584.MP4')
var playlist = document.querySelector('.playlist')
var playerContainer = document.querySelector('#player')
var playerTitle = document.querySelector('.player-title')
var playerTitle = document.querySelector('.close-icon')
volume.value = player.volume*100
player.play()

setTimeout(()=>{
    playerContainer.classList.toggle('hide')
    console.log(playerContainer)
},2000)
player.addEventListener('play',function (ev) {
    iconPlay.classList ='fa-solid fa-pause'
    //'fa-solid fa-play':
})

playerTitle.addEventListener('click',function () {
    console.log(playlist.classList.toggle('hide'))
   // playlist.className.toggle('hide')
})
 
player.addEventListener('pause',function (ev) {
    iconPlay.classList ='fa-solid fa-play'
    //'fa-solid fa-play':
})
iconPlay.addEventListener('click',function (ev) {
    if (player.paused) {
        player.play()
    } else{
        player.pause()
    }
    
})


volume.addEventListener('input',function (ev) {
    player.volume = ev.target.value/100
    console.log(player.volume)
})

icon.addEventListener('click',function (ev) {
    
})

