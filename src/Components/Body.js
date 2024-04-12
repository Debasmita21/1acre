import { useEffect, useState } from "react";
import CarouselCard from "./CarouselCard";

const Body = () => {
  const [plotList, setPlotList] = useState([]);
  const [page, setPage] = useState(1); // Track the current page number
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const fetchData = async () => {
    setIsLoading(true); // Set loading to true before fetching data
    const data = await fetch(`https://prod-be.1acre.in/lands/?ordering=-updated_at&page=${page}&page_size=10`);
    const json = await data.json();
    setIsLoading(false); // Set loading to false after data is fetched

    // Append the new results to the existing plotList
    setPlotList(prevList => [...prevList, ...json.results]);
  };

  useEffect(() => {
    fetchData();
  }, [page]); // Refetch data whenever the page changes

  // Function to detect scroll to the bottom of the page
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      // Increment the page number when scrolled to the bottom
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Add and remove scroll event listener

  // Split the plotList into chunks of 2 elements each
  const rows = [];
  for (let i = 0; i < plotList.length; i += 2) {
    rows.push(plotList.slice(i, i + 3));
  }

  return (
    <div className="flex-wrap mt-12 ml-20">
      {rows.map((row, index) => (
        <div key={index} className="flex flex-row mb-8">
          {row.map((plot) => (
            <CarouselCard key={plot.id} plotData={plot} />
          ))}
        </div>
      ))}
      {isLoading && (
        <div className="flex items-center justify-center w-full">
          {/* Loading spinner */}
          <svg className="animate-spin w-8 h-8 text-gray-500" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM4.93 4.93l1.41 1.41A7.937 7.937 0 0 1 12 4c1.03 0 2.01.19 2.93.52l1.41-1.41A9.936 9.936 0 0 0 12 2c-2.64 0-5.04 1.03-6.86 2.93zm14.14 14.14A7.937 7.937 0 0 1 12 20c-1.03 0-2.01-.19-2.93-.52l-1.41 1.41A9.936 9.936 0 0 0 12 22c2.64 0 5.04-1.03 6.86-2.93l-1.39-1.4z"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Body;
