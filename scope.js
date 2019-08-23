let x = 1;

function output(value) {
  return value;
}

function a() {
  let y = 2;
  return output(y);
}

function b() {
  let z = 3;
  return output(z);
}

//console.log(a());
//console.log(b());


function wrapperFunction() {
  let value = 1;

  subFunction1(value);
  subFunction2(value);
  subFunction3(value);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}
function subFunction3(value) {
  console.log(value);
}

subFunction3(3);