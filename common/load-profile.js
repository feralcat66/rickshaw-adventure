import { getUser } from '../data/api.js';
import isDead from './death.js';

function loadProfile() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const rupees = document.getElementById('rupees');
    const user = getUser();

    if (!user) {
        window.location = '../';
    }

    name.textContent = user.name;
    rupees.textContent = user.rupees; 
    avatar.src = '../assets/avatars/' + user.person + '.jpg';

    if (isDead(user)) {
        hp.textContent = 'You died, son.';
    }
    else {
        hp.textContent = user.hp;
    }
}
export default loadProfile;