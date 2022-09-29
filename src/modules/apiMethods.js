import { inject } from "vue";

// post a product
async function postProduct(productData) {
  const response = await fetch(`${inject("api")}/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  return response.json();
}

// delete one product by id
const deleteProductById = async (productId) => {
  const response = await fetch(`${inject("api")}/product/${productId}`, {
    method: "DELETE",
  });
};

export { postProduct, deleteProductById };
