import { RiErrorWarningLine } from "@remixicon/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function ErrorAlert({ error }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (error === "jwt expired") {
      navigate(0);
    }
  }, [error, navigate]);
<<<<<<< HEAD

  return (
    <>
    {error !== "jwt expired" && (
      <div role="alert" className="alert bg-red-400 text-white">
        <RiErrorWarningLine className="text-white" />
        <span className="text-sm">Error! {error}</span>
      </div>
=======
  return (
    <>
      {error !== "jwt expired" && (
        <div role="alert" className="alert bg-red-400 text-white">
          <RiErrorWarningLine className="text-white" />
          <span className="text-sm">Error! {error}</span>
        </div>
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
      )}
    </>
  );
}
