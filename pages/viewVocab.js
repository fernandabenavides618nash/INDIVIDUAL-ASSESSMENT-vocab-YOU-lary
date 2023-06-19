import clearDOM from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const viewVocab = (obj) => {
  clearDOM();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <img src=${obj.image} alt=${obj.title} style="width: 300px;">
     <div class="mt-5">
       <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-book--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h5>${obj.title} by ${obj.languageObject.language} ${obj.languageObject.definition} ${obj.languageObject.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     Author Email: <a href="mailto:${obj.languageObject.language}">${obj.authorObject.language}</a>
     <p>${obj.definition || ''}</p>
     <hr>
     <p>${obj.favorite ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> 
       $${obj.firebaseKey}` : `$${obj.firebaseKey}`}</p>      
      </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewVocab;
