import React from "react"
import Filter from "./components/Filter"
import Table from "./components/Table"
import Header from "./components/Header"
import Popup from "./components/Popup"

function App() {
  const [isPopupShown, setPopupShown] = React.useState(false);
  const [people, setPeople] = React.useState(JSON.parse(localStorage.getItem("peopleList")) || [])
  const [popupData, setPopupData] = React.useState([]);

  const clickOnRow = (person) =>{
    setPopupData(person)
    setPopupShown(true); 
  }

  function showPopup(){
    setPopupShown(true);
    setPopupData([]);
  }

  const maxId = people.length > 0 ? Math.max(...people.map(person => person.id)) : 0;

  const savingPopupInfo = (formData) =>{
    if (popupData) {
      setPeople(people.filter(person => person.id !== popupData.id));
    }

    setPeople(prevPeople =>
      [...prevPeople,
        {
          ...formData,
          id: maxId+1
        }
      ]
    );
  }

  const [presentPeopleCount, setPresentPeopleCount] = React.useState(0);
  const [absentPeopleCount, setAbsentPeopleCount] = React.useState(0);
  
  React.useEffect(() => {
    const presentCount = people.filter(person => person.present===true).length;
    const absentCount = people.filter(person => person.present===false).length;

    setPresentPeopleCount(presentCount);
    setAbsentPeopleCount(absentCount);
  }, [people]); 

  const [searchFilter, setSearchFilter] = React.useState('');
  
  const filterPeopleBySearch = people.filter(person =>{
    return person.name.toLowerCase().includes(searchFilter.toLowerCase());
  });

  const [presenceFilter, setPresenceFilter] = React.useState('all');

  const filterChange = (filter) => {
    setPresenceFilter(filter);
  };

  const filterPeopleByPresence = filterPeopleBySearch.filter(person =>{
    if (presenceFilter === 'present') return person.present;
    if (presenceFilter === 'absent') return !person.present;
    return true;
  });

  React.useEffect(() => {
    localStorage.setItem("peopleList", JSON.stringify(people));
  }, [people]); 

  return (
    <div className="wrapper">
      {isPopupShown && 
        <Popup 
          onClose={() => setPopupShown(false)} 
          popupData={popupData}
          onInfoChange = {savingPopupInfo}
        />
      }
      <Header 
        clickAdd={showPopup}
        presentPeopleCount={presentPeopleCount}
        absentPeopleCount={absentPeopleCount}
        seacrhQuery={setSearchFilter}
      />       
      <main>
        <Table 
          people={filterPeopleByPresence}
          clickPerson={clickOnRow}     
        />  
      </main>
      <Filter
          presenceFilter={presenceFilter} 
          onFilterChange={filterChange}
        />
    </div>
  );
}

export default App;
