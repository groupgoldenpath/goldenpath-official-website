import {Route, Routes} from 'react-router-dom';
import { Home } from '../pages/Home';
import { ResultQuiz } from '../pages/ResultQuiz/ResultQuiz';

function Router () {
        return (
                <Routes>
                <Route path="/" element={<Home />}/>            
                <Route path="/resultado/:result" element={<ResultQuiz />}/>            
                </Routes>
        )
    }
    
export {Router}