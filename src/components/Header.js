function Header(props){
    return(
        <header>
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-wrapper__left-part">
                        <div className="logo">
                            <a href="#">
                                <img src="./img/logo.png" alt="Agronom sad" className="logo__img"/>
                            </a>
                        </div>
                        <div className="search">
                            <input type="text" onChange={(event) => props.seacrhQuery(event.target.value)} placeholder="Поиск по имени" className="search__input"/>
                            <button onClick={props.clickAdd} className="search__button action-btn add-btn">Добавить</button>
                        </div>
                    </div>
                
                    <div className="header-wrapper__right-part">
                        <div className="statistics">
                            <h2 className="statistics__heading heading">Посетители</h2>
                            <p className="statistics__data heading"><span className="statistics__data_present">{props.presentPeopleCount}</span> / <span className="statistics__data_absent">{props.absentPeopleCount}</span></p>
                        </div>
                    </div>
                </div>
            </div>   
        </header>
    )
}

export default Header;