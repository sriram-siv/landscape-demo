
const init = () => {

  const unityInstance = window.UnityLoader.instantiate(
    'unityContainer',
    'Build/landscape_0.1.json',
    { onProgress: window.UnityProgress }
  )

  document.querySelector('.ctrl-reset').addEventListener('click', () => {
    unityInstance.SendMessage('Main Camera', 'resetPosition')
  })

}

window.addEventListener('DOMContentLoaded', init)