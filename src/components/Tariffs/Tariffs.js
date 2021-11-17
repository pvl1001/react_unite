import './Tariffs.scss';
import "slick-carousel/slick/slick.scss";
import TariffCard from "./TariffCard/TariffCard";
import Slider from "react-slick";
import React from "react";

const tariffs = [
   {
      id: 'for-their',
      name: 'Для своих',
      oldPrice: 1300,
      currentPrice: 650,
      mobWeb: '',
      homeWeb: 500,
      calls: 2100,
      tvLength: '188 каналов',
      mark: 'Акция',
      mftv: [
         {
            name: "START",
            icon: "start",
            desc: "START подарил зрителям «Содержанок», «Бывших», «257 причин, чтобы жить», «Вампиров средней полосы», «Текст» и другие сериалы и фильмы, перевернувшие представление о том, каким может быть российский контент. Новинки кино и сериалов каждую неделю, эксклюзивные премьеры хитов проката — всё это START."
         },
         {
            name: "Мировое кино",
            icon: "mf-tv",
            desc: "Пакет «Мировое кино». 3478 фильмов, 729 сериалов."
         }
      ],
      tvChannels: [
         {
            "group": "HD",
            "groupData": [
               {
                  "id": 6,
                  "name": "Animal Planet HD"
               },
               {
                  "id": 14,
                  "name": "Discovery Channel HD"
               },
               {
                  "id": 18,
                  "name": "Europa Plus TV"
               },
               {
                  "id": 19,
                  "name": "Eurosport 1 HD"
               },
               {
                  "id": 20,
                  "name": "FOX HD"
               },
               {
                  "id": 23,
                  "name": "Fightbox HD"
               },
               {
                  "id": 28,
                  "name": "KBS World"
               },
               {
                  "id": 29,
                  "name": "Kаzаkh TV"
               },
               {
                  "id": 30,
                  "name": "MEZZO LIVE HD"
               },
               {
                  "id": 32,
                  "name": "MTV HD"
               },
               {
                  "id": 34,
                  "name": "MTV Live HD"
               },
               {
                  "id": 39,
                  "name": "National Geographic HD"
               },
               {
                  "id": 44,
                  "name": "Paramount Comedy HD"
               },
               {
                  "id": 45,
                  "name": "RT"
               },
               {
                  "id": 47,
                  "name": "RTG HD"
               },
               {
                  "id": 48,
                  "name": "RTД HD"
               },
               {
                  "id": 51,
                  "name": "SOCHI LIVE"
               },
               {
                  "id": 52,
                  "name": "Science Channel HD"
               },
               {
                  "id": 54,
                  "name": "Sony Channel HD"
               },
               {
                  "id": 56,
                  "name": "TLC HD"
               },
               {
                  "id": 59,
                  "name": "Travel and Adventure HD"
               },
               {
                  "id": 73,
                  "name": "В мире животных"
               },
               {
                  "id": 82,
                  "name": "Еда Премиум"
               },
               {
                  "id": 83,
                  "name": "ЖАРА"
               },
               {
                  "id": 90,
                  "name": "Известия"
               },
               {
                  "id": 91,
                  "name": "КИНО ТВ HD"
               },
               {
                  "id": 94,
                  "name": "Капитан Фантастика"
               },
               {
                  "id": 96,
                  "name": "Киноужас"
               },
               {
                  "id": 103,
                  "name": "МИР PREMIUM"
               },
               {
                  "id": 119,
                  "name": "Мульт HD"
               },
               {
                  "id": 127,
                  "name": "Наша Сибирь"
               },
               {
                  "id": 147,
                  "name": "Россия HD"
               },
               {
                  "id": 150,
                  "name": "Русский роман HD"
               },
               {
                  "id": 153,
                  "name": "СТС Kids"
               },
               {
                  "id": 169,
                  "name": "Телеканал 360°"
               },
               {
                  "id": 175,
                  "name": "Хабар 24"
               }
            ]
         },
         {
            "group": "Для детей",
            "groupData": [
               {
                  "id": 5,
                  "name": "ANI"
               },
               {
                  "id": 25,
                  "name": "Gulli Girl"
               },
               {
                  "id": 40,
                  "name": "Nick Jr."
               },
               {
                  "id": 41,
                  "name": "Nickelodeon"
               },
               {
                  "id": 58,
                  "name": "Tiji"
               },
               {
                  "id": 72,
                  "name": "В гостях у сказки"
               },
               {
                  "id": 77,
                  "name": "Детский мир"
               },
               {
                  "id": 93,
                  "name": "Канал Disney"
               },
               {
                  "id": 94,
                  "name": "Капитан Фантастика"
               },
               {
                  "id": 95,
                  "name": "Карусель"
               },
               {
                  "id": 118,
                  "name": "Мульт"
               },
               {
                  "id": 119,
                  "name": "Мульт HD"
               },
               {
                  "id": 120,
                  "name": "Мультиландия"
               },
               {
                  "id": 145,
                  "name": "Радость моя"
               },
               {
                  "id": 151,
                  "name": "Рыжий"
               },
               {
                  "id": 153,
                  "name": "СТС Kids"
               },
               {
                  "id": 174,
                  "name": "Уникум"
               }
            ]
         },
         {
            "group": "Спорт",
            "groupData": [
               {
                  "id": 16,
                  "name": "E TV"
               },
               {
                  "id": 19,
                  "name": "Eurosport 1 HD"
               },
               {
                  "id": 22,
                  "name": "FastnFunBox"
               },
               {
                  "id": 23,
                  "name": "Fightbox HD"
               },
               {
                  "id": 84,
                  "name": "ЖИВИ!"
               },
               {
                  "id": 106,
                  "name": "Матч ТВ"
               },
               {
                  "id": 109,
                  "name": "Мир Баскетбола"
               },
               {
                  "id": 158,
                  "name": "Старт"
               },
               {
                  "id": 166,
                  "name": "ТОЧКА ОТРЫВА"
               }
            ]
         },
         {
            "group": "Кино",
            "groupData": [
               {
                  "id": 20,
                  "name": "FOX HD"
               },
               {
                  "id": 44,
                  "name": "Paramount Comedy HD"
               },
               {
                  "id": 54,
                  "name": "Sony Channel HD"
               },
               {
                  "id": 55,
                  "name": "Sony Turbo"
               },
               {
                  "id": 63,
                  "name": "Zee Russia"
               },
               {
                  "id": 91,
                  "name": "КИНО ТВ HD"
               },
               {
                  "id": 96,
                  "name": "Киноужас"
               },
               {
                  "id": 101,
                  "name": "Любимое кино"
               },
               {
                  "id": 111,
                  "name": "Мир сериала"
               },
               {
                  "id": 123,
                  "name": "НТВ Сериал"
               },
               {
                  "id": 125,
                  "name": "НТВ Хит"
               },
               {
                  "id": 129,
                  "name": "Наше новое кино"
               },
               {
                  "id": 140,
                  "name": "Победа"
               },
               {
                  "id": 142,
                  "name": "Продвижение"
               },
               {
                  "id": 149,
                  "name": "Русский бестселлер"
               },
               {
                  "id": 150,
                  "name": "Русский роман HD"
               }
            ]
         },
         {
            "group": "Развлекательные",
            "groupData": [
               {
                  "id": 1,
                  "name": "2X2"
               },
               {
                  "id": 2,
                  "name": "7tv"
               },
               {
                  "id": 3,
                  "name": "8 Канал"
               },
               {
                  "id": 21,
                  "name": "Fashionbox"
               },
               {
                  "id": 26,
                  "name": "HGTV"
               },
               {
                  "id": 28,
                  "name": "KBS World"
               },
               {
                  "id": 29,
                  "name": "Kаzаkh TV"
               },
               {
                  "id": 43,
                  "name": "Outdoor Channel"
               },
               {
                  "id": 53,
                  "name": "Shopping Live"
               },
               {
                  "id": 56,
                  "name": "TLC HD"
               },
               {
                  "id": 57,
                  "name": "TVM Channel"
               },
               {
                  "id": 62,
                  "name": "World Fashion Channel"
               },
               {
                  "id": 73,
                  "name": "В мире животных"
               },
               {
                  "id": 75,
                  "name": "Время"
               },
               {
                  "id": 81,
                  "name": "Еда"
               },
               {
                  "id": 82,
                  "name": "Еда Премиум"
               },
               {
                  "id": 92,
                  "name": "Калейдоскоп ТВ"
               },
               {
                  "id": 99,
                  "name": "Кухня ТВ"
               },
               {
                  "id": 103,
                  "name": "МИР PREMIUM"
               },
               {
                  "id": 112,
                  "name": "Морской"
               },
               {
                  "id": 115,
                  "name": "Мужской"
               },
               {
                  "id": 124,
                  "name": "НТВ Стиль"
               },
               {
                  "id": 126,
                  "name": "Национальное телевидение Чувашии"
               },
               {
                  "id": 128,
                  "name": "Наша Тема"
               },
               {
                  "id": 130,
                  "name": "Ностальгия"
               },
               {
                  "id": 131,
                  "name": "О!КИНО"
               },
               {
                  "id": 134,
                  "name": "Открытый мир"
               },
               {
                  "id": 136,
                  "name": "Охотник и рыболов HD"
               },
               {
                  "id": 141,
                  "name": "Про Бизнес"
               },
               {
                  "id": 154,
                  "name": "Сарафан"
               },
               {
                  "id": 159,
                  "name": "Супер"
               },
               {
                  "id": 168,
                  "name": "Театр"
               },
               {
                  "id": 172,
                  "name": "Телекафе"
               },
               {
                  "id": 173,
                  "name": "Точка ТВ"
               },
               {
                  "id": 175,
                  "name": "Хабар 24"
               },
               {
                  "id": 177,
                  "name": "Ю"
               },
               {
                  "id": 178,
                  "name": "Ювелирочка"
               }
            ]
         },
         {
            "group": "Новости",
            "groupData": [
               {
                  "id": 7,
                  "name": "Arirang"
               },
               {
                  "id": 13,
                  "name": "Deutsche Welle"
               },
               {
                  "id": 24,
                  "name": "France 24"
               },
               {
                  "id": 38,
                  "name": "NHK World-Japan"
               },
               {
                  "id": 45,
                  "name": "RT"
               },
               {
                  "id": 46,
                  "name": "RT Arabic"
               },
               {
                  "id": 68,
                  "name": "БелРос"
               },
               {
                  "id": 69,
                  "name": "Беларусь 24"
               },
               {
                  "id": 71,
                  "name": "Большая Азия"
               },
               {
                  "id": 79,
                  "name": "Дума ТВ"
               },
               {
                  "id": 80,
                  "name": "Евроновости"
               },
               {
                  "id": 90,
                  "name": "Известия"
               },
               {
                  "id": 100,
                  "name": "ЛДПР ТВ"
               },
               {
                  "id": 108,
                  "name": "Мир 24"
               },
               {
                  "id": 110,
                  "name": "Мир Белогорья"
               },
               {
                  "id": 113,
                  "name": "Москва24"
               },
               {
                  "id": 126,
                  "name": "Национальное телевидение Чувашии"
               },
               {
                  "id": 144,
                  "name": "РБК "
               },
               {
                  "id": 147,
                  "name": "Россия HD"
               },
               {
                  "id": 161,
                  "name": "ТНВ"
               },
               {
                  "id": 162,
                  "name": "ТНВ-Планета"
               },
               {
                  "id": 169,
                  "name": "Телеканал 360°"
               },
               {
                  "id": 170,
                  "name": "Телеканал 360° Новости"
               },
               {
                  "id": 179,
                  "name": "Югра"
               }
            ]
         },
         {
            "group": "Музыкальные",
            "groupData": [
               {
                  "id": 4,
                  "name": "9 Волна"
               },
               {
                  "id": 8,
                  "name": "BRIDGE TV CLASSIC"
               },
               {
                  "id": 9,
                  "name": "BRIDGE TV HITS"
               },
               {
                  "id": 10,
                  "name": "Bridge TV"
               },
               {
                  "id": 11,
                  "name": "Bridge TV Русский хит"
               },
               {
                  "id": 18,
                  "name": "Europa Plus TV"
               },
               {
                  "id": 30,
                  "name": "MEZZO LIVE HD"
               },
               {
                  "id": 31,
                  "name": "MTV Dance"
               },
               {
                  "id": 32,
                  "name": "MTV HD"
               },
               {
                  "id": 33,
                  "name": "MTV Hits"
               },
               {
                  "id": 34,
                  "name": "MTV Live HD"
               },
               {
                  "id": 35,
                  "name": "MTV Rocks"
               },
               {
                  "id": 36,
                  "name": "Music Box Gold"
               },
               {
                  "id": 37,
                  "name": "Music Box Russia"
               },
               {
                  "id": 49,
                  "name": "RU.TV"
               },
               {
                  "id": 60,
                  "name": "VH1 European"
               },
               {
                  "id": 61,
                  "name": "Vh1 Classic"
               },
               {
                  "id": 74,
                  "name": "Восток ТВ"
               },
               {
                  "id": 83,
                  "name": "ЖАРА"
               },
               {
                  "id": 102,
                  "name": "Ля-минор"
               },
               {
                  "id": 104,
                  "name": "Майдан"
               },
               {
                  "id": 116,
                  "name": "Муз ТВ"
               },
               {
                  "id": 117,
                  "name": "Музыка Первого"
               },
               {
                  "id": 132,
                  "name": "О2ТВ"
               },
               {
                  "id": 165,
                  "name": "ТНТ MUSIC"
               }
            ]
         },
         {
            "group": "Познавательные",
            "groupData": [
               {
                  "id": 6,
                  "name": "Animal Planet HD"
               },
               {
                  "id": 12,
                  "name": "DTX"
               },
               {
                  "id": 14,
                  "name": "Discovery Channel HD"
               },
               {
                  "id": 15,
                  "name": "Docubox"
               },
               {
                  "id": 17,
                  "name": "English Club TV"
               },
               {
                  "id": 27,
                  "name": "ID Xtra"
               },
               {
                  "id": 29,
                  "name": "Kаzаkh TV"
               },
               {
                  "id": 39,
                  "name": "National Geographic HD"
               },
               {
                  "id": 42,
                  "name": "Ocean-TV"
               },
               {
                  "id": 43,
                  "name": "Outdoor Channel"
               },
               {
                  "id": 47,
                  "name": "RTG HD"
               },
               {
                  "id": 48,
                  "name": "RTД HD"
               },
               {
                  "id": 50,
                  "name": "Russian Travel Guide"
               },
               {
                  "id": 51,
                  "name": "SOCHI LIVE"
               },
               {
                  "id": 52,
                  "name": "Science Channel HD"
               },
               {
                  "id": 59,
                  "name": "Travel and Adventure HD"
               },
               {
                  "id": 64,
                  "name": "Zоопарк"
               },
               {
                  "id": 65,
                  "name": "Авто Плюс"
               },
               {
                  "id": 70,
                  "name": "Бобёр"
               },
               {
                  "id": 73,
                  "name": "В мире животных"
               },
               {
                  "id": 76,
                  "name": "ДИКИЙ"
               },
               {
                  "id": 78,
                  "name": "Доктор"
               },
               {
                  "id": 85,
                  "name": "Живая планета"
               },
               {
                  "id": 86,
                  "name": "Загородная жизнь"
               },
               {
                  "id": 87,
                  "name": "Загородный"
               },
               {
                  "id": 89,
                  "name": "Здоровье"
               },
               {
                  "id": 97,
                  "name": "Ключ"
               },
               {
                  "id": 98,
                  "name": "Конный мир"
               },
               {
                  "id": 105,
                  "name": "Мама"
               },
               {
                  "id": 112,
                  "name": "Морской"
               },
               {
                  "id": 114,
                  "name": "Моя Планета"
               },
               {
                  "id": 122,
                  "name": "НТВ Право"
               },
               {
                  "id": 126,
                  "name": "Национальное телевидение Чувашии"
               },
               {
                  "id": 127,
                  "name": "Наша Сибирь"
               },
               {
                  "id": 128,
                  "name": "Наша Тема"
               },
               {
                  "id": 135,
                  "name": "Охота и Рыбалка"
               },
               {
                  "id": 138,
                  "name": "Первый Вегетарианский"
               },
               {
                  "id": 139,
                  "name": "Первый образовательный"
               },
               {
                  "id": 143,
                  "name": "Пёс и Ко"
               },
               {
                  "id": 156,
                  "name": "Синергия ТВ"
               },
               {
                  "id": 157,
                  "name": "Союз"
               },
               {
                  "id": 163,
                  "name": "ТНОМЕР"
               },
               {
                  "id": 167,
                  "name": "Тайны галактики"
               },
               {
                  "id": 171,
                  "name": "Телеканал Совета Федерации \"Вместе РФ\""
               },
               {
                  "id": 175,
                  "name": "Хабар 24"
               },
               {
                  "id": 176,
                  "name": "Центральное телевидение (ЦТВ)"
               }
            ]
         },
         {
            "group": "Федеральные",
            "groupData": [
               {
                  "id": 66,
                  "name": "Архыз 24"
               },
               {
                  "id": 67,
                  "name": "Башкирское спутниковое телевидение"
               },
               {
                  "id": 88,
                  "name": "Звезда"
               },
               {
                  "id": 95,
                  "name": "Карусель"
               },
               {
                  "id": 106,
                  "name": "Матч ТВ"
               },
               {
                  "id": 107,
                  "name": "Мир"
               },
               {
                  "id": 113,
                  "name": "Москва24"
               },
               {
                  "id": 116,
                  "name": "Муз ТВ"
               },
               {
                  "id": 121,
                  "name": "НТВ"
               },
               {
                  "id": 133,
                  "name": "ОТР"
               },
               {
                  "id": 137,
                  "name": "ПЯТНИЦА"
               },
               {
                  "id": 146,
                  "name": "Россия - 24"
               },
               {
                  "id": 147,
                  "name": "Россия HD"
               },
               {
                  "id": 148,
                  "name": "Россия-К"
               },
               {
                  "id": 152,
                  "name": "СПАС"
               },
               {
                  "id": 155,
                  "name": "Своё ТВ"
               },
               {
                  "id": 160,
                  "name": "ТВ Центр"
               },
               {
                  "id": 161,
                  "name": "ТНВ"
               },
               {
                  "id": 164,
                  "name": "ТНТ"
               },
               {
                  "id": 169,
                  "name": "Телеканал 360°"
               },
               {
                  "id": 179,
                  "name": "Югра"
               }
            ]
         }
      ],

   },
   {
      id: 'two-web',
      name: 'Два интернета',
      oldPrice: null,
      currentPrice: 700,
      mobWeb: '',
      homeWeb: 200,
      calls: 1200,
      tvLength: '',
      mark: 'Только нужное',
      tv: null,

   },
   {
      id: 'hit',
      name: 'Хит',
      oldPrice: null,
      currentPrice: 850,
      mobWeb: '',
      homeWeb: 300,
      calls: 1500,
      tvLength: '188 каналов',
      mark: 'Популярное',
      tvChannels: [
         {
            "group": "HD",
            "groupData": [
               {
                  "id": 6,
                  "name": "Animal Planet HD"
               },
               {
                  "id": 14,
                  "name": "Discovery Channel HD"
               },
               {
                  "id": 18,
                  "name": "Europa Plus TV"
               },
               {
                  "id": 19,
                  "name": "Eurosport 1 HD"
               },
               {
                  "id": 20,
                  "name": "FOX HD"
               },
               {
                  "id": 23,
                  "name": "Fightbox HD"
               },
               {
                  "id": 28,
                  "name": "KBS World"
               },
               {
                  "id": 29,
                  "name": "Kаzаkh TV"
               },
               {
                  "id": 30,
                  "name": "MEZZO LIVE HD"
               },
               {
                  "id": 32,
                  "name": "MTV HD"
               },
               {
                  "id": 34,
                  "name": "MTV Live HD"
               },
               {
                  "id": 39,
                  "name": "National Geographic HD"
               },
               {
                  "id": 44,
                  "name": "Paramount Comedy HD"
               },
               {
                  "id": 45,
                  "name": "RT"
               },
               {
                  "id": 47,
                  "name": "RTG HD"
               },
               {
                  "id": 48,
                  "name": "RTД HD"
               },
               {
                  "id": 51,
                  "name": "SOCHI LIVE"
               },
               {
                  "id": 52,
                  "name": "Science Channel HD"
               },
               {
                  "id": 54,
                  "name": "Sony Channel HD"
               },
               {
                  "id": 56,
                  "name": "TLC HD"
               },
               {
                  "id": 59,
                  "name": "Travel and Adventure HD"
               },
               {
                  "id": 73,
                  "name": "В мире животных"
               },
               {
                  "id": 82,
                  "name": "Еда Премиум"
               },
               {
                  "id": 83,
                  "name": "ЖАРА"
               },
               {
                  "id": 90,
                  "name": "Известия"
               },
               {
                  "id": 91,
                  "name": "КИНО ТВ HD"
               },
               {
                  "id": 94,
                  "name": "Капитан Фантастика"
               },
               {
                  "id": 96,
                  "name": "Киноужас"
               },
               {
                  "id": 103,
                  "name": "МИР PREMIUM"
               },
               {
                  "id": 119,
                  "name": "Мульт HD"
               },
               {
                  "id": 127,
                  "name": "Наша Сибирь"
               },
               {
                  "id": 147,
                  "name": "Россия HD"
               },
               {
                  "id": 150,
                  "name": "Русский роман HD"
               },
               {
                  "id": 153,
                  "name": "СТС Kids"
               },
               {
                  "id": 169,
                  "name": "Телеканал 360°"
               },
               {
                  "id": 175,
                  "name": "Хабар 24"
               }
            ]
         },
         {
            "group": "Для детей",
            "groupData": [
               {
                  "id": 5,
                  "name": "ANI"
               },
               {
                  "id": 25,
                  "name": "Gulli Girl"
               },
               {
                  "id": 40,
                  "name": "Nick Jr."
               },
               {
                  "id": 41,
                  "name": "Nickelodeon"
               },
               {
                  "id": 58,
                  "name": "Tiji"
               },
               {
                  "id": 72,
                  "name": "В гостях у сказки"
               },
               {
                  "id": 77,
                  "name": "Детский мир"
               },
               {
                  "id": 93,
                  "name": "Канал Disney"
               },
               {
                  "id": 94,
                  "name": "Капитан Фантастика"
               },
               {
                  "id": 95,
                  "name": "Карусель"
               },
               {
                  "id": 118,
                  "name": "Мульт"
               },
               {
                  "id": 119,
                  "name": "Мульт HD"
               },
               {
                  "id": 120,
                  "name": "Мультиландия"
               },
               {
                  "id": 145,
                  "name": "Радость моя"
               },
               {
                  "id": 151,
                  "name": "Рыжий"
               },
               {
                  "id": 153,
                  "name": "СТС Kids"
               },
               {
                  "id": 174,
                  "name": "Уникум"
               }
            ]
         },
         {
            "group": "Спорт",
            "groupData": [
               {
                  "id": 16,
                  "name": "E TV"
               },
               {
                  "id": 19,
                  "name": "Eurosport 1 HD"
               },
               {
                  "id": 22,
                  "name": "FastnFunBox"
               },
               {
                  "id": 23,
                  "name": "Fightbox HD"
               },
               {
                  "id": 84,
                  "name": "ЖИВИ!"
               },
               {
                  "id": 106,
                  "name": "Матч ТВ"
               },
               {
                  "id": 109,
                  "name": "Мир Баскетбола"
               },
               {
                  "id": 158,
                  "name": "Старт"
               },
               {
                  "id": 166,
                  "name": "ТОЧКА ОТРЫВА"
               }
            ]
         },
         {
            "group": "Кино",
            "groupData": [
               {
                  "id": 20,
                  "name": "FOX HD"
               },
               {
                  "id": 44,
                  "name": "Paramount Comedy HD"
               },
               {
                  "id": 54,
                  "name": "Sony Channel HD"
               },
               {
                  "id": 55,
                  "name": "Sony Turbo"
               },
               {
                  "id": 63,
                  "name": "Zee Russia"
               },
               {
                  "id": 91,
                  "name": "КИНО ТВ HD"
               },
               {
                  "id": 96,
                  "name": "Киноужас"
               },
               {
                  "id": 101,
                  "name": "Любимое кино"
               },
               {
                  "id": 111,
                  "name": "Мир сериала"
               },
               {
                  "id": 123,
                  "name": "НТВ Сериал"
               },
               {
                  "id": 125,
                  "name": "НТВ Хит"
               },
               {
                  "id": 129,
                  "name": "Наше новое кино"
               },
               {
                  "id": 140,
                  "name": "Победа"
               },
               {
                  "id": 142,
                  "name": "Продвижение"
               },
               {
                  "id": 149,
                  "name": "Русский бестселлер"
               },
               {
                  "id": 150,
                  "name": "Русский роман HD"
               }
            ]
         },
         {
            "group": "Развлекательные",
            "groupData": [
               {
                  "id": 1,
                  "name": "2X2"
               },
               {
                  "id": 2,
                  "name": "7tv"
               },
               {
                  "id": 3,
                  "name": "8 Канал"
               },
               {
                  "id": 21,
                  "name": "Fashionbox"
               },
               {
                  "id": 26,
                  "name": "HGTV"
               },
               {
                  "id": 28,
                  "name": "KBS World"
               },
               {
                  "id": 29,
                  "name": "Kаzаkh TV"
               },
               {
                  "id": 43,
                  "name": "Outdoor Channel"
               },
               {
                  "id": 53,
                  "name": "Shopping Live"
               },
               {
                  "id": 56,
                  "name": "TLC HD"
               },
               {
                  "id": 57,
                  "name": "TVM Channel"
               },
               {
                  "id": 62,
                  "name": "World Fashion Channel"
               },
               {
                  "id": 73,
                  "name": "В мире животных"
               },
               {
                  "id": 75,
                  "name": "Время"
               },
               {
                  "id": 81,
                  "name": "Еда"
               },
               {
                  "id": 82,
                  "name": "Еда Премиум"
               },
               {
                  "id": 92,
                  "name": "Калейдоскоп ТВ"
               },
               {
                  "id": 99,
                  "name": "Кухня ТВ"
               },
               {
                  "id": 103,
                  "name": "МИР PREMIUM"
               },
               {
                  "id": 112,
                  "name": "Морской"
               },
               {
                  "id": 115,
                  "name": "Мужской"
               },
               {
                  "id": 124,
                  "name": "НТВ Стиль"
               },
               {
                  "id": 126,
                  "name": "Национальное телевидение Чувашии"
               },
               {
                  "id": 128,
                  "name": "Наша Тема"
               },
               {
                  "id": 130,
                  "name": "Ностальгия"
               },
               {
                  "id": 131,
                  "name": "О!КИНО"
               },
               {
                  "id": 134,
                  "name": "Открытый мир"
               },
               {
                  "id": 136,
                  "name": "Охотник и рыболов HD"
               },
               {
                  "id": 141,
                  "name": "Про Бизнес"
               },
               {
                  "id": 154,
                  "name": "Сарафан"
               },
               {
                  "id": 159,
                  "name": "Супер"
               },
               {
                  "id": 168,
                  "name": "Театр"
               },
               {
                  "id": 172,
                  "name": "Телекафе"
               },
               {
                  "id": 173,
                  "name": "Точка ТВ"
               },
               {
                  "id": 175,
                  "name": "Хабар 24"
               },
               {
                  "id": 177,
                  "name": "Ю"
               },
               {
                  "id": 178,
                  "name": "Ювелирочка"
               }
            ]
         },
         {
            "group": "Новости",
            "groupData": [
               {
                  "id": 7,
                  "name": "Arirang"
               },
               {
                  "id": 13,
                  "name": "Deutsche Welle"
               },
               {
                  "id": 24,
                  "name": "France 24"
               },
               {
                  "id": 38,
                  "name": "NHK World-Japan"
               },
               {
                  "id": 45,
                  "name": "RT"
               },
               {
                  "id": 46,
                  "name": "RT Arabic"
               },
               {
                  "id": 68,
                  "name": "БелРос"
               },
               {
                  "id": 69,
                  "name": "Беларусь 24"
               },
               {
                  "id": 71,
                  "name": "Большая Азия"
               },
               {
                  "id": 79,
                  "name": "Дума ТВ"
               },
               {
                  "id": 80,
                  "name": "Евроновости"
               },
               {
                  "id": 90,
                  "name": "Известия"
               },
               {
                  "id": 100,
                  "name": "ЛДПР ТВ"
               },
               {
                  "id": 108,
                  "name": "Мир 24"
               },
               {
                  "id": 110,
                  "name": "Мир Белогорья"
               },
               {
                  "id": 113,
                  "name": "Москва24"
               },
               {
                  "id": 126,
                  "name": "Национальное телевидение Чувашии"
               },
               {
                  "id": 144,
                  "name": "РБК "
               },
               {
                  "id": 147,
                  "name": "Россия HD"
               },
               {
                  "id": 161,
                  "name": "ТНВ"
               },
               {
                  "id": 162,
                  "name": "ТНВ-Планета"
               },
               {
                  "id": 169,
                  "name": "Телеканал 360°"
               },
               {
                  "id": 170,
                  "name": "Телеканал 360° Новости"
               },
               {
                  "id": 179,
                  "name": "Югра"
               }
            ]
         },
         {
            "group": "Музыкальные",
            "groupData": [
               {
                  "id": 4,
                  "name": "9 Волна"
               },
               {
                  "id": 8,
                  "name": "BRIDGE TV CLASSIC"
               },
               {
                  "id": 9,
                  "name": "BRIDGE TV HITS"
               },
               {
                  "id": 10,
                  "name": "Bridge TV"
               },
               {
                  "id": 11,
                  "name": "Bridge TV Русский хит"
               },
               {
                  "id": 18,
                  "name": "Europa Plus TV"
               },
               {
                  "id": 30,
                  "name": "MEZZO LIVE HD"
               },
               {
                  "id": 31,
                  "name": "MTV Dance"
               },
               {
                  "id": 32,
                  "name": "MTV HD"
               },
               {
                  "id": 33,
                  "name": "MTV Hits"
               },
               {
                  "id": 34,
                  "name": "MTV Live HD"
               },
               {
                  "id": 35,
                  "name": "MTV Rocks"
               },
               {
                  "id": 36,
                  "name": "Music Box Gold"
               },
               {
                  "id": 37,
                  "name": "Music Box Russia"
               },
               {
                  "id": 49,
                  "name": "RU.TV"
               },
               {
                  "id": 60,
                  "name": "VH1 European"
               },
               {
                  "id": 61,
                  "name": "Vh1 Classic"
               },
               {
                  "id": 74,
                  "name": "Восток ТВ"
               },
               {
                  "id": 83,
                  "name": "ЖАРА"
               },
               {
                  "id": 102,
                  "name": "Ля-минор"
               },
               {
                  "id": 104,
                  "name": "Майдан"
               },
               {
                  "id": 116,
                  "name": "Муз ТВ"
               },
               {
                  "id": 117,
                  "name": "Музыка Первого"
               },
               {
                  "id": 132,
                  "name": "О2ТВ"
               },
               {
                  "id": 165,
                  "name": "ТНТ MUSIC"
               }
            ]
         },
         {
            "group": "Познавательные",
            "groupData": [
               {
                  "id": 6,
                  "name": "Animal Planet HD"
               },
               {
                  "id": 12,
                  "name": "DTX"
               },
               {
                  "id": 14,
                  "name": "Discovery Channel HD"
               },
               {
                  "id": 15,
                  "name": "Docubox"
               },
               {
                  "id": 17,
                  "name": "English Club TV"
               },
               {
                  "id": 27,
                  "name": "ID Xtra"
               },
               {
                  "id": 29,
                  "name": "Kаzаkh TV"
               },
               {
                  "id": 39,
                  "name": "National Geographic HD"
               },
               {
                  "id": 42,
                  "name": "Ocean-TV"
               },
               {
                  "id": 43,
                  "name": "Outdoor Channel"
               },
               {
                  "id": 47,
                  "name": "RTG HD"
               },
               {
                  "id": 48,
                  "name": "RTД HD"
               },
               {
                  "id": 50,
                  "name": "Russian Travel Guide"
               },
               {
                  "id": 51,
                  "name": "SOCHI LIVE"
               },
               {
                  "id": 52,
                  "name": "Science Channel HD"
               },
               {
                  "id": 59,
                  "name": "Travel and Adventure HD"
               },
               {
                  "id": 64,
                  "name": "Zоопарк"
               },
               {
                  "id": 65,
                  "name": "Авто Плюс"
               },
               {
                  "id": 70,
                  "name": "Бобёр"
               },
               {
                  "id": 73,
                  "name": "В мире животных"
               },
               {
                  "id": 76,
                  "name": "ДИКИЙ"
               },
               {
                  "id": 78,
                  "name": "Доктор"
               },
               {
                  "id": 85,
                  "name": "Живая планета"
               },
               {
                  "id": 86,
                  "name": "Загородная жизнь"
               },
               {
                  "id": 87,
                  "name": "Загородный"
               },
               {
                  "id": 89,
                  "name": "Здоровье"
               },
               {
                  "id": 97,
                  "name": "Ключ"
               },
               {
                  "id": 98,
                  "name": "Конный мир"
               },
               {
                  "id": 105,
                  "name": "Мама"
               },
               {
                  "id": 112,
                  "name": "Морской"
               },
               {
                  "id": 114,
                  "name": "Моя Планета"
               },
               {
                  "id": 122,
                  "name": "НТВ Право"
               },
               {
                  "id": 126,
                  "name": "Национальное телевидение Чувашии"
               },
               {
                  "id": 127,
                  "name": "Наша Сибирь"
               },
               {
                  "id": 128,
                  "name": "Наша Тема"
               },
               {
                  "id": 135,
                  "name": "Охота и Рыбалка"
               },
               {
                  "id": 138,
                  "name": "Первый Вегетарианский"
               },
               {
                  "id": 139,
                  "name": "Первый образовательный"
               },
               {
                  "id": 143,
                  "name": "Пёс и Ко"
               },
               {
                  "id": 156,
                  "name": "Синергия ТВ"
               },
               {
                  "id": 157,
                  "name": "Союз"
               },
               {
                  "id": 163,
                  "name": "ТНОМЕР"
               },
               {
                  "id": 167,
                  "name": "Тайны галактики"
               },
               {
                  "id": 171,
                  "name": "Телеканал Совета Федерации \"Вместе РФ\""
               },
               {
                  "id": 175,
                  "name": "Хабар 24"
               },
               {
                  "id": 176,
                  "name": "Центральное телевидение (ЦТВ)"
               }
            ]
         },
         {
            "group": "Федеральные",
            "groupData": [
               {
                  "id": 66,
                  "name": "Архыз 24"
               },
               {
                  "id": 67,
                  "name": "Башкирское спутниковое телевидение"
               },
               {
                  "id": 88,
                  "name": "Звезда"
               },
               {
                  "id": 95,
                  "name": "Карусель"
               },
               {
                  "id": 106,
                  "name": "Матч ТВ"
               },
               {
                  "id": 107,
                  "name": "Мир"
               },
               {
                  "id": 113,
                  "name": "Москва24"
               },
               {
                  "id": 116,
                  "name": "Муз ТВ"
               },
               {
                  "id": 121,
                  "name": "НТВ"
               },
               {
                  "id": 133,
                  "name": "ОТР"
               },
               {
                  "id": 137,
                  "name": "ПЯТНИЦА"
               },
               {
                  "id": 146,
                  "name": "Россия - 24"
               },
               {
                  "id": 147,
                  "name": "Россия HD"
               },
               {
                  "id": 148,
                  "name": "Россия-К"
               },
               {
                  "id": 152,
                  "name": "СПАС"
               },
               {
                  "id": 155,
                  "name": "Своё ТВ"
               },
               {
                  "id": 160,
                  "name": "ТВ Центр"
               },
               {
                  "id": 161,
                  "name": "ТНВ"
               },
               {
                  "id": 164,
                  "name": "ТНТ"
               },
               {
                  "id": 169,
                  "name": "Телеканал 360°"
               },
               {
                  "id": 179,
                  "name": "Югра"
               }
            ]
         }
      ],

   },
   {
      id: 'films',
      name: 'Кино и сериалы',
      oldPrice: null,
      currentPrice: 850,
      mobWeb: '',
      homeWeb: 300,
      calls: 1500,
      tvLength: '',
      mftv: [
         {
            name: "START",
            icon: "start",
            desc: "START подарил зрителям «Содержанок», «Бывших», «257 причин, чтобы жить», «Вампиров средней полосы», «Текст» и другие сериалы и фильмы, перевернувшие представление о том, каким может быть российский контент. Новинки кино и сериалов каждую неделю, эксклюзивные премьеры хитов проката — всё это START."
         },
         {
            name: "Мировое кино",
            icon: "mf-tv",
            desc: "Пакет «Мировое кино». 3478 фильмов, 729 сериалов."
         }
      ],
      tv: null
   },
   {
      id: 'premium',
      name: 'Премиум',
      oldPrice: null,
      currentPrice: 1900,
      mobWeb: '',
      homeWeb: 500,
      calls: 3000,
      tvLength: '250 каналов',
      mftv: [
         {
            name: "START",
            icon: "start",
            desc: "START подарил зрителям «Содержанок», «Бывших», «257 причин, чтобы жить», «Вампиров средней полосы», «Текст» и другие сериалы и фильмы, перевернувшие представление о том, каким может быть российский контент. Новинки кино и сериалов каждую неделю, эксклюзивные премьеры хитов проката — всё это START."
         },
         {
            name: "Мировое кино",
            icon: "mf-tv",
            desc: "Пакет «Мировое кино». 3478 фильмов, 729 сериалов."
         },
         {
            name: "Амедиатека",
            icon: "amediateka",
            desc: "AMEDIATEKA – это премьеры лучших сериалов планеты одновременно со всем миром. Вас ждут новинки и хиты ведущих студий мира, включая HBO, Showtime, CBS, Sky, LIONSGATE и др. «Игра Престолов», «Чернобыль», «Мир Дикого Запада», «Убивая Еву», «Миллиарды», «Секс в большом городе», «Эйфория», «Отыграть назад» - все это и многое другое можно смотреть в онлайн-сервисе AMEDIATEKA."
         },
         {
            name: "more.tv",
            icon: "more",
            desc: "Громкие эксклюзивные сериалы - ЧИКИ, Трудные подростки. Премьеры до эфира на ТВ и огромная библиотека главных российских телеканалов и мировых студий. Также только у нас смотрите премьеры нашумевших зарубежных сериалов – РАССКАЗ СЛУЖАНКИ, ФАРГО, ВЕЛИКАЯ и многое другое."
         }
      ],
      tvChannels: [
         {
            "group": "HD",
            "groupData": [
               {
                  "id": 5,
                  "name": "A1"
               },
               {
                  "id": 8,
                  "name": "Animal Planet HD"
               },
               {
                  "id": 11,
                  "name": "BOLT"
               },
               {
                  "id": 16,
                  "name": "Blue Hustler HD"
               },
               {
                  "id": 17,
                  "name": "Bollywood HD"
               },
               {
                  "id": 26,
                  "name": "Discovery Channel HD"
               },
               {
                  "id": 30,
                  "name": "Erox HD"
               },
               {
                  "id": 31,
                  "name": "Europa Plus TV"
               },
               {
                  "id": 32,
                  "name": "Eurosport 1 HD"
               },
               {
                  "id": 33,
                  "name": "Eurosport 2 HD"
               },
               {
                  "id": 35,
                  "name": "FOX HD"
               },
               {
                  "id": 36,
                  "name": "Fan"
               },
               {
                  "id": 39,
                  "name": "Fightbox HD"
               },
               {
                  "id": 42,
                  "name": "Fox Life HD"
               },
               {
                  "id": 46,
                  "name": "History HD"
               },
               {
                  "id": 49,
                  "name": "KBS World"
               },
               {
                  "id": 50,
                  "name": "Kаzаkh TV"
               },
               {
                  "id": 51,
                  "name": "M-1 Global"
               },
               {
                  "id": 53,
                  "name": "MEZZO LIVE HD"
               },
               {
                  "id": 55,
                  "name": "MTV HD"
               },
               {
                  "id": 57,
                  "name": "MTV Live HD"
               },
               {
                  "id": 62,
                  "name": "Nat Geo Wild HD"
               },
               {
                  "id": 63,
                  "name": "National Geographic HD"
               },
               {
                  "id": 69,
                  "name": "Paramount Comedy HD"
               },
               {
                  "id": 71,
                  "name": "RT"
               },
               {
                  "id": 73,
                  "name": "RTG HD"
               },
               {
                  "id": 74,
                  "name": "RTД HD"
               },
               {
                  "id": 77,
                  "name": "SOCHI LIVE"
               },
               {
                  "id": 78,
                  "name": "Science Channel HD"
               },
               {
                  "id": 80,
                  "name": "Sony Channel HD"
               },
               {
                  "id": 83,
                  "name": "Spike"
               },
               {
                  "id": 84,
                  "name": "Star Cinema"
               },
               {
                  "id": 85,
                  "name": "Star Family"
               },
               {
                  "id": 86,
                  "name": "TLC HD"
               },
               {
                  "id": 89,
                  "name": "Travel and Adventure HD"
               },
               {
                  "id": 105,
                  "name": "В мире животных"
               },
               {
                  "id": 111,
                  "name": "Дом Кино Премиум"
               },
               {
                  "id": 117,
                  "name": "Еда Премиум"
               },
               {
                  "id": 118,
                  "name": "ЖАРА"
               },
               {
                  "id": 125,
                  "name": "Известия"
               },
               {
                  "id": 128,
                  "name": "КИНО ТВ HD"
               },
               {
                  "id": 130,
                  "name": "КХЛ HD"
               },
               {
                  "id": 133,
                  "name": "Капитан Фантастика"
               },
               {
                  "id": 135,
                  "name": "Киносерия"
               },
               {
                  "id": 136,
                  "name": "Киноужас"
               },
               {
                  "id": 144,
                  "name": "МАТЧ! HD"
               },
               {
                  "id": 146,
                  "name": "МИР PREMIUM"
               },
               {
                  "id": 163,
                  "name": "Моя планета HD"
               },
               {
                  "id": 168,
                  "name": "Мульт HD"
               },
               {
                  "id": 178,
                  "name": "Наша Сибирь"
               },
               {
                  "id": 202,
                  "name": "Россия HD"
               },
               {
                  "id": 204,
                  "name": "Русская ночь"
               },
               {
                  "id": 208,
                  "name": "Русский роман HD"
               },
               {
                  "id": 211,
                  "name": "СТС Kids"
               },
               {
                  "id": 229,
                  "name": "Телеканал 360°"
               },
               {
                  "id": 236,
                  "name": "Хабар 24"
               }
            ]
         },
         {
            "group": "Для детей",
            "groupData": [
               {
                  "id": 7,
                  "name": "ANI"
               },
               {
                  "id": 14,
                  "name": "BabyTV"
               },
               {
                  "id": 18,
                  "name": "Boomerang"
               },
               {
                  "id": 23,
                  "name": "Cartoon Network"
               },
               {
                  "id": 44,
                  "name": "Gulli Girl"
               },
               {
                  "id": 64,
                  "name": "Nick Jr."
               },
               {
                  "id": 65,
                  "name": "Nickelodeon"
               },
               {
                  "id": 88,
                  "name": "Tiji"
               },
               {
                  "id": 104,
                  "name": "В гостях у сказки"
               },
               {
                  "id": 132,
                  "name": "Канал Disney"
               },
               {
                  "id": 133,
                  "name": "Капитан Фантастика"
               },
               {
                  "id": 134,
                  "name": "Карусель"
               },
               {
                  "id": 148,
                  "name": "Малыш"
               },
               {
                  "id": 167,
                  "name": "Мульт"
               },
               {
                  "id": 168,
                  "name": "Мульт HD"
               },
               {
                  "id": 169,
                  "name": "Мультимузыка"
               },
               {
                  "id": 182,
                  "name": "О!"
               },
               {
                  "id": 200,
                  "name": "Радость моя"
               },
               {
                  "id": 209,
                  "name": "Рыжий"
               },
               {
                  "id": 211,
                  "name": "СТС Kids"
               },
               {
                  "id": 234,
                  "name": "Уникум"
               }
            ]
         },
         {
            "group": "Спорт",
            "groupData": [
               {
                  "id": 28,
                  "name": "E TV"
               },
               {
                  "id": 32,
                  "name": "Eurosport 1 HD"
               },
               {
                  "id": 33,
                  "name": "Eurosport 2 HD"
               },
               {
                  "id": 34,
                  "name": "Extreme Sports"
               },
               {
                  "id": 38,
                  "name": "FastnFunBox"
               },
               {
                  "id": 39,
                  "name": "Fightbox HD"
               },
               {
                  "id": 51,
                  "name": "M-1 Global"
               },
               {
                  "id": 95,
                  "name": "АВТО24"
               },
               {
                  "id": 102,
                  "name": "Бокс ТВ"
               },
               {
                  "id": 112,
                  "name": "Драйв"
               },
               {
                  "id": 119,
                  "name": "ЖИВИ!"
               },
               {
                  "id": 129,
                  "name": "КХЛ"
               },
               {
                  "id": 130,
                  "name": "КХЛ HD"
               },
               {
                  "id": 144,
                  "name": "МАТЧ! HD"
               },
               {
                  "id": 145,
                  "name": "МАТЧ! СТРАНА"
               },
               {
                  "id": 150,
                  "name": "Матч ТВ"
               },
               {
                  "id": 151,
                  "name": "Матч! Арена"
               },
               {
                  "id": 152,
                  "name": "Матч! Боец "
               },
               {
                  "id": 153,
                  "name": "Матч! Игра"
               },
               {
                  "id": 156,
                  "name": "Мир Баскетбола"
               },
               {
                  "id": 161,
                  "name": "Моторспорт ТВ"
               },
               {
                  "id": 216,
                  "name": "Старт"
               },
               {
                  "id": 226,
                  "name": "ТОЧКА ОТРЫВА"
               }
            ]
         },
         {
            "group": "Кино",
            "groupData": [
               {
                  "id": 5,
                  "name": "A1"
               },
               {
                  "id": 6,
                  "name": "A2"
               },
               {
                  "id": 11,
                  "name": "BOLT"
               },
               {
                  "id": 17,
                  "name": "Bollywood HD"
               },
               {
                  "id": 35,
                  "name": "FOX HD"
               },
               {
                  "id": 36,
                  "name": "Fan"
               },
               {
                  "id": 40,
                  "name": "FilmBox Art House"
               },
               {
                  "id": 41,
                  "name": "Filmbox"
               },
               {
                  "id": 42,
                  "name": "Fox Life HD"
               },
               {
                  "id": 47,
                  "name": "Hollywood"
               },
               {
                  "id": 68,
                  "name": "Paramount Channel"
               },
               {
                  "id": 69,
                  "name": "Paramount Comedy HD"
               },
               {
                  "id": 80,
                  "name": "Sony Channel HD"
               },
               {
                  "id": 81,
                  "name": "Sony Sci-Fi"
               },
               {
                  "id": 82,
                  "name": "Sony Turbo"
               },
               {
                  "id": 83,
                  "name": "Spike"
               },
               {
                  "id": 84,
                  "name": "Star Cinema"
               },
               {
                  "id": 85,
                  "name": "Star Family"
               },
               {
                  "id": 93,
                  "name": "Zee Russia"
               },
               {
                  "id": 110,
                  "name": "Дом Кино"
               },
               {
                  "id": 111,
                  "name": "Дом Кино Премиум"
               },
               {
                  "id": 114,
                  "name": "Еврокино"
               },
               {
                  "id": 126,
                  "name": "Иллюзион + "
               },
               {
                  "id": 128,
                  "name": "КИНО ТВ HD"
               },
               {
                  "id": 135,
                  "name": "Киносерия"
               },
               {
                  "id": 136,
                  "name": "Киноужас"
               },
               {
                  "id": 138,
                  "name": "Комедия"
               },
               {
                  "id": 142,
                  "name": "Любимое кино"
               },
               {
                  "id": 158,
                  "name": "Мир сериала"
               },
               {
                  "id": 172,
                  "name": "НТВ Сериал"
               },
               {
                  "id": 174,
                  "name": "НТВ Хит"
               },
               {
                  "id": 175,
                  "name": "Настоящее Страшное Телевидение"
               },
               {
                  "id": 180,
                  "name": "Наше новое кино"
               },
               {
                  "id": 194,
                  "name": "Победа"
               },
               {
                  "id": 197,
                  "name": "Продвижение"
               },
               {
                  "id": 205,
                  "name": "Русский Иллюзион"
               },
               {
                  "id": 206,
                  "name": "Русский бестселлер"
               },
               {
                  "id": 207,
                  "name": "Русский детектив"
               },
               {
                  "id": 208,
                  "name": "Русский роман HD"
               },
               {
                  "id": 235,
                  "name": "ФЕНИКС+КИНО"
               }
            ]
         },
         {
            "group": "Развлекательные",
            "groupData": [
               {
                  "id": 1,
                  "name": "2X2"
               },
               {
                  "id": 2,
                  "name": "7tv"
               },
               {
                  "id": 3,
                  "name": "8 Канал"
               },
               {
                  "id": 37,
                  "name": "Fashionbox"
               },
               {
                  "id": 45,
                  "name": "HGTV"
               },
               {
                  "id": 49,
                  "name": "KBS World"
               },
               {
                  "id": 50,
                  "name": "Kаzаkh TV"
               },
               {
                  "id": 67,
                  "name": "Outdoor Channel"
               },
               {
                  "id": 79,
                  "name": "Shopping Live"
               },
               {
                  "id": 86,
                  "name": "TLC HD"
               },
               {
                  "id": 87,
                  "name": "TVM Channel"
               },
               {
                  "id": 92,
                  "name": "World Fashion Channel"
               },
               {
                  "id": 105,
                  "name": "В мире животных"
               },
               {
                  "id": 107,
                  "name": "Время"
               },
               {
                  "id": 116,
                  "name": "Еда"
               },
               {
                  "id": 117,
                  "name": "Еда Премиум"
               },
               {
                  "id": 127,
                  "name": "КВН ТВ"
               },
               {
                  "id": 131,
                  "name": "Калейдоскоп ТВ"
               },
               {
                  "id": 140,
                  "name": "Кухня ТВ"
               },
               {
                  "id": 146,
                  "name": "МИР PREMIUM"
               },
               {
                  "id": 159,
                  "name": "Морской"
               },
               {
                  "id": 164,
                  "name": "Мужской"
               },
               {
                  "id": 173,
                  "name": "НТВ Стиль"
               },
               {
                  "id": 177,
                  "name": "Национальное телевидение Чувашии"
               },
               {
                  "id": 179,
                  "name": "Наша Тема"
               },
               {
                  "id": 181,
                  "name": "Ностальгия"
               },
               {
                  "id": 183,
                  "name": "О!КИНО"
               },
               {
                  "id": 187,
                  "name": "Оружие"
               },
               {
                  "id": 188,
                  "name": "Открытый мир"
               },
               {
                  "id": 190,
                  "name": "Охотник и рыболов HD"
               },
               {
                  "id": 196,
                  "name": "Про Бизнес"
               },
               {
                  "id": 212,
                  "name": "Сарафан"
               },
               {
                  "id": 217,
                  "name": "Супер"
               },
               {
                  "id": 225,
                  "name": "ТНТ4"
               },
               {
                  "id": 228,
                  "name": "Театр"
               },
               {
                  "id": 232,
                  "name": "Телекафе"
               },
               {
                  "id": 233,
                  "name": "Точка ТВ"
               },
               {
                  "id": 236,
                  "name": "Хабар 24"
               },
               {
                  "id": 239,
                  "name": "Ю"
               },
               {
                  "id": 240,
                  "name": "Ювелирочка"
               }
            ]
         },
         {
            "group": "Новости",
            "groupData": [
               {
                  "id": 9,
                  "name": "Arirang"
               },
               {
                  "id": 10,
                  "name": "BBC World News"
               },
               {
                  "id": 22,
                  "name": "CNN International"
               },
               {
                  "id": 25,
                  "name": "Deutsche Welle"
               },
               {
                  "id": 43,
                  "name": "France 24"
               },
               {
                  "id": 61,
                  "name": "NHK World-Japan"
               },
               {
                  "id": 71,
                  "name": "RT"
               },
               {
                  "id": 72,
                  "name": "RT Arabic"
               },
               {
                  "id": 99,
                  "name": "БелРос"
               },
               {
                  "id": 100,
                  "name": "Беларусь 24"
               },
               {
                  "id": 103,
                  "name": "Большая Азия"
               },
               {
                  "id": 113,
                  "name": "Дума ТВ"
               },
               {
                  "id": 115,
                  "name": "Евроновости"
               },
               {
                  "id": 125,
                  "name": "Известия"
               },
               {
                  "id": 141,
                  "name": "ЛДПР ТВ"
               },
               {
                  "id": 155,
                  "name": "Мир 24"
               },
               {
                  "id": 157,
                  "name": "Мир Белогорья"
               },
               {
                  "id": 160,
                  "name": "Москва24"
               },
               {
                  "id": 177,
                  "name": "Национальное телевидение Чувашии"
               },
               {
                  "id": 199,
                  "name": "РБК "
               },
               {
                  "id": 202,
                  "name": "Россия HD"
               },
               {
                  "id": 220,
                  "name": "ТНВ"
               },
               {
                  "id": 221,
                  "name": "ТНВ-Планета"
               },
               {
                  "id": 229,
                  "name": "Телеканал 360°"
               },
               {
                  "id": 230,
                  "name": "Телеканал 360° Новости"
               },
               {
                  "id": 241,
                  "name": "Югра"
               }
            ]
         },
         {
            "group": "Музыкальные",
            "groupData": [
               {
                  "id": 4,
                  "name": "9 Волна"
               },
               {
                  "id": 12,
                  "name": "BRIDGE TV CLASSIC"
               },
               {
                  "id": 13,
                  "name": "BRIDGE TV HITS"
               },
               {
                  "id": 20,
                  "name": "Bridge TV"
               },
               {
                  "id": 21,
                  "name": "Bridge TV Русский хит"
               },
               {
                  "id": 31,
                  "name": "Europa Plus TV"
               },
               {
                  "id": 52,
                  "name": "MCM Top"
               },
               {
                  "id": 53,
                  "name": "MEZZO LIVE HD"
               },
               {
                  "id": 54,
                  "name": "MTV Dance"
               },
               {
                  "id": 55,
                  "name": "MTV HD"
               },
               {
                  "id": 56,
                  "name": "MTV Hits"
               },
               {
                  "id": 57,
                  "name": "MTV Live HD"
               },
               {
                  "id": 58,
                  "name": "MTV Rocks"
               },
               {
                  "id": 59,
                  "name": "Music Box Gold"
               },
               {
                  "id": 60,
                  "name": "Music Box Russia"
               },
               {
                  "id": 75,
                  "name": "RU.TV"
               },
               {
                  "id": 90,
                  "name": "VH1 European"
               },
               {
                  "id": 91,
                  "name": "Vh1 Classic"
               },
               {
                  "id": 106,
                  "name": "Восток ТВ"
               },
               {
                  "id": 118,
                  "name": "ЖАРА"
               },
               {
                  "id": 143,
                  "name": "Ля-минор"
               },
               {
                  "id": 147,
                  "name": "Майдан"
               },
               {
                  "id": 165,
                  "name": "Муз ТВ"
               },
               {
                  "id": 166,
                  "name": "Музыка Первого"
               },
               {
                  "id": 169,
                  "name": "Мультимузыка"
               },
               {
                  "id": 185,
                  "name": "О2ТВ"
               },
               {
                  "id": 224,
                  "name": "ТНТ MUSIC"
               }
            ]
         },
         {
            "group": "Познавательные",
            "groupData": [
               {
                  "id": 8,
                  "name": "Animal Planet HD"
               },
               {
                  "id": 24,
                  "name": "DTX"
               },
               {
                  "id": 26,
                  "name": "Discovery Channel HD"
               },
               {
                  "id": 27,
                  "name": "Docubox"
               },
               {
                  "id": 29,
                  "name": "English Club TV"
               },
               {
                  "id": 46,
                  "name": "History HD"
               },
               {
                  "id": 48,
                  "name": "ID Xtra"
               },
               {
                  "id": 50,
                  "name": "Kаzаkh TV"
               },
               {
                  "id": 62,
                  "name": "Nat Geo Wild HD"
               },
               {
                  "id": 63,
                  "name": "National Geographic HD"
               },
               {
                  "id": 66,
                  "name": "Ocean-TV"
               },
               {
                  "id": 67,
                  "name": "Outdoor Channel"
               },
               {
                  "id": 73,
                  "name": "RTG HD"
               },
               {
                  "id": 74,
                  "name": "RTД HD"
               },
               {
                  "id": 76,
                  "name": "Russian Travel Guide"
               },
               {
                  "id": 77,
                  "name": "SOCHI LIVE"
               },
               {
                  "id": 78,
                  "name": "Science Channel HD"
               },
               {
                  "id": 89,
                  "name": "Travel and Adventure HD"
               },
               {
                  "id": 94,
                  "name": "Zоопарк"
               },
               {
                  "id": 96,
                  "name": "Авто Плюс"
               },
               {
                  "id": 101,
                  "name": "Бобёр"
               },
               {
                  "id": 105,
                  "name": "В мире животных"
               },
               {
                  "id": 108,
                  "name": "ДИКИЙ"
               },
               {
                  "id": 109,
                  "name": "Доктор"
               },
               {
                  "id": 120,
                  "name": "Живая планета"
               },
               {
                  "id": 121,
                  "name": "Загородная жизнь"
               },
               {
                  "id": 122,
                  "name": "Загородный"
               },
               {
                  "id": 124,
                  "name": "Здоровье"
               },
               {
                  "id": 137,
                  "name": "Ключ"
               },
               {
                  "id": 139,
                  "name": "Конный мир"
               },
               {
                  "id": 149,
                  "name": "Мама"
               },
               {
                  "id": 159,
                  "name": "Морской"
               },
               {
                  "id": 162,
                  "name": "Моя Планета"
               },
               {
                  "id": 163,
                  "name": "Моя планета HD"
               },
               {
                  "id": 171,
                  "name": "НТВ Право"
               },
               {
                  "id": 176,
                  "name": "Наука"
               },
               {
                  "id": 177,
                  "name": "Национальное телевидение Чувашии"
               },
               {
                  "id": 178,
                  "name": "Наша Сибирь"
               },
               {
                  "id": 179,
                  "name": "Наша Тема"
               },
               {
                  "id": 187,
                  "name": "Оружие"
               },
               {
                  "id": 189,
                  "name": "Охота и Рыбалка"
               },
               {
                  "id": 192,
                  "name": "Первый Вегетарианский"
               },
               {
                  "id": 193,
                  "name": "Первый образовательный"
               },
               {
                  "id": 195,
                  "name": "Поехали!"
               },
               {
                  "id": 198,
                  "name": "Пёс и Ко"
               },
               {
                  "id": 214,
                  "name": "Синергия ТВ"
               },
               {
                  "id": 215,
                  "name": "Союз"
               },
               {
                  "id": 218,
                  "name": "Т 24"
               },
               {
                  "id": 222,
                  "name": "ТНОМЕР"
               },
               {
                  "id": 227,
                  "name": "Тайны галактики"
               },
               {
                  "id": 231,
                  "name": "Телеканал Совета Федерации \"Вместе РФ\""
               },
               {
                  "id": 236,
                  "name": "Хабар 24"
               },
               {
                  "id": 237,
                  "name": "Центральное телевидение (ЦТВ)"
               }
            ]
         },
         {
            "group": "Федеральные",
            "groupData": [
               {
                  "id": 97,
                  "name": "Архыз 24"
               },
               {
                  "id": 98,
                  "name": "Башкирское спутниковое телевидение"
               },
               {
                  "id": 123,
                  "name": "Звезда"
               },
               {
                  "id": 134,
                  "name": "Карусель"
               },
               {
                  "id": 144,
                  "name": "МАТЧ! HD"
               },
               {
                  "id": 150,
                  "name": "Матч ТВ"
               },
               {
                  "id": 154,
                  "name": "Мир"
               },
               {
                  "id": 160,
                  "name": "Москва24"
               },
               {
                  "id": 165,
                  "name": "Муз ТВ"
               },
               {
                  "id": 170,
                  "name": "НТВ"
               },
               {
                  "id": 186,
                  "name": "ОТР"
               },
               {
                  "id": 191,
                  "name": "ПЯТНИЦА"
               },
               {
                  "id": 201,
                  "name": "Россия - 24"
               },
               {
                  "id": 202,
                  "name": "Россия HD"
               },
               {
                  "id": 203,
                  "name": "Россия-К"
               },
               {
                  "id": 210,
                  "name": "СПАС"
               },
               {
                  "id": 213,
                  "name": "Своё ТВ"
               },
               {
                  "id": 219,
                  "name": "ТВ Центр"
               },
               {
                  "id": 220,
                  "name": "ТНВ"
               },
               {
                  "id": 223,
                  "name": "ТНТ"
               },
               {
                  "id": 229,
                  "name": "Телеканал 360°"
               },
               {
                  "id": 241,
                  "name": "Югра"
               }
            ]
         },
         {
            "group": "Эротика",
            "groupData": [
               {
                  "id": 15,
                  "name": "Barely Legal"
               },
               {
                  "id": 16,
                  "name": "Blue Hustler HD"
               },
               {
                  "id": 19,
                  "name": "Brazzers TV Europe"
               },
               {
                  "id": 30,
                  "name": "Erox HD"
               },
               {
                  "id": 70,
                  "name": "Playboy"
               },
               {
                  "id": 184,
                  "name": "О-ля-ля"
               },
               {
                  "id": 204,
                  "name": "Русская ночь"
               },
               {
                  "id": 238,
                  "name": "Шалун"
               }
            ]
         }
      ],
   },
   {
      id: 'economic',
      name: 'Эконом',
      oldPrice: null,
      currentPrice: 650,
      mobWeb: 30,
      homeWeb: 100,
      calls: 700,
      tvLength: '61 канал',
      tvChannels: [
         {
            "group": "HD",
            "groupData": [
               {
                  "id": 8,
                  "name": "RT"
               },
               {
                  "id": 9,
                  "name": "RTД HD"
               },
               {
                  "id": 12,
                  "name": "SOCHI LIVE"
               },
               {
                  "id": 18,
                  "name": "Известия"
               },
               {
                  "id": 20,
                  "name": "Капитан Фантастика"
               },
               {
                  "id": 37,
                  "name": "Россия HD"
               },
               {
                  "id": 48,
                  "name": "Телеканал 360°"
               }
            ]
         },
         {
            "group": "Для детей",
            "groupData": [
               {
                  "id": 19,
                  "name": "Канал Disney"
               },
               {
                  "id": 20,
                  "name": "Капитан Фантастика"
               },
               {
                  "id": 21,
                  "name": "Карусель"
               },
               {
                  "id": 35,
                  "name": "Радость моя"
               },
               {
                  "id": 50,
                  "name": "Уникум"
               }
            ]
         },
         {
            "group": "Спорт",
            "groupData": [
               {
                  "id": 23,
                  "name": "Матч ТВ"
               }
            ]
         },
         {
            "group": "Кино",
            "groupData": [
               {
                  "id": 29,
                  "name": "НТВ Сериал"
               }
            ]
         },
         {
            "group": "Развлекательные",
            "groupData": [
               {
                  "id": 16,
                  "name": "Еда"
               },
               {
                  "id": 30,
                  "name": "Национальное телевидение Чувашии"
               },
               {
                  "id": 33,
                  "name": "Про Бизнес"
               },
               {
                  "id": 40,
                  "name": "Сарафан"
               },
               {
                  "id": 43,
                  "name": "Супер"
               },
               {
                  "id": 51,
                  "name": "Ю"
               }
            ]
         },
         {
            "group": "Новости",
            "groupData": [
               {
                  "id": 1,
                  "name": "BBC World News"
               },
               {
                  "id": 4,
                  "name": "Deutsche Welle"
               },
               {
                  "id": 5,
                  "name": "France 24"
               },
               {
                  "id": 8,
                  "name": "RT"
               },
               {
                  "id": 18,
                  "name": "Известия"
               },
               {
                  "id": 25,
                  "name": "Мир 24"
               },
               {
                  "id": 26,
                  "name": "Москва24"
               },
               {
                  "id": 30,
                  "name": "Национальное телевидение Чувашии"
               },
               {
                  "id": 34,
                  "name": "РБК "
               },
               {
                  "id": 37,
                  "name": "Россия HD"
               },
               {
                  "id": 45,
                  "name": "ТНВ"
               },
               {
                  "id": 48,
                  "name": "Телеканал 360°"
               },
               {
                  "id": 52,
                  "name": "Югра"
               }
            ]
         },
         {
            "group": "Музыкальные",
            "groupData": [
               {
                  "id": 2,
                  "name": "Bridge TV"
               },
               {
                  "id": 3,
                  "name": "Bridge TV Русский хит"
               },
               {
                  "id": 6,
                  "name": "Music Box Gold"
               },
               {
                  "id": 7,
                  "name": "Music Box Russia"
               },
               {
                  "id": 10,
                  "name": "RU.TV"
               },
               {
                  "id": 15,
                  "name": "Восток ТВ"
               },
               {
                  "id": 27,
                  "name": "Муз ТВ"
               },
               {
                  "id": 47,
                  "name": "ТНТ MUSIC"
               }
            ]
         },
         {
            "group": "Познавательные",
            "groupData": [
               {
                  "id": 9,
                  "name": "RTД HD"
               },
               {
                  "id": 11,
                  "name": "Russian Travel Guide"
               },
               {
                  "id": 12,
                  "name": "SOCHI LIVE"
               },
               {
                  "id": 22,
                  "name": "Мама"
               },
               {
                  "id": 30,
                  "name": "Национальное телевидение Чувашии"
               },
               {
                  "id": 42,
                  "name": "Синергия ТВ"
               },
               {
                  "id": 49,
                  "name": "Телеканал Совета Федерации \"Вместе РФ\""
               }
            ]
         },
         {
            "group": "Федеральные",
            "groupData": [
               {
                  "id": 13,
                  "name": "Архыз 24"
               },
               {
                  "id": 14,
                  "name": "Башкирское спутниковое телевидение"
               },
               {
                  "id": 17,
                  "name": "Звезда"
               },
               {
                  "id": 21,
                  "name": "Карусель"
               },
               {
                  "id": 23,
                  "name": "Матч ТВ"
               },
               {
                  "id": 24,
                  "name": "Мир"
               },
               {
                  "id": 26,
                  "name": "Москва24"
               },
               {
                  "id": 27,
                  "name": "Муз ТВ"
               },
               {
                  "id": 28,
                  "name": "НТВ"
               },
               {
                  "id": 31,
                  "name": "ОТР"
               },
               {
                  "id": 32,
                  "name": "ПЯТНИЦА"
               },
               {
                  "id": 36,
                  "name": "Россия - 24"
               },
               {
                  "id": 37,
                  "name": "Россия HD"
               },
               {
                  "id": 38,
                  "name": "Россия-К"
               },
               {
                  "id": 39,
                  "name": "СПАС"
               },
               {
                  "id": 41,
                  "name": "Своё ТВ"
               },
               {
                  "id": 44,
                  "name": "ТВ Центр"
               },
               {
                  "id": 45,
                  "name": "ТНВ"
               },
               {
                  "id": 46,
                  "name": "ТНТ"
               },
               {
                  "id": 48,
                  "name": "Телеканал 360°"
               },
               {
                  "id": 52,
                  "name": "Югра"
               }
            ]
         }
      ]
   },
   {
      id: 'around',
      name: 'Везде',
      oldPrice: null,
      currentPrice: 1400,
      mobWeb: '',
      homeWeb: 150,
      calls: 2100,
      tvLength: '61 канал',
      tvChannels: [
         {
            "group": "HD",
            "groupData": [
               {
                  "id": 8,
                  "name": "RT"
               },
               {
                  "id": 9,
                  "name": "RTД HD"
               },
               {
                  "id": 12,
                  "name": "SOCHI LIVE"
               },
               {
                  "id": 18,
                  "name": "Известия"
               },
               {
                  "id": 20,
                  "name": "Капитан Фантастика"
               },
               {
                  "id": 37,
                  "name": "Россия HD"
               },
               {
                  "id": 48,
                  "name": "Телеканал 360°"
               }
            ]
         },
         {
            "group": "Для детей",
            "groupData": [
               {
                  "id": 19,
                  "name": "Канал Disney"
               },
               {
                  "id": 20,
                  "name": "Капитан Фантастика"
               },
               {
                  "id": 21,
                  "name": "Карусель"
               },
               {
                  "id": 35,
                  "name": "Радость моя"
               },
               {
                  "id": 50,
                  "name": "Уникум"
               }
            ]
         },
         {
            "group": "Спорт",
            "groupData": [
               {
                  "id": 23,
                  "name": "Матч ТВ"
               }
            ]
         },
         {
            "group": "Кино",
            "groupData": [
               {
                  "id": 29,
                  "name": "НТВ Сериал"
               }
            ]
         },
         {
            "group": "Развлекательные",
            "groupData": [
               {
                  "id": 16,
                  "name": "Еда"
               },
               {
                  "id": 30,
                  "name": "Национальное телевидение Чувашии"
               },
               {
                  "id": 33,
                  "name": "Про Бизнес"
               },
               {
                  "id": 40,
                  "name": "Сарафан"
               },
               {
                  "id": 43,
                  "name": "Супер"
               },
               {
                  "id": 51,
                  "name": "Ю"
               }
            ]
         },
         {
            "group": "Новости",
            "groupData": [
               {
                  "id": 1,
                  "name": "BBC World News"
               },
               {
                  "id": 4,
                  "name": "Deutsche Welle"
               },
               {
                  "id": 5,
                  "name": "France 24"
               },
               {
                  "id": 8,
                  "name": "RT"
               },
               {
                  "id": 18,
                  "name": "Известия"
               },
               {
                  "id": 25,
                  "name": "Мир 24"
               },
               {
                  "id": 26,
                  "name": "Москва24"
               },
               {
                  "id": 30,
                  "name": "Национальное телевидение Чувашии"
               },
               {
                  "id": 34,
                  "name": "РБК "
               },
               {
                  "id": 37,
                  "name": "Россия HD"
               },
               {
                  "id": 45,
                  "name": "ТНВ"
               },
               {
                  "id": 48,
                  "name": "Телеканал 360°"
               },
               {
                  "id": 52,
                  "name": "Югра"
               }
            ]
         },
         {
            "group": "Музыкальные",
            "groupData": [
               {
                  "id": 2,
                  "name": "Bridge TV"
               },
               {
                  "id": 3,
                  "name": "Bridge TV Русский хит"
               },
               {
                  "id": 6,
                  "name": "Music Box Gold"
               },
               {
                  "id": 7,
                  "name": "Music Box Russia"
               },
               {
                  "id": 10,
                  "name": "RU.TV"
               },
               {
                  "id": 15,
                  "name": "Восток ТВ"
               },
               {
                  "id": 27,
                  "name": "Муз ТВ"
               },
               {
                  "id": 47,
                  "name": "ТНТ MUSIC"
               }
            ]
         },
         {
            "group": "Познавательные",
            "groupData": [
               {
                  "id": 9,
                  "name": "RTД HD"
               },
               {
                  "id": 11,
                  "name": "Russian Travel Guide"
               },
               {
                  "id": 12,
                  "name": "SOCHI LIVE"
               },
               {
                  "id": 22,
                  "name": "Мама"
               },
               {
                  "id": 30,
                  "name": "Национальное телевидение Чувашии"
               },
               {
                  "id": 42,
                  "name": "Синергия ТВ"
               },
               {
                  "id": 49,
                  "name": "Телеканал Совета Федерации \"Вместе РФ\""
               }
            ]
         },
         {
            "group": "Федеральные",
            "groupData": [
               {
                  "id": 13,
                  "name": "Архыз 24"
               },
               {
                  "id": 14,
                  "name": "Башкирское спутниковое телевидение"
               },
               {
                  "id": 17,
                  "name": "Звезда"
               },
               {
                  "id": 21,
                  "name": "Карусель"
               },
               {
                  "id": 23,
                  "name": "Матч ТВ"
               },
               {
                  "id": 24,
                  "name": "Мир"
               },
               {
                  "id": 26,
                  "name": "Москва24"
               },
               {
                  "id": 27,
                  "name": "Муз ТВ"
               },
               {
                  "id": 28,
                  "name": "НТВ"
               },
               {
                  "id": 31,
                  "name": "ОТР"
               },
               {
                  "id": 32,
                  "name": "ПЯТНИЦА"
               },
               {
                  "id": 36,
                  "name": "Россия - 24"
               },
               {
                  "id": 37,
                  "name": "Россия HD"
               },
               {
                  "id": 38,
                  "name": "Россия-К"
               },
               {
                  "id": 39,
                  "name": "СПАС"
               },
               {
                  "id": 41,
                  "name": "Своё ТВ"
               },
               {
                  "id": 44,
                  "name": "ТВ Центр"
               },
               {
                  "id": 45,
                  "name": "ТНВ"
               },
               {
                  "id": 46,
                  "name": "ТНТ"
               },
               {
                  "id": 48,
                  "name": "Телеканал 360°"
               },
               {
                  "id": 52,
                  "name": "Югра"
               }
            ]
         }
      ],
   },
]

const premium = tariffs.find(el => el.id === 'premium')


export default function Tariffs() {
   const [collapseGroup, setCollapseGroup] = React.useState(false)
   const [collapseChannels, setCollapseChannels] = React.useState([])

   const settingsSlider = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1280,
            settings: {
               slidesToShow: 3,
            }
         }, {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
            }
         }, {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               arrows: false,
            }
         }
      ]
   }

   return (
      <section className="tariffs">
         <div className="wrapper">
            <h1 className="tariffs__title">Тарифы «Объединяй!»</h1>

            <Slider className="slider" {...settingsSlider}>
               {
                  tariffs.map( (tariff, i) => (
                     <TariffCard key={tariff.id}
                                 tariff={tariff}
                                 premium={premium}
                                 collapse={{
                                    collapseGroup,
                                    setCollapseGroup,
                                    collapseChannels,
                                    setCollapseChannels
                                 }}/>
                  ) )
               }


            </Slider>
         </div>
      </section>
   )
}
