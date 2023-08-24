const $video = document.querySelector ('#video')
const $play = document.querySelector ('#play')
const $pause = document.querySelector ('#pause')
const $forward = document.querySelector ('#forward')
const $backward = document.querySelector ('#backward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)


function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log ('le diste click al botón de play',handlePlay)
}

function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log ('le diste click al botón de pausa', handlePause)
}

$backward.addEventListener ('click', handlBackward)
$forward.addEventListener ('click', handleForward)

function handlBackward() {
    $video.currentTime = $video.currentTime + 10
    console.log ('para atrás 10 segundos', $video.currentTime)

}


function handleForward (){
    $video.currentTime = $video.currentTime + 10
    console.log ('para adelante 10 segundos', $video.currentTime)

}

const $progress = document.querySelector ('#progress')
$video.addEventListener ('loadedmetadata',handleLoaded)
$video.addEventListener ('timeupdate',handleTimeUpDate)


function handleLoaded () {
$progress.max = $video.duration
console.log ('ha cargado mi video', $video.duration)
}

function handleTimeUpDate () {
    $progress.value = $video.currentTime
    //console.log ('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input',handleInput)

function handleInput(){
    $video.currentTime =  $progress.value
    console.log ($progress.value)
}