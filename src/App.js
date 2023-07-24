import './App.css';
import FlashCards from './FlashCards';

const App = () => {
  const cards = {
    reviewDate: [],
    words: [
      {
        id: 1,
        word: 'Benevolent',
        definition: 'Kindly and charitable',
        example: 'The benevolent woman donated money to the orphanage.',
        attempt: 0,
      },
      {
        id: 2,
        word: 'Ephemeral',
        definition: 'Lasting for a very short time',
        example: 'The beauty of the cherry blossoms is ephemeral, lasting only a few days.',
        attempt: 0,
      },
      {
        id: 3,
        word: 'Quixotic',
        definition: 'Exceedingly idealistic; unrealistic and impractical',
        example: 'His quixotic quest for a world without war seemed impossible.',
        attempt: 0,
      },
    ]
  }

  // You need a list of dates starting from now.
  //  This is where you start the learning
  return (
    <div className="App">
      <header className="App-header">
        <FlashCards cards={cards.words}
        // reviewDate={reviewDate} 
        />
      </header>
    </div>
  );
}

export default App;
