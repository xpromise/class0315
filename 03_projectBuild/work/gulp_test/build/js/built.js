"use strict";

(function () {
  function add(x, y) {
    return x + y;
  }
  console.log(add(10, 20));
  console.log(add(20, 20));
  console.log(add(30, 20));
  console.log(add(40, 20));
  console.log(add(50, 20));
})();
"use strict";

(function () {
  var result = [1, 2, 3, 4].map(function (item) {
    return item + 10;
  });
  console.log(result);
})();