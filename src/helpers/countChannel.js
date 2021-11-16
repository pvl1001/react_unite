export default function (tariff, index) {
   return tariff[index] ? tariff[index].groupData.length : 0
}