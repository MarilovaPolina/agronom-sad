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
                        <tr className="compact-row">
                            <td>1</td>
                            <td>Иванов Иван <br /> Компания А <br /> Группа 1</td>
                            <td>
                                <div className="circle circle-present"></div>
                            </td>
                        </tr>
                        <tr className="compact-row">
                            <td>2</td>
                            <td>Петров Петр <br /> Компания Б <br /> Группа 2</td>
                            <td>
                                <div className="circle circle-present"></div>
                            </td>
                        </tr>
                        <tr className="compact-row">
                            <td>3</td>
                            <td>Сидоров Сидор <br /> Компания В <br /> Группа 3</td>
                            <td>
                                <div className="circle circle-absent"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;