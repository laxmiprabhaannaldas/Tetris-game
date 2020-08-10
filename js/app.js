document.addEventListener('DOMContentLoaded', () => {
        const grid = document.querySelector('.grid')
        let squares = Array.from(grid.querySelectorAll('div'))
        const width = 10
        const height = 20
        let currentPosition = 4
        const lTetromino = [
            [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, 2],
            [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 2],
            [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2],
            [GRID_WIDTH, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2 + 2]
        ]

        const zTetromino = [
            [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
            [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1],
            [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
            [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1]
        ]

        const tTetromino = [
            [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2],
            [1, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
            [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
            [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1]
        ]

        const oTetromino = [
            [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
            [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
            [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
            [0, 1, GRID_WIDTH, GRID_WIDTH + 1]
        ]

        const iTetromino = [
            [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
            [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3],
            [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
            [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3]
        ]
        const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

        //radomly select Tetromino
        let random = Math.floor(Math.random() * theTetrominoes.length)
        let currentRotation = 0
        let current = theTetrominoes[random][currentRotation]

        //draw the shape
        function draw() {
            current.forEach(index => (
                squares[currentPosition + index].classList.add('block')
            ))
        }

        //undraw the shape
        function undraw() {
            current.forEach(index => {
                squares[currentPosition + index].classList.remove('block')
            })
        }

        //move down shape
        function moveDown() {
            undraw()
            currentPosition = currentPosition += width
            draw()
            freeze()
        }

        //move left and prevent collisions with shapes moving left
        function moveRight() {
            undraw()
            const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
            if (!isAtRightEdge) currentPosition += 1
            if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
                currentPosition -= 1
            }
            draw()
        }

        //move right and prevent collisions with shapes moving right
        function moveleft() {
            undraw()
            const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
            if (!isAtLeftEdge) currentPosition -= 1
            if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
                currentPosition += 1
            }
            draw()
        }
    }

)