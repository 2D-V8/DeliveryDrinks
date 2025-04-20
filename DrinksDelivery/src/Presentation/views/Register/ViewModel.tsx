import React, { useState } from "react";

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

    return {
        ...values,
        onChange
    }
}

export default RegisterViewModel;