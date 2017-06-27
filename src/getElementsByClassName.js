// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var matches = [];
  var treeClimb = function (node) {
    if (node.className.includes(className)) {
      matches.push(node);
    }
    _.each(node.children, (child)=>{
      treeClimb(child);
    });
  };
  treeClimb(document.body);
  return matches;
};
