import { useLoaderData } from "react-router";
import type { IProductsMetaData } from "../models";
import { OrdersList, PaginationContainer, SectionTitle } from "../components";

const Orders = () => {
  const { meta } = useLoaderData() as { meta: IProductsMetaData };

  if (meta.pagination.total < 1) {
    return <SectionTitle text="please make an order" />;
  }

  return (
    <>
      <SectionTitle text="Your orders" />
      <OrdersList />
      <PaginationContainer />
    </>
  );
};

export default Orders;
