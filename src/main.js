import './styles/style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from '/vite.svg'

// js
import { handle } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <div id="result"></div>
      <button id="add" type="button">server +</button>
      <button id="dec" type="button">server -</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

handle();
