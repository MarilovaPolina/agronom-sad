function Filter(props){
    const handleChange = (event) => {
        props.onFilterChange(event.target.value);
    };
    
    return(
        <div className="list-filters">
            <div className="container">
                <div className="list-filters__wrapper">
                    <h2 className="list-filters__heading heading">Фильтровать по:</h2>
                    <div className="list-filters__buttons">
                        <label className="radio-button">
                            <input 
                                type="radio"
                                name="filter" 
                                value="absent"
                                checked={props.presenceFilter==='absent'}
                                onChange={handleChange}
                            />
                            <span>Отсутствующим</span>
                        </label>
                        <label className="radio-button">
                            <input
                                type="radio"
                                name="filter" 
                                value="present"
                                checked={props.presenceFilter==='present'}
                                onChange={handleChange}
                            />
                            <span>Присутствующим</span>
                        </label>
                        <label className="radio-button">
                            <input 
                                type="radio"
                                name="filter" 
                                value="all"
                                checked={props.presenceFilter==='all'} 
                                onChange={handleChange}
                            />
                            <span>Без фильтра</span>
                        </label>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Filter;
