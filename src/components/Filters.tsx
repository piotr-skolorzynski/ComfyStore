import { Form, Link, useLoaderData } from "react-router";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import type { IProductsMetaData } from "../models";
import FormRange from "./FormRange";

const Filters = () => {
  const { meta } = useLoaderData() as { meta: IProductsMetaData };
  const comapnies = meta.companies;
  const categories = meta.categories;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-ceneter">
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />

      <FormSelect
        label="select category"
        name="category"
        options={categories}
      />

      <FormSelect label="select company" name="company" options={comapnies} />

      <FormSelect
        label="sort by"
        name="order"
        options={["a-z", "z-a", "high", "low"]}
      />

      <FormRange label="select price" name="price" />

      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
