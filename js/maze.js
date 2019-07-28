var maze = new Array()
var sides = new Array("Border-Top", "Border-Right")
for (var rows = 0; rows < 13; rows++)
    maze[rows] = new Array()
maze[0][0] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
maze[0][1] = new Array(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1)
maze[1][0] = new Array(1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1)
maze[1][1] = new Array(0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1)
maze[2][0] = new Array(1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1)
maze[2][1] = new Array(0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1)
maze[3][0] = new Array(0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1)
maze[3][1] = new Array(1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1)
maze[4][0] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1)
maze[4][1] = new Array(1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1)
maze[5][0] = new Array(0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0)
maze[5][1] = new Array(1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1)
maze[6][0] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1)
maze[6][1] = new Array(1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1)
maze[7][0] = new Array(1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1)
maze[7][1] = new Array(1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1)
maze[8][0] = new Array(0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0)
maze[8][1] = new Array(0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1)
maze[9][0] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1)
maze[9][1] = new Array(1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1)
maze[10][0] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0)
maze[10][1] = new Array(1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1)
maze[11][0] = new Array(0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0)
maze[11][1] = new Array(1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1)
maze[12][0] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0)
maze[12][1] = new Array(1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1)

function testNext(nxt) {
    if ((board.rows[start.rows].cells[start.cols].style.backgroundColor == "yellow") && (nxt.style.backgroundColor == 'yellow')) {
        message.innerText = "마음을 바꾸셨군요 !"
        board.rows[start.rows].cells[start.cols].style.backgroundColor = ""
        return false
    }
    return true
}

function move() {
    if (document.all.board.rows[start.rows].cells[start.cols].innerText == "end") {
        alert = "넘 쉽죠!"
        progress = false
    }
}

var colorCode
function color() {
    colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
}

function moveLeft() {
    if (maze[start.rows][1][start.cols - 1] == 0) {
        if (testNext(board.rows[start.rows].cells[start.cols - 1]))
            message.innerText = "왼쪽으로 가는 중 .."
        start.cols--
        color();
        document.all.board.rows[start.rows].cells[start.cols].style.backgroundColor = colorCode
        if (document.all.board.rows[start.rows].cells[start.cols].innerText == "end") {
            alert = "넘 쉽죠!"
            progress = false
        }
    } else
        message.innerText = "이런.. 왼쪽으로 갈 수 없어요"

}

function moveUp() {
    if (maze[start.rows][0][start.cols] == 0) {
        if (testNext(board.rows[start.rows - 1].cells[start.cols]))
            message.innerText = "위쪽으로 가는 중.."
        start.rows--
        color();
        document.all.board.rows[start.rows].cells[start.cols].style.backgroundColor = colorCode
            if (document.all.board.rows[start.rows].cells[start.cols].innerText == "end") {
                alert = "넘 쉽죠!"
                progress = false
            }
    } else
        message.innerText = "이런.. 위쪽으로 갈 수 없어요"

}

function moveRight() {
    if (maze[start.rows][1][start.cols] == 0) {
        if (testNext(board.rows[start.rows].cells[start.cols + 1]))
            message.innerText = "오른쪽으로 가는 중.."
        start.cols++
        color();
        document.all.board.rows[start.rows].cells[start.cols].style.backgroundColor = colorCode
        if (document.all.board.rows[start.rows].cells[start.cols].innerText == "end") {
            alert = "넘 쉽죠!"
            progress = false
        }
    }
    else
        message.innerText = "이런.. 오른쪽으로 갈 수 없어요"

}

function moveDown() {
    if (maze[start.rows + 1] == null) return
    if (maze[start.rows + 1][0][start.cols] == 0) {
        if (testNext(board.rows[start.rows + 1].cells[start.cols]))
            message.innerText = "아래쪽으로 가는 중.."
        start.rows++
        color();
        document.all.board.rows[start.rows].cells[start.cols].style.backgroundColor = colorCode
        if (document.all.board.rows[start.rows].cells[start.cols].innerText == "end") {
            alert = "넘 쉽죠!"
            progress = false
        }
    } else
        message.innerText = "이런.. 아래쪽으로 갈 수 없어요"
        
}