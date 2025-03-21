import React from 'react';
import Filter from './Filter';
import Table from './Table';
import Header from './Header';
import Popup from './Popup';

function App() {
  const [isPopupShown, setPopupShown] = React.useState(false);
  const [popupData, setPopupData] = React.useState([]);
  const [people, setPeople] = React.useState(JSON.parse(localStorage.getItem('peopleList')) || []);
  const [presentPeopleCount, setPresentPeopleCount] = React.useState(0);
  const [absentPeopleCount, setAbsentPeopleCount] = React.useState(0);
  const [searchFilter, setSearchFilter] = React.useState('');
  const [presenceFilter, setPresenceFilter] = React.useState('all');
  const [existDeleteBtn, setExistDeleteBtn] = React.useState(false);

  const maxId = people.length > 0 ? Math.max(...people.map((person) => person.id)) : 0;

  // Показ попапа
  function showPopup() { 
    setPopupShown(true);
    setPopupData([]);
  }

  // Редактирование человека по клику на строку таблицы
  const handleEditPerson = (person) => {
    setPopupShown(true);
    setExistDeleteBtn(true);
    setPopupData(person);
  };

  // Скрытие попапа
  function closePopup() {
    setPopupShown(false);
    setExistDeleteBtn(false);
  }

  // Удаление человека
  const deletePerson = (id) => {
    setPeople((prevPeople) => prevPeople.filter((human) => human.id !== id));
    setExistDeleteBtn(false);
    setPopupShown(false);
  };

  // Редактирование человека из таблицы
  const savingPopupInfo = (formData) => {
    if (popupData) {
      setPeople(people.filter((person) => person.id !== popupData.id));
    }
    setPeople((prevPeople) => [
      ...prevPeople,
      {
        ...formData,
        id: maxId + 1,
      },
    ]);
  };

  // Счетчик отсутствующих и присутствующих
  React.useEffect(() => {
    setPresentPeopleCount(people.filter((person) => person.present === true).length);
    setAbsentPeopleCount(people.filter((person) => person.present === false).length);
  }, [people]);

  // Сортировка по поисковику
  const filterPeopleBySearch = people.filter((person) => {
    return person.name.toLowerCase().includes(searchFilter.toLowerCase());
  });

  // Отфильтровать людей по отсутствию и присутствию
  const filterPeopleByPresence = filterPeopleBySearch.filter((person) => {
    if (presenceFilter === 'present') return person.present;
    if (presenceFilter === 'absent') return !person.present;
    return true;
  });

  // Сохранение в localStorage
  React.useEffect(() => {
    localStorage.setItem('peopleList', JSON.stringify(people));
  }, [people]);

  return (
    <div className="wrapper">
      {isPopupShown && (
        <Popup
          onClose={closePopup}
          onDelete={deletePerson}
          showDeleteBtn={existDeleteBtn}
          popupData={popupData}
          onInfoChange={savingPopupInfo}
        />
      )}
      <Header
        clickAdd={showPopup}
        presentPeopleCount={presentPeopleCount}
        absentPeopleCount={absentPeopleCount}
        seacrhQuery={setSearchFilter}
      />
      <main>
        <Table 
          people={filterPeopleByPresence} 
          clickPerson={handleEditPerson} 
        />
        <Filter
          presenceFilter={presenceFilter}
          onFilterChange={(filter) => setPresenceFilter(filter)}
        />
      </main>
    </div>
  );
}

export default App;
