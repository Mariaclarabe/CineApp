import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
       <header className="flex bg-primary-maria text-white p-4 mb-6 justify-between">
        <span>Olá visitante! </span>
      <h1>Bem-Vindo ao CineApp! </h1>
      <Navbar/>
       </header>
     );
}

export default Header;