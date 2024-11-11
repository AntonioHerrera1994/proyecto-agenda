import { useRef } from "react"
import { useDispatch } from "react-redux"
import { addNewContact } from "../features/contacts/contactsSlice"

export const NewContactForm = () => {
    const dispatch = useDispatch()

    const inputFirstname = useRef(null)
    const inputLastname = useRef(null)
    const inputPhone = useRef(null)
    const inputEmail = useRef(null)

    const handleSave = () => {
        const firstname = inputFirstname.current.value
        const lastname = inputLastname.current.value
        const phone = inputPhone.current.value
        const email = inputEmail.current.value

        //Reemplazamos el action addContact por addNewContact
        dispatch(addNewContact({firstname, lastname, phone, email}))

        inputFirstname.current.value = ""
        inputLastname.current.value = ""
        inputPhone.current.value = ""
        inputEmail.current.value = ""
    }

    return (
        <>
            <form action="">
                <div className="row mb-3">
                    <div className="col">
                        <input type="text"
                                name="firstname"
                                className="form-control"
                                placeholder="First name"
                                aria-label="First name"
                                ref={inputFirstname}
                        />
                    </div>
                    <div className="col">
                        <input type="text"
                                name="lastname"
                                className="form-control"
                                placeholder="Last name"
                                aria-label="Last name"
                                ref={inputLastname}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text"
                                name="phone"
                                className="form-control"
                                placeholder="Phone number"
                                aria-label="Phone number"
                                ref={inputPhone}
                        />
                    </div>
                    <div className="col">
                        <input type="text"
                                name="email"
                                className="form-control"
                                placeholder="E-mail"
                                aria-label="E-mail"
                                ref={inputEmail}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-end">
                        <button type="button" className="btn btn-primary" onClick={handleSave}>GUARDAR</button>
                    </div>
                </div>
            </form>
        </>
    )
}
