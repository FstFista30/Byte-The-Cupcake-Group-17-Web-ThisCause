var swiper = new Swiper(".slide-content", {
    slidesPerView: 2.7,
    spaceBetween: 5,
    freeMode: true,
    centerSlide : 'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
  });

// window scroll


// popup create
document.querySelectorAll('#my-profile-picture').forEach(AllProfile => {
  AllProfile.addEventListener('click',()=>{
    document.querySelector('.active-popup').style.display='flex'

  })
})
document.querySelectorAll('.close').forEach(AllCloser => {
  AllCloser.addEventListener('click',()=>{
    document.querySelector('.active-popup').style.display='none'
    document.querySelector('.active-komentar-popup').style.display='none'
  })
})
document.querySelector('#profile-upload').addEventListener('change',()=>{
  document.querySelectorAll('#my-profile-picture img').forEach(AllMyProfileImg=>{
      AllMyProfileImg.src=URL.createObjectURL(document.querySelector('#profile-upload').files[0])
  })
})

// popup komentar
document.querySelector('#my-komentar').addEventListener('click',()=>{
    document.querySelector('.active-komentar-popup').style.display='flex'
  })

