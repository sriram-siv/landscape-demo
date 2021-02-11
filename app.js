import { constructUnityMessages } from './lib.js'

const controlPanel = document.querySelector('.controls')
const btnReset = document.querySelector('.ctrl-reset')
const annotation = document.querySelector('.annotation')

const methodData = {
  'Main Camera': {
    alias: 'camera',
    methods: ['resetPosition']
  }
}

const init = () => {

  window.annotations = {
    update: (id, x, y, visible) => {
      if (x > 0 && x < 1 && y > 0 && y < 1 && visible) {
        const screenX = window.innerWidth * x
        const screenY = window.innerHeight * y

        annotation.style.left = screenX + 'px'
        annotation.style.bottom = screenY + 'px'
        annotation.style.display = 'block'
      } else {
        annotation.style.display = 'none'
      }
    }
  }

  const unityInstance = window.UnityLoader.instantiate(
    'unityContainer',
    'Build/landscape_0.1.json',
    {
      onProgress: (instance, progress) => {
        // update progress bar
        if (progress >= 1) {
          controlPanel.classList.remove('hidden')
          // hide progress loader
        }
      }
    }
  )

  const game = constructUnityMessages(unityInstance, methodData)

  btnReset.onclick = game.camera.resetPosition

}

window.addEventListener('DOMContentLoaded', init)