import { useDispatch, useSelector } from "react-redux";
import { updateAnimals, updateText } from "../redux/contactFormSlice";
import { useAddContactMutation } from "../redux/contactApi";

const animals = ["cat", "dog", "bird", "fish"];

export const ContactForm = () => {
  const formValues = useSelector((state) => state.contactForm);
  const dispatch = useDispatch();
  const [addContact] = useAddContactMutation();

  const handleTextChange = (e) => {
    const {name, value} = e.target;
    dispatch(updateText({key: name, value: value}));
  };

  const handleCheckboxChange = (e) => {
    const {value} = e.target;
    dispatch(updateAnimals(value));
  }

  return (
    <>
      <h1>Contact Form</h1>
      <input
        placeholder="Full Name"
        name="fullName"
        value={formValues.fullName}
        onChange={handleTextChange}
      />
      <select
        name="shirtSize"
        value={formValues.shirtSize}
        onChange={handleTextChange}
      >
        <option value="">Pick a Shirt Size</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
      </select>
      {animals.map((animal, index) => (
        <div key={index}>
          <input
            onChange={handleCheckboxChange}
            type="checkbox"
            value={animal}
            checked={formValues.animals.includes(animal)}
          />{" "}
          {animal}
        </div>
      ))}
      <button onClick={() => addContact(formValues)}>Add</button>
    </>
  );
};
