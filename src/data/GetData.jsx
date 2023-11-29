import { useEffect } from "react";
import fetchData from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import {
  getLaptops,
  getPhones,
  setfetchDone,
  setfetching,
} from "../store/ProductStore";

const GetData = () => {
  const dispatch = useDispatch();
  const { fetching, fetchDone } = useSelector((state) => state.product);
  console.log(fetching, fetchDone);
  useEffect(() => {
    async function getData() {
      dispatch(setfetching());
      let RESPONSE = await Promise.all([
        fetchData("category/smartphones"),
        fetchData("category/laptops"),
      ]);
      if (RESPONSE[0].status == 200 && RESPONSE[1].status == 200) {
        dispatch(getPhones({ phones: RESPONSE[0].data.products }));
        dispatch(getLaptops({ laptops: RESPONSE[1].data.products }));
        dispatch(setfetchDone());
      }
    }
    getData();
  }, []);
  return <></>;
};

export default GetData;
