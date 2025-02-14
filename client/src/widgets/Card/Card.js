import { useState } from 'react'

export default function Game(data, theme) {
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const dataSorted = data.filter((el) => el.theme === theme);
  const currentQuestion = dataSorted[index];

  const answers = [
    currentQuestion.answer1,
    currentQuestion.answer2,
    currentQuestion.answer3,
  ];

  function onClickHandler(answer) {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correctAnswer) {
      setTimeout(() => {
        if (index + 1 < dataSorted.length) {
          setIndex(index + 1);
        } else {
          alert('Игра окончена! Кросавчег!');
        }
        setSelectedAnswer(null);
      }, 500);
    }
  }
  return (
    <>
      <h2>{currentQuestion.question}</h2>
      {answers.map((answer, i) => (
        <button
          key={i}
          onClick={() => onClickHandler(answer)}
          style={{
            margin: '5px',
            padding: '10px',
            backgroundColor: selectedAnswer === answer ? 'lightgray' : 'white',
          }}
        >
          {answer}
        </button>
      ))}
    </>
  );
}
