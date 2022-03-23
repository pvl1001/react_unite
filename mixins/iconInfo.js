import { templateIconInfo } from "../pageData/pageHome";

export default function iconInfo( id, defaultTemplate ) {
   switch ( id ) {
      case 'internet':
         return templateIconInfo.internet
      case 'vse':
         return templateIconInfo.vse
      default:
         return defaultTemplate
   }
}