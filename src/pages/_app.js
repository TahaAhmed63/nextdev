import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home/components/slider.css"
import "./Home/components/header.css"
import Header from './Home/components/Header';

export default function App({ Component, pageProps }) {

  return(
  <>
  <Header/>

  <Component {...pageProps} />
  </>
  )
}
