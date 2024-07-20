import { galleryItems } from './gallery-items.js';

// Selectează containerul galeriei
const galleryContainer = document.querySelector('.gallery');

// Generează markup-ul pentru galerie și adaugă-l în container
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// Adaugă event listener pentru click pe elementele galeriei
galleryContainer.addEventListener('click', onGalleryItemClick);

function createGalleryMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}" />
            </a>
        </li>`;
        })
        .join('');
}

function onGalleryItemClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const largeImageURL = event.target.dataset.source;
    openModal(largeImageURL);
}

function openModal(imageUrl) {
    const instance = basicLightbox.create(`
        <img src="${imageUrl}" width="800" height="600">
    `);

    instance.show();

    // Închide modalul când se apasă tasta Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            instance.close();
        }
    });
}