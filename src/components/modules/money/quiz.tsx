import React, { useState } from 'react';
import { QuizQuestion } from '@/types';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (unlockedTraits: string[]) => void;
}

export const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [unlockedTraits, setUnlockedTraits] = useState<string[]>([]);

  const handleAnswerSelection = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const question = questions[currentQuestion];
    const newUnlocked = [...unlockedTraits];
    if (!newUnlocked.includes(question.unlock)) {
      newUnlocked.push(question.unlock);
      setUnlockedTraits(newUnlocked);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      onComplete(unlockedTraits);
    }
  };

  if (currentQuestion >= questions.length) {
    return (
      <div className="rounded-xl p-8 bg-card shadow-xl card-hover">
        <div className="text-center py-12 space-y-6">
          <div className="text-8xl glow-bright">🎉</div>
          <h4 className="font-semibold text-accent-orange">Quiz Complete!</h4>
          <p>You've unlocked all history traits.</p>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.answer;

  return (
    <div className="rounded-xl p-8 bg-card shadow-xl card-hover">
      <h3 className="text-3xl font-semibold mb-6">📚 Money's Greatest Fails (Interactive Quiz)</h3>
      
      {!showResult ? (
        <div className="space-y-6">
          <div className="p-6 bg-[rgba(247,147,26,0.1)] border border-[rgba(247,147,26,0.3)] rounded-xl glow-orange">
            <p>{question.text}</p>
            <h4 className="mt-4 font-semibold text-accent-orange">{question.question}</h4>
          </div>
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelection(index)}
                className="w-full p-4 bg-bg-primary border border-accent-gray rounded-xl text-left hover:border-accent-orange hover:bg-[rgba(247,147,26,0.1)]"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className={`p-6 rounded-xl ${
            isCorrect 
              ? 'bg-[rgba(247,147,26,0.2)] border border-accent-orange glow-bright' 
              : 'bg-[rgba(82,82,82,0.3)] border border-accent-gray'
          }`}>
            <div className="flex items-center space-x-2">
              <span className={`text-2xl ${isCorrect ? 'glow-orange' : 'text-accent-gray'}`}>
                {isCorrect ? '✓' : '✗'}
              </span>
              <span className={`font-semibold ${isCorrect ? 'text-accent-orange' : 'text-accent-gray'}`}>
                {isCorrect ? 'Correct!' : 'Not quite'}
              </span>
            </div>
            {!isCorrect && (
              <p>
                The correct answer was: <strong className="text-accent-orange">{question.options[question.answer]}</strong>
              </p>
            )}
            <p className="mt-2">{question.takeaway}</p>
          </div>
          <button
            onClick={handleNextQuestion}
            className={`px-8 py-3 rounded-xl ${
              isCorrect ? 'bg-accent-orange' : 'bg-accent-gray'
            }`}
          >
            Continue →
          </button>
        </div>
      )}
    </div>
  );
};
