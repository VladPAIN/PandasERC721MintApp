import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'typeface-press-start-2p';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Если вы хотите начать измерять производительность в своем приложении, передайте функцию
// для записи результатов (например: reportWebVitals(console.log))
// или отправки результатов на сервер для анализа (например: reportWebVitals(sendToAnalytics))
// в качестве аргумента. Это отключит его.
// reportWebVitals();