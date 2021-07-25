import './Search.css'

const Search = ({ handleFilter }) => {
    return (
        <form className="search">
            <input type="text" placeholder="Search" onChange={(e) => handleFilter(e.target.value)}/>
        </form>
    )
}

export default Search
