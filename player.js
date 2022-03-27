var player = new Audio('./IMG_0584.MP4')
// declavARION DES VARIABLE LIER AU DOM
var volume = document.getElementById('volume-progress')
var iconPlay = document.getElementById('icon')
var playlist = document.querySelector('.playlist')
var playerContainer = document.querySelector('#player')
var closeIcon = document.querySelector('.close-icon')
var playerTitle = document.querySelector('.player-title')
var flotingBtn = document.querySelector('.floting-btn').firstElementChild

//JOUER LE SONS
volume.value = player.volume*100
player.autoplay()
flotingBtn.addEventListener('click',function (ev) {
    // if (player.paused) {
    //     player.play()
    // } else{
    //     player.pause()
    // }
    playlist.classList.remove('hide')
    playerContainer.style.display = 'flex'
})
player.addEventListener('play',function (ev) {
    iconPlay.classList ='fa-solid fa-pause'
    flotingBtn.classList ='fa-solid fa-pause fa-2x'
})

playerTitle.addEventListener('click',function () {
    console.log(playlist.classList.toggle('hide'))
})
 
player.addEventListener('pause',function (ev) {
    flotingBtn.classList ='fa-solid fa-play fa-2x'
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

closeIcon.addEventListener('click',function (ev) {
    playlist.classList.add('hide')
    playerContainer.style.display = 'none'
})

