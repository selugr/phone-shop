import ListOfProducts from './pages/ListOfProducts'
import ProductDetails from './pages/ProductDetails'

const DynamicProductBreadcrumb = ({ match }) => match.params.productId

export default [
    {
        path: '/:productId',
        breadcrumb: DynamicProductBreadcrumb,
        Component: ProductDetails
    },
    {
        path: '*',
        breadcrumb: 'Catalogue',
        Component: ListOfProducts
    }
]
