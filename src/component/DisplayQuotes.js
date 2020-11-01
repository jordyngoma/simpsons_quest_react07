import React from 'react';
  
function DisplayQuotes({quote}) {
  return (
    <div className="DisplayQuotes">
      <img
        src={quote.image}
        alt={quote.character}
      />
      <ul>
       
        <li> Name:{quote.character} </li>
         
        <li> Quote: {quote.quote} </li>
      </ul>
      
    </div>
  );
};
  
export default DisplayQuotes;