export default function (rentDevice) {
   return rentDevice.find((el, i) => {
      return el.price === '0'
   })
}