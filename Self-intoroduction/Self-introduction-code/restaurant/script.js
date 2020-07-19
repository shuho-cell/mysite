const my_picture_src = ["./images/dan-gold-4_jhDO54BYg-unsplash.jpg", "./images/lily-banse--YHSwy6uqvk-unsplash.jpg", "./images/thomas-tucker-MNtag_eXMKw-unsplash.jpg"]
let num = -1;

function slideshow () {
  if (num===2) {
    num =0;
  }else{
    num ++
  }
  document.getElementById("my_picture").src = my_picture_src[num];
}
setInterval(slideshow, 3000);
