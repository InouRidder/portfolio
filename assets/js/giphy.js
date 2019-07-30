'use strict'

function replaceImgOf(object, newImg) {
  object.src = newImg.images.original.url
  return 1;
}

function setGifyListener() {
  var searcher = document.getElementById('gifySearcher');
  searcher.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      giphyfy(e.currentTarget.value)
    }
  })
}

function giphyfy(q) {
  var images = document.querySelectorAll(".giphy_img");
  var api_key = "bjbRSm8Wz7P9V9KASJqpZ9QSREIv59O7"
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}`)
  .then(data => data.json())
  .then(data => {
    data = data.data
    images.forEach((img, index) => {
      replaceImgOf(img, data[index])
    })
    }
  )
}


setGifyListener();
