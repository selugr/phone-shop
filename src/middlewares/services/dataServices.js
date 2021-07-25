import axiosService from './axiosService'
import localStorageService from './localStorageService'

export default {
    addProductToCart: axiosService.addProductToCart,
    getProducts: axiosService.getProducts,
    getProductById: axiosService.getProductById,
    saveToLocalStorage: localStorageService.saveToLocalStorage,
    loadFromLocalStorage: localStorageService.loadFromLocalStorage
}
