import clearDOM from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const emptyLanguage = () => {
  const domString = '<h1>No Language</h1>';
  renderToDOM('#store', domString);
};

const showLanguage = (array) => {
  clearDOM();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add Language</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.language} ${item.definition}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.firebaseKey}</h6>
        <p class="card-text bold">${item.favorite ? '<span class="badge badge-info sale-badge"><i aria-hidden="true"></i> Favorite</span>' : ''}</p>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-author-btn--${item.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${item.firebaseKey}"></i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showLanguage, emptyLanguage };
