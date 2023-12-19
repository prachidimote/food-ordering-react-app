const Navbar = () => {
    return (
      <nav className="flex flex-col lg:flex-row justify-between gap-80 py-5">
          <div className="mx-6">
              <h3 className="text-xl font-bold text-gray-600">{ new Date().toUTCString().slice(0,16) }</h3>
              <h2 className="text-2xl font-bold">Flavoro Foods</h2>
          </div>
          <div>
              <input
              className="p-5 border border-gray-600 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
              style={{ backgroundColor: 'white'}} 
              type="search" 
              name="search" 
              id="" 
              placeholder="Search Here"
              autoComplete="off" />
          </div>
      </nav>
    )
  }
  export default Navbar