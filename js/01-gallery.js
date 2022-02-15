import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const headRef = document.querySelector('head');
const galleryRef = document.querySelector('.gallery');
const galleryStyles = headRef.insertAdjacentHTML('beforeend',
    `<style>
       .imgItemList {
           width: 100%;
           height: 100%;
           object-fit: cover;
       } 
    </style>`
)

function galleryMarkup(galleryItems) {
    const markup = galleryItems
        .map((item, index) =>
            `<li class="list-item" name="previewImage-${index + 1}">
            <img class="imgItemList" src="${item.preview}" alt="${item.description}">
            </li>`)
        .join("");
    
    galleryRef.insertAdjacentHTML("beforeend", markup);
}
galleryMarkup(galleryItems);

