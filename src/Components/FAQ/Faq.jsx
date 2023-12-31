/* eslint-disable react/prop-types */

import { useState } from "react";


const Faq = ({Title,Des}) => {
    const [faq,setFaq] =useState(false)
  
    return (
        <div>
            <h4>{Title}</h4>
            <button onClick={()=>setFaq(!faq)}>
            {
            faq ? '-':'+'
           }
            </button>
           {
            faq &&  <p>{Des}</p>
           }
           
           
        </div>
    );
};

export default Faq;