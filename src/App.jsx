import classes from './App.module.css'
import Logo from '/images/logo.png'

function App() {
  return (
    <div className={classes.app}>
      <img className={classes.logo} src={Logo} />
    </div>
  )
}

export default App
