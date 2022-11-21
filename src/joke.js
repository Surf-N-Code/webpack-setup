import faker from 'faker';

export function getJokes() {
  const jokes = [];

  for (let i = 0; i < 10; i++) {
    const jokeText = faker.fake("{{hacker.phrase}}");
    jokes.push(jokeText);
  }

  return jokes[Math.floor(Math.random() * 10)];
}
