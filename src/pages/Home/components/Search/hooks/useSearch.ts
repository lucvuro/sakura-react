import {useMemo} from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import {
  selectCard,
  setListCard,
} from "../../../../../features/card/cardSlice";
import useStateParams from "../../../../../hooks/useUrlState";

const useSearch = () => {
  const dispatch = useAppDispatch();
  const cardModel = useAppSelector(selectCard);
  const listCard = useMemo(
    () => cardModel.listCardInit,
    [cardModel.listCardInit]
  );
  const [search, setSearch] = useStateParams(
    "",
    "search",
    (s) => s,
    (s) => s
  );
  const onInputChange = (value: string) => {
    setSearch(value);
    dispatch(
      setListCard(
        listCard.filter((item) =>
          item.data.nameCard.toLowerCase().includes(value.toLowerCase())
        )
      )
    );
  };
  return {
    search,
    onInputChange,
  };
};

export default useSearch;
