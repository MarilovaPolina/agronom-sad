import Search from '../Search';
import styles from './Header.module.css';

function Header({ seacrhQuery, clickAdd, presentPeopleCount, absentPeopleCount }) {
  return (
    <header>
      <div className="container">
        <div className={styles.header_wrapper}>
          <div className={styles.header_wrapper__left_part}>
            <div className={styles.logo}>
              <a href="#">
                <img src="./img/logo.png" alt="Agronom sad" className={styles.logo__img} />
              </a>
            </div>
            <Search seacrhQuery={seacrhQuery} clickAdd={clickAdd} />
          </div>

          <div className={styles.header_wrapper__right_part}>
            <div className={styles.statistics}>
              <h2 className={`${styles.statistics__heading} ${styles.heading}`}>Посетители</h2>
              <p className={`${styles.statistics__data} ${styles.heading}`}>
                <span className={styles.statistics__data_present}>{presentPeopleCount}</span>{' '}
                / <span className={styles.statistics__data_absent}>{absentPeopleCount}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
