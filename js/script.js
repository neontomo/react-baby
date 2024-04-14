const [firstName, setFirstName] = useState('Tomo')
const [lastName, setLastName] = useState('Myrman')
const [age, setAge] = useState(30)
const [inlineVariables, setInlineVariables] = useState('himare')

const changeFirstName = () => {
  if (firstName() === 'Tomo') {
    setFirstName('Peter')
  } else {
    setFirstName('Tomo')
  }
}

const changeLastName = () => {
  if (lastName() === 'Myrman') {
    setLastName('Pan')
  } else {
    setLastName('Myrman')
  }
}

const changeAge = () => {
  setAge(age() + 1)
}

const changeBackgroundColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  if (background() === 'blue-400') {
    setBackground(`[#${randomColor}]`)
  } else {
    setBackground('blue-400')
  }
}

useEffect(() => {
  console.log('Initial render')
}, [])

useEffect(() => {
  console.log('CHANGED: firstName:', firstName())
}, [firstName])

useEffect(() => {
  console.log('CHANGED: lastName:', lastName())
}, [lastName])
