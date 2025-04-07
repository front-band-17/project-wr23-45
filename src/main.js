import { fetchPortfolio } from './js/portfolio-api';
import {
  renderGalleryMarkup,
  updateGallery,
  renderError,
  renderNotFound,
} from './js/render-reviews.js';
import initFormHandler from './js/form-handler.js';

import initCovers from './js/covers.js';
import './js/projects.js';
import initFaq from './js/faq.js';

import initProjectSwiper from './js/projects.js';

initCovers();
initFormHandler();
initFaq();
initProjectSwiper();

(async () => {
  const response = await fetchPortfolio();
  try {
    const ul = document.querySelector('.reviews-list');
    updateGallery(ul, renderGalleryMarkup(response));
  } catch (error) {
    renderError();
    renderNotFound();
  }
})();
