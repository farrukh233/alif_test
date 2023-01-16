### В качестве сервера использовал сервис mockapi - https://mockapi.io/projects/63c2fe82e3abfa59bdb6e437
Данные подгружаю с этого сервера, при добавлении новых данных они также отправляются на сервер. Для отображение загрузки данных использовал Skeleton lib.

Для валидации формы использовал react hook forms. Поле добавления новых пользователей оформил в виде попапа. Запись добавляется в таблицу как визуально, так и на сервере. Использование UI библиотек посчитал не нужным, поскольку обычный css справляется с поставленной задачей вполне хорошо.

Отсутствует стейт-менеджер, поскольку задача небольшая бойлерплейт будет излишним, поэтому остановился на юзстейтах для хранения данных, пропсов не так много.

От себя добавил удаление новых пользователей. Данные удаляются как в самой таблице, так и на сервере. Иконку в виде корзины применил при помощи react icons.

В качестве сборщика использовал Vite. Удобный, быстрый.

Инструкция по запуску:

1. yarn (установить зависимости)
2. yarn dev (запуск проекта)
