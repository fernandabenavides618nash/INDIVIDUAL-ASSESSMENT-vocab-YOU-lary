import logoutButton from '../components/logoutButton';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import { showCards } from '../pages/cards';
import { getCards, deleteCard } from '../api/cardData';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar(user);
  navigationEvents(user);
  deleteCard(user);
  logoutButton(user);

  getCards(user.uid).then((cards) => showCards(cards));
};

export default startApp;