const container = document.getElementById('container')
const dimension = document.getElementById('dimension')

window.addEventListener('load', createGrid(dimension.value))

dimension.onchange = () => {
    createGrid(dimension.value)
}

function createGrid(dimension) {
    clearGrid()

    for (let i = 0; i < dimension ** 2; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        container.appendChild(cell)
    }

    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`
    container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`

    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.addEventListener('mouseover', draw))
}

function draw() {
    this.classList.add('fill')
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
}
