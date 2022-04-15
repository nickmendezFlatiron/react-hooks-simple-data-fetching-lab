// create your App component here
import {React , useState , useEffect} from "react";

function App(){
  const [randomPic , setRandomPic] = useState("")


  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then(data => setRandomPic(data.message))
    
  },[])

  
  if (randomPic === "") return <p>Loading......</p>
  
  return <img src={randomPic} alt="A Random Dog" />
}

export default App