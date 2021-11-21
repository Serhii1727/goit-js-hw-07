import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const picturesMarkup = createImgGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", picturesMarkup);

function createImgGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
            return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image"
                                src="${ preview }"
                                data-source="${original}"
                                alt="${description}"
                                />
                    </a>
                </div>`

        })
        .join(" ");
}



galleryContainer.addEventListener("click", onClick)

function onClick(event) {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return;
    }

    createLightBox(event.target.dataset.source)


}


function createLightBox(image) {
    const instance = basicLightbox.create(`
    <img src=
        "${image}" width="800" height="600">
`)

    instance.show()
}