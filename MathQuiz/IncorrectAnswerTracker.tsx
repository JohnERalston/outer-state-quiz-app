import * as React from 'react';
import { ShowRender } from '../components/ShowRender';
import { quizState } from './mathQuiz';

export const IncorrectAnswerTracker = () => {
  const { incorrectCount } = quizState.useStore();

  return (
    <div>
      <div className="header">
        <h4>&lt;IncorrectAnswerTracker /&gt;</h4>
        <ShowRender />
      </div>
      <h4>
        Incorrect: <span data-testid="incorrectCount">{incorrectCount}</span>
      </h4>
    </div>
  );
};
