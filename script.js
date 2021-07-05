const grid = document.getElementById('grid')
const dimension = document.getElementById('dimension')
const reset = document.getElementById('reset')
const black = document.getElementById('black')
const rainbow = document.getElementById('rainbow')

window.addEventListener('load', createGrid(dimension.value))

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

reset.addEventListener('click', resetGrid)
rainbow.addEventListener('click', drawRainbow)
black.addEventListener('click', drawBlack)