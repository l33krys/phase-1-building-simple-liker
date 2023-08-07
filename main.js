// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like-glyph')

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener('click', (e) => {
    mimicServerCall()
    .then(() => {})
    .catch(() => {
      let errorMsg = document.querySelector('#modal')
      errorMsg.classList.remove('hidden')
      setTimeout(() => {errorMsg.classList.add('hidden')}, 3000)
    })
    if (e.target.classList.contains('activated-heart')) {
      e.target.classList.remove('activated-heart')
    } else {
      e.target.classList.add('activated-heart')
    }
    
  });
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
