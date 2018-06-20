//定义模块的内容
function add(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}

//暴露模块内容
module.exports = {
  add,
  mul
};
