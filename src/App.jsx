
import './App.css'
import Footer from './components/footer'
import Jobs from './components/jobs'
import Questions from './components/questions'
import Sidebar from './components/sidebar'
import Topbar from './components/topbar'

function App() {
  

  return (
    <>
      <Topbar/>
      <div className='flex flex-row justify-between max-w-5xl  mx-auto p-6 pt-12'>
       <Sidebar/>
       <Questions/>
       <Jobs/>
       

      </div>
      <Footer/>
        
    </>
  )
}

export default App
