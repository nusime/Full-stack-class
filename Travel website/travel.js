document.getElementById('title').addEventListener('click', function(){
    this.style.color = 'blue';
});

document.getElementById('title').addEventListener('dblclick', function(){
    alert('You double clicked the h1 title');
});

const infoDiv = document.querySelector('.infoo');
if(infoDiv){
    infoDiv.addEventListener('mousedown', function(){
        alert('Wanna more info? Click the link with more info');
    });
}

document.getElementById('table').addEventListener('mouseover', function(){
    this.style.backgroundColor = 'blue';
});

document.getElementById('table').addEventListener('mousemove', function(event){
    console.log(`Mouse moved to (${event.clientX}, ${event.clientY})`);
});

const subTitle = document.querySelector('.sub-title');
if(subTitle){
    subTitle.addEventListener('mouseup', function(){
        alert('Hey there this is h3 heading tag');
    });
}

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