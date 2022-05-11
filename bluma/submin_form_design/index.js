const submitEvent = (e)=>{
  e.preventDefault()

  const name = document.querySelector('#nameInput').value
  const username = document.querySelector('#nicknameInput').value
  const email = document.querySelector('#emailInput').value
  const hobby = document.querySelector('#hobbySelectBox').value
  const pass = document.querySelector('#passwordInput').value
  const passConform = document.querySelector('#passwordConfirmInput').value

  if (pass!==passConform) {
    alert('비밀번호가 일치하지 않습니다.')
  }
  else{
    alert(`
    이름 : ${name}
    닉네임 : ${username}
    이메일 : ${email}
    취미 : ${hobby}
    비밀번호 : ${pass}`)
  }
}





const btn = document.querySelector('#submitButton')

btn.addEventListener('click',submitEvent)
