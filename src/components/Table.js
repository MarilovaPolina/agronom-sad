import React from "react"
function Table({ people = [], clickPerson}){   
    return(
        <div className="container">
            <div className="people-list">
                <table className="people-list__table">
                    <thead>
                        <tr>
                            <th className="column-num">Номер</th>
                            <th className="column-name">ФИО</th>
                            <th className="column-firm">Компания</th>
                            <th className="column-group">Группа</th>
                            <th className="column-present">Присутствие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((person, index) => {
                            return(
                                <tr key={person.id} onClick={() => clickPerson(person)} className="full-row">
                                    <td>{index + 1}</td>
                                    <td>{person.name}</td>
                                    <td>{person.firm}</td>
                                    <td>{person.group}</td>
                                    <td>
                                        {person.present ? <div className="circle circle-present"></div> : <div className="circle circle-absent"></div>}
                                    </td>
                                </tr>
                            )
                        })}
                        
                        {/* Для телефонов */}
                        {people.map((person, index) => {
                            return(
                                <tr key={person.id} onClick={() => clickPerson(person)}  className="compact-row">
                                    <td>{index + 1}</td>
                                    <td>{person.name}<br />{person.firm}<br />{person.group}</td>
                                    <td>
                                        {person.present ? <div className="circle circle-present"></div> : <div className="circle circle-absent"></div>}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;