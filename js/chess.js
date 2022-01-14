var board = Chessboard('myBoard', {
    draggable: true,
    moveSpeed: 'slow',
    snapbackSpeed: 500,
    snapSpeed: 100,
    position: 'start'
  })
  
  $('#startBtn').on('click', board.start)