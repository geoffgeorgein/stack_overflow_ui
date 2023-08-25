
import './App.css'
import Jobs from './components/jobs'
import Questions from './components/questions'
import Sidebar from './components/sidebar'

function App() {
  

  return (
    <>
      <div className='flex flex-row justify-between max-w-5xl items-center mx-auto p-6'>
       <Sidebar/>
       <Questions/>
       <Jobs/>

      </div>
        
    </>
  )
}

export default App
