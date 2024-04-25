import './App.css'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Page from './Components/Page'
import { useContext ,useEffect} from 'react'
import { AppContext } from './context/AppContext'

function App() {
  const {fetchBlogPosts}=useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  
  
  }, [])

  return (
    
    <div className=' flex flex-col items-center justify-center  w-11/12 max-w-[560px] mx-auto overflow-x-hidden '>
      <Header/>
      <Blogs/>
      
      <Page/>
    </div>
    
  )
}

export default App
