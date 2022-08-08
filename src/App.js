import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters';



function App() {

  const categories = ["accounts", "assets", "customers", "datapoints", "devices", "documents", "forms", "invites", "media", "messages", "namespaces", "orders" , "patients", "relationships", "rules", "templates", "users", "workflows"];
  const [characters, setCharacter] = useState( []);
  
  
  const getApi = async () => {
    const charactersProve = [];
    for (let category of categories) {
      var response;  
        try{      
        response = await fetch (`https://api.factoryfour.com/${category}/health/status`);    
      }
        catch(e){
        response = {ok : false};
      }  

        if (response.ok) {
          const data = await response.json();
          charactersProve.push({category: category, data: data});
        }else{
          charactersProve.push({category: category, data: null, error: true});
        };      
    };
 
  setCharacter(charactersProve);
};

  useEffect(() => {
    setInterval(() =>{
      getApi();
    }, 15000);   
  }, []);

  return (
    <>  
    <div style={{backgroundColor: '#666666'}}>
    <Navbar brand="Inclusion Test"/>
      <div className='container mt-5' >
        <Characters characters={characters}/>      
      </div>
      </div>
    </>
  );
};

export default App;
