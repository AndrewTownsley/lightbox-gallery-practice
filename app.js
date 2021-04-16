
// const lightbox = document.createElement('div');
// lightbox.id = 'lightbox';
// document.body.appendChild(lightbox);
const lightbox = document.getElementById('lightbox');

const img = document.querySelectorAll('#img');
console.log(img);
img.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const modalImg = document.createElement('img');
    modalImg.classList.add('modal-img');
    modalImg.src = image.src;
    lightbox.appendChild(modalImg);
    
    while(lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(modalImg);
  })
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
})