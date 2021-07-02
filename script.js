const container = document.getElementById('container')

function createGrid(dimension) {
    for (let i = 0; i < dimension ** 2; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        container.appendChild(cell)
    }

    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`
    container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`
}

function draw() {
    this.classList.add('fill')
}

createGrid(30)

const cells = document.querySelectorAll('.cell')
cells.forEach(cell => cell.addEventListener('mouseover', draw))
