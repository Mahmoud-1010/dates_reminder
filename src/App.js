import React, {useState} from "react";
import {Container} from "react-bootstrap";
import {person} from "./data"
import DatesCount from "./component/datesCount";
import DatesList from "./component/datesList";
import DatesAction from "./component/datesAction";


function App() {  

  const [personData, setPersonData] = useState(person)
  const onDelete =()=>{
    setPersonData([])
  }
  const onViewData =()=>{
    setPersonData(person)
  }
  return (
    <div className="font color_body">
      <Container className="py-5">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction deleteData={onDelete} onViewData={onViewData}/>
      </Container>
    </div>
  );
}

export default App;
