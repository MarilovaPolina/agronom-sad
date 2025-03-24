import styles from './Filter.module.css';

function Filter({ onFilterChange, presenceFilter }) {
  // Переключение радио-кнопки
  const handleChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className={styles.list_filters}>
      <div className="container">
        <div className={styles.list_filters__wrapper}>
          <h2 className={`${styles.list_filters__heading} ${styles.heading}`}>Фильтровать по:</h2>
          <div className={styles.list_filters__buttons}>
            <label className={styles.radio_button}>
              <input
                type="radio"
                name="filter"
                value="absent"
                checked={presenceFilter === 'absent'}
                onChange={handleChange}
              />
              <span>Отсутствующим</span>
            </label>
            <label className={styles.radio_button}>
              <input
                type="radio"
                name="filter"
                value="present"
                checked={presenceFilter === 'present'}
                onChange={handleChange}
              />
              <span>Присутствующим</span>
            </label>
            <label className={styles.radio_button}>
              <input
                type="radio"
                name="filter"
                value="all"
                checked={presenceFilter === 'all'}
                onChange={handleChange}
              />
              <span>Без фильтра</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
