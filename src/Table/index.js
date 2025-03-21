import React from "react"
import styles from "./Table.module.css"

function Table({ people = [], clickPerson}){   
    return(
        <div className="container">
            <div className={styles.people_list}>
                <table className={styles.people_list__table}>
                    <thead>
                        <tr>
                            <th className={styles.column_num}>Номер</th>
                            <th className={styles.column_name}>ФИО</th>
                            <th className={styles.column_firm}>Компания</th>
                            <th className={styles.column_group}>Группа</th>
                            <th className={styles.column_present}>Присутствие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((person, index) => {
                            return(
                                <tr key={person.id} onClick={() => clickPerson(person)} className={styles.full_row}>
                                    <td>{index + 1}</td>
                                    <td>{person.name}</td>
                                    <td>{person.firm}</td>
                                    <td>{person.group}</td>
                                    <td>
                                    {person.present ? <div className={`${styles.circle} ${styles.circle_present}`}></div> : <div className={`${styles.circle} ${styles.circle_absent}`}></div>}
                                    </td>
                                </tr>
                            )
                        })}
                        
                        {/* экраны <= 768px */}
                        {people.map((person, index) => {
                            return(
                            <tr key={person.id} onClick={() => clickPerson(person)} className={styles.compact_row}>
                                <td>{index + 1}</td>
                                <td>{person.name} <br /> {person.firm} <br /> {person.group}</td>
                                <td>
                                    {person.present ? <div className={`${styles.circle} ${styles.circle_present}`}></div> : <div className={`${styles.circle} ${styles.circle_absent}`}></div>}
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