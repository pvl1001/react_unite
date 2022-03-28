# MF-NextJS

## Запуск

#### Client

```
npm i - установка зависимостей

npm run dev - запустить проект в режиме разработки на localhost:3000

npm run build - собрать проект

npm run start - запустить build проект на localhost:3000
```

#### Server

```
npm i - установка зависимостей

npm run server - запустить сервер на localhost:4000

npm run client - запустить проект в режиме разработки на localhost:3000 из папки Client

npm run dev - запустить server и client 
```

## О проекте

### Client

```
Разработка на фреймворке NextJS. 

pages:
    _app.js - точка входа
    index.js - Объединяй!
    internet.js - #ДляДома
    internetvse.js - #ДляДома Всё
    
components - react компоненты

public: 
    fonts - шрифт "MegaFon Graphik LC"
    style - sass стили. Используется БЭМ методология. Подключение в _app.js (глобальное подключние)
    images - картинки формата .webp
    svg - svg иконки

analytics:
    Analytics.js - скрипты для подлючения яндекс метрики и гугл аналитики. Подключение в _app.js.
    events.js - функции событий аналтики. Использутся при наступлении событий клика или просмотра.
    
redux (redux toolkit) - хранилище данных. Подключение в _app.js:

plugins:
    jquery.autocomplete - плагин автозаполнения формы. Используется при вводе данных проверки андреса.
    jquery.mask - плагин маска для ввода телефона номера. Используется в модальном окне заявки.
    
npm plugins:
    jquery - используется для jquery плагинов.
    react-bootstrap - используется для модальных окон и коллапса (аккордеона)
    slick-carousel - слайдер. Используется в блоке карточек тарифов и карточек оборудования.
    formik - валидация формы. Используется в модальном окне заявки.
    @tippyjs/react - всплывающая подсказка. Используется в блоке с тарифами.
    
plugins_config - конфигурации плагинов

api - api запросы
```
