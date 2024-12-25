const body = document.body;

/*create an div with background red.
within that div, create an image and add it's src using javascript*/

let div = document.createElement('div');
div.style.background = 'red';
div.classList.add('center');
div.id = 'div-id'; //give an id to the div class that says 'div-id'.
div.style.position = 'relative';
div.style.width = '600px';
div.style.height = '500px';
div.style.paddingTop = '100px';
div.style.marginTop = '70px';

let img = document.createElement('img');
img.classList.add('center');
img.src = 'nature_img.jpg';
img.style.position = 'absolute';
img.style.width = '500px';
img.style.height = '300px';
img.style.paddingTop = '120px';
img.style.marginTop = '50px';
div.append(img);
body.appendChild(div);

/**This divH1P is created as container for h1 title and tag p */
let divH1P = document.createElement('div');
divH1P.style.marginTop = '-300px';
divH1P.style.marginBottom = '100px';


/**add an h1 tag that has a title "hi everyone".
    this h1 tag should say "hi everyone".
 */
const h1 = document.createElement('h1');
h1.title = 'hi everyone';
h1.textContent = 'hi everyone';
h1.style.textAlign = 'center';
divH1P.appendChild(h1);


/**add a p tag that has a span inside. 
    span tag should have a strong tag inside it and say "this is a very strong text".
    give the p tag a background color of red and text white.
 */
let p = document.createElement('p');
p.style.background = 'red';
p.style.color = 'white';
p.style.textAlign = 'center';

let spanTag = document.createElement('span');
let strong = document.createElement('strong');
strong.textContent = 'this is a very strong text';

spanTag.appendChild(strong);
p.appendChild(spanTag);
divH1P.appendChild(p);
body.appendChild(divH1P);


/** create a div with 3 span tag children all with their own unique ids.
    remove the 2nd span tag using only it's id.
    the other 2 span tags should have "span tag" written inside them.
    the text for these 2 span tags should be red.
 */

let div2 = document.createElement('div');
div2.style.textAlign = 'center';
div2.style.padding = '100px';
div2.style.background = 'pink'; 
div2.style.marginTop = '-70px';

let span1 = document.createElement('span');
span1.id = 'span1';
span1.textContent = 'This is the first span. ';
span1.style.color = 'red';
span1.style.fontWeight = 'bold';
span1.style.display = 'block';

let span2 = document.createElement('span');
span2.id = 'span2';

let span3 = document.createElement('span');
span3.id = 'span3';
span3.textContent = 'This is the third span';
span3.style.color = 'red';
span3.style.fontWeight = 'bold';

div2.appendChild(span1);
div2.appendChild(span2);
div2.appendChild(span3);
body.appendChild(div2);
const spanToRemove = document.getElementById('span2');
spanToRemove.remove(); 
