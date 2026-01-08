import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ProductSchema } from "./schema/product.schema";
import DataTable from "react-data-table-component";

const Product = () => {
  // const data = [
  //   { id: 1, name: "Sajik", email: "sajik@gmail.com", role: "Admin" },
  //   { id: 2, name: "Ram", email: "ram@gmail.com", role: "User" },
  //   { id: 3, name: "Shyam", email: "shyam@gmail.com", role: "Editor" },
  // ];

  // const columns = [
  //   {
  //     accessorKey: "id",
  //     header: "ID",
  //   },
  //   {
  //     accessorKey: "name",
  //     header: "Name",
  //   },
  //   {
  //     accessorKey: "email",
  //     header: "Email",
  //   },
  //   {
  //     accessorKey: "role",
  //     header: "Role",
  //   },
  //   {
  //     id: "actions",
  //     header: "Actions",
  //     cell: ({ row }) => (
  //       <button
  //         onClick={() => alert(`Edit ${row.original.name}`)}
  //         style={{ color: "blue" }}
  //       >
  //         Edit
  //       </button>
  //     ),
  //   },
  // ];

  return (
    // <>
    //   <DataTable
    //     title="User List"
    //     columns={columns}
    //     data={data}
    //     pagination
    //     highlightOnHover
    //     striped
    //     responsive
    //   />
    // </>
  );
};
export default Product;
