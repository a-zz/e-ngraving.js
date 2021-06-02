/* ************************************************************************** *
 * n-graving.js - template worker script                                      *
 * ************************************************************************** */

/* ** Setuo ** ************************************************************** */
console.log('-- Setup --');
var d = SVG('#drawing');
var dw = parseInt(d.width().match(/[0-9]+/)[0]);
var dh = parseInt(d.height().match(/[0-9]+/)[0]);
console.log(`Canvas size: ${dw} x ${dh}`);

/* ** Let's go! ** ********************************************************** */
console.log('-- Coomputing --');
// Nothing to do here

console.log('-- Drawing --');
var txtUrl = d.text(function(add) {
  var logo = add.tspan('https://github.com/a-zz/e-ngraving.js');
  logo.dx(25);
  logo.dy(25);
  logo.attr('font-family', 'monospace');
  logo.attr('font-weight', 'bold');
  logo.attr('cursor', 'pointer');
  logo.stroke({ color: 'orange', opacity: 1, width: 0.5 });
  logo.fill('transparent');
  logo.click(() => {
    window.location.href = 'https://github.com/a-zz/svgen.js';
  });
});
/* ************************************************************************** */
