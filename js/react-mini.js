const query = (selector) => document.querySelector(selector)
const queryAll = (selector) => document.querySelectorAll(selector)

const setReactData = (allElements) => {
  allElements.forEach((element) => {
    const attributesIgnoreList = ['onclick', 'onchange', 'text']
    const variableRegex = /{([^}]+)}/g

    Array.from(element.attributes).forEach((attribute) => {
      if (
        attributesIgnoreList.includes(attribute.name) ||
        attribute.name.match(/^data-react-/)
      ) {
        return
      }

      if (attribute.value.match(variableRegex)) {
        element.setAttribute(`data-react-${attribute.name}`, attribute.value)
      }
    })
  })
}

const replaceAttributeWithVariables = (element, attribute) => {
  const regex = /{([^}]+)}/g

  let newAttribute = element.getAttribute(`data-react-${attribute}`)

  element
    .getAttribute(`data-react-${attribute}`)
    .match(regex)
    .forEach((match) => {
      const matchName = match.replace(/{(.+)}/g, '$1')
      try {
        newAttribute = newAttribute.replace(match, eval(matchName))
      } catch (error) {
        //   console.log('Error:', error)
      }
    })

  if (newAttribute === element.getAttribute(attribute)) {
    return
  }
  element.setAttribute(attribute, newAttribute)
}

const updateAllElementValues = () => {
  const dataReactElements = Array.from(
    document.querySelectorAll('#root *')
  ).filter((element) =>
    Array.from(element.attributes).some((attr) =>
      attr.name.startsWith('data-react-')
    )
  )

  dataReactElements.forEach((element) => {
    Array.from(element.attributes).forEach((attribute) => {
      if (attribute.name.match(/^data-react-/)) {
        replaceAttributeWithVariables(
          element,
          attribute.name.replace('data-react-', '')
        )
      }
    })
  })
}

document.addEventListener('DOMContentLoaded', function () {
  const root = query('#root')
  const allElements = root.querySelectorAll('*')

  setReactData(allElements)
  updateAllElementValues()
})

const observer = new MutationObserver((mutationsList, observer) => {
  for (let mutation of mutationsList) {
    updateAllElementValues()
  }
})

observer.observe(document.documentElement, {
  attributes: true,
  childList: true,
  subtree: true
})

console.log('React Mini loaded')
