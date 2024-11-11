import { useSelector } from "react-redux"
import { Contact } from "./Contact"
import { selectContacts } from "../features/contacts/contactsSlice"

export const ContactList = () => {
    const data = useSelector(state => selectContacts(state))

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">E-mail</th>    
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                { data.map(contact => (
                    <Contact key={contact.id} data={contact} />
                )) }
            </tbody>
        </table>
    )
}
