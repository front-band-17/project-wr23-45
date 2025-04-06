import './js/header.js';
import { fetchPortfolio } from './js/portfolio-api';
import {
  renderGalleryMarkup,
  updateGallery,
  renderError,
  renderNotFound,
} from './js/render-reviews.js';
import initFormHandler from './js/form-handler.js';

import InitAboutMe from './js/about-me';
import initCovers from './js/covers.js';
import initFaq from './js/faq.js';

initCovers();
initFormHandler();
initFaq();


// Init portfolio
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

// Init accordions
InitAboutMe();