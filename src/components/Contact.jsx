import React, { useState } from "react"
import { deleteContact, editContact } from "../features/contacts/contactsSlice"
import { useDispatch } from "react-redux"

export const Contact = ({ data }) => {
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    id: data.id,
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    phone: data.phone
  });

  const toggleEdit = () => {
    setEdit(!edit);
  };

  let viewMode = {}
  let editMode = {}

  if(edit){
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSave = () => {
    dispatch(editContact({ id:contact.id, changes: {
      firstname: contact.firstname,
      lastname: contact.lastname,
      email: contact.email,
      phone: contact.phone
    } }))
    toggleEdit();
  }

  const handleRemove = () => {
    dispatch(deleteContact(contact.id));
  }

  return (
      <>
        <tr style={viewMode}>
          <th scope="row">{contact.id}</th>
          <td>{contact.firstname}</td>
          <td>{contact.lastname}</td>
          <td>{contact.phone}</td>
          <td>{contact.email}</td>
          <td>
            <button className="btn btn-sm btn-success" onClick={toggleEdit}>
              EDITAR
            </button>
            <button className="btn btn-sm btn-danger" onClick={handleRemove}>BORRAR</button>
          </td>
        </tr>

        <tr style={editMode}>
          <th scope="row">{contact.id}</th>
          <td>
            <input
              type="text"
              name="firstname"
              className="form-control form-control-sm"
              value={contact.firstname}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="lastname"
              className="form-control form-control-sm"
              value={contact.lastname}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="email"
              className="form-control form-control-sm"
              value={contact.email}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="phone"
              className="form-control form-control-sm"
              value={contact.phone}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <button className="btn btn-sm btn-danger" onClick={toggleEdit}>
              CANCELAR
            </button>
            <button className="btn btn-sm btn-primary" onClick={handleSave}>
              GUARDAR
            </button>
          </td>
        </tr>
      </>
  );
};
