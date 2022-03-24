import { templateIconInfo } from "../pageData/internet";

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