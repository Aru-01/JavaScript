const handle_clk = () => {
  const input = document.getElementById("searchVal");
  const val = input.value;

  const cardContainer = document.getElementById("container");
  cardContainer.innerHTML = "";

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`).then(
    (res) =>
      res.json().then((data) => {
        if (data.meals) {
          // console.log(data.meals);
          data.meals.forEach((item) => {
            const div = document.createElement("div");
            div.classList.add("col-3");

            const card = document.createElement("div");
            card.className = "card";
            card.style.cursor = "pointer";

            card.innerHTML = `
            <img
              src="${item.strMealThumb}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title">
               ${item.strMeal}
              </h3>
              <p class="card-text">
              ${item.strInstructions.slice(0, 50)}...
              </p>
            </div>
          `;
            card.addEventListener("click", () => card_clk(item));
            div.appendChild(card);
            cardContainer.appendChild(div);
          });
        } else {
          const div = document.createElement("div");
          div.innerHTML = `<p class="text-danger fs-2">No items found..!</p>`;
          cardContainer.appendChild(div);
        }
      })
  );
  input.value = "";
};

const card_clk = (item) => {
  // console.log("card click from", id);
  const cart_container = document.getElementById("cart-container");
  const div = document.createElement("div");
  div.classList.add("col-3");
  div.innerHTML = `
            <div class="card"  >
            <img
              src="${item.strMealThumb}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title">
               ${item.strMeal}
              </h3>
              <p class="card-text">
              ${item.strInstructions.slice(0, 50)}...
              </p>
            </div>
          </div>
          `;
  cart_container.append(div);
};
