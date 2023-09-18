import { expresionABinario } from "../helpers/newConver";
import { polinomio, polinomioABinario } from "../helpers/polinomio";



export const ToBinaryD = ({polynomial}) => {
  
  const {binaryRepresentation} = polinomioABinario(polynomial)
  console.log(polynomial)

  return (
    <div>
      <p>D(x): {polynomial}</p>
      <p>Binario: {binaryRepresentation}</p>
    </div>
  );
};


