import data from '../../artigos.json'
import { Carousel } from "@material-tailwind/react";




function Home() {
    return (  
        <>       
        <Carousel
        className="rounded-xl carrossel"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="pulpfictioncarrossel.jpg"
          alt="image 1"
          className="h-[800px]  w-[2000px] object-cover"
        />
        <img
          src="jasoncarrossel.jpg"
          alt="image 2"
          className="h-[800px] w-[2000px] object-cover"
        />
        <img
          src="oiluminadocarrossek.jpg"
          alt="image 3"
          className="h-[800px] w-[2000px] object-cover"
        />
        <img
          src="freddycarrossel.jpg"
          alt="image 3"
          className="h-[800px] w-[2000px] object-cover"
        />
      </Carousel>

      <div className="col-span-3 flex bg-pink-900 text-white text-7xl justify-center items-center p-10 space-x-8 font-serif">
                <span>Favoritos</span>
                
            </div>
            <br></br>
            <br></br>
        <div className='grid grid-cols-3'>
           {
            data.map(
                (filme, index)=> (
                    <div className= 'card rounded-lg shadow-md p-6 m-3' key={index}>
                        <img className = 'w-[200px] h-400[px] m-6 rounded shadow-md' src={filme.image}/>
                        <div className='tags'>
                        <div className='text'>
                    
                        </div>
                        {
                            filme.tags.map(tag => (
                                <span className="bg-pink-50  text-black p-2 m-4 rounded" key={tag} >{tag}</span>
                            ))
                        }

                        {
                            filme.text.map(text=>(
                                <p className="p-2 m-4" key= {text}> {text}</p>
                            )
                                )
                        }

                        
                        
                    </div>

                    </div>  

                   
                )
            )
        }
         </div>

       </>
       
    );
}

export default Home;