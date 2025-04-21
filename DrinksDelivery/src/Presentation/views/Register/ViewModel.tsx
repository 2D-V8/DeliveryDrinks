import React, { useState } from "react";
import { ApiDrinks } from "../../../Data/sources/remote/api/ApiDrinks";
import { RegisterAuthUseCase } from "../../../Domain/useCases/auth/RegisterAuth";
RegisterAuthUseCase

const RegisterViewModel = () => {
    const [values, setValues] = useState({
        name : '',
        birthdate: '',
        document: '',
        email: '',
        password: '',
        ConfirmPassword: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    const register = async () => {
        const response = await RegisterAuthUseCase(values);
        console.log('Resultado: ' + JSON.stringify(response));
       
    }

    return {
        ...values,
        onChange, 
        register
    }
}

export default RegisterViewModel;