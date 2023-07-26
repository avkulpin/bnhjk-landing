import MainLogo from '/images/logo.png'
import MVXMLogo from '/images/mvxm.png'
import classes from './Logo.module.css';

export default () => {
  if (import.meta.env.VITE_APP_NAME === 'mvxm') {
    return <img className={classes.logo} src={MVXMLogo} />
  }

  return <img className={classes.logo} src={MainLogo} />
}