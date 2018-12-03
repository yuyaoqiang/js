import { SEARCH_FOUCS, SEARCH_BLUR,DIV_FOUCS,DIV_BLUR} from "../../contents/types";
export const handleInputFocus = () => {
  return {
    type: SEARCH_FOUCS
  };
};
export const handleInputBlur = () => {
  return {
    type: SEARCH_BLUR
  };
};
export const handlDivFoucs= () => {
    return {
      type: DIV_FOUCS
    };
  };
  export const handlDivBlur = () => {
    return {
      type: DIV_BLUR
    };
  };
