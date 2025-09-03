export default function TableBody({ tableColumns, tableData, renderCell }) {
  return (
<<<<<<< HEAD
    <div className="overflow-x-auto bg-white">
      <table className="table">
        <thead className="bg-gray-100">
=======
    <div className="overflow-x-auto">
      <table className="table bg-white">
        <thead className="">
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
          <tr>
            <th>#</th>
            {tableColumns.map((header) => (
              <th key={header.uid} className="text-md font-bold">
                {header.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.length > 0 ? (
            tableData.map((item, index) => (
<<<<<<< HEAD
              <tr
                key={item._id}
                className="hover:bg-base-300 border-gray-300"
              >
=======
              <tr key={item._id} className="hover:bg-base-300 border-gray-300">
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
                <td>{index + 1}</td>
                {tableColumns.map((header) => (
                  <td key={header.uid}>
                    {renderCell ? renderCell(item, header.uid) : ""}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={tableColumns.length + 1}
                className="h-24 text-center text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
