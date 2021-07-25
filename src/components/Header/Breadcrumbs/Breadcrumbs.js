import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import useBreadCrumbs from 'use-react-router-breadcrumbs'
import routes from '../../../routes'
import { useGlobalContext } from '../../GlobalContext'
import './Breadcrumbs.css'

const Breadcrumbs = () => {
    const { product } = useGlobalContext()
    const breadcrumbs = useBreadCrumbs(routes)
    const [breadcrumbsFormatted, setBreadcrumbsFormatted] = useState([])

    useEffect(() => {
        setBreadcrumbsFormatted(breadcrumbs.map(({ match, breadcrumb }) => {
            let nameToDisplay = breadcrumb
            if (match.params.productId) {
                nameToDisplay = ''
                if (product && product.id === match.params.productId) {
                    nameToDisplay = `Product: ${product.model}`
                }
            }

            return {
                nameToDisplay: nameToDisplay,
                url: match.url
            }
        }))
    }, [breadcrumbs.length, product])

    return (
        <div className="breadcrumbs">
            {breadcrumbsFormatted
                ? breadcrumbsFormatted.map((breadCrumb, key) => {
                    return key + 1 === breadcrumbs.length
                        ? <span key={key}>
                            {breadCrumb.nameToDisplay}
                        </span>
                        : <NavLink key={key} to={breadCrumb.url}>
                            {breadCrumb.nameToDisplay}
                        </NavLink>
                })
                : ''
            }
        </div>
    )
}

export default Breadcrumbs
