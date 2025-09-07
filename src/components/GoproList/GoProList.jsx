import { goProDataList } from "../../data/goproData";
import { GoProItem } from "../GoProItem/GoProItem";
export const GoProList = () => {
  console.log(goProDataList);

  return (
    <ul>
      {goProDataList.map((index) => {
        return <GoProItem info={index} test="Test"></GoProItem>;
      })}
    </ul>
  );
};
