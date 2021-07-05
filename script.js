const grid = document.getElementById('grid')
const dimension = document.getElementById('dimension')
const resetBtn = document.getElementById('reset')
const blackBtn = document.getElementById('black')
const rainbowBtn = document.getElementById('rainbow')
const eraserBtn = document.getElementById('eraser')

window.addEventListener('load', createGrid(dimension.value))

// Grid functionality

dimension.onchange = () => {
    createGrid(dimension.value)
}

function createGrid(dimension) {
    clearGrid()

    for (let i = 0; i < dimension ** 2; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        grid.appendChild(cell)
    }

    grid.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${dimension}, 1fr)`

    drawBlack()
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
    }
}

// Buttons functionality

function resetGrid() {
    const drawnCells = document.querySelectorAll('.cell')
    drawnCells.forEach(cell => cell.style.backgroundColor = 'white')
}

function drawBlack() {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black'
    }))
}

function drawRainbow() {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }))
}

function erase() {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'white'
    }))
}

resetBtn.addEventListener('click', resetGrid)
rainbowBtn.addEventListener('click', drawRainbow)
blackBtn.addEventListener('click', drawBlack)
eraserBtn.addEventListener('click', erase)