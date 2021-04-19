import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    let [value, setValue] = useState<T>(() => {
        let stored = localStorage.getItem(key);
        if (stored !== null) {
            return JSON.parse(stored);
        }
        return typeof initialValue === 'function' ? initialValue() : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue] as const;
}

export default useLocalStorage;
