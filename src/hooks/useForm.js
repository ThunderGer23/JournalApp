import { useEffect, useMemo, useState } from 'react'

export const useForm = ( initialForm = {}, formValidations = {}) => {
    const [ formState, setFormState ] = useState( initialForm )
    const [ formValidation, setFormValidation] = useState({})
    useEffect(() => {
      createValidators()
    }, [formState])
    
    /* Checking if the form is valid. */
    const isFormValid = useMemo(() => {
        for(const formValue of Object.keys(formValidation)){
            if (formValidation[formValue] !== null ) return false
        }
        return true
    }, [formValidation])

    /**
     * When the input changes, update the form state with the new value.
     */
    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    /**
     * When the reset button is clicked, the form state is set to the initial form state.
     */
    const onResetForm = () => {
        setFormState( initialForm )
    }

    /**
     * It takes the formValidations object and creates a new object with the same keys but with the
     * values being the result of the function in the formValidations object.
     */
    const createValidators = () => {
        const formCheckedValues = {}
        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage = 'Este campo es requerido'] = formValidations[ formField]
            formCheckedValues[`${formField}Valid`] = fn(formState[formField])?null:errorMessage
        }
        setFormValidation(formCheckedValues)
    }
    /* Returning the formState, onInputChange, onResetForm, formValidation and isFormValid. */
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}