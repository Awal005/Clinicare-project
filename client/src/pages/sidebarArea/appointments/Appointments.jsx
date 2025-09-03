<<<<<<< HEAD
import PageWrapper from "@/components/PageWrapper";
import { useAuth } from "@/store";
import React, {Suspense} from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getAllAppointments } from "@/api/appointment";
import usePaginate from "@/hooks/usePaginate";
import Paginate from "@/components/Paginate";
import { SkeletonTable } from "@/components/LazyLoader";
import Table from "@/features/appointments/patients/Table";
import Search from "@/components/Search";
import ErrorAlert from "@/components/ErrorAlert";
import BookAppointment from "@/features/appointments/patients/BookAppointment";
import AppointmentFilter from "@/features/appointments/patients/AppointmentFilter";


export default function Appointments() {
=======
import { getAllAppointments } from "@/api/appointment";
import ErrorAlert from "@/components/errorAlert";
import { SkeletonTable } from "@/components/LazyLoader";
import PageWrapper from "@/components/PageWrapper";
import Paginate from "@/components/Paginate";
import Search from "@/components/Search";
import Table from "@/features/appointments/admin/Table";
import Filter from "@/features/appointments/patients/Filter";
import useMetaArgs from "@/hooks/useMeta";
import usePaginate from "@/hooks/usePaginate";
import { useAuth } from "@/store";
import { useQuery } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { useSearchParams } from "react-router";

export default function Appointments() {
    useMetaArgs({
      title: "Appointments - Clinicare",
      description: "Clinicare account - Appointments",
      keywords: "Clinicare, Admin, Manage-Appointments, Appointments",
    });

>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
  const { accessToken } = useAuth();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const query = searchParams.get("query") || "";
<<<<<<< HEAD
  const time = searchParams.get("time") || "";
  const status = searchParams.get("status") || "";
  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";
  const params = new URLSearchParams();
  params.append("page", page);
  params.append("limit", limit);
  if (query) params.append("query", query);
  if (time) params.append("time", time);
  if (status) params.append("status", status);
  if (startDate) params.append("startDate", startDate);
  if (endDate) params.append("endDate", endDate);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["getAllAppointments", {accessToken, query, time, status, startDate, endDate} ],
    queryFn: () => getAllAppointments(params, accessToken),
  })

  const { handlePageChange, totalPages, hasMore, currentPage } = usePaginate({
      totalPages: data?.data?.data?.meta?.totalPages || 1,
      hasMore: data?.data?.data?.meta?.hasMore || false,
      currentPage: data?.data?.data?.meta?.currentPage || 1,
    });
    const appointments = data?.data?.data?.appointments || [];
  
    console.log(data);

  return (
    <PageWrapper>
      <div className="flex items-center justify-between">
        <div className="lg:mt-5 lg:ml-2">
          <h1 className="font-bold">Appointments</h1>
          <p className="text-gray-500">Manage your appointment here.</p>
        </div>
        <BookAppointment/>
      </div>

      <div className="">
              <div className="flex justify-end items-center">
                <Search id="search-appointments">
                  <AppointmentFilter/>
                </Search>
              </div>
              {isPending ? (
                        <SkeletonTable />
                      ) : (
      
              <>
                         {isError ? (
                           <ErrorAlert error={error?.response?.data?.message} />
                         ) : (
                           <>
                             {appointments?.length > 0 ? (
                               <>
                                 <Suspense fallback={<SkeletonTable />}>
                                   <Table appointments={appointments} />
                                 </Suspense>
                                 <Paginate
                                   totalPages={totalPages}
                                   hasMore={hasMore}
                                   handlePageChange={handlePageChange}
                                   currentPage={currentPage}
                                 />
                               </>
                             ) : (
                               <p className="mt-6 font-semibold text-center">
                                 No Appointments Found
                               </p>
                             )}
                           </>
                         )}
                       </>
                 )}
            </div>
=======
  const status = searchParams.get("status") || "";
  const time = searchParams.get("time") || "";
  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";
  const { isPending, isError, data, error } = useQuery({
    queryKey: [
      "getAllApointments",
      page,
      limit,
      query,
      status,
      time,
      startDate,
      endDate,
    ],
    queryFn: () => getAllAppointments(searchParams, accessToken),
  });

  const appointment = data?.data?.data?.appointments || [];
  console.log("apps:", appointment);
  const {
    handlePageChange,
    totalPages,
    hasMore,
    currentPage,
    // limit: pageLimit,
  } = usePaginate({
    totalPages: data?.data?.data?.meta?.totalPages || 1,
    hasMore: data?.data?.data?.meta?.hasMore || false,
    currentPage: data?.data?.data?.meta?.currentPage || 1,
  });

  return (
    <PageWrapper>
      <div className="pb-2">
        <h1 className="font-bold text-2xl">Appointments</h1>
        <p className="text-gray-500 text-[14px] md:text-[16px]">
          Manage patients appointments.
        </p>
      </div>
      <div className="flex mb-5 justify-end items-center">
        <Search id="search-appointments">
          <Filter />
        </Search>
      </div>
      {isPending ? (
        <SkeletonTable />
      ) : (
        <>
          {isError ? (
            <ErrorAlert error={error?.response?.data?.message} />
          ) : (
            <>
              {appointment?.length > 0 ? (
                <>
                  <Suspense fallback={<SkeletonTable />}>
                    <Table appointment={appointment} />
                  </Suspense>
                  <Paginate
                    totalPages={totalPages}
                    hasMore={hasMore}
                    handlePageChange={handlePageChange}
                    currentPage={currentPage}
                  />
                </>
              ) : (
                <p className="mt-6  font-semibold text-center">
                  No appointments found
                </p>
              )}
            </>
          )}
        </>
      )}
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
    </PageWrapper>
  );
}
