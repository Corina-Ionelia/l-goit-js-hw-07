import { galleryItems } from './gallery-items.js';

// Selectează containerul galeriei
const galleryContainer = document.querySelector('.gallery');

// Generează markup-ul pentru galerie și adaugă-l în container
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// Inițializează SimpleLightbox
let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

function createGalleryMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}" />
            </a>
        </li>`;
        })
        .join('');
}