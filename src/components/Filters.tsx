import { Form, Link, useLoaderData } from "react-router";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import type { IProductsMetaData } from "../models";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta, params } = useLoaderData() as {
    meta: IProductsMetaData;
    params: { [key: string]: string };
  };
  console.log(params);
  const { search, company, category, shipping, order, price } = params;

  const comapnies = meta.companies;
  const categories = meta.categories;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-ceneter">
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search as string}
      />

      <FormSelect
        label="select category"
        name="category"
        options={categories}
        defaultValue={category as string}
      />

      <FormSelect
        label="select company"
        name="company"
        options={comapnies}
        defaultValue={company as string}
      />

      <FormSelect
        label="sort by"
        name="order"
        options={["a-z", "z-a", "high", "low"]}
        defaultValue={order as string}
      />

      <FormRange label="select price" name="price" price={Number(price)} />

      <FormCheckbox
        label="free shipping"
        name="shipping"
        defaultValue={shipping === "on"}
      />

      <button type="submit" className="btn btn-primary btn-sm uppercase">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm uppercase">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
