import React, { useReducer } from "react"


const formReducer = (state, action) => {
    switch (action.type) {
        case 'NAME':
            return { ...state, name: action.payload };
        case 'PROFILE':
            return { ...state, profileName: state.name, name: '' };
        default:
            return state;
    }

}

const Form = () => {

    const [state, dispatch] = useReducer(formReducer, {
        name: '',
        profileName: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`You have set your name to ${state.name}`);
        dispatch({ type: 'PROFILE' });

    }


    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col justify-start mt-3 p-2'>
            <label htmlFor='name'>
                <input
                    className="py-3 px-2 text-black rounded-lg"
                    value={state.name}
                    onChange={(e) => dispatch({ type: 'NAME', payload: e.target.value })}
                />
                <button
                    className='ml-2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg'>Submit</button>
            </label>
            <p className="mt-3">Welcome home, {state.profileName || state.name}</p>
        </form>

    )
}

export default Form