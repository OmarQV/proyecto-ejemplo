const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
   if(e.target === button) {
      if(username.value === "omar@gmail.com" && password.value === "123456") {
         e.preventDefault();
         window.location.href = "index.html";
      }
   }
})