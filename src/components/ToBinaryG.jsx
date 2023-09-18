
import { polinomioABinario } from "../helpers/polinomio";



export const ToBinaryG = ({polynomial}) => {
  
  const { binaryRepresentation} = polinomioABinario(polynomial)
  

  return (
    <div>
      <p>G(x): {polynomial}</p>
      <p>Binario: {binaryRepresentation}</p>
    </div>
  );
};