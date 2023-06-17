import { getLanguage } from '../../api/languageData';
import renderToDOM from '../../utils/renderToDom';

const selectLanguage = (authorId) => {
  let domString = `<label for="author">Select an Author</label>
    <select class="form-control" id="author_id" required>
    <option value="">Select an Author</option>`;

  getLanguage().then((languageArray) => {
    languageArray.forEach((language) => {
      domString += `
          <option 
            value="${language.uid}" 
            ${uid === language.uid ? 'selected' : ''}>
              ${language.language} ${language.uid}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-author', domString);
  });
};

export default selectLanguage;
