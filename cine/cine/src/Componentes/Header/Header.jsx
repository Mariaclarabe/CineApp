import Navbar from "../Navbar/Navbar";
import { MdOndemandVideo } from "react-icons/md";


function Header() {
    return ( 
      <header className="flex bg-primary-maria text-white p-6 mb-4 justify-between">
      <div className="flex items-center space-x-4">
          <h1 className="text-xl">Vintage Movies</h1>
          <MdOndemandVideo className="text-xl"/>
      </div>
      <Navbar />
      </header>
     );
}

export default Header;




