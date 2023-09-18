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
    const [resultRecorrer, setResultRecorrer] = useState(""); 
    const [CRC, setCrc] = useState(""); 
    const [verificar, setVerificar] = useState(false);
    const [resultVerificar, setResultVerificar] = useState('');
    const [resultRecorrerVer, setResultRecorrerVer] = useState(""); 




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

    const { binaryRepresentation } = polinomioABinario(polinomioD)
    const { binaryRepresentationG } = polinomioABinarioG(polinomioG)
    const onCRC = () => {


        
        let digitosDespuesDelPrimerUno = 0;
        let primerUnoEncontrado = false;
        var longitud = binaryRepresentationG.length;

        for (let i = 0; i < longitud; i++) {
            const digito = binaryRepresentationG.charAt(i);
            if (digito === '1') {
                if (!primerUnoEncontrado) {
                    primerUnoEncontrado = true;
                } else {
                    digitosDespuesDelPrimerUno++;
                }
            } else if (primerUnoEncontrado) {
                digitosDespuesDelPrimerUno++;
            }
        }

        const agregado = '0'.repeat(digitosDespuesDelPrimerUno);
        const crc = agregado


        const ciclica = new Ciclica(binaryRepresentation, binaryRepresentationG, crc);
        const resultadoImprime = ciclica.imprime();
        setResult(resultadoImprime);
        const resultadoRecorrer = ciclica.recorrer(0, longitud);
        setResultRecorrer(resultadoRecorrer);

        const residuo = ciclica.getResiduo();
        setCrc(residuo)
        
    }

    const onResultSucces = () => {
        var longitud = binaryRepresentationG.length;
        const ciclica = new Ciclica(binaryRepresentation, binaryRepresentationG, CRC);
        const resultadoImprime = ciclica.imprime();
        setResultVerificar(resultadoImprime);
        const resultadoRecorrer = ciclica.recorrer(0, longitud);
        setResultRecorrerVer(resultadoRecorrer);
        setVerificar(true)
    }

    return (
        <>

            <div className="container">
                <div className="row">

                    <div className="col-6">
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



                    <div className="col-6">
                        <ToBinaryD polynomial={inputCharge ? polinomioD : 'x'} />
                        <ToBinaryG polynomial={inputCharge ? polinomioG : 'x'} />

                        <button
                            className="btn btn-outline-primary mt-1"
                            type="submit"
                            onClick={onCRC}>
                            Dividir
                        </button>

                        <h2>Resultado:</h2>
                        <pre>{result}</pre>
                        <h2>Resultado Recorrer:</h2>
                        <pre>{resultRecorrer}</pre>

                        <button
                            className="btn btn-outline-primary mt-1"
                            type="submit"
                            onClick={onResultSucces}>
                            Verificar
                        </button>

                        {verificar ? (
                        <div> 
                            <h2>Resultado:</h2>
                        <pre>{resultVerificar}</pre>
                        <h2>Resultado Recorrer:</h2>
                        <pre>{resultRecorrerVer}</pre>
                        </div>) : (<div> </div>)}
                    </div>


                </div>


            </div>

        </>
    )


}