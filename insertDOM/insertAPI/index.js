

const content = document.querySelector('#productList')
useAPI()
async function useAPI() {
  // const res = await fetch('`https://${window.location.hostname}:8190/product`')
  // const data = await res.json()
  const data = {
      "title": "예쁜 니트입니다.",
      "description": "편하게 입을 수 있으며, 고급스러운 느낌을 줍니다.",
      "price": "18,900원",
      "image": "image/mc-1.jpg"
    }
  const { title, description, price, image } = data
  content.insertAdjacentHTML('beforeend', `
<div class="box product-item">
    <div>
        <figure>
            <img id="productImage" src="${image}" alt="clothes-image" />
        </figure>
    </div>
    <div class="description">
        <div class="detail">
            <h1 id="productTitle">${title}</h1>
            <p id="productDescription">${description}</p>
        </div>
        <div class="price">
            <h1 id="productPrice">${price}</h1>
        </div>
    </div>
</div>
`)
}


