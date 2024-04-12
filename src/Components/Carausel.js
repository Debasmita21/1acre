
const Carausel = (props) => {

   const {plotData} = props;

  return (
    <div className="shadow-lg w-72 h-96 rounded-lg cursor-pointer m-4">
    <img className="w-64 h-52 rounded-t-lg" alt=" plot img" src="land_media.image"/>
    <h2 className="font-bold">{plotData?.village_name}, {plotData?.mandal_name}</h2>
    
    <h2 className="font-bold">{plotData?.district_name+"(dt)"}</h2>
    <div className="flex items-center">
     <h3 className="font-bold">{plotData?.total_land_size} guntas.</h3>
     <p> ₹ {Math.round(plotData?.total_price*2)/2} lakh for full property</p>
    </div>
    </div>
  )
}

export default Carausel