// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const liker = document.querySelector(".like-glyph");
liker.addEventListener("click", () => {
  const full = liker.classList.contains("activated-heart");
  mimicServerCall()
    .then(function (response) {
      if (full) {
        liker.innerHTML = EMPTY_HEART;
        liker.classList.remove("activated-heart");
      } else {
        liker.innerHTML = FULL_HEART;
        liker.classList.add("activated-heart");
      }
    })
    .catch(function (error) {
      const errorModal = document.querySelector(".error-modal");
      errorModal.classList.remove("hidden");
      const errorMessage = errorModal.querySelector("#error-message");
      errorMessage.textContent = error;
      setTimeout(function () {
        errorModal.classList.add("hidden");
      }, 3000);
    });
});


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
