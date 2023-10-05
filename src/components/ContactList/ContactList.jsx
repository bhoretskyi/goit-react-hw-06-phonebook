// import { StyledButton } from "./ContactList.styled"
// import { deleteContact } from "redux/contactSlise"
// import { useDispatch } from "react-redux"

// export const ContactList = ({filteredContacts}) => {
//   const dispatch = useDispatch()
//     return (<ul>
//         {filteredContacts.map(contact => (
//           <li key={contact.id}>
//             <p>
//               {contact.name}: {contact.number}
//             </p>
//             <StyledButton onClick={() => dispatch(deleteContact(contact.id))}>
//               Delete
//             </StyledButton>
//           </li>
//         ))}
//       </ul>)
// }