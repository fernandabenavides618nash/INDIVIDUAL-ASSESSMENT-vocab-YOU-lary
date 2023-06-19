import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDOM';
import selectLanguage from './selectLanguage';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-book'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocabulary</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="word" value="${obj.tittle || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Definition" id="description" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" value="${obj.image || ''}" required>
      </div>
      <div class="form-group">
        <label for="price">Language</label>
        <input type="text" class="form-control" id="price" placeholder="Language" value="${obj.language || ''}" required>
      </div>
      <div class="form-group" id="select-author">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="sale" ${obj.favorite ? 'checked' : ''}>
        <label class="form-check-label" for="sale">Favorite?</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocab
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectLanguage(`${obj.language || ''}`);
};

export default addVocabForm;
