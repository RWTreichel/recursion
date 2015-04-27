// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var results = [];
  var root = [document.body];

  // Iterates over an array of elements recursively, adding
  // any elements with className to the results array.
  var inspectChildren = function(elements) {
    var children;

    _.each(elements, function(el) {
      children = el.childNodes;

      // If the element possesses className, add it to results.
      if (_.contains(el.classList, className)) {
        results.push(el);
      }

      // If the element has any child nodes, inspect each of its children
      // recursively using inspectChildren.
      if (children.length !== 0) {
        inspectChildren(children);
      }
    });
  };

  // Begin inspection with the document's body element.
  inspectChildren(root);

  return results;
};
