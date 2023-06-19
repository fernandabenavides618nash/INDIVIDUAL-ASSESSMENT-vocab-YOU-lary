import { getLanguage } from '../../api/languageData';
import renderToDOM from '../../utils/renderToDom';

const selectLanguage = (language) => {
  let domString = `<label for="author">Select Language</label>
    <select class="form-control" id="language" required>
    <option value="">Select Language</option>`;

  getLanguage().then((languageArray) => {
    languageArray.forEach((language) => {
      domString += `
          <option 
            value="${language.firebaseKey}" 
            ${language === language.firebaseKey ? 'selected' : ''}>
              ${language.language} ${language.firebaseKey}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-author', domString);
  });
};

export default selectLanguage;
