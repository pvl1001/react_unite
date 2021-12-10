import {HANDLE_SWITCH} from "../types";

export default function optionSwitch(payload) {
   // console.log(payload)
   return {
      type: HANDLE_SWITCH, payload
   }
}