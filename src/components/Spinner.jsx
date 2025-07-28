import React from 'react';
import '../css/spinner.css'; // We'll write only animation here

const Spinner = () => {
  return (
  <div className="flex justify-center items-center min-h-screen">
  <div className="loader w-[45px] aspect-[0.75]"></div>
</div>
    
  );
};

export default Spinner;
