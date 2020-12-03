import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [activeRow, setActiveRow] = useState(0);
  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [rows, setRows] = useState([]);
  const [valid, setValid] = useState(true);
  
  useEffect(()=>{
    setRows([...rows, {name: 'Jan', lastName: 'Kowalski'}]);
  }, [])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleLastNameChange = (e) => {
    setlastName(e.target.value)
  }

  const deleteRow = (index, e) => {
    const newRows = rows;
    newRows.splice(index, 1)
    setRows([...newRows]);
    setActiveRow(activeRow-1)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, lastName);
    if( name.length && lastName.length){
      setValid(true)
      rows.push({name: name, lastName: lastName})
      setActiveRow(rows.length)
    }
    else{
      setValid(false)
    }

  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="App-main">
        <aside className="App-main-aside-left">
        </aside>
        <aside className="App-main-aside-right">
        </aside>
        <div className="App-main-header">
          <div className="App-main-header-animation">

          </div>
        </div>
        <div className="App-main-body">
          <div class="grid-container">
            <div class="Pracownicy"> Pracownicy</div>
              { 
                rows.map((row, index) => {
                  const className1 = `im${index+1} im`;
                  const className2 = `naz${index+1} naz`;
                  return (
                    <>
                      <div className={className1}>{row.name}</div>
                      <div className={className2}>{row.lastName}
                        <div className='delete' onClick={(e) => deleteRow(index, e)}>delete</div>
                      </div>
                    </>
                  )
                })
              }
          </div>
          <div>
          <div className="form-validate">
            {valid ? null : 'Imię i nazwisko nie może być puste'}
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              Imię:
              <input type="text" name="imie" value={name} onChange={handleNameChange}/>
            </label>
            <label>
              Nazwisko:
              <input type="text" name="nazwisko" value={lastName} onChange={handleLastNameChange}/>
            </label>
            <input type="submit" value="Submit" disabled=
            {
              activeRow > 5 ? 
                "disabled" : ''
            }
            />
          </form>
          </div>
        </div>
      </main>
      <header className="App-footer">
      </header>
    </div>
  );
}

export default App;
