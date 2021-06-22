import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { initServiceWorker } from './modules/helpers';

const appElement = document.getElementById('root');

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const result = document.getElementById("result");
  const main = document.getElementById("main");
  let listening = false;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (typeof SpeechRecognition !== "undefined") {
    const recognition = new SpeechRecognition();

    const stop = () => {
      main.classList.remove('speaking');
      recognition.stop();
      button.textContent = 'Start listening';
      button.classList.add('text-blue-200');
      button.classList.add('bg-lightblue-900');
      button.classList.remove('text-lightblue-900');
      button.classList.remove('bg-blue-200');
    };

    const start = () => {
      main.classList.add('speaking');
      result.textContent='...';
      recognition.start();
      button.textContent = 'Stop listening';
      button.classList.remove('text-blue-200');
      button.classList.remove('bg-lightblue-900');
      button.classList.add('text-lightblue-900');
      button.classList.add('bg-blue-200');
    };

    const onResult = (event) => {
      result.innerHTML = "";
      for (const res of event.results) {
        const text = document.createTextNode(res[0].transcript);
        const p = document.createElement("p");
        if (res.isFinal) {
          p.classList.add("final");
        }
        p.appendChild(text);
        result.appendChild(p);
      }
    };
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.addEventListener("result", onResult);
    button.addEventListener("click", (event) => {
      if (main.classList.contains('speaking')) {
        stop();
      } else {
        start();
      }
      listening = !listening;
    });
  } else {
    button.remove();
    const message = document.getElementById("message");
    message.removeAttribute("hidden");
    message.setAttribute("aria-hidden", "false");
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  appElement,
);

initServiceWorker();
