import { galleryItems } from "./gallery-items.js";

const instance = basicLightbox.create(`
    <div class="modal">
    <img class="modal-image" src=""/>
    </div>
`);

const refs = {
  frame: document.querySelector(`.gallery`),
  modal: document.querySelector(`.modal`),
  modalImage: instance.element().querySelector(`.modal-image`),
};

const GetItems = ({ preview, original, description }) =>
  ` <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;

const render = () => {
  const Item = galleryItems.map(GetItems);
  // refs.image.innerHTML = ``;
  refs.frame.insertAdjacentHTML(`beforeend`, Item.join(``));
};

const viewModal = (e) => {
  if (e.target === e.currentTarget) return;

  const linkImage = e.target.dataset.source;
  refs.modalImage.src = linkImage;
  instance.show();
};

const handelFrameClick = (e) => {
  e.preventDefault();

  const parent = e.target.closest(`.gallery`);

  viewModal(e);
};

render();

refs.frame.addEventListener(`click`, handelFrameClick);

refs.modalImage.addEventListener(`click`, instance.close);
