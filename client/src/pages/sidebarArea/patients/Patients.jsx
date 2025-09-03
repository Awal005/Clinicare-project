import { getAllPatients } from "@/api/patients";
<<<<<<< HEAD
import ErrorAlert from "@/components/ErrorAlert";
=======
import ErrorAlert from "@/components/errorAlert";
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
import { SkeletonTable } from "@/components/LazyLoader";
import PageWrapper from "@/components/PageWrapper";
import Paginate from "@/components/Paginate";
import Search from "@/components/Search";
<<<<<<< HEAD
import { useAuth } from "@/store";
import usePaginate from "@/hooks/usePaginate";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { lazy, Suspense } from "react";
import PatientFilter from "@/features/patients/PatientFilter";
const Table = lazy(() => import("@/features/patients/Table"))


export default function Patients() {
  const { accessToken } = useAuth();
  const [SearchParams] = useSearchParams();
  const page = Number(SearchParams.get("page")) || 1;
  const limit = Number(SearchParams.get("limit")) || 10;
  const query = SearchParams.get("query") || "";
  const gender = SearchParams.get("gender") || "";
  const bloodGroup = SearchParams.get("bloodGroup") || "";
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["getAllUsers", page, limit, query, gender, bloodGroup],
    queryFn: () => getAllPatients(SearchParams, accessToken),
  });

  const { handlePageChange, totalPages, hasMore, currentPage } = usePaginate({
=======
import Filter from "@/features/patients/Filter";
import useMetaArgs from "@/hooks/useMeta";
import usePaginate from "@/hooks/usePaginate";
import { useAuth } from "@/store";
import { useQuery } from "@tanstack/react-query";
import React, { lazy, Suspense } from "react";
import { useSearchParams } from "react-router";

const Table = lazy(() => import("@/features/patients/Table"));

export default function Patients() {
    useMetaArgs({
      title: "Patients - Clinicare",
      description: "Clinicare account - Patients",
      keywords: "Clinicare, Users, patients",
    });

  const { accessToken } = useAuth();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const query = searchParams.get("query") || "";
  const gender = searchParams.get("gender") || "";
  const bloodGroup = searchParams.get("bloodGroup") || "";
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["getAllPatients", page, limit, query, gender, bloodGroup],
    queryFn: () => getAllPatients(searchParams, accessToken),
  });

  const patients = data?.data?.data?.patients || [];


  const {
    handlePageChange,
    totalPages,
    hasMore,
    currentPage,
    // limit: pageLimit,
  } = usePaginate({
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
    totalPages: data?.data?.data?.meta?.totalPages || 1,
    hasMore: data?.data?.data?.meta?.hasMore || false,
    currentPage: data?.data?.data?.meta?.currentPage || 1,
  });
<<<<<<< HEAD

  const patients = data?.data?.data?.patients || [];
  console.log(data);
  
  return (
    <>
      <PageWrapper>
        <div className="pb-5">
          <h1 className="font-bold text-2xl">Patients</h1>
          <p className="text-gray-500">Manage your patients</p>
        </div>
        <div className="flex justify-end items-center md:justify-end gap-2">
          <Search id="search-users">
            <PatientFilter/>
          </Search>
        </div>
         {isError ? <ErrorAlert error={error?.response?.data?.message} /> : 
         <>
        
        {isPending ? <SkeletonTable /> : 
        <> 
        
        {patients?.length > 0 ? (
          <>
           <Suspense fallback={<SkeletonTable/>} >
           <Table patients={patients}/>
           </Suspense>
            <Paginate
              totalPages={totalPages}
              hasMore={hasMore}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
            />
          </>
        ) : (
          <p className="mt-6 font-semibold text-center">No patients found</p>
        )}
        </>}
        </>}
      </PageWrapper>
    </>
  );
}
=======
  return (
    <PageWrapper>
      <div className="pb-2">
        <h1 className="font-bold text-2xl">Patients</h1>
        <p className="text-gray-500 text-[14px] md:text-[16px]">
          Manage your patients
        </p>
      </div>
      <div className="flex mb-5 justify-end items-center">
        <Search id="search-patients">
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
              {patients?.length > 0 ? (
                <>
                  <Suspense fallback={<SkeletonTable />}>
                    <Table patients={patients} />
                  </Suspense>
                  <Paginate
                    totalPages={totalPages}
                    hasMore={hasMore}
                    handlePageChange={handlePageChange}
                    currentPage={currentPage}
                    // limit={pageLimit}
                  />
                </>
              ) : (
                <p className="mt-6  font-semibold text-center">
                  No patients found
                </p>
              )}
            </>
          )}
        </>
      )}
    </PageWrapper>
  );
}
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
