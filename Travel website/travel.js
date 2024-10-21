document.getElementById('title').addEventListener('click', function(){
    this.style.color = 'green';
});

document.getElementById('info').addEventListener('mousedown', function(){
    prompt('Wanna more info? Click the link with more info');
});

document.getElementById('table').addEventListener('mouseover', function(){
    this.style.backgroundColor = 'blue';
});

document.getElementById('table').addEventListener('mousemove', function(event){
    console.log(`Mouse moved to (${event.clientX}, ${event.clientY})`);
});

document.getElementById('sub-tittle').addEventListener('mouseup', function(){
    alert('Hey there this is h3 heading tag');
});

document.addEventListener('keydown', function(event){
    console.log(`key is pressed ${event.key}`);
});

const trail = document.createElement('trail');

document.getElementById('trail').addEventListener('mousemove', function(event){
    const x = event.clientX;
    const y = event.clientY;
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;    
});