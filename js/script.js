let modal = document.querySelector('.main__modal');
let checker = document.querySelector('.custom-checkbox');
let login = document.querySelector('.login');
let password = document.querySelector('.password');
let enter = document.querySelector('.modal__enter');


let btn = document.querySelector('.info__btn').addEventListener('click', function (){
      modal.classList.add('active');
})

let modal_btn = document.querySelector('.modal__btn').addEventListener('click', function(){
      modal.classList.remove('active');
      login.value = ''
      password.value = ''
      if(checker.checked){
            checker.checked = false
      }
})

enter.addEventListener('click', function (){
      let array = [];
      if (login.value == ''){
            alert('Введите логин')
      }
      else {
            array.push(login.value)
      }
      if (password.value == ''){
            alert('Введите пароль')
      }
      else{
            array.push(password.value)
      }
      if (checker.checked){
            alert(array)
      }
})


