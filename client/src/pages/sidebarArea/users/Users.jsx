import { getAllUsers } from "@/api/auth";
import ErrorAlert from "@/components/errorAlert";
import { SkeletonCard } from "@/components/LazyLoader";
import PageWrapper from "@/components/PageWrapper";
import Paginate from "@/components/Paginate";
import Search from "@/components/Search";
import AddNewUser from "@/features/users/AddNewUser";
<<<<<<< HEAD
// import UsersCard from "@/features/users/UsersCard";
import ErrorAlert from "@/components/ErrorAlert";
import { getAllUsers } from "@/api/auth";
import { useAuth } from "@/store";
import { useQuery } from "@tanstack/react-query";
import Search from "@/components/Search";
import Filter from "@/features/users/Filter";
import { SkeletonCard } from "@/components/LazyLoader";
import { useSearchParams } from "react-router";
import usePaginate from "@/hooks/usePaginate";
import { RiFilterLine, RiSearchLine } from "@remixicon/react";
import { LazyLoader } from "@/components/LazyLoader";
import Paginate from "@/components/Paginate";

import {lazy, Suspense } from "react";
import UsersCard from "@/features/users/UsersCard";
const UserCard = lazy(() => import("@/features/users/UsersCard"));

export default function Users() {
const {accessToken} = useAuth();
const [SearchParams] = useSearchParams();
const page = Number(SearchParams.get("page")) || 1;
const limit = Number(SearchParams.get ("limit")) || 10;
const query = SearchParams.get("Query") || "";
const role = SearchParams.get("role") || "";
const {isPending, isError, data, error} = useQuery({
  queryKey: ["getAllUsers", page, limit, query, role],
  queryFn: () => getAllUsers(SearchParams, accessToken),
})

const {
=======
import Filter from "@/features/users/Filter";
import useMetaArgs from "@/hooks/useMeta";
// import UsersCard from "@/features/users/UsersCard";
import usePaginate from "@/hooks/usePaginate";
import { useAuth } from "@/store";
// import { dummyData } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import React, { lazy, Suspense } from "react";
import { useSearchParams } from "react-router";
const UsersCard = lazy(() => import("@/features/users/UsersCard"));

export default function Users() {
    useMetaArgs({
      title: "Users - Clinicare",
      description: "Clinicare account - Users",
      keywords: "Clinicare, manage-users, users",
    });

  const { accessToken } = useAuth();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const query = searchParams.get("query") || "";
  const role = searchParams.get("role") || "";
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["getAllUsers", page, limit, query, role],
    queryFn: () => getAllUsers(searchParams, accessToken),
  });

  const {
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
    handlePageChange,
    totalPages,
    hasMore,
    currentPage,
<<<<<<< HEAD
=======
    // limit: pageLimit,
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
  } = usePaginate({
    totalPages: data?.data?.data?.meta?.totalPages || 1,
    hasMore: data?.data?.data?.meta?.hasMore || false,
    currentPage: data?.data?.data?.meta?.currentPage || 1,
  });

<<<<<<< HEAD
const users = data?.data?.data?.users || [];

  if (isPending) {
    return <LazyLoader />;
  }
  
=======
  const users = data?.data?.data?.users || [];

>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
  return (
    <PageWrapper>
      <div className="flex justify-between items-center pb-2">
        <div className="">
          <h1 className="font-bold text-2xl">User Data</h1>
          <p className="text-gray-500 text-[14px] md:text-[16px]">
            Manage your list of users.
          </p>
        </div>
        <AddNewUser />
      </div>
<<<<<<< HEAD
      <div className="flex items-center md:justify-end mt-5">
        <div className="flex justify-end items-center">
          <Search id="search-users">
            <Filter />
          </Search>
        </div>
       
      </div>
       {isPending ? <SkeletonCard /> : <> 
        {isError ? <ErrorAlert error={error?.response?.data?.message} /> : 
        <>
        
      {users?.length > 0 ? ( 
      <>
      <Suspense fallback={<SkeletonCard />}>
        <div className="mt-5 grid gap-3 grid-cols-12">
          {users.map((item) => (
            <div
              key={item.id}
              className="col-span-12 md:col-span-4 lg:col-span-3"
            >
              <UsersCard item={item} />
            </div>
          ))}
        </div>
      </Suspense>
      <Paginate
      totalPages={totalPages}
      hasMore={hasMore}
      handlePageChange={handlePageChange}
      currentPage={currentPage}
      />
      
      </>
      ) : (
        <p className="mt-6 font-semibold text-center">No users found</p>
      )}
      </>}
      </>}
=======
      <div className="flex mb-5 justify-end items-center">
        <Search id="search-users">
          <Filter />
        </Search>
      </div>
      {isPending ? (
        <SkeletonCard />
      ) : (
        <>
          {isError ? (
            <ErrorAlert error={error?.response?.data?.message} />
          ) : (
            <>
              {users?.length > 0 ? (
                <>
                  <Suspense fallback={<SkeletonCard />}>
                    <div className="mt-5 grid gap-3 grid-cols-12">
                      {users.map((item) => (
                        <div
                          key={item.id}
                          className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
                        >
                          <UsersCard item={item} />
                        </div>
                      ))}
                    </div>
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
                <p className="mt-8 font-semibold text-center">No Users found</p>
              )}
            </>
          )}
        </>
      )}
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
    </PageWrapper>
  );
}
