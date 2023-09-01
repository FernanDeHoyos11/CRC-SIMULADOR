import { useState } from "react";
import { useForm } from "../hooks/useForm"
import { CovertToBinary } from "./CovertToBinary";

export const InputCrc = () => {

    const [polinomio, setPolinimio] = useState();
    const [inputCharge, setInputCharge] = useState(false);

    const {formState, onInputChange} = useForm({
        crc: '',
    });

    const {crc} = formState;

    
     const onSubmitPol = () => {
        setPolinimio(crc)
        setInputCharge(true)
    } 

    
   return(
    <>
     
        <div className="container">
        <input type="text"
                className="inputCRC form-control"
                placeholder="X⁵+X⁴+X³+X²+X¹+1"
                value={crc}
                name="crc"
                onChange={onInputChange} />

        <button
            className="btn btn-outline-primary mt-1"
            type="submit"
            onClick={onSubmitPol}>
            Agregar
        </button>

        <CovertToBinary polynomial={inputCharge ? polinomio : 'x' } />
        </div>
   
    </>
   )

    
}