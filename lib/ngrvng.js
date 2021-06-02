/* ************************************************************************** *
 * e-graving.js - Common utilities                                            *
 * ************************************************************************** */

var NGRVNG = NGRVNG || {};
(function(context) {

  /* 
   * Builds a quadratic path spec string from an array of nodes.
   * Args:
   *  nodes ([]) An array of absolute [x, y] nodes.
   * Returns:
   *  (string) The SVG path spec.
   */
  context.qPathSpec = function(nodes) {
    
      let pathSpec = '';
      
      for(var i = 0; i<nodes.length; i++) {
        var x = nodes[i][0];
        var y = nodes[i][1];
        if(i==0)
          pathSpec += 'M';
        else if(i==1)
          pathSpec += 'Q';
        else if(i==nodes.length-1)
          pathSpec += 'T';
        pathSpec += `${x},${y} `;
      }
      
      return pathSpec;
  }
})(NGRVNG);
/* ************************************************************************** */
