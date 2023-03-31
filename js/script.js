const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', (event) => {
    event.preventDefault()
    if(event.code.toLocaleLowerCase() === 'space'){
        setRandomColor()
    }
    
})

document.addEventListener('click', event => {
    const type = event.target.dataset.type

    if(type === 'lock' ){
        const node = event.target.tagName.toLocaleLowerCase() === 'i'
        ? event.target
        : event.target.children[0]

        node.classList.toggle('fa-unlock-alt')
        node.classList.toggle('fa-lock')
    } else if(type === 'copy'){
        copyToClick(event.target.textContent)
    }
})


function copyToClick(text){
    return navigator.clipboard.writeText(text)
}

function setRandomColor(){
    cols.forEach((col )=> {
        const isLock = col.querySelector('i').classList.contains('fa-lock')
        const text = col.querySelector('h2')
        const button = col.querySelector('button')
        const color = chroma.random()
        
        if(isLock){
            return
        }

        text.textContent = color
        col.style.background = color

        setTextColor(text, color)
        setTextColor(button, color)
    })
}

function setTextColor(text, color){
    const luminance = chroma(color).luminance()
        text.style.color = luminance > 0.5 ? 'black' : 'white'

}

setRandomColor()