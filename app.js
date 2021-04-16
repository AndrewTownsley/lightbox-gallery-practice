
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const img = document.querySelectorAll('#img');
console.log(img);
img.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
  })
})