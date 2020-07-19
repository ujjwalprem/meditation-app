

import React from 'react';
import { Button } from 'reactstrap';
import Happy from "./Happy";
function Buttons() {
      
    function handleClick(){
        <Happy />

    }



  return (
    <div className="buttons">
       <Button outline color="secondary" onClick={handleClick}>Happy Music</Button>
       <Button outline color="secondary">Quiet Time</Button>
       <Button outline color="secondary">Peace</Button>
       <Button outline color="secondary">Chill Gaming</Button>
       <Button outline color="secondary">Eleven Forest</Button>
    </div>
  );

}

export default Buttons;
