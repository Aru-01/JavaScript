var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let big_name = friends[0];

for (let i = 1; i < friends.length; i++) {
  const element = friends[i];
  if (element.length > big_name.length) {
    big_name = element;
  }
}

console.log(big_name);
