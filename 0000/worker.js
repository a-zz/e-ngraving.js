/* ************************************************************************** *
 * e-graving.js - 0001 worker script                                          *
 * ************************************************************************** */

/* ** Setup ** ************************************************************** */
console.log('-- Setup --');
var d = SVG('#drawing');
var dw = parseInt(d.width().match(/[0-9]+/)[0]);
var dh = parseInt(d.height().match(/[0-9]+/)[0]);
console.log(`Canvas size: ${dw} x ${dh}`);
var defaults = {
  fill: { opacity: 0.0 },
  stroke: { color: 'orange', opacity: 1, width: 0.5 },
  perlin: {
    scale: {
      x: 50,
      y: 50
    }
  }
};

var resltn = 200;
var dws = dw/resltn;
var dhs = dh/resltn;

/* ** Let's go! ** ********************************************************** */
console.log('-- Coomputing --');
var nodes = [];
for(var x = -dws*10; x<dw+dws*10; x+=dws) {
  let curLine = nodes.push([]) -1;
  for(var y = -dhs*10; y<dh+dhs*10; y+=dhs) {
    nodes[curLine].push([x + perlin.get(x/defaults.perlin.scale.x,y/defaults.perlin.scale.y)*dws*10, y]);
  }
}

console.log('-- Drawing --');
for(var i = 0; i<nodes.length; i++) {
  var pathSpec = NGRVNG.qPathSpec(nodes[i]);
  var p = d.path(pathSpec);
  p.fill(defaults.fill);
  p.stroke(defaults.stroke);
}
/* ************************************************************************** */
