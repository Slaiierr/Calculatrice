let total = 0;

function addition(a) {
  total += a;
  return total;
}

function soustraction(a) {
  total -= a;
  return total;
}

function multiplication(a) {
  if (total === 0) {
    total = a
  } else {
    total *= a;
  }
  return total;
}

function division(a) {
  if (total === 0) {
    total = a
  } else {
    total /= a;  
  }
  return total;
}

function clear() {
  total = 0;
  return total;
}