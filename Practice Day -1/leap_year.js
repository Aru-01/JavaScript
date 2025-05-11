const leap_year = (year) => {
  if (year % 400 == 0) {
    console.log(`${year} is a Leap Year`);
  } else if (year % 4 == 0 && year % 100 != 0) {
    console.log(`${year} is a Leap Year`);
  } else {
    console.log(`${year} is not a Leap Year`);
  }
};


leap_year(2018)
leap_year(2000)
leap_year(1900)