//Declaração do Array
var array = [];

for (let i = 0; i < 120; i++) {
  if (primos(i)) array.push(i) 
}

console.log(array);

function primos(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0)
      return false;
    }

  return true;
}