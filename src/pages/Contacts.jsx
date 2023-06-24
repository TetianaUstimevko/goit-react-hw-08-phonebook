import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { ContainerStyle, Titleh1, Titleh2 } from "./pages.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectLoading } from "redux/selectors";

export default function Contacts() {
    const dispatch = useDispatch();
    const Loading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <ContainerStyle>
            <Titleh1>Phonebook</Titleh1>
            <ContactForm />
            {Loading && <p>Loading...</p>}
            <Titleh2>Contacts</Titleh2>
            <Filter />
            <ContactList />
        </ContainerStyle>
    );
}