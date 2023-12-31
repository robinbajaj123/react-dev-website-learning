import logo from './logo.svg'
import './App.css'

function App() {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 91,
  }

  return (
    <>
      {user.imageSize > 90 && (
        <>
          <h1> hello will show image</h1>
          <img
            src={user.imageUrl}
            alt={'Photo of' + user.name}
            width={user.imageSize}
            style={{
              borderRadius: '50%',
              border: '2px solid black',
            }}
          />
        </>
      )}
    </>
  )
}

function MyButton() {
  return <button>I am a button component</button>
}

export default App
