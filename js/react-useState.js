const useState = (initialValue) => {
  let state = initialValue

  let getValue = () => state
  const setValue = (newValue) => {
    state = newValue
    updateAllElementValues()
  }

  return [getValue, setValue]
}
