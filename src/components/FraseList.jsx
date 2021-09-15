import React from 'react';
import Frase from './Frase';

const FraseList = ({frases}) => {
    return ( 
        <div>
            {frases.map((frase) =>
                <Frase
                    key={frase.id}
                    frase={frase}
                />
            )}
        </div>
     );
}
 
export default FraseList;