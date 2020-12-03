import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (darkModeToggle) => {
    const [value, setValue] = useLocalStorage(darkModeToggle)

    useEffect(() => {
        if (value) {
            window.document.body.classList.add('dark-mode')
        } else {
            window.document.body.classList.remove('dark-mode')
        }
    }, [value])

    return [value, setValue]
}

export default useDarkMode;