import React from 'react';
import { sponsorer } from '../alle_sponsorer';

function Thanks() {
  
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 center">Tak til sponsorer</h1>
      <p className='center'>
        Børnelejren på Langeland takker alle, der på den ene eller anden måde, har støttet
        foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård
        - det være sig ved naturaliesponsorater eller økonomisk støtte fra støttemedlemmer,
        virksomhedssponsorer og donationer fra fonde.
      </p>
      <p className='center'>
        En særlig tak til:
        {sponsorer.map((company) => <div> {company} </div> )}
      </p>
    </div>
  );
}

export default Thanks;
