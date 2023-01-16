import React from "react";
import "../AddPopup/AddPopup.css";
import { useForm } from "react-hook-form";
const ValidationForm = ({
  formSumbitFunction,
  handleFormChange,
  closePopup,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });
  return (
    <div>
      <form onSubmit={handleSubmit(formSumbitFunction)}>
        <div>
          <input
            name='name'
            placeholder='Введите имя...'
            {...register("name", {
              required: "Поле обязательно к заполнению!",
              minLength: {
                value: 4,
                message: "Минимум 4 символа",
              },
              pattern: {
                value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
                message: "Введите корректное имя!",
              },
            })}
            onChange={handleFormChange}
          />

          <div className='styles'>
            {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
          </div>
        </div>
        <div>
          <input
            name='surname'
            placeholder='Введите фамилию...'
            {...register("surname", {
              required: "Поле обязательно к заполнению!",
              minLength: {
                value: 4,
                message: "Минимум 4 символа",
              },
              pattern: {
                value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
                message: "Введите корректную фамилию!",
              },
            })}
            onChange={handleFormChange}
          />

          <div className='styles'>
            {errors?.surname && <p>{errors?.surname?.message || "Error!"}</p>}
          </div>
        </div>
        <div>
          <input
            name='phone'
            placeholder='Введите номер...'
            {...register("phone", {
              required: "Поле обязательно к заполнению!",
              minLength: {
                value: 8,
                message: "Минимум 8 символа",
              },
              pattern: {
                value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                message: "Введите правильный номер",
              },
            })}
            onChange={handleFormChange}
          />

          <div className='styles'>
            {errors?.phone && <p>{errors?.phone?.message || "Error!"}</p>}
          </div>
        </div>
        <div>
          <input
            name='adress'
            placeholder='Введите адрес...'
            {...register("adress", {
              required: "Поле обязательно к заполнению!",
              minLength: {
                value: 5,
                message: "Минимум 5 символа",
              },
            })}
            onChange={handleFormChange}
          />

          <div className='styles'>
            {errors?.adress && <p>{errors?.adress?.message || "Error!"}</p>}
          </div>
        </div>
        <div>
          <input
            name='email'
            placeholder='Введите почту...'
            {...register("email", {
              required: "Поле обязательно к заполнению!",
              minLength: {
                value: 5,
                message: "Минимум 5 символа",
              },
              pattern: {
                value:
                  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
                message: "Пожалуйста введите валидный email",
              },
            })}
            onChange={handleFormChange}
          />

          <div className='styles'>
            {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
          </div>
        </div>
        <div className='btn-wrapper'>
          <button type='submit' className='btn-add_popup'>
            Добавить
          </button>
          <button className='btn-close_popup' onClick={closePopup}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default ValidationForm;
