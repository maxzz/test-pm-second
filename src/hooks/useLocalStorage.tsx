import { useState, useEffect } from 'react';

export const Storage = {
    get(key: string, defaultValue: any) {
        let str;
        try {
            str = localStorage.getItem(key);
            return str !== null ? JSON.parse(str) : defaultValue;
        } catch (e) {
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

function useLocalStorage<T>(key: string, initialValue?: T | (() => T)) {
    let [value, setValue] = useState<T>(() => {
        let stored = localStorage.getItem(key);
        if (stored !== null) {
            return JSON.parse(stored);
        }
        return typeof initialValue === 'function' ? (initialValue as () => T)() : initialValue;
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
