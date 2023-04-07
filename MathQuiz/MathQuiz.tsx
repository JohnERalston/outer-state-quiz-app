import * as React from 'react';
import { ShowRender } from '../components/ShowRender';

import '../App.css';
import { QuizMaster } from './QuizMaster';
import { CorrectAnswerTracker } from './CorrectAnswerTracker';
import { IncorrectAnswerTracker } from './IncorrectAnswerTracker';
import { Player } from './Player';

export const MathQuiz = () => {
  return (
    <div className="app">
      <div className="panels">
        <div className="panel">
          <div className="header">
            <h3>&lt;MathQuiz /&gt;</h3>
            <ShowRender />
          </div>
          <p>
            This app demonstrates how sibling components can all communicate via{' '}
            <a
              href="https://github.com/JohnERalston/outer-state"
              target="_blank"
            >
              outer-state
            </a>{' '}
            using vanilla TypeScript.
            <hr /> There is virtually no logic or hooks in any of the
            Components. The logic is outside of React. Instead, the logic is in
            vanilla TypeScript/JavaScript which makes for reduced complexity and
            ease of testing.
          </p>
          <div className="panels">
            <div className="resultTracker">
              <div className="panel">
                <CorrectAnswerTracker />
              </div>
              <div className="panel">
                <IncorrectAnswerTracker />
              </div>
            </div>
            <div className="panel">
              <QuizMaster />
            </div>
            <div className="panel">
              <Player />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
