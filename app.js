const cards = document.querySelector('.cards')
const images = document.querySelectorAll('.img')
const backgrounds = document.querySelectorAll('.bg')
const RANGE = 40;
const calcValue = (a, b) => {
    return (a / b * RANGE - RANGE / 2).toFixed(1)
}
document.addEventListener('mousemove', (even) => {
    const yValue = calcValue(even.y, window.innerHeight)
    const xValue = calcValue(even.x, window.innerWidth)

    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

    images.forEach((img) => {
        img.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`
    })
    
    backgrounds.forEach((bg) => {
        bg.style.backgroundPosition = `${xValue * .45}px ${-yValue * .45}px`
    })
})