import { createLanguage, getLanguage, updateLanguage } from '../api/languageData';
import { getVocab, updateVocab, createVocab } from '../api/vocabData';
import { showLanguage } from '../pages/language';
import { showVocab } from '../pages/vocab';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCAB
    if (e.target.id.includes('submit-book')) {
      console.warn('CLICKED SUBMIT VOCAB', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#description').value,
        // image: document.querySelector('#image').value,
        language: document.querySelector('#language').value,
        language: document.querySelector('#author_id').value,
        favorite: document.querySelector('#sale').checked,
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab().then(showVocab);
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A VOCAB 
    if (e.target.id.includes('update-book')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED UPDATE VOCAB', e.target.id);
      console.warn(firebaseKey);
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#description').value,
        // image: document.querySelector('#image').value,
        language: document.querySelector('#language').value,
        language: document.querySelector('#author_id').value,
        favorite: document.querySelector('#sale').checked,
      };

      updateVocab(payload).then(() => {
        getVocab().then(showVocab);
      });
    }

    /*// FIXME: ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING A LANGUAGE
    if (e.target.id.includes('submit-author')) {
      const payload = {
        email: document.querySelector('#email').value,
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
      };

      createLanguage(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateLanguage(patchPayload).then(() => {
          getLanguage().then(showLanguage);
        });
      });
    }
    // FIXME:ADD CLICK EVENT FOR EDITING A LANGUAGE
    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        email: document.querySelector('#email').value,
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        favorite: document.querySelector('#favorite').checked,
        firebaseKey,
      };

      updateLanguage(payload).then(() => {
        getLanguagee().then(showLanguage);
      });
    }*/
  });
};

export default formEvents;
