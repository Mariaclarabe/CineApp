import {Link} from 'react-router-dom'
import { IoPeopleCircleSharp } from "react-icons/io5";

function Navbar() {
    return ( 
        <nav>
            <ul className="flex gap-40 justify-between font-medium">
                <li><Link to= "/">Home</Link></li>
                <li><Link to= "filmes">Filmes</Link></li>
                <li><Link to= "sobre">Sobre</Link></li> 
                <IoPeopleCircleSharp className="text-4xl"/>
                
                
            </ul>
        </nav>
     );
}

export default Navbar;