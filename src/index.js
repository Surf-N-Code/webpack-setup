import { getJoke } from './joke';
// import './styles/main.scss';
import './styles/test.css';
const text = document.createElement('span');
text.innerText = getJoke();
text.classList = 'text-red';
document.body.appendChild(text);
