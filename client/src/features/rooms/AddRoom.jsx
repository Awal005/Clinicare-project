<<<<<<< HEAD
import {  useMutation } from "@tanstack/react-query";
import { useAuth } from "@/store"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validateRoomSchema } from "@/utils/dataSchema";
import Modal from "@/components/Modal";
import { RiCloseLine } from "@remixicon/react";
import ErrorAlert from "@/components/ErrorAlert";
import { createRoom } from "@/api/room";

export default function AddRoom() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [msg, setMsg] = useState(null);
  const [err, setErr] = useState(null);
=======
import { createRoom } from "@/api/room";
import ErrorAlert from "@/components/errorAlert";
import Modal from "@/components/Modal";
import { useAuth } from "@/store";
import { validateRoomSchema } from "@/utils/dataSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddRoom() {
  const [isOpen, setIsOpen] = useState(false);
  const [err, setError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [msg, setMsg] = useState(null);
  const queryClient = useQueryClient();
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
  const { accessToken } = useAuth();

  const {
    register,
    handleSubmit,
<<<<<<< HEAD
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(validateRoomSchema),
  });

  const mutation = useMutation({
      mutationFn: createRoom,
      onSuccess: (response) => {
        if (response.status === 201) {
          setMsg(response?.data?.message);
          setShowSuccess(true);
        }
      },
      onError: (error) => {
        console.error(error);
        setErr(error?.response?.data?.message || "Error updating user role");
      },
    });

  // const { isPending, isError, data, error } = useQuery({
  //     queryKey: ["getRoomMeta", accessToken],
  //     queryFn: () => getRoomMeta( accessToken),
  //   });

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const resetModal = async () => {
    setIsOpen(false);
    setShowSuccess(false);
  };

 
=======
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(validateRoomSchema) });
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424

  const roomType = ["Regular", "VIP", "ICU", "Deluxe", "Suite"];
  const roomStatus = ["available", "occupied", "maintenance"];

<<<<<<< HEAD
=======
  const mutation = useMutation({
    mutationFn: createRoom,
    onSuccess: async (response) => {
      if (response.status === 201) {
        setMsg(response?.data?.message);
        setShowSuccess(true);
      }
    },
    onError: (error) => {
      import.meta.env.DEV && console.log(error);
      setError(error?.response?.data?.message || "Error creating room");
    },
  });

  const resetModal = async () => {
    await queryClient.invalidateQueries({ queryKey: ["getAllRooms"] });
    setIsOpen(false);
    setShowSuccess(false);
    setError(null);
    reset();
  };

>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
  const onSubmit = async (formData) => {
    mutation.mutate({ formData, accessToken });
  };

  return (
    <>
      <button
<<<<<<< HEAD
        className="btn btn-outline w-[140px] bg-blue-500 hover:bg-blue-600  text-white border border-gray-300"
        onClick={() => setIsOpen(true)}
      >
        Add Rooms
      </button>

      <Modal
        id="Add Rooms"
        isOpen={isOpen}
        classname="bg-white p-4 rounded-xl shadow  w-[90%] md:w-[100%]  mx-auto"
      >
        <h1 className="text-2xl font-bold  text-start mb-4 ">Add New Room </h1>
        
=======
        className="btn bg-blue-500 hover:bg-blue-600 text-white w-35 rounded-md cursor-pointer border border-gray-300"
        onClick={() => setIsOpen(true)}
      >
        Add Room
      </button>
      <Modal
        id="addUserModal"
        isOpen={isOpen}
        className="bg-white p-4 rounded-xl shadow w-[90%] max-w-[400px] mx-auto"
      >
        {err && <ErrorAlert error={err} />}
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
        {showSuccess ? (
          <>
            <div className="p-4 text-center">
              <img
                src="/Success.svg"
                alt="success"
                className="w-full h-[200px]"
              />
              <h1 className="text-2xl font-bold">Congratulations!</h1>
              <p className="text-gray-600">{msg}</p>
              <button
                className="btn my-4 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
                size="lg"
                onClick={resetModal}
              >
                Continue to Rooms
              </button>
            </div>
          </>
        ) : (
<<<<<<< HEAD
       

        <>
          <div className="flex flex-col  gap-2 w-full">
            <form
              className="space-y-6   "
              onSubmit={handleSubmit(onSubmit)}
            >
              {err && <ErrorAlert error={err} />}
              <div className="grid grid-cols-12 gap-4  ">
                <div className=" col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Room Number
                  </label>
                  <input
                    type="text"
                    placeholder="Room Number (1-20) "
                    {...register("roomNumber")}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 "
                  />

                  {errors?.roomNumber?.message && (
                    <span className="text-xs text-red-500">
                      {errors?.roomNumber?.message}
                    </span>
                  )}
                </div>

                <div className=" col-span-12 md:col-span-6   ">
                  <label className="block text-sm font-medium text-gray-700">
                    Room Type
                  </label>
                  <select
                    defaultValue={"Room Type"}
                    className="select capitalize w-full mt-1 "
                    name="roomType"
                    {...register("roomType")}
                    disabled={isSubmitting}
                    id=" roomType"
                  >
                    <option value="">Room Type</option>
                    {roomType?.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.roomType?.message && (
                    <span className="text-xs text-red-500">
                      {errors?.roomType?.message}
                    </span>
                  )}
                </div>

                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Room Price
                  </label>
                  <input
                    type="text"
                    placeholder="Room Price"
                    {...register("roomPrice")}
                    id="roomPrice"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 "
                  />
                  {errors?.roomPrice?.message && (
                    <span className="text-xs text-red-500">
                      {errors?.roomPrice?.message}
                    </span>
                  )}
                </div>
                <div className=" col-span-12 md:col-span-6   ">
                  <label className="block text-sm font-medium text-gray-700">
                   Room Status
                  </label>
                  <select
                    defaultValue={"Room Status"}
                    className="select capitalize w-full mt-1 "
                    name="roomStatus"
                    {...register("roomStatus")}
                    disabled={isSubmitting}
                    id="roomStatus"
                  >
                    <option value="">Room Status</option>
                    {roomStatus?.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.roomStatus?.message && (
                    <span className="text-xs text-red-500">
                      {errors?.roomStatus?.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12 ">
                  <label className="block text-sm font-medium text-gray-700">
                   Room Description
                  </label>
                  <input
                    type="text"
                    placeholder="Room Description"
                    {...register("roomDescription")}
                    id="roomDescription"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 "
                  />
                  {errors?.roomDescription?.message && (
                    <span className="text-xs text-red-500">
                      {errors?.roomDescription?.message}
=======
          <>
            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-2xl font-bold">Add New Room</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-12 gap-4 mt-4">
                <div className="col-span-12 md:col-span-6">
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Room Number</legend>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Room Number (1-20)"
                      {...register("roomNumber")}
                    />
                  </fieldset>
                  {errors.roomNumber?.message && (
                    <span className="text-xs text-red-500">
                      {errors.roomNumber?.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6">
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Room Type</legend>
                    <select
                      name="roomType"
                      id=""
                      defaultValue={""}
                      className="select capitalize w-full"
                      {...register("roomType")}
                      disabled={isSubmitting}
                    >
                      <option value="">Select Room Type</option>
                      {roomType?.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </fieldset>
                  {errors.roomType?.message && (
                    <span className="text-xs text-red-500">
                      {errors.roomType?.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6">
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Room Price</legend>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Room Price"
                      {...register("roomPrice")}
                    />
                  </fieldset>
                  {errors.roomPrice?.message && (
                    <span className="text-xs text-red-500">
                      {errors.roomPrice?.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6">
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Room Status</legend>
                    <select
                      name="roomStatus"
                      id=""
                      defaultValue={""}
                      className="select capitalize w-full"
                      {...register("roomStatus")}
                      disabled={isSubmitting}
                    >
                      <option value="">Select Room Status</option>
                      {roomStatus?.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </fieldset>
                  {errors.roomStatus?.message && (
                    <span className="text-xs text-red-500">
                      {errors.roomStatus?.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12">
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">
                      Room Description
                    </legend>
                    <input
                      type="text"
                      className="input w-full md:w-auto"
                      placeholder="Room Description"
                      {...register("roomDescription")}
                    />
                  </fieldset>
                  {errors.roomDescription?.message && (
                    <span className="text-xs text-red-500">
                      {errors.roomDescription?.message}
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
                    </span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6">
<<<<<<< HEAD
                  <label className="block text-sm font-medium text-gray-700">
                   Room Capacity
                  </label>
                  <input
                    type="text"
                    placeholder="Room Capacity (1-5)"
                    {...register("roomCapacity")}
                    id="roomCapacity"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 "
                  />
                  {errors?.roomCapacity?.message && (
                    <span className="text-xs text-red-500">
                      {errors?.roomCapacity?.message}
=======
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Room Capacity</legend>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Room Capacity (1-5)"
                      {...register("roomCapacity")}
                    />
                  </fieldset>
                  {errors.roomCapacity?.message && (
                    <span className="text-xs text-red-500">
                      {errors.roomCapacity?.message}
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
                    </span>
                  )}
                </div>
              </div>
<<<<<<< HEAD
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4 "
                type="button"
                onClick={toggleDrawer}
              >
                <RiCloseLine size={24} />
              </button>
              <div className=" flex justify-end gap-4  ">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-4 py-2 border border-gray-300 hover:bg-gray-300 rounded-lg"
=======
              <div className="mt-4 mb-2 flex md:justify-end gap-3">
                <button
                  type="button"
                  className="btn btn-outline w-[150px] border-[0.2px] border-gray-500"
                  onClick={() => setIsOpen(false)}
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
                >
                  Cancel
                </button>
                <button
                  type="submit"
<<<<<<< HEAD
                  className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white hover:text-white font-bold   rounded-md"
                  disabled= {mutation.isPending || isSubmitting}
                  // disabled={isSubmitting}
                >
             {mutation.isPending ? "Adding..." : "  Add Rooms"}
                </button>
                  
              </div>
            </form>
          </div>
        </>
=======
                  className="btn bg-blue-500 hover:bg-blue-600 text-white w-[150px]"
                  disabled={mutation.isPending || isSubmitting}
                >
                  {mutation.isPending || isSubmitting
                    ? "Adding..."
                    : "Add Room"}
                </button>
              </div>
            </form>
          </>
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
        )}
      </Modal>
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
