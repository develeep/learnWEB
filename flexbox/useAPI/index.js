// const get = async ()=>{
//   const res = await fetch(`https://${window.location.hostname}:8190/product`)
//   const result = await res.json()
//   const {title,description,price,image} = result
//   document.querySelector('#productImage').src = './'+image
//   document.querySelector('#productTitle').innerHTML = title
//   document.querySelector('#productDescription').innerHTML = description
//   document.querySelector('#productPrice').innerHTML = price

// }
// 똑같음
const fetch_data = {
  "title": "예쁜 니트입니다.",
  "description": "편하게 입을 수 있으며, 고급스러운 느낌을 줍니다.",
  "price": "18,900원",
  "image": "clothes.jpg"
}
const get = ()=>{
  const {title,description,price,image} = fetch_data
  document.querySelector('#productImage').src = './'+image
  document.querySelector('#productTitle').innerHTML = title
  document.querySelector('#productDescription').innerHTML = description
  document.querySelector('#productPrice').innerHTML = price
}
get();