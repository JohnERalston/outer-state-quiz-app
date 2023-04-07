import * as React from 'react';
import { ShowRender } from '../components/ShowRender';
import { quizState } from './mathQuiz';

export const CorrectAnswerTracker = () => {
  const { correctCount } = quizState.useStore();

  return (
    <div>
      <div className="header">
        <h4>&lt;CorrectAnswerTracker /&gt;</h4>
        <ShowRender />
      </div>
      <h4>
        Correct: <span data-testid="correctCount">{correctCount}</span>
      </h4>
    </div>
  );
};
