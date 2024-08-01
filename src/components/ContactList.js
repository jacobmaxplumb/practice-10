import { useState } from "react";
import { useGetContactsQuery } from "../redux/contactApi";

export const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();
  const [shirtSizeFilter, setShirtSizeFilter] = useState("");

  return (
    <>
      <h1>Contact List</h1>
      <button onClick={() => setShirtSizeFilter("")}>All</button>
      <button onClick={() => setShirtSizeFilter("S")}>S</button>
      <button onClick={() => setShirtSizeFilter("M")}>M</button>
      <button onClick={() => setShirtSizeFilter("L")}>L</button>
      {contacts ? (
        <>
          {shirtSizeFilter ? (
            <>
              {contacts
                .filter((c) => c.shirtSize === shirtSizeFilter)
                .map((contact) => (
                  <div key={contact.id}>
                    {contact.fullName} - {contact.shirtSize}
                  </div>
                ))}
            </>
          ) : (
            <>
              {contacts.map((contact) => (
                <div key={contact.id}>
                  {contact.fullName} - {contact.shirtSize}
                </div>
              ))}
            </>
          )}
        </>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
};
