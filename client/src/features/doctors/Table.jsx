<<<<<<< HEAD
import { useCallback } from "react";
import { doctorsTableColumns, formatCurrency } from "@/utils/constants";
import TableBody from "@/components/TableBody";
import { RiEditLine } from "@remixicon/react";


export default function Table({ doctor }) {
    const renderCell = useCallback((room, columnKey) => {
        const cellValue = doctor[columnKey];
        switch (columnKey) {
            case "fullname":
                return (
                    <>
                        <div className="capitalize">
                            <h1 className='font-bold'>{doctor?.fullname}</h1>
                        </div>
                    </>
                );
            case "phone":
                return <div className='capitalize'>{doctor?.phone}</div>;
            case "specialization":
                return (
                    <div className='capitalize'>{doctor?.specialization}</div>
                );
            case "availability":
                return (
                    <div className='capitalize'>${formatCurrency(doctor?.availability)}</div>
                );
            case "action":
                return (
                    <div className='flex gap-4 items-center'>
                        <button
                            onClick={() => window.open(`mailto:${room.email}`, "_blank")}
                            title='send a mail'
                            className='cursor-pointer'
                        >
                            <RiEditLine className='text-blue-500'/>
                        </button>
                    </div>
                );
                default:
                    return cellValue;
            }
    }, []);
        

  return (
    <>
        <TableBody tableColumns={doctorsTableColumns} tableData={doctor} renderCell={renderCell}/>
=======
import TableBody from "@/components/TableBody";
import { doctorsStatusColors, doctorsTableColumns } from "@/utils/constants";
import React, { useCallback } from "react";
import EditDoctor from "./EditDoctor";
// import { useAuth } from "@/store";

export default function Table({ doctors }) {
  const renderCell = useCallback((doctor, columnKey) => {
    const cellValue = doctor[columnKey];
    switch (columnKey) {
      case "fullname":
        return (
          <div className="">
            <h1 className="font-bold">{doctor?.userId?.fullname}</h1>
            <p className="text-gray-500 text-sm">{doctor?.userId?.email}</p>
          </div>
        );
      case "phone":
        return (
          <div className="capitalize">
            {doctor?.phone ? doctor.phone : "N/A"}
          </div>
        );
      case "specialization":
        return <div className="capitalize">{doctor?.specialization}</div>;
      case "availability":
        return (
          <div
            className={`capitalize badge badge-sm font-bold ${
              doctorsStatusColors[doctor?.availability]
            }`}
          >
            {doctor?.availability}
          </div>
        );

      case "action":
        return (
          <div className="">
            <EditDoctor doctor={doctor} />
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <>
      <TableBody
        tableColumns={doctorsTableColumns}
        tableData={doctors}
        renderCell={renderCell}
      />
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
    </>
  );
}
