import { useEffect, useState, Fragment } from "react";
import "./App.css";
import axios from "axios";
import AddPopup from "./components/AddPopup/AddPopup";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./components/ReadOnlyRow/ReadOnlyRow";
import ContentLoader from "react-content-loader";

function App() {
  useEffect(() => {
    setIsLoading(true);
    axios.get("https://63c2fe82e3abfa59bdb6e436.mockapi.io/post").then(data => {
      setPosts(data.data);
      setIsLoading(false);
    });
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]); //стейт постов
  const [popup, setPopup] = useState(false); //стейт попапа
  const [addFormData, setAddFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    adress: "",
    email: "",
  }); //стейт добавление данных

  const [editFormData, setEditFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    adress: "",
    email: "",
  }); //стейт изменения данных

  const handleEditFormChange = e => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handlerAddFormSubmit = () => {
    console.log("compelete", addFormData);
    const newPost = {
      id: nanoid(),
      name: addFormData.name,
      surname: addFormData.surname,
      phone: addFormData.phone,
      adress: addFormData.adress,
      email: addFormData.email,
    };

    const newPosts = [...posts, newPost];
    axios.post("https://63c2fe82e3abfa59bdb6e436.mockapi.io/post", newPost);
    setPosts(newPosts);
    popupHandler();
  };

  const popupHandler = () => {
    setPopup(!popup);
  };

  //сохранение
  const handleSaveForm = e => {
    e.preventDefault();

    const editPost = {
      id: editPosts,
      name: editFormData.name,
      surname: editFormData.surname,
      phone: editFormData.phone,
      adress: editFormData.adress,
      email: editFormData.email,
    };
    const newPosts = [...posts];

    const index = posts.findIndex(post => post.id === editPosts);

    newPosts[index] = editPost;
    axios.put("https://63c2fe82e3abfa59bdb6e436.mockapi.io/post", newPosts);
    setPosts(newPosts);
    setEditPosts(null);
  };

  //удаление
  const handleDeleteClick = id => {
    axios.delete(`https://63c2fe82e3abfa59bdb6e436.mockapi.io/post/${id}`);
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <div>
      {isLoading ? (
        <ContentLoader
          className='loader'
          viewBox='0 0 400 160'
          height={50}
          width={150}
          backgroundColor='grey'>
          <circle cx='150' cy='86' r='8' />
          <circle cx='194' cy='86' r='8' />
          <circle cx='238' cy='86' r='8' />
        </ContentLoader>
      ) : (
        <>
          <form onSubmit={handleSaveForm}>
            <table id='custumers'>
              <thead>
                <tr>
                  <th>Имя</th>
                  <th>Фамилия</th>
                  <th>Телефон</th>
                  <th>Адрес</th>
                  <th>Почта</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                {posts.map(post => (
                  <Fragment>
                    <ReadOnlyRow
                      post={post}
                      handleDeleteClick={handleDeleteClick}
                    />
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
          <button className='btn_add' onClick={popupHandler}>
            Добавить данные
          </button>
          {popup ? (
            <AddPopup
              handlerAddFormSubmit={handlerAddFormSubmit}
              closePopup={popupHandler}
              addFormData={addFormData}
              setAddFormData={setAddFormData}
            />
          ) : null}
        </>
      )}
    </div>
  );
}

export default App;
