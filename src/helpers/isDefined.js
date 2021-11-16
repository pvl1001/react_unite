// вывод оборудование
export default function (rentDevice) {
   return rentDevice.find(el => el.price === '0')
}