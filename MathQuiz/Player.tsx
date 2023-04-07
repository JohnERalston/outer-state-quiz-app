import * as React from 'react';
import { ShowRender } from '../components/ShowRender';
import { QuestionStatus, quizState } from './mathQuiz';
import { answerState, onAnswerFormSubmitted, onChange } from './player';

export const Player = () => {
  const { status } = quizState.useStore();
  const { value, valid } = answerState.useStore();
  const enabled = status === QuestionStatus.asked;

  return (
    <form onSubmit={onAnswerFormSubmitted} autoComplete="off">
      <div className="header">
        <h4>&lt;Player /&gt;</h4>
        <ShowRender />
      </div>
      <label htmlFor="answerField">Your Answer</label>
      <div>
        <input
          autoComplete="off"
          id="answerField"
          type="text"
          value={value}
          onChange={onChange}
          disabled={!enabled}
          data-testid="inputField"
        />
        {!valid && (
          <span data-testid="validationMsg" className="errMsg">
            Please provide a valid answer
          </span>
        )}
      </div>
      <div>
        <button type="submit" disabled={!enabled} data-testid="submitBtn">
          Answer Question
        </button>
      </div>
    </form>
  );
};
