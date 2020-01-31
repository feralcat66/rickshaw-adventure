import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreHp from './score-hp.js';
import scoreRupees from './score-rupees.js';
import { hpMessage, aliveRupeeMessage, deadRupeeMessage } from './messages.js';

loadProfile();

const user = getUser();
const storyDisplay = document.getElementById('story-display');

const hpResult = scoreHp(user.hp);
const rupeeResult = scoreRupees(user.rupees);
const hPMessage = hpMessage[hpResult];

let rupeeMessages = null;
if (hpResult === 'dead') {
    rupeeMessages = deadRupeeMessage;
}
else {
    rupeeMessages = aliveRupeeMessage;
}
const rupee1Message = rupeeMessages[rupeeResult];

let story = 'After your rickshawin\' days ended, ';
story += user.name + ' ' + user.person + ', ';
story += hPMessage + ' and' + rupee1Message + '.';

storyDisplay.textContent = story;