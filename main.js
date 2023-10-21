
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  
  const posts = document.querySelectorAll('.media-post');
  posts.forEach(post => {
    const like = post.querySelector('.like');
    
    like.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          if (like.classList.contains('activated-heart')) {
            like.classList.remove('activated-heart');
            like.innerText = EMPTY_HEART;
          } else {
            like.classList.add('activated-heart');
            like.innerText = FULL_HEART;
          }
        })
        .catch((error) => {
          modal.classList.remove('hidden');
          const modalMessage = document.getElementById('modal-message');
          modalMessage.innerText = error;
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});



function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
