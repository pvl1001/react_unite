export default function (tariff) {
   let count = 0
   for (let el of tariff) count += el.groupData.length
   return count
}