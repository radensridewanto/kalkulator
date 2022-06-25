import { useState } from "react";
import { uid } from "uid";
import "./App.css";
import List from "./List";

function App() {
  const [contacts, setContacts] = useState([{
    id: 1,
    name: "Raden Sri Dewanto W.P",
  },
  {
    id: 1,
    name: "Kelas C",
  },
]);
  
const [isUpdate, setIsUpdate] = useState({
  id: null,
  status: false,
});

const [formData, setFormData] = useState({
    name:"",
    telp:"",
});

function handleChange(e){
  let data = {...formData};
  data[e.target.name] = e.target.value;
  setFormData(data);
}

function handleSubmit(e) {
  e.preventDefault();
  let data = [...contacts];

  if (formData.name === "") {
    return false;
  }

  if(isUpdate.status){
    data.forEach((contact) => {
      if(contact.id === isUpdate.id){
        contact.name = formData.name;
      }
    });
  } else {
    data.push({
      id: uid(), 
      name: formData.name,
    });
  }

  setIsUpdate({id: null, status: false});
  setContacts(data);
  setFormData({name: ""});
}

function handleEdit(id){
  let data = [...contacts];
  let foundData = data.find((contact) => contact.id === id);
  setFormData({name: foundData.name});
  setIsUpdate({id: id, status: true});
}

function handleDelete(id) {
  let data = [...contacts];
  let filteredData = data.filter((contact) => contact.id !== id);
  setContacts(filteredData);
}

  return (
    <div className="App">
      <h1 className="px-3 py-3">To-Do-List</h1>

      <form onSubmit={handleSubmit} className="px-3 py-4">
        <div className="form-group">
          <label htmlFor="">Kegiatan</label>
          <input 
            type="text" 
            className="form-control" 
            onChange={handleChange}
            value = {formData.name} 
            name="name" />
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Save
          </button>
        </div>
      </form>

      <List handleEdit={handleEdit} 
            handleDelete={handleDelete}
            data={contacts}
      />
    </div>
  );
}

export default App;
