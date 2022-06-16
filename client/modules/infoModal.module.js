module.exports = {
   mobile: {
      title: "Мобильная связь",
      icon: "mob_bold.svg",
      mob_web: {
         name: "Мобильный интернет",
         description: "",
         value: this.web + " ГБ"
      },
      call: {
         name: "Звонки на все номера России",
         description: "Звонки на городские номера и межгород включены в пакет. Звонки на номера МегаФона России не расходуют пакет минут.",
         value: this.min + " минут"
      },
      messangers: {
         name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
         description: "Даже при отрицательном балансе можно написать сообщение и звонить на номера МегаФона до ближайшей даты списания абонентской платы. Эти приложения не расходуют интернет по тарифу: WhatsApp, Viber, Telegram, eMotion, ТамТам, Snapchat.",
         value: "Безлимитно"
      },
      share: {
         name: "Раздача интернета",
         description: "Весь объём интернета по тарифу доступен для раздачи через Wi‑Fi или USB без дополнительной платы! При использовании торрент‑ресурсов скорость снижается до 128 Кбит/с.",
         value: "Бесплатно"
      },
      youtube: {
         name: "Интернет на социальные сети и YouTube",
         description: "Не расходуют пакет интернета приложения и сайты: ВКонтакте, Одноклассники, TikTok, YouTube.",
         value: "Безлимитно"
      },
      sms: {
         name: "SMS на номера России",
         value: "300 сообщений"
      },
      speed: {
         name: "Скорость",
         description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
         value: this.speed + " Мбит/с"
      },
      traffic: {
         name: "Трафик",
         description: "",
         value: "Безлимитно"
      },
   },
   home_web: {
      title: "Домашний интернет",
      icon: "wi-fi_bold.svg",
      speed: {
         name: "Скорость",
         description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
         value: this.speed + " Мбит/с"
      },
      traffic: {
         name: "Трафик",
         description: "",
         value: "Безлимитно"
      },
   },
   tv: {
      title: "ТВ",
      icon: "TV_bold.svg",
      mftv: {
         name: "Мегафон ТВ",
         description: "",
         value: this.tvLength
      },
      traffic: {
         name: "Трафик",
         description: "",
         value: "Безлимитно"
      },
   }
}

