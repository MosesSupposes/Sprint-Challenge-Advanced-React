import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', 'false')

    useEffect(() => {
        if (darkMode === 'true') {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkMode])

    const toggleDarkMode = ()  => {
        if (darkMode === 'true') {
            setDarkMode('false')
        } else {
            setDarkMode('true')
        }
    }

    return [toggleDarkMode, darkMode, setDarkMode]
}