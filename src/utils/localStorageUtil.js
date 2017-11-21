import MemoryStorage from 'memorystorage'
const cache = new MemoryStorage('mun');

export function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, value)
    } catch (e) {
        cache.setItem(key, value);
    }
}

export function getLocalStorage(key) {
    try {
        return localStorage.getItem(key)
    } catch (e) {
        return cache.getItem(key)
    }
}

export function removeLocalStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (e) {
        cache.setItem(key, null);
    }
}
