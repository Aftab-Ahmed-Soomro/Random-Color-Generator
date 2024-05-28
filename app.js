function generateColor() {
    let body = document.getElementById('body');
    let para = document.getElementById('copy');
    let empty = '';
    let colors = ['A','B','C','D','E','F','a','b','c','d','e','f',1,2,3,4,5,6,7,8,9,0];
    for (let i = 0; i < 4; i++) {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        empty = empty + randomColor;
    }
    console.log(empty);
    body.style.backgroundColor = `#${empty}`;
    para.innerText = '#' + empty;
}

function copyColor() {
    navigator.clipboard.writeText(copy.innerText);
}