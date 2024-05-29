import data from '../../artigos.json'

function Home() {
    return (  
        <>       
        <div className='grid grid-cols-3'>
           {
            data.map(
                (filme, index)=> (
                    <div className='card' key={index}>
                        <h1>{filme.title}</h1>
                        <img src = {filme.image}/>
                        <div className='tags'>
                        <div className='text'>
                    
                        </div>
                        {
                            filme.tags.map(tag => (
                                <span className="bg-pink-800  text-white p-1 m-1" key={tag} >{tag}</span>
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