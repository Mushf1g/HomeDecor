import React, { useEffect, useState } from 'react'
import "./producttop.css"
import { BsSortDown } from "react-icons/bs"


function Producttop() {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showOptions && !event.target.closest('.options-container')) {
        setShowOptions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showOptions]);

  const handleSortOption = (option) => {
    // Implement the sorting logic based on the selected option here
    console.log("Sorting option selected:", option);

    // For now, let's just close the options dropdown after selecting an option
    setShowOptions(false); }

  return (
    <>
        <section className='productTop container'>
            <h3>PRODUCTS</h3>
            <div>
                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
                <aside className="options-container">
                  <button onClick={handleToggleOptions}><BsSortDown /><span>SORT BY</span></button>
                  {showOptions && (
                    <ul className="options-list">
                      <li onClick={() => handleSortOption("POPULAR_FIRST")}>POPULAR FIRST</li>
                      <li onClick={() => handleSortOption("CHEAPEST_FIRST")}>CHEAPEST FIRST</li>
                      <li onClick={() => handleSortOption("EXPENSIVE_FIRST")}>EXPENSIVE FIRST</li>
                    </ul>
                  )}
                </aside>
            </div>
        </section>
    </>
   );
}
export default Producttop


