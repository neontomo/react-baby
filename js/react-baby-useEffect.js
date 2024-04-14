const useEffect = (callback, dependencies) => {
  if (dependencies.length === 0) {
    callback()
    return
  }

  let oldDependencies = dependencies
    .map((dependency) => dependency())
    .toString()

  setInterval(() => {
    let newDependencies = dependencies
      .map((dependency) => dependency())
      .toString()

    if (oldDependencies !== newDependencies) {
      oldDependencies = newDependencies
      callback()
    }
  }, 200)
}
