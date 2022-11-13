import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const imagesMarkup = createImageGallery(galleryItems);

galleryList.insertAdjacentHTML("beforeend", imagesMarkup);

function createImageGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__list">
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</li>`;
    })
    .join("");
}

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  overlayOpacity: 0.7,
  scrollZoom: false,
});
