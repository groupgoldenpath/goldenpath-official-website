import {Route, Routes} from 'react-router-dom';
import { Company } from '../pages/Company/Company';
import { Home } from '../pages/Home';
import { ResultQuiz } from '../pages/ResultQuiz/ResultQuiz';

function Router () {
        return (
                <Routes>
                <Route path="/" element={<Home />}/>            
                <Route path="/goldenpath" element={<Company />}/>            
                <Route path="/rentabilidade" element={<Home />}/>            
                <Route path="/evolution" element={<Home />}/>            
                <Route path="/gpx" element={<Home />}/>            
                <Route path="/robos" element={<Home />}/>            
                <Route path="/projetos" element={<Home />}/>            
                <Route path="/cursos" element={<Home />}/>            
                <Route path="/aplicativos" element={<Home />}/>            
                <Route path="/contato" element={<Home />}/>           
                <Route path="/resultado/:result" element={<ResultQuiz />}/>            
                </Routes>
        )
    }
    
export {Router}
