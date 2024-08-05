import { useState } from 'react';

export function useLocalStorage<T>(key: string, defaultValue?: T | (() => T)) {
    // TODO: debounce, if (window && listenToStorageChanges) useEventListener(window, 'storage', read);

    let [storedValue, setStoredValue] = useState<T>(
        () => {
            let stored = localStorage.getItem(key);

            if (stored !== null) {
                try {
                    return JSON.parse(stored);
                } catch (error) {
                    return defaultValue;
                }
            }
            
            return typeof defaultValue === 'function' ? (defaultValue as () => T)() : defaultValue;
        }
    );

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            // Allow value to be a function so we have same API as useState.
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
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
