const monthlySavings = (arr, num) => {
  if (Array.isArray(arr) == false || typeof num !== "number") {
    return "invalid input";
  }

  let income = 0;

  for (i of arr) {
    if (i < 3000) {
      income += i;
    } else {
      income += i - i * 0.2; //3k er upore 20% tax bad diya
    }
  }
  income -= num;
  if (income >= 0) {
    return income;
  }else{
    return "earn more"
  }
};

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings( 100,[1000,2000,800,50000]));
