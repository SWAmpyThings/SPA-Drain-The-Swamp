import { selector } from "recoil";
import { greenPoints } from "./atoms";

export const greenPointsState = selector({
    key: 'greenPointsState',
    get: ({get}) => get(greenPoints)
});