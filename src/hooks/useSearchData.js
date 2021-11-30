import {useState, useEffect} from 'react';

const useSearchData = (data) => {
    const [searchTerm, setSearchterm] = useState ('');
    const [searchResults, setSearchResults] = useState([]);
    
    const handleChange = event =>{
      setSearchterm(event.target.value);
    };

    useEffect(() => {
      (async () => {
          const results = await data.filter(value => {
              return (
                  //search for either character or actor/actress name
                  value.title.toLowerCase().includes(searchTerm.toLowerCase())
                  || value.preview.toLowerCase().includes(searchTerm.toLowerCase())
              )}
          )
          //then the filtered list (results) is set on the searchResults state by using the setSearchResults method
          setSearchResults(results);
      })
    //filter through existing array casts and check if the cast in the casts list includes searchTerm
      ();
  }, [data, searchTerm]);

    return {searchResults, searchTerm, handleChange};
};

export default useSearchData;