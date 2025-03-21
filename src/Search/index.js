import styles from './Search.module.css';

function Search({ seacrhQuery, clickAdd }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        onChange={(event) => seacrhQuery(event.target.value)}
        placeholder="Поиск по имени"
        className={styles.search__input}
      />
      <button onClick={clickAdd} className={`${styles.action_btn} ${styles.add_btn}`}>
        Добавить
      </button>
    </div>
  );
}
export default Search;
