export default {
    saveToLocalStorage: (key, value, expiry = 3600000) => {
        const now = new Date()
        const data = {
            value: value,
            expiry: now.getTime() + expiry
        }
        localStorage.setItem(key, JSON.stringify(data))
    },
    loadFromLocalStorage: (key) => {
        const jsonData = localStorage.getItem(key)
        if (!jsonData) { return null }
        const data = JSON.parse(jsonData)
        const now = new Date()

        if (now.getTime() > data.expiry) {
            localStorage.removeItem(key)
            return null
        }
        return data.value
    }
}
