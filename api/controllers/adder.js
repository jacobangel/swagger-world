"use strict";

function increment(req, res) {
  var params = req.swagger.params;
  var val = params.value.value || 0;
  res.json(val + 1);
}

function adder(req, res) {
  var params = req.swagger.params;
  req.json(params.a.value + params.b.value);
}

module.exports = {
  increment: increment,
  adder: adder
};
