import React from 'react';
import styles from './Popup.module.css';

function Popup({ popupData, onInfoChange, onClose, showDeleteBtn, onDelete }) {
  // Подгрузка данных в поля формы
  const [formData, setFormData] = React.useState({
    name: popupData?.name || '',
    firm: popupData?.firm || '',
    group: popupData?.group || 'Прохожий',
    present: popupData?.present || false,
  });

  // Обработка изменений
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  // Валидация и сохранение
  function handleSubmit(event) {
    event.preventDefault();
    if (formData.name === '' || formData.firm === '') {
      alert('Заполните все поля!');
      return;
    }
    onInfoChange(formData);
    onClose();
  }

  return (
    <div className="container">
      <div className={styles.popup}>
        <div className={styles.popup_content}>
          <div className={styles.popup_content__close}>
            <img
              onClick={onClose}
              src="./img/close.png"
              alt="Close"
              className={styles.close}
            />
          </div>
          <form onSubmit={handleSubmit} className={styles.popup_content__form}>
            <label className={styles.form_label}>
              ФИО
              <input
                type="text"
                onChange={handleChange}
                name="name"
                value={formData.name}
                className={styles.form_label__input}
              />
            </label>
            <label className={styles.form_label}>
              Компания
              <input
                type="text"
                onChange={handleChange}
                name="firm"
                value={formData.firm}
                className={styles.form_label__input}
              />
            </label>
            <label className={styles.form_label}>
              Группа
              <select
                type="text"
                onChange={handleChange}
                name="group"
                value={formData.group}
                className={styles.form_label__input}
              >
                <option value="Прохожий">Прохожий</option>
                <option value="Клиент">Клиент</option>
                <option value="Партнер">Партнер</option>
              </select>
            </label>
            <label className={`${styles.form_label} ${styles.form_label__checkbox}`}>
              Присутствие
              <input
                type="checkbox"
                onChange={handleChange}
                name="present"
                className={styles.checkbox}
                checked={formData.present}
              />
            </label>

            <div className={styles.popup_content__buttons}>
              <input
                type="submit"
                value="Добавить"
                className={`${styles.action_btn} ${styles.add_btn}`}
              />
              {showDeleteBtn ? (
                <button
                  onClick={() => onDelete(popupData.id)}
                  type="button"
                  className={`${styles.action_btn} ${styles.delete_btn}`}
                >
                  Удалить
                </button>
              ) : null}
              <button
                onClick={onClose}
                type="button"
                className={`${styles.action_btn} ${styles.close_btn}`}
              >
                Закрыть
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Popup;
