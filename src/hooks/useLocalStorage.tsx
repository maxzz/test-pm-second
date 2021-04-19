import { useState, useEffect } from 'react';

export const Storage = {
    get(key: string, defaultValue: any) {
        try {
            let str = localStorage.getItem(key);
            return str !== null ? JSON.parse(str) : defaultValue;
        } catch (error) {
            return defaultValue;
        }
    },
    set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    remove(key: string) {
        localStorage.removeItem(key);
    }
};

function useLocalStorage<T>(key: string, defaultValue?: T | (() => T)) {
    let [value, setValue] = useState<T>(() => {
        let stored = localStorage.getItem(key);
        if (stored !== null) {
            try {
                return JSON.parse(stored);    
            } catch (error) {
                return defaultValue;
            }
        }
        return typeof defaultValue === 'function' ? (defaultValue as () => T)() : defaultValue;
    });

    useEffect(() => {
        if (value === null || value === undefined) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue] as const;
}

export default useLocalStorage;
