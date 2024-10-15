import SearchIcon from "../../assets/searchIcon.svg"
const SearchInput = () => {
  return (
    <div className='flex flex-col self-stretch py-0-5 my-auto w-80 min-w-[240px] cursor-pointer'>
        <div className='flex gap-5 justify-between'>
        <input 
          type="text"
          id="searchInput"
          className="flex shrink-0 mt-1.5 text-center h-8 w-72 focus:outline-none cursor-pointer"
          aria-label="Search for items"
          placeholder="Pesquisar Itens"
        />
              <img src={SearchIcon.src} alt=""  className="object-contain shrink-0 w-5 aspect-square"/>
        </div>      
    </div>
  )
}

export default SearchInput