import { useEffect ,useState} from "react";
import Carausel from "./Carausel";

const Body = () => {

 const [plotList, setplotList] = useState([]);

const fetchData = async () =>
{
    const data = await fetch('https://prod-be.1acre.in/lands/?ordering=-updated_at&page=1&page_size=10');
    const json = await data.json();
    //console.log(json);
    
    setplotList(json.results)
};   
    useEffect(()=>{
        fetchData();
    },[]);

  return (
    <div className="flex flex-wrap m-8">
    {plotList.map((plot)=>
            <Carausel key={plot.id} plotData={plot}/>)
    }
    
    </div>
  )
}

export default Body