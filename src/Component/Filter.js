import { useTable } from "../context/TableContext";

export const FilterSection = () => {
    const { handleSortchange, sortConfig} = useTable();
    return (
        <>
            <div className="filter-container">
                    <ul className="filter-section">
                        <li className="filter-list">
                            <label
                                for="h-college-dunia">Heighest Collegedunia Ratings</label>
                            <input
                                type="radio"
                                id="h-college-dunia"
                                className="filter-input"
                                checked={sortConfig.key === 'collegeduniarating' && sortConfig.direction === 'descending'}
                                onChange={()=>handleSortchange('collegeduniarating', 'descending')}
                                 />
                        </li>
                        <li className="filter-list">
                            <label
                                for="l-college-dunia">Lowest Collegedunia Ratings</label>
                            <input
                                type="radio"
                                id="l-college-dunia" 
                                className="filter-input"
                                checked={sortConfig.key === 'collegeduniarating' && sortConfig.direction === 'ascending'}
                                onChange={()=>handleSortchange('collegeduniarating', 'ascending')}
                                />
                        </li>
                        <li className="filter-list">
                            <label
                                for="h-user-review">Heighest User Review</label>
                            <input
                                type="radio"
                                id="h-user-review" 
                                className="filter-input"
                                checked={sortConfig.key === 'userReview' && sortConfig.direction === 'descending'}
                                onChange={()=>handleSortchange('userReview', 'descending')}
                                />
                        </li>
                        <li className="filter-list">
                            <label
                                for="l-user-review">Lowest User Review</label>
                            <input
                                type="radio"
                                id="l-user-review"
                                className="filter-input" 
                                checked={sortConfig.key === 'userReview' && sortConfig.direction === 'ascending'}
                                onChange={()=>handleSortchange('userReview', 'ascending')}
                                />
                        </li>
                        <li className="filter-list">
                            <label
                                for="heighest-fees">Heighest Fees</label>
                            <input
                                type="radio"
                                id="heighest-fees"
                                className="filter-input"
                                checked={sortConfig.key === 'courseFees' && sortConfig.direction === 'descending'}
                                onChange={()=>handleSortchange('courseFees', 'descending')} 
                                />
                        </li>
                        <li className="filter-list">
                            <label
                                for="lowest-fees">Lowest Fees</label>
                            <input
                                type="radio"
                                id="lowest-fees"
                                className="filter-input"
                                checked={sortConfig.key === 'courseFees' && sortConfig.direction === 'ascending'}
                                onChange={()=>handleSortchange('courseFees', 'ascending')}  
                                />
                        </li>
                    </ul>
                </div>
        </>
    );
}
