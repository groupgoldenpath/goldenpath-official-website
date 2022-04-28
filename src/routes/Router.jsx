import {Route, Routes} from 'react-router-dom';
import { Academy } from '../pages/Academy/Academy';
import { Aplications } from '../pages/Applications/Applications';
import { Company } from '../pages/Company/Company';
import { Contact } from '../pages/Contact/Contact';
import { Evolution } from '../pages/Evolution/Evolution';
import { GPX } from '../pages/GPX/GPX';
import { Home } from '../pages/Home';
import { Rentability } from '../pages/Rentability/Rentability';
import { ResultQuiz } from '../pages/ResultQuiz/ResultQuiz';
import { SignIn } from '../pages/SignIn/SignIn';

function Router () {
        return (
                <Routes>
                <Route path="/" element={<Home />}/> 
                <Route path="/goldenpath" element={<Company />}/>            
                <Route path="/rentabilidade" element={<Rentability />}/>            
                <Route path="/evolution" element={<Evolution />}/>            
                <Route path="/gpx" element={<GPX />}/>           
                <Route path="/projetos" element={<Home />}/>            
                <Route path="/academy" element={<Academy />}/>            
                <Route path="/vipcar" element={<Aplications />}/>            
                <Route path="/contato" element={<Contact />}/>           
                <Route path="/resultado/:result" element={<ResultQuiz />}/>  


                <Route path="/adm" element={<SignIn />}/> 
                <Route path="/adm/dashboard" element={<Home />}/> 
                </Routes>
        )
    }
    
export {Router}
