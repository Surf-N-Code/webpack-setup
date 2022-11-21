import { getJoke } from './joke';
import './styles/main.scss';
import './assets/laughing.svg';
import laughing from './assets/laughing.svg';
const text = document.createElement('span');
text.innerText = getJoke();
text.classList = 'text-red';
document.body.appendChild(text);

const laughImg = document.createElement('img');
laughImg.src = laughing

document.body.appendChild(laughImg);
