

export const CovertToBinary = ({polynomial}) => {
  
  
  const terms = polynomial.split('+').map(term => term.trim());

  // Realiza la conversión del polinomio a representación binaria
  const maxDegree = Math.max(...terms.map(term => {
    const degreeMatch = term.match(/\d+/);
    return degreeMatch ? parseInt(degreeMatch[0], 10) : 0;
  }));

  let binaryRepresentation = '';
  
  for (let i = maxDegree; i >= 0; i--) {
    const term = terms.find(term => {
      const degreeMatch = term.match(/\d+/);
      return degreeMatch && parseInt(degreeMatch[0], 10) === i;
    });
    
    if (term) {
      binaryRepresentation += '1';
    } else {
      binaryRepresentation += '0';
    }
  }

  return (
    <div>
      <p>Polinomio: {polynomial}</p>
      <p>Representación binaria: {binaryRepresentation}</p>
    </div>
  );
};


