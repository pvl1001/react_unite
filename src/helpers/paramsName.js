export default function (name) {
   const firstName = name.split(' ')[0]
   if (firstName === 'Роутер') return 'роутера'
   return 'приставки'
}