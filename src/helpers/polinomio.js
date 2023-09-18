
export const polinomioABinario = (poli) => {
  console.log("Entrada en polinomioABinario:", poli);
  const terms = poli.split('+').map(term => term.trim());


  const maxDegree = Math.max(...terms.map(term => {
    const degreeMatch = term.match(/x(\d+)/);
    return degreeMatch ? parseInt(degreeMatch[1], 10) : 0;
  }));


  const coefficients = Array(maxDegree + 1).fill(0);


  terms.forEach(term => {
    const degreeMatch = term.match(/x(\d+)/);
    const coefficient = degreeMatch ? 1 : parseInt(term, 10);
    const degree = degreeMatch ? parseInt(degreeMatch[1], 10) : 0;
    coefficients[maxDegree - degree] = coefficient;
  });


  const binaryRepresentation = coefficients.join('');

  return { binaryRepresentation, poli };
}

export const polinomioABinarioG = (poli) => {
  console.log("Entrada en polinomioABinario:", poli);
  const terms = poli.split('+').map(term => term.trim());


  const maxDegree = Math.max(...terms.map(term => {
    const degreeMatch = term.match(/x(\d+)/);
    return degreeMatch ? parseInt(degreeMatch[1], 10) : 0;
  }));


  const coefficients = Array(maxDegree + 1).fill(0);


  terms.forEach(term => {
    const degreeMatch = term.match(/x(\d+)/);
    const coefficient = degreeMatch ? 1 : parseInt(term, 10);
    const degree = degreeMatch ? parseInt(degreeMatch[1], 10) : 0;
    coefficients[maxDegree - degree] = coefficient;
  });


  const binaryRepresentationG = coefficients.join('');

  return { binaryRepresentationG };
}



