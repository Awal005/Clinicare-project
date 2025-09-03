import { RiPhoneLine } from "@remixicon/react";
<<<<<<< HEAD
import React from "react";
import { formatDate, usersRoleColors } from "@/utils/constants";
import { useState} from "react";
import { useAuth } from "@/store";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

export default function UsersCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const { user } = useAuth();



  return (
    <div className="bg-white shadow rounded-xl p-2 ">
      <div className={` flex p-4 gap-3 items-start `}>
      <div className="avatar avatar-placeholder">
        <div className="w-10 rounded-full bg-gray-300 text-gray-600 border-2 border-gray-300">
          {item?.avatar ? (
            <img
              src={item?.avatar}
              alt={item?.fullname.split(" ")[0].charAt(0)}
              referrerPolicy="no-referrer"
              loading="lazy"
              priority="high"
            />
          ) : (
            <span className="text-sm">
              {item?.fullname
                ?.split(" ")
                .map((name) => name[0])
                .join("")
                .toUpperCase()}
            </span>
          )}
        </div>
      </div>
      <div>
        <h2 className="font-bold">{item?.fullname}</h2>
        <p className="text-sm text-gray-500">{item?.email}</p>
        <div
          className={`capitalize badge badge-sm font-semibold my-2 ${
            usersRoleColors[item.role]
          }`}
        >
          {item.role}
        </div>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          {" "}
          <RiPhoneLine size={17} /> {item?.phone}
        </p>
        <p className="text-sm text-gray-500"> Joined: {formatDate(item?.joined)}</p>
      </div>
=======
import Delete from "./Delete";
import { formatDate, usersRoleColors } from "@/utils/constants";
import { useAuth } from "@/store";
import Edit from "./Edit";

export default function UsersCard({ item }) {
  const { user } = useAuth();

  return (
    <div className="bg-white flex flex-col p-4 gap-3 justify-between shadow rounded-xl">
      <div className="flex gap-3 items-start">
        <div className="avatar avatar-placeholder">
          <div className="w-10 rounded-full bg-gray-300 text-gray-600 border-2 border-gray-300">
            {item?.avatar ? (
              <img
                src={item?.avatar}
                alt={item?.fullname.split(" ")[0].charAt(0)}
                referrerPolicy="no-referrer"
                loading="lazy"
                priority="high"
              />
            ) : (
              <span className="text-sm">
                {item?.fullname
                  ?.split(" ")
                  .map((name) => name[0])
                  .join("")
                  .toUpperCase()}
              </span>
            )}
          </div>
        </div>
        <div>
          <h2 className="font-bold">{item?.fullname}</h2>
          <p className="text-sm text-gray-500 truncate max-w-[150px]">{item?.email}</p>
          <div
            className={`capitalize badge badge-sm font-semibold my-2 ${
              usersRoleColors[item.role]
            }`}
          >
            {item.role}
          </div>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <RiPhoneLine size={17} /> {item?.phone}
          </p>
          <p className="text-sm text-gray-500">
            {" "}
            Joined: {formatDate(item?.createdAt)}
          </p>
        </div>
      </div>
      {user?.role === "admin" && (
        <div className="flex mt-5 mb-2 justify-end gap-2">
          <Edit item={item} />
          <Delete item={item} />
        </div>
      )}
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
    </div>
    {user?.role === "admin" && (
        <div className="flex gap-2 justify-end pt-3">
          {/* <button className="btn h-9" onClick={() => {
            setIsOpen(true);
            setUserId(item._id)
          }}>Edit</button> */}
          <UpdateUser/>
          {/* <button className="btn bg-red-500  text-white max-w-18 h-9" onClick={() => {
            setDeleteModalOpen(true);
            setUserId(item._id)
          }}>
            Delete
          </button> */}
          <DeleteUser/>
        </div>
      )}
    </div>
  );
}
