import React, { useEffect } from "react";
import Logo from "./Logo";
<<<<<<< HEAD
import { sidebarLinks, roleBasedPathPermissions } from "@/utils/constants";
=======
import { roleBasedPathPermissions, sidebarLinks } from "@/utils/constants";
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
import { NavLink, useLocation, useNavigate } from "react-router";
import Logout from "./Logout";

export default function Sidebar({ user }) {
<<<<<<< HEAD
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const roles = ["patient", "doctor", "admin", "nurse", "staff"];
  // match user role based of our roles array using the find method
=======
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const roles = ["patient", "doctor", "admin", "nurse", "staff"];
  //match user role based of our roles array using the find method
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
  const userRole = roles.find((role) => role === user?.role);
  const isAuthorized =
    (userRole === "admin" && roleBasedPathPermissions.admin.allowedSubpaths) ||
    (userRole === "doctor" &&
      roleBasedPathPermissions.doctor.allowedSubpaths) ||
    (userRole === "patient" &&
      roleBasedPathPermissions.patient.allowedSubpaths) ||
    (userRole === "nurse" && roleBasedPathPermissions.nurse.allowedSubpaths) ||
    (userRole === "staff" && roleBasedPathPermissions.staff.allowedSubpaths);

<<<<<<< HEAD
    useEffect(() => {
=======
  useEffect(() => {
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
    const allowedPaths =
      roleBasedPathPermissions[userRole]?.allowedSubpaths || [];
    const isPathAllowed = allowedPaths.includes(path);
    if (!isAuthorized || !isPathAllowed) {
      navigate("/dashboard");
    }
  }, [isAuthorized, navigate, path, userRole]);
<<<<<<< HEAD

=======
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
  return (
    <div className="hidden lg:block min-h-[100vh] fixed z-50 w-[200px]">
      <Logo classname="pt-3" />
      <div className="overflow-y-auto h-[calc(100vh-150px)] space-y-2">
        {sidebarLinks.map((section) => (
          <div key={section.title}>
<<<<<<< HEAD
            <p className="text-xs font-semi-bold text-gray-500 my-4">
=======
            <p className="text-sm font-semi-bold text-gray-500 my-4">
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
              {section.title === "Management" && userRole === "patient"
                ? ""
                : section.title}
            </p>
            <div className="">
              {section.links
                .filter((subPaths) => {
                  if (
                    roleBasedPathPermissions[userRole] &&
                    isAuthorized.includes(subPaths.to)
                  ) {
                    return true;
                  }
                  return false;
                })
                .map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.to}
                    className={({ isActive }) =>
<<<<<<< HEAD
                      `hover:text-blue-600 text-gray-700 ${
                        isActive || path.split("/")[2] === link.to
                          ? "text-white-500 font-bold bg-blue-500 text-white rounded-full"
                          : ""
                      } p-1.5 flex items-center gap-2 text-sm`
=======
                      `${
                        isActive || path.split("/")[2] === link.to.split("/")[2]
                          ? "text-blue-500 font-bold bg-blue-100  rounded-full"
                          : ""
                      } p-1.5 flex items-center gap-2 hover:text-blue-500 transition-all duration-300`
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
                    }
                    viewTransition
                    end
                  >
                    <link.icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </NavLink>
                ))}
            </div>
          </div>
        ))}
      </div>
      <Logout />
    </div>
  );
}
