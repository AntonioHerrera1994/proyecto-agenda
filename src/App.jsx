import { useEffect } from "react"
import { ContactList } from "./components/ContactList"
import { NewContactForm } from "./components/NewContactForm"
import { getContacts } from "./features/contacts/contactsSlice"
import { useDispatch } from "react-redux"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts())
  })

  return (
    <>
      <main className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-lg-8 mx-auto'>
            <h1 className='display-2 text-center'>AGENDA</h1>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-8 mx-auto'>
            <h2 className="display-6 text-center">Nuevo contacto</h2>
            <NewContactForm />
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-xl-8 mx-auto'>
            <h2 className="display-6 text-center">Contactos</h2>
            <ContactList />
            <hr />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
