import { deleteVocab, getVocabs, getSingleVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import { getLanguage, getSingleLanguage } from '../api/languageData';
import { showLanguage } from '../pages/language';
import addBookForm from '../components/forms/addVocabForm';
import addLanguageForm from '../components/forms/addLanguageForm';
import { getVocabDetails, getLanguageDetails, deleteLanguageVocabRelationship } from '../api/mergedData';
import viewVocab from '../pages/viewVocab';
import viewLanguage from '../pages/viewLanguage';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE VOCAB', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        console.warn(e.target.id.split('--'));

        deleteVocab(firebaseKey).then(() => {
          getVocabs().then(showVocab);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A VOCAB
    if (e.target.id.includes('add-book-btn')) {
      addVocabForm();
    }

    // TODO: CLICK EVENT EDITING/UPDATING A VOCAB
    if (e.target.id.includes('edit-book-btn')) {
      // console.warn('EDIT BOOK', e.target.id);
      // console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => addBookForm(vocabObj));
    }
    // TODO: CLICK EVENT FOR VIEW VOCAB DETAILS
    if (e.target.id.includes('view-book-btn')) {
      console.warn('VIEW VOCAB', e.target.id);
      console.warn(e.target.id.split('--'));
    }

    // FIXME: ADD CLICK EVENT FOR DELETING A LANGUAGE
    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // console.warn('DELETE LANGUAGE', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        // console.warn(e.target.id.split('--'));

        deleteLanguageVocabRelationship(firebaseKey).then(() => {
          getLanguage().then(showLanguage);
        });
      }
    }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING A LANGUAGE
    if (e.target.id.includes('add-author-btn')) {
      addLanguageForm();
    }
    // FIXME: ADD CLICK EVENT FOR EDITING/UPDATING A LANGUAGE

    if (e.target.id.includes('update-author-btn')) {
      // console.warn('Clicked right btn', e.target.id);
      // console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');

      getSingleLanguage(firebaseKey).then((languageObj) => addLanguageForm(languageObj));
    }

    if (e.target.id.includes('view-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getVocabDetails(firebaseKey).then(viewVocab);
    }

    if (e.target.id.includes('view-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getLanguageDetails(firebaseKey).then(viewLanguage);
    }
  });
};

export default domEvents;
