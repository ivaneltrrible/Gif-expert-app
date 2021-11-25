import React from 'react'
import PropTypes from 'prop-types'

import { useState } from 'react/cjs/react.development'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState()

    const handleInput = (e) => {
        setInputValue( e.target.value );
        console.log(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2){
            setCategories(cats => [ inputValue, ...cats ]);
            setInputValue('');
        }else{
            alert('El nombre de la categoria tiene que tener mas de 2 caracteres')
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInput }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}