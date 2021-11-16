export default function (name, tariff, index) {
   if (tariff.tv[index])
      for (let nameJson of tariff.tv[index].groupData)
         if (name === nameJson.name) return true
}