const [background, setBackground] = useState('[#222]')
const [textColour, setTextColour] = useState('white')

const randomColour = () => Math.floor(Math.random() * 16777215).toString(16)

useEffect(() => {
  console.log('Initial useEffect render')
}, [])

useEffect(() => {
  console.log('CHANGED: background:', background())
}, [background])

useEffect(() => {
  console.log('CHANGED: textColour:', textColour())
}, [textColour])

window.addEventListener('load', () => {
  document.querySelector('.example-usestate').innerText =
    'const [background, setBackground] = useState("black")\n\n' +
    'console.log(background()) // black\n\n' +
    'setBackground("red")\n\n' +
    'console.log(background()) // red'

  document.querySelector('.example-useeffect').innerText =
    '// Empty useEffect for on load:\n\n' +
    'useEffect(() => {\n' +
    '  console.log("Initial useEffect render")\n' +
    '}, [])\n\n' +
    '// One useEffect:\n\n' +
    'useEffect(() => {\n' +
    '  console.log("background:", background())\n' +
    '}, [background])\n\n' +
    '// More than one useEffect:\n\n' +
    'useEffect(() => {\n' +
    '  console.log("textColour:", textColour(), "background:", background())\n' +
    '}, [background, textColour])'

  query('.example-inline').innerText =
    '// Set initial variables:\n\n' +
    'const [background, setBackground] = useState("black")\n\n' +
    '// Inline style:\n\n' +
    '<h1 style="background: {background}">Welcome</h1>\n\n' +
    '// Or in Tailwind:\n\n' +
    '<h1 className={"bg-{background}"}>Welcome</h1>'
})
