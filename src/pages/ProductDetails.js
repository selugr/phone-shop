import { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import ColorSelector from '../components/ColorSelector/ColorSelector'
import StorageSelector from '../components/StorageSelector/StorageSelector'
import Price from '../components/Price/Price'
import Loader from '../components/Loader/Loader'
import { GLOBALACTIONS, useGlobalContext, useGlobalUpdateContext } from '../components/GlobalContext'
import { ACTIONS, useProductOptions } from '../hooks/useProductOptions'
import dataController from '../middlewares/dataController'
import { IoArrowBackOutline, IoCartOutline } from 'react-icons/io5'
import './ProductDetails.css'

const ProductDetails = () => {
    const [available, setAvailable] = useState(true)
    const { productId } = useParams()
    const { product } = useGlobalContext()
    const globalUpdateContext = useGlobalUpdateContext()

    const [productOptions, dispatch] = useProductOptions()

    useEffect(() => {
        (async () => {
            if (productId) {
                const productRes = await dataController.getProductById(productId)

                if (!productRes) {
                    setAvailable(false)
                    return
                }

                globalUpdateContext({
                    type: GLOBALACTIONS.SET_PRODUCT,
                    payload: {
                        product: productRes
                    }
                })
            }
        })()

        dispatch({
            type: ACTIONS.SETID,
            payload: { id: productId }
        })
    }, [productId])

    const handleAddToCart = async (e) => {
        e.preventDefault()
        if (Object.values(productOptions).includes(null)) { return }

        globalUpdateContext({
            type: GLOBALACTIONS.SET_TOTAL,
            payload: {
                cart: await dataController.addToCart(productOptions)
            }
        })
    }

    if (!product || product.id !== productId) {
        return (
            <div className="loader-container">
                {available ? <Loader/> : <h1>Product not available</h1>}
            </div>
        )
    }

    return (
        <div id="product-details">
            <div className="picture">
                <img src={product.imgUrl} alt={product.model} />
            </div>
            <div className="info">
                <section>
                    <h1>{product.model}</h1>
                    <h2>{product.brand}</h2>
                </section>
                <section>
                    <h3>PRICE:</h3>
                    <div className="price-container ml">
                        <Price price={product.price} />
                    </div>
                </section>
                <section>
                    <h3>SPECIFICATIONS:</h3>
                    <div className="ml">
                        <p><strong>CPU: </strong>{product.cpu}</p>
                        <p><strong>RAM: </strong>{product.ram}</p>
                        <p><strong>OS: </strong>{product.os}</p>
                        <p><strong>DISPLAY RESOLUTION: </strong>{product.displayResolution}</p>
                        <p><strong>BATTERY: </strong>{product.battery}</p>
                        <p><strong>PRIMARY CAMERA: </strong>{product.primaryCamera}</p>
                        <p><strong>SECONDARY CAMERA: </strong>{product.secondaryCamera}</p>
                        <p><strong>DIMENSIONS: </strong>{product.dimentions}</p>
                        <p><strong>WEIGHT: </strong>{product.weight}</p>
                        <details>
                            <summary>Additional Info</summary>
                            <p><strong>AUDIOJACK: </strong>{product.audioJack}</p>
                            <p><strong>BLUETOOTH: </strong>{product.bluetooth}</p>
                            <p><strong>CHIPSET: </strong>{product.chipset}</p>
                            <p><strong>DISPLAY SIZE: </strong>{product.displaySize}</p>
                            <p><strong>DISPLAY TYPE: </strong>{product.displayType}</p>
                            <p><strong>EXTERNAL MEMORY: </strong>{product.externalMemory}</p>
                            <p><strong>GPU: </strong>{product.gpu}</p>
                            <p><strong>NFC: </strong>{product.nfc}</p>
                            <p><strong>SENSORS: </strong>{product.sensors}</p>
                            <p><strong>RADIO: </strong>{product.radio}</p>
                            <p><strong>USB: </strong>{product.usb}</p>
                        </details>
                    </div>
                </section>
                <section>
                    <h3>OPTIONS:</h3>
                    <div className="ml">
                        <p><strong>COLOR:</strong></p>
                        {product.options
                            ? <ColorSelector colors={product.options.colors} dispatch={dispatch} selected={productOptions.colorCode}/>
                            : <Loader/>
                        }
                        <p><strong>STORAGE:</strong></p>
                        {product.options
                            ? <StorageSelector storages={product.options.storages} dispatch={dispatch} selected={productOptions.storageCode}/>
                            : <Loader/>
                        }
                    </div>
                </section>
                <section className="actions">
                    <NavLink className="btn secondary" exact to="/" >
                        <IoArrowBackOutline className="mr"/> Back to List
                    </NavLink>
                    <button
                        className="btn primary"
                        onClick={e => handleAddToCart(e)}
                        disabled={Object.values(productOptions).includes(null)}
                    >
                        <IoCartOutline className="mr" />Add to cart
                    </button>
                </section>
            </div>
        </div>
    )
}

export default ProductDetails
