document.addEventListener("DOMContentLoaded", () => {
  fetchData("a");
});

const fetchData = (query) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.drinks) {
        data.drinks.forEach((item) => {
          const div = document.createElement("div");
          div.classList.add("col-4", "mt-5");
          const addToCartBtnId = `add-cart-${item.idDrink}`;

          div.innerHTML = `
            <div class="card shadow">
              <img
                src="${item.strDrinkThumb}"
                class="card-img-top"
                alt="${item.strGlass}"
              />
              <div class="card-body text-center">
                <h5 class="card-title"> ${item.strGlass}</h5>
                <h6 class="card-title">Category: ${item.strCategory}</h6>
                <p class="card-text">
                ${item.strInstructions.slice(0, 15)}...
                </p>
              </div>
              <div class="card-body d-flex justify-content-around">
                <button id="add-cart-${
                  item.idDrink
                }" type="button" class="btn btn-outline-secondary">
                  Add to Cart</button
                ><button
                  type="button"
                  class="btn btn-outline-success"
                  data-bs-toggle="modal"
                  data-bs-target="#${item.idDrink}"
                >
                  Details
                </button>

                <div
                  class="modal fade"
                  id="${item.idDrink}"
                  tabindex="-1"
                  aria-labelledby="${item.idDrink}Label"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="${item.idDrink}Label">
                          ${item.strGlass}
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <img
                          src="${item.strDrinkThumb}"
                          style="height: 18rem; object-fit: cover"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="mt-3 ms-3">
                          <h4 class="fs-5 fw-bold">Details:</h4>
                          <h6 class="">Category: <strong>${
                            item.strCategory
                          }</strong></h6>
                          <h6 class="">Alcoholic: <strong>${
                            item.strAlcoholic
                          }</strong></h6>
                          <p>
                           ${item.strInstructions.slice(0, 120)}</p>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>`;

          cardContainer.appendChild(div);
          const addCart = document.getElementById(`add-cart-${item.idDrink}`);
          addCart.addEventListener("click", () => {
            addToCart(item);
          });
          
        });
      } else {
        const div = document.createElement("div");
        div.innerHTML = `<p class="text-danger fs-2">No items found..!</p>`;
        cardContainer.appendChild(div);
      }
    });
};

const handle_clk = () => {
  const cardContainer = document.getElementById("card-container");
  const input = document.getElementById("searchVal");
  const val = input.value;

  if (val == "") {
    cardContainer.innerHTML = `<p class="text-danger mt-5 fs-2">Please Enter a valid item name..!</p>`;
    return;
  }
  fetchData(val);
  input.value = "";
};

const addToCart = (item) => {
  // console.log("card click from", item);

  const cart_table_body = document.getElementById("cart-table-body");
  const cart_total = document.getElementById("cart-total-item");

  let cur_cart_cnt = cart_table_body.children.length + 1;
  const tr = document.createElement("tr");
  tr.classList.add("col-3");
  if (cur_cart_cnt <= 7) {
    cart_total.innerText = cur_cart_cnt;
    tr.innerHTML = `
                  <td>${cur_cart_cnt}</td>
                  <td>
                    <img
                      src="${item.strDrinkThumb}"
                      width="50"
                      class="rounded-circle"
                    />
                  </td>
                  <td>
                    <strong>${item.strGlass}</strong>
                    <br />
                    <small class="text-muted">Category: ${item.strCategory}</small>
                  </td>
          `;
    cart_table_body.append(tr);
    const btn = document.getElementById(`add-cart-${item.idDrink}`);
    btn.innerText = "Already added";
    btn.disabled = true;
    btn.classList.remove("btn-outline-secondary");
    btn.classList.add("btn-secondary");
  } else {
    alert("You cannot add more than 7.");
  }
};
