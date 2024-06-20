import { MdOndemandVideo } from "react-icons/md";

function Sobre() {
  return (
    <div className="Sobre">
    
    <br></br>
    <br></br>
    <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-serif text-5xl text-black">Vintage Movies</h1> <MdOndemandVideo className="text-4xl"/>
    

    <div className="Sobre-header">
    <p>
        Bem-vindo ao Vintage Movies onde os clássicos nunca<br></br> saem de moda.
      </p>
      <br></br>
      <p>
        Em um mundo cada vez mais dominado pela novidade,<br></br> Vintage Movies é uma lufada de ar fresco, lembrando-nos<br></br> da duradoura beleza e relevância dos filmes que <br></br> moldaram a história do cinema.
      </p>
      <br></br>
      <p>
        Junte-se a nós em uma jornada pela magia do passado,<br></br> onde cada filme é mais do que apenas uma peça de <br></br>entretenimento; é um tesouro cultural a ser apreciado e <br></br>preservado para as gerações futuras.
      </p>
    </div>
      
    
  </div>
       
    );
}

export default Sobre;