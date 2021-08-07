import React from "react";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight'; 
import Clear from '@material-ui/icons/Clear'; 
import DeleteOutline from '@material-ui/icons/DeleteOutline'; 
import Edit from '@material-ui/icons/Edit'; 
import FilterList from '@material-ui/icons/FilterList'; 
import FirstPage from '@material-ui/icons/FirstPage'; 
import LastPage from '@material-ui/icons/LastPage'; 
import Remove from '@material-ui/icons/Remove'; 
import SaveAlt from '@material-ui/icons/SaveAlt'; 
import Search from '@material-ui/icons/Search'; 
import ViewColumn from '@material-ui/icons/ViewColumn'; 

//table to display contact
//then make table editable
// if edit then update json
// add row
// add new row data to json
// save button
// delete icon on row
// on delete remove row from json and update table
function Contact(props) {
  console.log("myJson::", props);
      return (<div className="contact">
      <span>Leanne Graham</span>
    </div>)
    
}

export default Contact;

