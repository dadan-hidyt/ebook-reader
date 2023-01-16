import getUserData from '../userData';
import { useEffect,useState } from "react";

function Home(){
    const [name,setName] = useState(null);
      useEffect(function() {
       getUserData().then(function(response){
         setName(response.data.user.name);
       });
    })
    return (
        <>
          <br/>
            <span>Wellcome Back <b>{name ?? 'loading...'}</b> </span>
          <br/>
        </>

    )
}

export default Home;