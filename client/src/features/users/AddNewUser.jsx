<<<<<<< HEAD
import Modal from "@/components/Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
=======
import { createUserAdmins } from "@/api/auth";
import ErrorAlert from "@/components/errorAlert";
import Modal from "@/components/Modal";
import { useAuth } from "@/store";
import { validateSignUpSchema } from "@/utils/dataSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
import { useForm } from "react-hook-form";
import { validateSignUpSchema } from "@/utils/dataSchema";
import { RiCloseLine } from "@remixicon/react";
import ErrorAlert from "@/components/ErrorAlert";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserAdmins } from "@/api/auth";
import { useAuth } from "@/store";

export default function AddUser() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setShowSuccess] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false);
  const [msg, setMsg] = useState("");
  const { accessToken } = useAuth();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    watch,
<<<<<<< HEAD
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validateSignUpSchema),
  });

  const roles = ["admin", "staff", "doctor", "nurse", "patient"];
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

  const fieldWatch = watch("role");
  useEffect(() => {
    if (fieldWatch === "doctor") {
    setShowDoctor(true);
  } else {
    setShowDoctor(false);
  }
  }, [fieldWatch]);
=======
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(validateSignUpSchema) });

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [showDoctor, setShowDoctor] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [msg, setMsg] = useState(null);
  const queryClient = useQueryClient();
  const { accessToken } = useAuth();
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const mutation = useMutation({
    mutationFn: createUserAdmins,
    onSuccess: (response) => {
      if (response.status === 201) {
        setMsg(response?.data?.message);
        setShowSuccess(true);
      }
    },
    onError: (error) => {
      console.error(error);
      setError(error?.response?.data?.message || "Error updating user role");
    },
  });

  const resetModal = async () => {
    await queryClient.invalidateQueries({ queryKey: ["getAllUsers"] });
    setIsOpen(false);
    setShowSuccess(false);
  };

  const handleClose = () => {
    resetModal();
  };

<<<<<<< HEAD
  const onSubmit = (data) => {
    if (
      (data.role === "doctor" && !data.specialization) ||
      (data.role === "doctor" && !data.availability)
    ) {
      setError("Please select doctor's specialization and availability");
      return;
    }
    mutation.mutate({ userData: data, accessToken });
=======
  const mutation = useMutation({
    mutationFn: createUserAdmins,
    onSuccess: (response) => {
      if (response.status === 201) {
        setMsg(response?.data?.message);
        setShowSuccess(true);
      }
    },
    onError: (error) => {
      console.error(error);
      setError(error?.response?.data?.message || "Error updating user role");
    },
  });

  const role = ["admin", "staff", "doctor", "nurse", "patient"];
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

  const fieldWatch = watch("role");
  useEffect(() => {
    if (fieldWatch === "doctor") {
      setShowDoctor(true);
    } else {
      setShowDoctor(false);
    }
  }, [fieldWatch]);

  const resetModal = async () => {
    await queryClient.invalidateQueries({ queryKey: ["getAllUsers"] });
    setIsOpen(false);
    setShowSuccess(false);
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
  };

  const onSubmit = (data) => {
    if (
      (data.role === "doctor" && !data.availability) ||
      (data.role === "doctor" && !data.specialization)
    ) {
      setError("Please select Doctor's specialization and availability");
      return;
    }
    mutation.mutate({ userData: data, accessToken });
  };
  return (
    <>
      <button
        className="btn btn-outline w-[140px] border border-gray-300 bg-blue-500 text-white"
        onClick={() => setIsOpen(true)}
      >
        Add User
      </button>

      <Modal
        id="Add user"
        isOpen={isOpen}
        classname="bg-white p-4 rounded-xl shadow  w-[90%] md:w-[100%]  mx-auto"
      >
<<<<<<< HEAD
        <h1 className="text-2xl font-bold  text-start mb-4 ">Create User </h1>
        {error && <ErrorAlert error={error} />}
        {success ? (
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
                onClick={handleClose}
              >
                Continue to Users
              </button>
            </div>
          </>
          
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {error && <ErrorAlert error={error} />}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder=" Full name "
                  {...register("fullname")}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
                {errors?.fullname?.message && (
                  <span className="text-xs text-red-500">
                    {errors?.fullname?.message}
                  </span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  id="email"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
                {errors?.email?.message && (
                  <span className="text-xs text-red-500">
                    {errors?.email?.message}
                  </span>
                )}
              </div>
              <div className="relative col-span-12 md:col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input w-full"
                  placeholder="Password"
                  {...register("password")}
                  id="password"
                />
                <button
                  type="button"
                  className="absolute top-1/2 lg:top-1/2 right-3 font-semibold"
                  onClick={togglePassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="col-span-12 md:col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <select
                  defaultValue={""}
                  className="select capitalize w-full"
                  name="role"
                  {...register("role")}
                  id="role"
                >
                  <option value="" disabled={true}>Select Role</option>
                      {roles?.filter((role) => role !== "patient").map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                  ))}
                </select>
                {errors.role?.message && (
                  <span className="text-xs text-red-500">
                    {errors?.role?.message}
                  </span>
                )}
              </div>
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
                {errors.specialization?.message && (
                  <span className="text-xs text-red-500">
                    {errors?.specialization?.message}
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
                {errors.availability?.message && (
                  <span className="text-xs text-red-500">
                    {errors?.availability?.message}
                  </span>
                )}
            </div>
            </>
            )}

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Creating..." : "Create user"}
              </button>
            </div>

          </form>
        )}
        
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4"
          type="button"
          onClick={toggleDrawer}
        >
          <RiCloseLine size={24} />
        </button>

=======
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-2xl font-bold">Create User</h1>
          <p className=""></p>
          {error && <ErrorAlert error={error} />}
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
                  Continue to Users
                </button>
              </div>
            </>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12 md:col-span-6">
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Full name</legend>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Full name"
                      {...register("fullname")}
                    />
                  </fieldset>
                  {errors.fullname?.message && (
                    <span className="text-xs text-red-500">
                      {errors.fullname?.message}
                    </span>
                  )}
                </div>

                <div className="col-span-12 md:col-span-6">
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input
                      type="email"
                      className="input w-full"
                      placeholder="Email"
                      {...register("email")}
                    />
                  </fieldset>
                  {errors.email?.message && (
                    <span className="text-xs text-red-500">
                      {errors.email?.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6">
                  <fieldset className="fieldset relative">
                    <legend className="fieldset-legend">Password</legend>
                    <input
                      type={isVisible ? "text" : "password"}
                      className="input w-full"
                      placeholder="Password"
                      {...register("password")}
                    />
                    <button
                      type="button"
                      className="absolute font-semibold cursor-pointer top-3 right-3 "
                      onClick={togglePassword}
                    >
                      {isVisible ? "Hide" : "Show"}
                    </button>
                  </fieldset>
                  {errors.password?.message && (
                    <span className="text-xs text-red-500">
                      {errors.password?.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6">
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Role</legend>
                    <select
                      name="role"
                      id=""
                      defaultValue={""}
                      className="select capitalize w-full"
                      {...register("role")}
                      disabled={isSubmitting}
                    >
                      <option value="">Select Role</option>
                      {role
                        ?.filter((role) => role !== "patient")
                        .map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                    </select>
                  </fieldset>
                  {errors.role?.message && (
                    <span className="text-xs text-red-500">
                      {errors.role?.message}
                    </span>
                  )}
                </div>
                {showDoctor && (
                  <>
                    <div className="col-span-12 md:col-span-6">
                      <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                          Specialization
                        </legend>
                        <select
                          name="specialization"
                          id=""
                          defaultValue={""}
                          className="select capitalize w-full"
                          {...register("specialization")}
                          disabled={isSubmitting}
                        >
                          <option value="">Select Specialization</option>
                          {specialization?.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </fieldset>
                      {errors.specialization?.message && (
                        <span className="text-xs text-red-500">
                          {errors.specialization?.message}
                        </span>
                      )}
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                          Availability
                        </legend>
                        <select
                          name="availability"
                          id=""
                          defaultValue={""}
                          className="select capitalize w-full"
                          {...register("availability")}
                          disabled={isSubmitting}
                        >
                          <option value="">Select Availability</option>
                          {availability?.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </fieldset>
                      {errors.availability?.message && (
                        <span className="text-xs text-red-500">
                          {errors.availability?.message}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
              <div className="mt-4 mb-2 flex md:justify-end gap-3">
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
                  disabled={mutation.isPending || isSubmitting}
                >
                  {mutation.isPending || isSubmitting
                    ? "Adding..."
                    : "Add User"}
                </button>
              </div>
            </form>
          )}
        </div>
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
      </Modal>
    </>
  );
}