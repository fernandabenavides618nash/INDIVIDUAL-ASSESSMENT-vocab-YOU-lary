// for merged promises

import { deleteSingleLanguage, getLanguageVocab, getSingleLanguage } from './languageData';
import { getSingleVocab, deleteVocab } from './vocabData';

const getVocabDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleVocab(firebaseKey).then((vocabObject) => {
    getSingleLanguage(vocabObject.language)
      .then((languageObject) => resolve({ ...vocabObject, languageObject }));
  }).catch(reject);
});

const getLanguageDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleLanguage(firebaseKey).then((languageObject) => {
    getLanguageVocab(languageObject.firebaseKey)
      .then((vocabObject) => resolve({ ...languageObject, vocabObject }));
  }).catch(reject);
});

const deleteLanguageVocabRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getLanguageVocab(firebaseKey).then((languageVocabArray) => {
    const deleteVocabPromises = languageVocabArray.map((vocab) => deleteVocab(vocab.firebaseKey));

    Promise.all(deleteVocabPromises).then(() => {
      deleteSingleLanguage(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export {
  getVocabDetails,
  getLanguageDetails,
  deleteLanguageVocabRelationship
};
