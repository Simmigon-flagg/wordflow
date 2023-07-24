import React, { useState } from 'react';

const FlashCards = ({ cards }) => {
  const [vocabularyList, setVocabularyList] = useState(cards);

  const [randomWord, setRandomWord] = useState(null);

  const [showDefinition, setShowDefinition] = useState(false);

  const toggleDefinitionVisibility = () => {
    setShowDefinition((prevValue) => !prevValue);
  };
  const pickRandomWord = () => {
    const availableWords = vocabularyList.filter((word) => word.attempt < 3);
    if (availableWords.length === 0) {

      setRandomWord(null); // No more words available, so reset randomWord to null
      return; // Do nothing if all words have reached the maximum attempts
    }

    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const selectedWord = { ...availableWords[randomIndex], attempt: availableWords[randomIndex].attempt + 1 };
    setVocabularyList((prevList) =>
      prevList.map((word) => (word.id === selectedWord.id ? selectedWord : word))
    );
    setRandomWord(selectedWord);

  };

  const resetAttempts = () => {

    const availableWords = vocabularyList.filter((word) => word.attempt <= 3);

    if (availableWords.length === 0 && randomWord.attempt !== 3) {
      setRandomWord(null); // No more words available, so reset randomWord to null

      return; // Do nothing if all words have reached the maximum attempts
    }

    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const selectedWord = { ...availableWords[randomIndex], attempt: availableWords[randomIndex].attempt = 0 };
    setVocabularyList((prevList) =>
      prevList.map((word) => (word.id === selectedWord.id ? selectedWord : word))
    );
    setRandomWord(selectedWord);

  };

  return (
    <div className="FlashCards">
      <h1>Random Vocabulary Word Picker</h1>
      <button onClick={pickRandomWord}>{randomWord ? 'I got it right' : 'Start'}</button>
      <button onClick={resetAttempts}>I don't know yet</button>
      <button onClick={toggleDefinitionVisibility}>
        {showDefinition ? 'Hide Definition' : 'Show Definition'}
      </button>
      {randomWord ? (
        <div>
          <p>Word #{vocabularyList.findIndex((word) => word.id === randomWord.id) + 1}: {randomWord.word}</p>

          {showDefinition ? <p>Definition: {randomWord.definition}</p> : null}
          {showDefinition ? <p>Example: {randomWord.example}</p> : null}

          {/* <p>Attempts: {randomWord.attempt}</p> */}
        </div>
      ) : (
        <p>{vocabularyList.every((word) => word.attempt === 3) ? <>
          <h1>Complete</h1>
          <pre>{JSON.stringify(vocabularyList, null, 1)}</pre></> : 'No more words available to attempt.'}</p>
      )}

    </div>
  );
};

export default FlashCards;

