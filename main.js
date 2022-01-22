const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});


const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', (e) => {
  e.preventDefault()
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  fetch('https://tiendavirtualmern.herokuapp.com/api/users', {
    method: 'POST',
    body: JSON.stringify({ name: 'Fernand1427H', email: 'fernandofloreszotar@gmail.com', password: 'fer' + 150903 }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error(error)
    })
})
