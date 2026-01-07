import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ProductSchema } from "./schema/product.schema";

const Product = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ProductSchema),
  });

  const productSave = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(productSave)}>
        <label>Product Name</label>
        <input {...register("productName")} type="text" />
        {errors.productName && <p>{errors.productName.message}</p>}
        <label>Price</label>
        <input {...register("productPrice")} type="text" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Product;
