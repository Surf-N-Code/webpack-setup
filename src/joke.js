import faker from 'faker';

export function getJoke() {
  const jokes = [];

  for (let i = 0; i < 10; i++) {
    const jokeText = faker.fake("{{hacker.phrase}}");
    jokes.push(jokeText);
  }

  return jokes[Math.floor(Math.random() * 10)];
}
