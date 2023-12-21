Блог-платформа

Адаптивная верстка?

поработал с useSearchParams(router v6) или способа, описанного в 4.2.8, чтобы после перезагрузки оставалась текущая страница пагинации, чтобы при переходе на стаью и нажатии кнопки "назад" в браузере пырекидывало на страницу с которой и перешли на данную статью. ?!!

фишку на проверку валидности картинку. Я вставил тег img, спрятал его и накинул на него методы <img onLoad={} onError={} /> и обрабатывал, если ссылка ведет на несуществующую картнку ?!!

Сделал кнопку disabled, если данные в редаксе совпадают с тем, что есть в форме, чтобы юзер не отправлял уже существующие данные ?!!

чтобы не было пробелов в тегах и всяких лишних символов pattern: { value: /^[a-zA-Z0-9]+$/, message: 'You can use only english letters and digits without spaces and other symbols', },

на название статьи накидывайте maxLength валидацию

когда мы не авторизированы, мы не должны иметь возможность зайти по прямой ссылке на создание или редактирование статьи, в профиль юзера и тп => в подобных случаях стоит редиректить на логин пейдж

в body реквеста названия тегов надо передавать в формате массива по ключу "tagList"

Страница редактирования статьи. /articles/{slug}/edit

Реиспользуйте форму, использующуюся при создании.

Клиентская валидация React Hook Form.

react-tostify для нотификаций при всяких ошибках или наоборот успешно произошедшем действии пользователя

использовать react-hook-form + yup

export const schemaCreateNewArticle = yup.object().shape({ title: yup .string() .min(3, 'Допускается не менее 3 символов') .max(100, 'Допускается не более 100 символов') .trim() .required('Это поле обязательно'), description: yup.string().trim().min(3, 'Допускается не менее 3 символов').required('Это поле обязательно'), body: yup .string() .min(3, 'Допускается не менее 3 символов') .max(10000, 'Допускается не более 10000 символов') .trim() .required('Это поле обязательно'), tags: yup .array() .of(yup .object().shape({ value: yup.string().optional().min(3, 'Не менее 3 символов').max(15, 'Не более 15 символов').required(), })) .max(10, 'Допускается не более 10 тегов') .compact((value) => value === false) .optional(), });

когда мы не авторизированы, мы не должны иметь возможность зайти по прямой ссылке на создание или редактирование статьи, в профиль юзера и тп => в подобных случаях стоит редиректить на логин пейдж

Функционал лайков

Для корректного отображения лайка надо передать Authorization: `Token ${token}` в гет запрос со статьей(ями)

в запрос нужно отправлять токен

Настройка: сохранение залогиненного пользователь при перезагрузке страницы

Функционал Log Out

**План реализации проекта: Блог-платформа на React Hooks**

1. **Определение требований:**

   - Определить основные функциональные и нефункциональные требования к проекту.

   - Разработать схему базы данных для хранения блог-постов, комментариев и пользовательской информации.

2. **Настройка окружения:**

   - Установка Node.js и npm.

   - Инициализация проекта с использованием Create React App.

   - Установка необходимых зависимостей: react, react-dom, react-router, и других.

3. **Настройка структуры проекта:**

   - Создание основных директорий: `src`, `components`, `containers`, `services`, `styles`, и т.д.

   - Разработка компонентов для отображения блог-постов, комментариев и других элементов.

4. **Настройка маршрутизации:**

   - Использование `react-router` (v5 или v6) для реализации навигации по страницам.

   - Создание основных маршрутов: главная страница, страница блог-поста, страница комментариев и т.д.

5. **Разработка API-сервиса:**

   - Создание модуля для работы с API, используя Axios или Fetch.

   - Определение эндпоинтов для получения и отправки данных: получение блог-постов, добавление комментариев и т.д.

   - Настройка работы с JWT-токенами, учитывая, что exp и iat приходят в секундах.

6. **Интеграция с бэкендом:**

   - Разработка серверной части на выбранном вами языке программирования (например, Node.js с использованием Express).

   - Настройка CORS для разрешения запросов с вашего фронтенда.

   - Подключение к базе данных и реализация логики для работы с данными.

7. **Интеграция с авторизацией:**

   - Реализация страницы входа и регистрации.

   - Использование JWT-токенов для аутентификации пользователей.

   - Реализация защиты маршрутов, доступных только авторизованным пользователям.

8. **Реализация основных функциональностей:**

   - Создание форм для добавления блог-постов и комментариев.

   - Реализация возможности редактирования и удаления блог-постов.

   - Возможность редактирования и удаления комментариев.

9. **Тестирование:**

   - Разработка модульных и интеграционных тестов для основных компонентов и функциональностей.

   - Тестирование взаимодействия с API и бэкендом.

10. **Деплой и оптимизация:**

    - Настройка сборки проекта для продакшн.

    - Деплой фронтенда и бэкенда на выбранный хостинг.

    - Оптимизация проекта, включая уменьшение размера изображений, код-сплиттинг и другие техники.

11. **Документация:**

    - Написание документации к API.

    - Документирование ключевых частей кода.

    - Создание руководства пользователя.

12. **Тестирование безопасности:**

    - Проверка на уязвимости, такие как инъекции, XSS и CSRF.

    - Реализация мер безопасности для защиты от атак.

13. **Поддержка:**

    - Создание системы логирования для отслеживания ошибок.

    - Установка механизмов мониторинга производительности и доступности.

14. **Обновление и дальнейшее развитие:**

    - Разработка плана обновлений и добавления новых функций.

    - Реализация механизмов для обновления приложения на стороне клиента и сервера.

15. **Тестирование и окончательный релиз:**

    - Проведение окончательного тестирования на боевом сервере.

    - Релиз приложения.

16. **Мониторинг и поддержка:**

    - Установка систем мониторинга для отслеживания производительности и доступности.

    - Поддержка и регулярные обновления.

17. **Оценка производительности:**

    - Измерение производительности фронтенда и бэкенда.

    - Оптимизация медленных участков кода.

18. **Завершение:**

    - Подготовка окончательной документации и отчета о реализации проекта.

    - Завершение разработки и выпуск в продакшн.

**Дорожная карта разработки для страницы со списком статей (/articles):**

1. **Настройка проекта и окружения:**

   - Установка и настройка React, React Router, и необходимых зависимостей.

   - Создание основной структуры проекта.

2. **Разработка компонентов:**

   - Создание компонента для отображения списка статей.

   - Реализация компонента для отображения заголовка статьи и обработчика клика для перехода на страницу статьи.

3. **Настройка маршрутизации:**

   - Использование React Router для создания маршрута "/articles".

   - Настройка перехода на страницу статьи при клике на заголовок.

4. **Интеграция с API:**

   - Разработка модуля для работы с API.

   - Настройка запроса на сервер для получения списка статей с учетом токена пользователя.

5. **Авторизация и лайки:**

   - Реализация проверки авторизации пользователя.

   - Добавление кнопки лайка к каждой статье, которая активна только для авторизованных пользователей.

   - Отправка токена пользователя при запросе списка статей.

6. **Пагинация на стороне сервера:**

   - Разработка серверной логики для пагинации.

   - Интеграция пагинации с компонентом списка статей.

   - Обработка изменения страницы и отправка соответствующего запроса на сервер.

7. **Индикаторы загрузки:**

   - Добавление индикаторов загрузки для уведомления пользователя о процессе загрузки данных.

   - Интеграция индикаторов с запросами на сервер.

8. **Обработка ошибок:**

   - Реализация обработки ошибок при загрузке данных.

   - Отображение сообщений об ошибках для пользователя.

9. **Отображение данных пользователя в шапке:**

   - Создание компонента для отображения информации о пользователе в шапке.

   - Интеграция компонента в макет страницы.

10. **CSS свойства overflow-wrap: anywhere / break-word:**

    - Применение свойства `overflow-wrap: anywhere` / `break-word` для обработки длинных слов и предотвращения выхода за границы контейнера.

11. **Тестирование:**

    - Написание тестов для компонентов.

    - Тестирование взаимодействия с API и серверной логики.

12. **Документация:**

    - Обновление документации с учетом новых изменений.

    - Документирование ключевых частей кода.

13. **Тестирование безопасности:**

    - Проверка безопасности компонентов и запросов к API.

    - Реализация мер безопасности для защиты от уязвимостей.

14. **Деплой и оптимизация:**

    - Подготовка сборки проекта для продакшн.

    - Деплой фронтенда на выбранный хостинг.

    - Оптимизация проекта, включая уменьшение размера изображений и другие техники.

15. **Мониторинг и поддержка:**

    - Установка систем мониторинга для отслеживания производительности и доступности.

    - Поддержка и регулярные обновления.

16. **Оценка производительности:**

    - Измерение производительности фронтенда и бэкенда.

    - Оптимизация медленных участков кода.

17. **Тестирование и окончательный релиз:**

    - Проведение окончательного тестирования на боевом сервере.

    - Релиз страницы со списком статей.

18. **Завершение:**

    - Подготовка окончательной документации и отчета о реализации страницы со списком статей.

    - Завершение разработки и выпуск в продакшн.

**Дорожная карта разработки для страницы одной статьи (/articles/{slug}):**

1. **Интеграция с Ant Design:**

   - Установка Ant Design и необходимых зависимостей.

   - Использование подходящего модуля для вывода Markdown разметки на экране, например, `react-markdown` или аналогичного.

2. **Разработка компонента для отображения статьи:**

   - Создание компонента для отображения полного текста статьи в Markdown формате.

   - Интеграция компонента вывода Markdown с выбранным модулем.

3. **Отображение данных пользователя в шапке:**

   - Расширение компонента шапки для отображения данных пользователя.

4. **CSS свойство overflow-wrap: anywhere / break-word:**

   - Применение свойства `overflow-wrap: anywhere` / `break-word` для обработки длинных слов и предотвращения выхода за границы контейнера.

5. **Кнопка редактирования:**

   - Добавление кнопки редактирования ("Edit") на странице статьи.

   - Реализация перехода на страницу редактирования при нажатии на кнопку.

6. **Кнопка удаления и модалка подтверждения:**

   - Добавление кнопки удаления ("Delete") на странице статьи.

   - Интеграция компонента `<Popconfirm />` из Ant Design для модального подтверждения действия удаления.

   - Реализация запроса на удаление статьи при подтверждении.

7. **Поддержка пагинации:**

   - Использование `useSearchParams` из React Router v6 для работы с параметрами запроса.

   - Сохранение текущей страницы пагинации в параметрах запроса.

   - Обработка переходов между страницами при использовании кнопки "назад" в браузере.

8. **Тестирование:**

   - Написание тестов для новых компонентов и функциональностей.

   - Тестирование взаимодействия с API и серверной логики.

9. **Документация:**

   - Обновление документации с учетом новых изменений.

   - Документирование ключевых частей кода.

10. **Тестирование безопасности:**

    - Проверка безопасности компонентов и запросов к API.

    - Реализация мер безопасности для защиты от уязвимостей.

11. **Деплой и оптимизация:**

    - Подготовка сборки проекта для продакшн.

    - Деплой фронтенда на выбранный хостинг.

    - Оптимизация проекта, включая уменьшение размера изображений и другие техники.

12. **Мониторинг и поддержка:**

    - Установка систем мониторинга для отслеживания производительности и доступности.

    - Поддержка и регулярные обновления.

13. **Оценка производительности:**

    - Измерение производительности фронтенда и бэкенда.

    - Оптимизация медленных участков кода.

14. **Тестирование и окончательный релиз:**

    - Проведение окончательного тестирования на боевом сервере.

    - Релиз страницы одной статьи.

15. **Завершение:**

    - Подготовка окончательной документации и отчета о реализации страницы одной статьи.

    - Завершение разработки и выпуск в продакшн.

**Дорожная карта разработки для страницы входа (/sign-in):**

1. **Разработка формы логина:**

   - Создание компонента формы логина с полями для ввода email и пароля.

   - Интеграция библиотеки `react-hook-form` для клиентской валидации и управления состоянием формы.

2. **Механизм аутентификации:**

   - Разработка функционала для отправки запроса на сервер при входе.

   - Использование механизма аутентификации с передачей токена в заголовках запроса.

3. **Клиентская валидация:**

   - Использование `react-hook-form` для установки правил валидации (не пусто, корректный email, не пустой пароль).

   - Реализация клиентской валидации с учетом указанных требований.

   - Интеграция `react-toastify` для уведомлений об ошибках и успешных действиях.

4. **Настройка роутинга:**

   - Использование React Router для настройки роутинга.

   - Редирект на страницу входа при попытке доступа к защищенным ресурсам без авторизации.

5. **Отображение данных пользователя в шапке:**

   - Расширение компонента шапки для отображения данных пользователя, если авторизация успешна.

6. **Серверные ошибки и подсветка полей:**

   - Обработка серверных ошибок и отображение их на форме.

   - Подсветка соответствующих полей формы при ошибках.

7. **Редирект при успешной авторизации:**

   - Редирект на главную страницу или на страницу, с которой был выполнен вход, при успешной авторизации.

8. **Тестирование:**

   - Написание тестов для компонентов, формы и функционала входа.

   - Тестирование взаимодействия с API и серверной логики.

9. **Документация:**

   - Обновление документации с учетом новых изменений.

   - Документирование ключевых частей кода.

10. **Тестирование безопасности:**

    - Проверка безопасности компонентов и запросов к API.

    - Реализация мер безопасности для защиты от уязвимостей.

11. **Деплой и оптимизация:**

    - Подготовка сборки проекта для продакшн.

    - Деплой фронтенда на выбранный хостинг.

    - Оптимизация проекта, включая уменьшение размера изображений и другие техники.

12. **Мониторинг и поддержка:**

    - Установка систем мониторинга для отслеживания производительности и доступности.

    - Поддержка и регулярные обновления.

13. **Оценка производительности:**

    - Измерение производительности фронтенда и бэкенда.

    - Оптимизация медленных участков кода.

14. **Тестирование и окончательный релиз:**

    - Проведение окончательного тестирования на боевом сервере.

    - Релиз страницы входа.

15. **Завершение:**

    - Подготовка окончательной документации и отчета о реализации страницы входа.

    - Завершение разработки и выпуск в продакшн.

**Дорожная карта разработки для страницы регистрации (/sign-up):**

1. **Разработка формы регистрации:**

   - Создание компонента формы регистрации с полями для ввода email, username, password, repeat password и галочкой согласия с обработкой персональных данных.

   - Интеграция библиотеки `react-hook-form` для клиентской валидации и управления состоянием формы.

2. **Клиентская валидация:**

   - Использование `react-hook-form` для установки правил валидации (корректный email, от 3 до 20 символов для username, от 6 до 40 символов для пароля, совпадение пароля и его повтора, отмечена галочка согласия).

   - Интеграция `react-toastify` для уведомлений об ошибках и успешных действиях.

3. **Настройка роутинга:**

   - Использование React Router для настройки роутинга.

   - В случае успешной регистрации редирект на страницу входа.

4. **Отображение данных пользователя в шапке:**

   - Расширение компонента шапки для отображения данных пользователя после успешной регистрации.

5. **Фишка на проверку валидности картинки:**

   - Использование тега `img` с методами `onLoad` и `onError` для проверки валидности картинки (например, проверка доступности сервера для указанной ссылки на изображение).

6. **Регулярка для username:**

   - Применение регулярного выражения в `react-hook-form` для валидации username с использованием только строчных английских букв и цифр, начиная с буквы.

7. **Обработка ошибок на сервере:**

   - Обработка ошибок, связанных с уникальностью и валидностью username и email на сервере.

   - Вывод сообщений об ошибках на форме регистрации.

8. **Тестирование:**

   - Написание тестов для компонентов, формы и функционала регистрации.

   - Тестирование взаимодействия с API и серверной логики.

9. **Документация:**

   - Обновление документации с учетом новых изменений.

   - Документирование ключевых частей кода.

10. **Тестирование безопасности:**

    - Проверка безопасности компонентов и запросов к API.

    - Реализация мер безопасности для защиты от уязвимостей.

11. **Деплой и оптимизация:**

    - Подготовка сборки проекта для продакшн.

    - Деплой фронтенда на выбранный хостинг.

    - Оптимизация проекта, включая уменьшение размера изображений и другие техники.

12. **Мониторинг и поддержка:**

    - Установка систем мониторинга для отслеживания производительности и доступности.

    - Поддержка и регулярные обновления.

13. **Оценка производительности:**

    - Измерение производительности фронтенда и бэкенда.

    - Оптимизация медленных участков кода.

14. **Тестирование и окончательный релиз:**

    - Проведение окончательного тестирования на боевом сервере.

    - Релиз страницы регистрации.

15. **Завершение:**

    - Подготовка окончательной документации и отчета о реализации страницы регистрации.

    - Завершение разработки и выпуск в продакшн.

**Дорожная карта разработки для страницы редактирования информации пользователя (/profile):**

1. **Разработка формы редактирования профиля:**

   - Создание компонента формы редактирования профиля с полями для ввода username, email, new password, avatar image.

   - Интеграция библиотеки `react-hook-form` для клиентской валидации и управления состоянием формы.

2. **Механизм редактирования профиля (метод Update User):**

   - Разработка функционала для отправки запроса на сервер при редактировании профиля.

   - Использование метода Update User для обновления информации пользователя.

3. **Клиентская валидация:**

   - Использование `react-hook-form` для установки правил валидации (не пустой username, корректный email, от 6 до 40 символов для нового пароля, корректная ссылка на изображение).

   - Интеграция `react-toastify` для уведомлений об ошибках и успешных действиях.

4. **Отображение данных пользователя в шапке:**

   - Расширение компонента шапки для отображения данных пользователя после успешного редактирования.

5. **Обработка ошибок сервера:**

   - Обработка ошибок, связанных с уникальностью и валидностью username и email на сервере при редактировании профиля.

   - Вывод сообщений об ошибках на форме редактирования.

6. **Инициализация формы значениями из редакса:**

   - Использование `defaultValues` в `useForm` для инициализации формы значениями из редакса.

   - Использование `reset` для сброса формы при изменении значений в редаксе.

7. **Фишка на проверку валидности картинки:**

   - Использование тега `img` с методами `onLoad` и `onError` для проверки валидности картинки (например, проверка доступности сервера для указанной ссылки на изображение).

8. **Регулярка для username:**

   - Применение регулярного выражения в `react-hook-form` для валидации username с использованием только строчных английских букв и цифр, начиная с буквы.

9. **Поле с паролем обязательным:**

   - Делание поля с паролем обязательным для заполнения при редактировании профиля.

10. **Избежание отправки пустой строки в поле пароля:**

    - Проверка и избежание отправки пустой строки в поле пароля при редактировании профиля.

11. **Кнопка disabled при совпадении данных:**

    - Добавление проверки на совпадение данных в форме с данными в редаксе.

    - Делание кнопки отправки формы неактивной, если данные не изменились.

12. **Тестирование:**

    - Написание тестов для компонентов, формы и функционала редактирования профиля.

    - Тестирование взаимодействия с API и серверной логики.

13. **Документация:**

    - Обновление документации с учетом новых изменений.

    - Документирование ключевых частей кода.

14. **Тестирование безопасности:**

    - Проверка безопасности компонентов и запросов к API.

    - Реализация мер безопасности для защиты от уязвимостей.

15. **Деплой и оптимизация:**

    - Подготовка сборки проекта для продакшн.

    - Деплой фронтенда на выбранный хостинг.

    - Оптимизация проекта, включая уменьшение размера изображений и другие техники.

16. **Мониторинг и поддержка:**

    - Установка систем мониторинга для отслеживания производительности и доступности.

    - Поддержка и регулярные обновления.

17. **Оценка производительности:**

    - Измерение производительности фронтенда и бэкенда.

    - Оптимизация медленных участков кода.

18. **Тестирование и окончательный релиз:**

    - Проведение окончательного тестирования на боевом сервере.

    - Релиз страницы редактирования

профиля.

19. **Завершение:**

    - Подготовка окончательной документации и отчета о реализации страницы редактирования профиля.

    - Завершение разработки и выпуск в продакшн.

**Дорожная карта разработки для страницы создания статьи (/new-article):**

1. **Реализация Private Route:**

   - Использование паттерна Private Route для перенаправления пользователя на страницу входа при попытке доступа к странице создания статьи без аутентификации.

2. **Клиентская валидация с использованием React Hook Form и Yup:**

   - Создание компонента формы для создания статьи.

   - Интеграция `react-hook-form` и `yup` для клиентской валидации.

   - Реализация правил валидации для полей title, short description, text и tags.

3. **Использование `useFieldArray` для работы с массивами тегов:**

   - Интеграция `useFieldArray` для обработки массива тегов.

   - Накладывание валидации на теги, включая обязательность, уникальность и проверку на символы.

   - Ограничение максимального количества тегов.

4. **Редирект на страницу входа при неаутентифицированном доступе:**

   - Добавление проверки на аутентификацию пользователя.

   - Редирект на страницу входа в случае попытки неаутентифицированного доступа.

5. **Валидация названия статьи (maxLength):**

   - Накладывание валидации на название статьи, ограничивая его максимальную длину.

6. **Проверка тегов на уникальность и валидность:**

   - Реализация проверки тегов на уникальность и валидность (без пробелов и ненужных символов).

   - Вывод сообщений об ошибке при попытке использовать некорректные теги.

7. **Фишка на проверку валидности изображения:**

   - Использование тега `img` с методами `onLoad` и `onError` для проверки валидности ссылки на изображение.

8. **Реализация запроса на сервер с правильным форматом тегов:**

   - Формирование запроса на сервер с правильным форматом передачи тегов в виде массива по ключу "tagList" в теле запроса.

9. **Интеграция `react-toastify` для уведомлений:**

   - Интеграция библиотеки `react-toastify` для уведомлений об ошибках и успешных действиях пользователя.

10. **Тестирование:**

    - Написание тестов для компонентов, формы и функционала создания статьи.

    - Тестирование взаимодействия с API и серверной логики.

11. **Документация:**

    - Обновление документации с учетом новых изменений.

    - Документирование ключевых частей кода.

12. **Тестирование безопасности:**

    - Проверка безопасности компонентов и запросов к API.

    - Реализация мер безопасности для защиты от уязвимостей.

13. **Деплой и оптимизация:**

    - Подготовка сборки проекта для продакшн.

    - Деплой фронтенда на выбранный хостинг.

    - Оптимизация проекта, включая уменьшение размера изображений и другие техники.

14. **Мониторинг и поддержка:**

    - Установка систем мониторинга для отслеживания производительности и доступности.

    - Поддержка и регулярные обновления.

15. **Оценка производительности:**

    - Измерение производительности фронтенда и бэкенда.

    - Оптимизация медленных участков кода.

16. **Тестирование и окончательный релиз:**

    - Проведение окончательного тестирования на боевом сервере.

    - Релиз страницы создания статьи.

17. **Завершение:**

    - Подготовка окончательной документации и отчета о реализации страницы создания статьи.

    - Завершение разработки и выпуск в продакшн.

**Дорожная карта разработки для страницы редактирования статьи (/articles/{slug}/edit):**

1. **Реиспользование формы создания статьи:**

   - Использование той же формы, которая была создана для страницы создания статьи.

   - Передача данных статьи в форму для предварительного заполнения полей.

2. **Клиентская валидация с использованием React Hook Form и Yup:**

   - Переиспользование клиентской валидации, реализованной с использованием `react-hook-form` и `yup`.

   - Обеспечение корректного отображения данных статьи в форме для редактирования.

3. **Интеграция `react-toastify` для уведомлений:**

   - Интеграция библиотеки `react-toastify` для уведомлений об ошибках и успешных действиях при редактировании статьи.

4. **Редирект на страницу входа при неаутентифицированном доступе:**

   - Добавление проверки на аутентификацию пользователя.

   - Редирект на страницу входа в случае попытки неаутентифицированного доступа к редактированию статьи.

5. **Обновление статьи на сервере:**

   - Реализация запроса на сервер для обновления статьи с использованием данных из формы.

6. **Отображение уведомлений об успешном действии:**

   - Вывод уведомлений с помощью `react-toastify` при успешном обновлении статьи.

7. **Тестирование:**

   - Написание тестов для компонентов, формы и функционала редактирования статьи.

   - Тестирование взаимодействия с API и серверной логики.

8. **Документация:**

   - Обновление документации с учетом новых изменений.

   - Документирование ключевых частей кода.

9. **Тестирование безопасности:**

   - Проверка безопасности компонентов и запросов к API.

   - Реализация мер безопасности для защиты от уязвимостей.

10. **Деплой и оптимизация:**

    - Подготовка сборки проекта для продакшн.

    - Деплой фронтенда на выбранный хостинг.

    - Оптимизация проекта, включая уменьшение размера изображений и другие техники.

11. **Мониторинг и поддержка:**

    - Установка систем мониторинга для отслеживания производительности и доступности.

    - Поддержка и регулярные обновления.

12. **Оценка производительности:**

    - Измерение производительности фронтенда и бэкенда.

    - Оптимизация медленных участков кода.

13. **Тестирование и окончательный релиз:**

    - Проведение окончательного тестирования на боевом сервере.

    - Релиз страницы редактирования статьи.

14. **Завершение:**

    - Подготовка окончательной документации и отчета о реализации страницы редактирования статьи.

    - Завершение разработки и выпуск в продакшн.

**Функционал лайков:**

1. **Настройка API запросов:**

   - Изменение запросов для получения статей, чтобы они включали токен авторизации.

   - Обновление серверной логики для учета токена при обработке запросов на получение статей.

2. **Лайки на странице со списком статей (/articles):**

   - Добавление кнопки лайка к каждой статье на странице списка статей.

   - Реализация проверки наличия авторизации пользователя перед отображением кнопки лайка.

   - Обработка клика по кнопке лайка для отправки соответствующего запроса на сервер.

3. **Лайки на странице отдельной статьи (/articles/{slug}):**

   - Добавление кнопки лайка к отдельной статье на странице просмотра статьи.

   - Реализация проверки наличия авторизации пользователя перед отображением кнопки лайка.

   - Обработка клика по кнопке лайка для отправки соответствующего запроса на сервер.

4. **Обновление счетчика лайков:**

   - Обновление счетчика лайков на клиентской стороне после успешного запроса на сервер.

5. **Сохранение авторизации при перезагрузке страницы:**

   - Использование токена пользователя для автоматической аутентификации при перезагрузке страницы.

   - Реализация механизма сохранения и извлечения токена из хранилища (например, localStorage или sessionStorage).

**Функционал Log Out:**

1. **Реализация кнопки Log Out:**

   - Добавление кнопки Log Out в интерфейс.

   - Обработка клика по кнопке Log Out для выполнения выхода пользователя из системы.

2. **Очистка сохраненных данных при Log Out:**

   - При нажатии на Log Out, очистка хранилища с токеном пользователя.

   - Перенаправление пользователя на страницу входа или другую страницу после успешного Log Out.

3. **Обновление интерфейса после Log Out:**

   - Обновление интерфейса при выходе пользователя, например, скрытие элементов, доступных только залогиненным пользователям.

4. **Проверка состояния авторизации:**

   - Обеспечение проверки состояния авторизации при загрузке страницы для корректного отображения элементов интерфейса.

5. **Дополнительные меры безопасности:**

   - Реализация дополнительных мер безопасности, таких как уничтожение сессии на сервере при Log Out, чтобы предотвратить злоупотребление токеном после выхода.

6. **Тестирование:**

   - Написание тестов для функционала лайков и Log Out.

   - Тестирование в различных сценариях, включая успешные и неуспешные действия пользователя.

7. **Документация:**

   - Обновление документации с учетом новых изменений.

   - Документирование ключевых частей кода.

8. **Мониторинг и поддержка:**

   - Установка систем мониторинга для отслеживания производительности и доступности.

   - Поддержка и регулярные обновления.
