import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const headRef = document.querySelector('head');
const galleryRef = document.querySelector('.gallery');
const imgStyles = createImgStyles();
const GalleryCardsMurkup = createGalleryCardsMarkup(galleryItems);

headRef.insertAdjacentHTML('beforeend', imgStyles);

galleryRef.insertAdjacentHTML("beforeend", GalleryCardsMurkup);

galleryRef.addEventListener('click', onImgClick);

function createImgStyles() {
    return `
        <style>
            .img-item {
                width: 100%;
                height: 100%;
                object-fit: cover;
            } 
        </style>
        `;
}

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems
        .map(({preview, original, description, }) => {
            return `
                <div class="img-card">
                    <img
                        class="img-item"
                        src="${preview}"
                        alt="${description}"
                        data-original-img="${original}"
                    >
                </div>
                `;
        })
        .join('');
}

function onImgClick(e) {
    const isImgEl = e.target.classList.contains('img-item');
    const selectedImg = e.target;

    if (!isImgEl) {
        return;
    }
    
    removeActiveClassFromImg();
    addActiveClassOnImg(selectedImg);

    console.log(selectedImg.alt);
}

function removeActiveClassFromImg() {
    const currentActiveImg = document.querySelector('.img-item.is-active');

    if (currentActiveImg) {
        currentActiveImg.classList.remove('is-active');
    }

    // Краткая замена предыдущему блоку.
    // Если currentActiveImg = null || undefined правая часть не выполнится.
    // currentActiveImg?.classList.remove('is-active');
}

function addActiveClassOnImg(selectedImg) {
    selectedImg.classList.add('is-active')
}

//console.log()