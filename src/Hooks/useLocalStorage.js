import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const [localValue, setLocalValue] = useState(() => {
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue;
    })

    const setValue = (value) => {
        setLocalValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return[localValue, setValue]
}

export default useLocalStorage