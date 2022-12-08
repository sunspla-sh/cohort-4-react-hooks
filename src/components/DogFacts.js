
import { useState, useEffect } from 'react';

import axios from 'axios';

const DogFacts = () => {

  const [factsArray, setFactsArray] = useState([]);

  useEffect(() => {
    console.log('hello from dog world');
    axios.get('https://dog-api.kinduff.com/api/facts?number=5')
      .then(axiosResponse => {
        console.log(axiosResponse.data)
        setFactsArray(axiosResponse.data.facts);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {factsArray.length === 0 ? <p>loading...</p> : null}
      {factsArray.map(singleFact => {
        return <p>{singleFact}</p>
      })}
    </div>
  );

};

export default DogFacts;