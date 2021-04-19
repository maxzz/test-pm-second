import { useState, useEffect } from 'react';

// TODO: debounce, if (window && listenToStorageChanges) useEventListener(window, 'storage', read);

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
        if (!value) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue] as const;
}

export default useLocalStorage;
