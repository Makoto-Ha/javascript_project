import removeGreeting from './removeGreeting.js'
import addTime from './add-time.js'
import { sample } from './utils.js'


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add-one').addEventListener('click', () => {
    removeGreeting();

    addTime(sample(0, 1000))
  })

  document.getElementById('add-three').addEventListener('click', () => {
    removeGreeting();

    Array(3).fill().forEach(() => {
      addTime(sample(1000, 3000))
    });
  })
})
