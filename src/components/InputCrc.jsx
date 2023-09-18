import { useState } from "react";
import { useForm } from "../hooks/useForm"
import { ToBinaryD } from "./ToBinaryD";
import { ToBinaryG } from "./ToBinaryG";
import { polinomioABinario, polinomioABinarioG } from "../helpers/polinomio";
import { Ciclica } from "../helpers/Ciclica";



export const InputCrc = () => {

    const [polinomioD, setPolinimioD] = useState('');
    const [polinomioG, setPolinimioG] = useState('');
    const [inputCharge, setInputCharge] = useState(false);
    const [result, setResult] = useState('');
    const [resultRecorrer, setResultRecorrer] = useState(""); // Estado para almacenar la salida de 'recorrer'



    const { formState, onInputChange } = useForm({
        D: '',
        G: ''
    });


    const { D, G } = formState;


    const onSubmitPol = () => {
        setPolinimioD(D)
        setPolinimioG(G)
        setInputCharge(true)
    }

    const onCRC = () => {
        const { binaryRepresentation } = polinomioABinario(polinomioD)
        const { binaryRepresentationG } = polinomioABinarioG(polinomioG)
        const crc = ''

        const ciclica = new Ciclica(binaryRepresentation, binaryRepresentationG, crc);
        const resultadoImprime = ciclica.imprime();
        setResult(resultadoImprime);
        const resultadoRecorrer = ciclica.recorrer(0, 6);
        setResultRecorrer(resultadoRecorrer);
    }

    return (
        <>

            <div className="container">
                <div className="row">

                    <div className="col-4">
                        <input type="text"
                            className="mt-2 form-control"
                            placeholder="X⁵+X⁴+X³+X²+X¹+1"
                            value={D}
                            name="D"
                            onChange={onInputChange} />

                        <input type="text"
                            className="form-control mt-2"
                            placeholder="X³+1"
                            value={G}
                            name="G"
                            onChange={onInputChange} />

                        <button
                            className="btn btn-outline-primary mt-1"
                            type="submit"
                            onClick={onSubmitPol}>
                            Agregar
                        </button>



                    </div>



                    <div className="col-8">
                        <ToBinaryD polynomial={inputCharge ? polinomioD : 'x'} />
                        <ToBinaryG polynomial={inputCharge ? polinomioG : 'x'} />

                        <button
                            className="btn btn-outline-primary mt-1"
                            type="submit"
                            onClick={onCRC}>
                            Agregar
                        </button>

                        <h2>Resultado:</h2>
                        <pre>{result}</pre>
                        <h2>Resultado Recorrer:</h2>
                        <pre>{resultRecorrer}</pre>
                    </div>


                </div>


            </div>

        </>
    )


}