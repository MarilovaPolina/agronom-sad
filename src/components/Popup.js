
import React from "react"
function Popup(props){
    const [formData, setFormData] = React.useState(
        {
            name: props.popupData?.name || '', 
            firm: props.popupData?.firm || '', 
            group: "Прохожий", 
            present: props.popupData?.present || false
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (formData.name === '' || formData.firm === '') {
            alert("Заполните все поля!");
            return;
        }
        props.onInfoChange(formData);
        props.onClose();
    }
    
    return(
        <div className="container">
            <div className="popup">
                <div className="popup-content">
                    <div className="popup-content__close">
                        <img onClick={props.onClose} src="./img/close.png" alt="Close" className="close"/>
                    </div>
                    <form onSubmit={handleSubmit} className="popup-content__form">
                        <label className="form-label">ФИО
                            <input 
                                type="text" 
                                onChange={handleChange}
                                name="name" 
                                value={formData.name}
                                className="form-label__input"
                            />
                        </label>
                        <label className="form-label">Компания
                            <input 
                                type="text" 
                                onChange={handleChange}
                                name="firm" 
                                value={formData.firm}
                                className="form-label__input"
                            />
                        </label>
                        <label className="form-label">Группа
                            <select 
                                type="text" 
                                onChange={handleChange}
                                name="group" 
                                value={formData.group}
                                className="form-label__input"
                            >
                                <option value="Прохожий">Прохожий</option>
                                <option value="Клиент">Клиент</option>
                                <option value="Партнер">Партнер</option>
                            </select>
                        </label>
                        <label className="form-label form-label__checkbox">Присутствие
                            <input 
                                type="checkbox" 
                                onChange={handleChange}
                                name="present" 
                                className="checkbox"
                                checked={formData.present}
                            />
                        </label>

                        <div className="popup-content__buttons">
                            <button className="action-btn add-btn">Добавить</button>
                            <button onClick={props.onClose} className="action-btn close-btn">Закрыть</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Popup;