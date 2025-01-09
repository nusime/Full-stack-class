const dots = [];
const cursor = {
    x:0,
    y:0
};

for(let i = 0; i <=20; i++){
    const dot = document.createElement('div');
    dot.classList.add('dot');
    document.body.appendChild(dot);
    dots.push(dot);
}

document.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    console.log(cursor);
});

function sketch (){
    let x = cursor.x;
    let y = cursor.y;

    dots.forEach((dot, index) => {
        nextDot = dots[index + 1] || dots[0];
        dot.style.left = x + `px`;
        dot.style.top = y + `px`;

        x += (nextDot.offsetLeft - dot.offsetLeft) * 0.5;
        y += (nextDot.offsetTop - dot.offsetTop) * 0.5;
    });
}

setInterval(sketch, 10);