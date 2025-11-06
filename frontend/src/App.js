import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  //State
  const [notes, setNotes] = useState(null);
  const [createForm, setCreateForm] = useState({
    title: "",
    body: "",
  })
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    body: "",
  })

  //Use effects
  useEffect(() => {
    fetchNotes();
  }, [])

  //Functions
  const fetchNotes = async () => {
    //Fetch the notes
    const res = await axios.get("http://localhost:4000/notes");
    //Set to state
    console.log(res);
    setNotes(res.data.notes);
    console.log(res);
  };

  const updateCreateForm = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      //This creates a duplicate
      ...createForm,
      //Brackets get the value of name
      [name]: value,
    });
  };

  const createNote = async (e) => {
    e.preventDefault(); //Stops the refreshing of page

    //Create Note
    const res = await axios.post("http://localhost:4000/notes", createForm);

    //Update state
    setNotes([...notes, res.data.note]);

    //Clear Form State
    setCreateForm({ title: "", body: "" });
  }

  const deleteNote = async (_id) => {
    //Delete Note
    const res = await axios.delete(`http://localhost:4000/notes/${_id}`);
    console.log(res);

    //Update State
    const newNotes = [...notes].filter(note => { return note._id !== _id; });

    setNotes(newNotes);
  };

  const updateNote = async (e) => {
    e.preventDefault(); //Stops the refreshing of page
    const {title, body} = updateForm;
    
    //Update Note
    const res = await axios.put(`http://localhost:4000/notes/${updateForm._id}`, {title, body});
    //Update State
    const newNotes = [...notes];
    const index = newNotes.findIndex(note =>{
      //Return index position
      return note._id === updateForm._id;
    })
    newNotes[index] = res.data.note;
    setNotes(newNotes);

    //Clear update form state
    setUpdateForm({
      _id: null,
      title: "",
      body: "",
    })
  };

  const handleUpdateFieldChange = (e) => {
    const { value, name } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value,
    })
  }

  const toggleUpdate = (note) => {
    // Get the current note value
    console.log(note);

    //Set state on update form
    setUpdateForm({
      _id: note._id,
      title: note.title,
      body: note.body,
    })
  }


    return (
      <div className="App">
        <div>
          <h2>Notes:</h2>
          {notes &&
            notes.map((note) => {
              return (
                <div key={note._id}>
                  <h3>{note.title}</h3>
                  <p>{note.body}</p>
                  <button onClick={() => deleteNote(note._id)}>Delete Note</button>
                  <button onClick={() => toggleUpdate(note)}>Update Note</button>
                </div>
              );
            })}
        </div>

        {updateForm._id && (
          <div>
          <h2>Update Note</h2>
          <form onSubmit = {updateNote}> 
            <input onChange={handleUpdateFieldChange} value={updateForm.title} name="title" />
            <textarea onChange={handleUpdateFieldChange} value={updateForm.body} name="body" />
            <button type="Submit">Update Note</button>
          </form>
        </div>
        )}

        {!updateForm._id &&
          <div>
          <h2>Create a Note</h2>
          <form onSubmit={createNote}>
            <input
              onChange={updateCreateForm}
              value={createForm.title}
              name="title" />
            <textarea
              onChange={updateCreateForm}
              value={createForm.body}
              name="body" />
            <button type="Submit">Create Note</button>
          </form>
        </div>}
      </div>

    );

}

export default App;
