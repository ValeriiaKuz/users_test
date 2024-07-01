## В реализации я истольковала данный стэк технологий:
* TypeScript
* React
* Redux Toolkit 
* Redux-Saga 
* Axios 
* Formik 
* Yup 
* Vite 
* react-toastify 
* Css modules

Fake Api - JSON placeholder

## Особенности работы с API:
- при запросе на создание в респонсе приходит созданный юзер с переданными полями и с id, по факту он не создается на сервере, поэтому по успешному ответу я добавляю юзера из ответа в store для актуального отображения 
- при запросе на удаление пользователя передаю id пользователя и обращаюсь к endpoint baseurl/users/${id}, ответ приходит пустой со статусом 200, после этого необходимо было бы делать запрос за актуальными пользователями, но так как данные на сервере не обновляются, то я при успешном ответе передаю id далее для обновления store 

## Валидация формы: 
валидацию реализовала с помощью Yup, требования к корректному значению выводятся сверху поля ввода. 

## Отображение состояния запросов: 
реализовала с помошью toastify

## Тесты:
Для написания тестов использовала vitest, testing-library/react

Перечень тестов: тест для запроса юзеров, тест формы создания юзера.

## Затраченное время:
- написание приложения заняло примерно 6 - 8 часов ( больше всего времени ушло на ознакомление с Redux-Saga, тк до этого использовала Redux-thunk )
- написание тестов заняло около 4 часов (имею маленький опыт в этом)












