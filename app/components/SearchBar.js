


 "use client"
 // components/SearchBar.js

import React, { useState } from 'react';

const SearchBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('low-to-high');

  const filterOptions = [
    { value: 'low-to-high', label: 'Price: Low - High' },
    { value: 'high-to-low', label: 'Price: High - Low' },
    { value: 'student-reviews', label: 'Student Reviews' },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    setDropdownOpen(false);
  };

  return (
    <div className="max-w-xl mx-auto p-8 rounded shadow bg-transparent backdrop-filter backdrop-blur-md bg-opacity-20">
      <div className="flex items-center">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-transparent focus:backdrop-filter focus:backdrop-blur-md"
        />

        {/* Filter Dropdown */}
        <div className="relative ml-4">
          <button
            onClick={toggleDropdown}
            className="flex items-center px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <svg className="h-4 w-4 mr-2 stroke-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            Filter
          </button>

          {/* Dropdown Content */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded w-48 shadow-lg">
              <ul>
                {filterOptions.map((option) => (
                  <li
                    key={option.value}
                    onClick={() => handleFilterChange(option.value)}
                    className={`px-4 py-2 cursor-pointer ${
                      selectedFilter === option.value ? 'bg-blue-500 text-white' : 'text-gray-800'
                    } hover:bg-blue-500 hover:text-white transition`}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

// import React, { useState } from 'react';

// const SearchBar = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedFilter, setSelectedFilter] = useState('low-to-high');

//   const filterOptions = [
//     { value: 'low-to-high', label: 'Price: Low - High' },
//     { value: 'high-to-low', label: 'Price: High - Low' },
//     { value: 'student-reviews', label: 'Student Reviews' },
//   ];

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   const handleFilterChange = (value) => {
//     setSelectedFilter(value);
//     setDropdownOpen(false);
//   };

//   return (
//     <div className="max-w-xl mx-auto p-8 rounded shadow">
//       <div className="flex items-center">
//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//         />

//         {/* Filter Dropdown */}
//         <div className="relative ml-4">
//           <button
//             onClick={toggleDropdown}
//             className="flex items-center px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           >
//             <svg className="h-4 w-4 mr-2 stroke-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//             Filter
//           </button>

//           {/* Dropdown Content */}
//           {isDropdownOpen && (
//             <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded w-48 shadow-lg">
//               <ul>
//                 {filterOptions.map((option) => (
//                   <li
//                     key={option.value}
//                     onClick={() => handleFilterChange(option.value)}
//                     className={`px-4 py-2 cursor-pointer ${
//                       selectedFilter === option.value ? 'bg-blue-500 text-white' : 'text-gray-800'
//                     } hover:bg-blue-500 hover:text-white transition`}
//                   >
//                     {option.label}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;






// // import React from 'react'
// // import './SearchBar.css'


// // const Searchbar = () => {
// //   return (
// //     <div>
// //       <div class="container">
// //         <input checked="" class="checkbox" type="checkbox"/> 
// //         <div class="mainbox">
// //             <div class="iconContainer">
// //                 <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="search_icon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
// //             </div>
// //          <input class="search_input" placeholder="search" type="text"/>
// //         </div>
// //     </div>
// //     </div>
// //   )
// // }

// // export default Searchbar
