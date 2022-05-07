
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeebackStat from "./components/FeebackStat"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIcon from './components/AboutIcon'

function App(){
    return (
       <FeedbackProvider>
           <Router>
            <Header />
            <div className="container">
                <Routes>
                <Route exact path='/' element={
                    <>
                    <FeedbackForm/>
                    <FeebackStat />
                    <FeedbackList/>
                    </>
                }>   
                </Route>
              
              <Route path="/about" element={<AboutPage/>} />
                </Routes>
               <AboutIcon/>
            </div>
        </Router>

       </FeedbackProvider>
        
        
    )
}
export default App