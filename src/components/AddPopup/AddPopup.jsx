import "./AddPopup.css";
import ValidationForm from "../Validation/ValidationForm";

const AddPopup = ({
  closePopup,
  handlerAddFormSubmit,
  addFormData,
  setAddFormData,
}) => {
  const handleFormChange = e => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
    console.log("useEffect");
  };

  const formSumbitFunction = () => {
    handlerAddFormSubmit();
    console.log("hello");
  };

  return (
    <div className='popup-wrapper' onClick={closePopup}>
      <div className='popup' onClick={e => e.stopPropagation()}>
        <h2>Добавить данные</h2>
        <ValidationForm
          formSumbitFunction={formSumbitFunction}
          handleFormChange={handleFormChange}
          closePopup={closePopup}
        />
      </div>
    </div>
  );
};

export default AddPopup;
