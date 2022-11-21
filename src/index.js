import { getJoke } from './joke';
import './styles/main.scss';
const text = document.createElement('span');
text.innerText = getJoke();
text.classList = 'text-red';
document.body.appendChild(text);
