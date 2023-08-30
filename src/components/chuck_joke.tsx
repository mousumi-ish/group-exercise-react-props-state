import Joke from "../joke";
interface ChuckJokeProps {
  id: number;
  joke: string;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ id, joke }) => (
  <p>
    key={id}
    {" : "}
    {joke}
  </p>
);

export default ChuckJoke;
