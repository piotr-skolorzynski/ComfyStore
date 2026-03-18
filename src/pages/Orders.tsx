import { useLoaderData } from "react-router";
import type { IProductsMetaData } from "../models";
import {
  ComplexPaginationContainer,
  OrdersList,
  SectionTitle,
} from "../components";

const Orders = () => {
  const { meta } = useLoaderData() as { meta: IProductsMetaData };

  if (meta.pagination.total < 1) {
    return <SectionTitle text="please make an order" />;
  }

  return (
    <>
      <SectionTitle text="Your orders" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};

export default Orders;
