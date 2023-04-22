/*   header functionality back-bbutton and serach input   */

import React from 'react'

export default function searchinput({ serach, setSearch, searchByName, resetByBackbutton }) {
    return (
        <div className='search'>
            <img src='Slices/Back.png' alt='' className='headerimg' onClick={resetByBackbutton} />
            Romantic-Comedy
            <input className="border-2 border-gray-300 h-10 px-5 rounded-lg focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
                value={serach}
                onChange={(e) => setSearch(e.target.value)}
            />
            <img src='Slices/search.png' alt='' className='headerimg' onClick={searchByName} />

        </div>
    )
}
