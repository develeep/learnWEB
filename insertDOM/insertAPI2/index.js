const datas = [
  {
    "title": "남성 니트",
    "description": "어두운 계열로, 편하게 입을 수 있으며, 고급스러운 느낌을 줍니다.",
    "price": "18,900원",
    "image": "image/mc-1.jpg"
  },
  {
    "title": "남성 정장",
    "description": "너무 부담스럽지 않고, 입기 편한 정장입니다.",
    "price": "198,700원",
    "image": "image/mc-2.jpg"
  },
  {
    "title": "예쁜 니트입니다.",
    "description": "얇은 소재로 봄, 가을에 어울려요",
    "price": "32,000원",
    "image": "image/wc-1.jpg"
  },
  {
    "title": "봄날에 어울리는 원피스입니다.",
    "description": "현재 가장 인기가 많은 제품이에요.",
    "price": "25,000원",
    "image": "image/wc-2.jpg"
  }
]
const content = document.querySelector('#productList')
const create = async()=>{
  // const res = await fetch(`https://${window.location.hostname}:8190/product`)
  // const datas = await res.json();
  datas.forEach(({title,description,price,image})=>{
    content.insertAdjacentHTML('beforeend',`
    <div class="box product-item">
        <div>
            <figure>
                <img src="${image}" alt="clothes-image" />
            </figure>
        </div>
        <div class="description">
            <div class="detail">
                <h1>${title}</h1>
                <p>${description}</p>
            </div>
            <div class="price">
                <h1>${price}</h1>
            </div>
        </div>
    </div>
    `)
  })
  
}
create();