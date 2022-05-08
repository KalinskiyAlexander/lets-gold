import {atom} from "recoil";

export const counterState = atom({
  key: 'counter', // unique ID (with respect to other atoms/selectors)
  default: 5, // default value (aka initial value)
});
