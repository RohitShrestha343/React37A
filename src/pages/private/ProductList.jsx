import DataTable from "react-data-table-component";
import { apiCall } from "../../utils/api";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
  ];

  const loadData = async () => {
    try {
      const response = await apiCall("GET", `/users`, {});

      console.log(response?.data);
      setData(response?.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <DataTable columns={columns} data={data} pagination highlightOnHover />
  );
};

export default ProductList;
