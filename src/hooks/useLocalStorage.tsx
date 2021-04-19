import { useState, useEffect } from 'react';

// TODO: debounce, if (window && listenToStorageChanges) useEventListener(window, 'storage', read);

function useLocalStorage<T>(key: string, defaultValue?: T | (() => T)) {
    let [storedValue, setStoredValue] = useState<T>(() => {
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

    /*
    useEffect(() => {
        if (!storedValue) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(storedValue));
        }
    }, [key, storedValue]);
    */

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            // Allow value to be a function so we have same API as useState.
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            if (!valueToStore) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };

    return [storedValue, setValue] as const;
}

export default useLocalStorage;
