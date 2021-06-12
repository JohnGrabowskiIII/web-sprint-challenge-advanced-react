// write your custom hook here to control your checkout form
import {useState} from 'react'

const useForm = (value) => {

    const [formState, setFormState] = useState(value);

    const formChangeHandler = e => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    return [formState, setFormState, formChangeHandler]

}

export default useForm;
