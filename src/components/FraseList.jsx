import React from 'react';
import Frase from './Frase';

const FraseList = ({frases}) => {
    return ( 
        <div>
            {frases.map((frase) =>
                <Frase
                    key={frase.quote}
                    frase={frase}
                />
            )}
        </div>
     );
}
 
export default FraseList;