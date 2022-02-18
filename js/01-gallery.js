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
            .gallery__image {
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
                <div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </div>
                `;
        })
        .join('');
    // <div class="img-card">
    //                 <img
    //                     class="gallery__image"
    //                     src="${preview}"
    //                     alt="${description}"
    //                     data-source="${original}"
    //                 >
    //             </div>
}

function onImgClick(e) {
    e.preventDefault();

    const isImgEl = e.target.classList.contains('gallery__image');
    const selectedImg = e.target;

    if (!isImgEl) {
        return;
    }
    
    removeActiveClassFromImg();
    addActiveClassOnImg(selectedImg);
    createLightbox(selectedImg);
}

function removeActiveClassFromImg() {
    const currentActiveImg = document.querySelector('.gallery__image.is-active');

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

function createLightbox(selectedImg) {
    basicLightbox.create(`
        <img src="${selectedImg.dataset.source}" width="800" height="600">
    `).show();
}