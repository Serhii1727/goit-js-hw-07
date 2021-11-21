import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const picturesMarkup = createImgGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", picturesMarkup);

function createImgGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>`

        })
        .join(" ");
}


const lightbox = new SimpleLightbox('.gallery a', {

    captionSelector: "img",
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
});

lightbox.open();