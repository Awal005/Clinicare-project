import ErrorAlert from "@/components/ErrorAlert";
import Modal from "@/components/Modal";
import { validateSignUpSchema } from "@/utils/dataSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useAuth } from "@/store";
import { updateUserRole } from "@/api/auth";

export default function UpdateUser({ item }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
  } = useForm({ resolver: zodResolver(validateSignUpSchema) });

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [success, showSuccess] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false);
  const [msg, setMsg] = useState("");
  const { accessToken } = useAuth();
  const queryClient = useQueryClient();
  
  const fieldWatch = watch("role");
  useEffect(() => {
    if (fieldWatch === "doctor") {
    setShowDoctor(true);
  } else {
    setShowDoctor(false);
  }
  }, [fieldWatch]);

  const mutation = useMutation({
    mutationFn: updateUserRole,
    onSuccess: (response) => {
      if (response.success) {
        setMsg(response?.message);
        showSuccess(true);
      }
    },
    onError: (error) => {
      console.error(error);
      setError(error?.response?.data?.message || "Error updating user role");
    },
  });

  useEffect(() => {
    if (item) {
      setValue("fullname", item?.fullname);
      setValue("email", item?.email);
    }
  }, [item, setValue]);
  const role = ["admin", "staff", "doctor", "nurse"];
  const availability = ["available", "unavailable", "on leave", "sick"];
  const specialization = [
    "Cardiology",
    "Dermatology",
    "Gastroenterology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Psychiatry",
    "Urology",
  ];

  const onSubmit = (data) => {
    mutation.mutate
  };

  const handleClose = async () => {
    await queryClient.invalidateQueries({ queryKey: ["getAllUsers"] });
    setIsOpen(false);
  };

  return (
    <>
      <button 
      className="btn btn-outline w-[80px]"
      onClick={() => setIsOpen(true)}

        // disabled={item.roles === "patient"}
      >
        Edit
      </button>
      <Modal
        id="addUserModal"
        isOpen={isOpen}
        className="bg-white p-4 rounded-xl shadow w-[90%] max-w-[400px] mx-auto"
      >
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-2xl font-bold">Update User data</h1>
          <p className=""></p>
          <form
            className="grid gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            {error && <ErrorAlert error={error} />}
            
            <div className="col-span-12 md:col-span-6">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Role</legend>
                <select
                  name="role"
                  id=""
                  defaultValue={""}
                  className="select capitalize"
                  {...register("role")}
                  disabled={isSubmitting}
                >
                  <option value="">Select Role</option>
                  {role?.filter((role) => role !== 'patient')?.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>

            {showDoctor && (
          <>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">
                  Specialization
                </label>
                <select
                  defaultValue={""}
                  className="select capitalize w-full"
                  name="specialization"
                  {...register("specialization")}
                  id="specialization"
                >
                  <option value="">Select Role</option>
                  {specialization?.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {error.specialization?.message && (
                  <span className="text-xs text-red-500">
                    {error?.specialization?.message}
                  </span>
                )}
            </div>

            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">
                  Availability
                </label>
                <select
                  defaultValue={""}
                  className="select capitalize w-full"
                  name="availability"
                  {...register("availability")}
                  id="availability"
                >
                  <option value="">Select Role</option>
                  {availability?.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {error.availability?.message && (
                  <span className="text-xs text-red-500">
                    {error?.availability?.message}
                  </span>
                )}
            </div>
            </>
            )}

            <div className="mt-4 mb-2 flex md:ml-38 md:justify-right gap-3">
              <button
                type="button"
                className="btn btn-outline w-[150px] border-[0.2px] border-gray-500"
                onClick={() => setIsOpen(false)}

                
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn bg-blue-500 hover:bg-blue-600 text-white w-[150px]"
                disabled={isSubmitting}

                
                // onClick={onDelete}
              >
                {isSubmitting ? "Updating..." : "Update User"}
                {/* {mutation.isPending ? "Adding..." : "Add User"} */}
                {/* Add User */}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}