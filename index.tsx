import * as React from 'react';

import { createRoot } from 'react-dom/client';
import { MathQuiz } from './MathQuiz/MathQuiz';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <MathQuiz />
  </React.StrictMode>
);
