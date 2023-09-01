let dim = 400
function setup() {
  createCanvas(dim, dim);
}

function draw() {
  background(220);
  
  
  for(let i=0; i<dim; i+=10) {
    const c = color(255, 204, i/1.5);
    fill(c);
    circle(i, dim-i, i)
  }
}