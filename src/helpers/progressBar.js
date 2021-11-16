const widthProgressBar = (val, percent) => val.split( ' ' )[0] / percent + '%'

export default function (title, value) {
   if (title === 'Мобильный интернет' && value === `<span class='icon-infinity'></span> ГБ`) return '100%'

   if (title === 'Звонки') {
      return widthProgressBar( value, 30 )
   }

   if (title === 'Домашний&nbsp;<br>интернет') {
      return widthProgressBar( value, 5 )
   }

   if (title === 'ТВ') {
      return widthProgressBar( value, 2.5 )
   }
}

