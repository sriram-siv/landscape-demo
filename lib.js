export const constructUnityMessages = (unityInstance, data) => {

  const createMethods = (object, messages) => {
    return messages.reduce((res, method) => ({
      ...res,
      [method]: () => unityInstance.SendMessage(object, method)
    }), {})
  }

  return Object.keys(data).reduce((obj, key) => {
    const label = data[key].alias || key
    return {
      ...obj,
      [label]: createMethods(key, data[key].methods)
    }
  }, {})
}