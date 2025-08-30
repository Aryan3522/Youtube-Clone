import { CategoryTabSearch } from "@/components/Category-tabs-search";
import SearchResult from "@/components/SearchResult";
import { useRouter } from "next/router";
import React, { Suspense } from "react";

const index = () => {
  const router = useRouter();
  const { q } = router.query;
  return (
    <div className="flex justify-center w-full">
      <div className="flex fixed top-14 h-16 w-full z-1">
        <CategoryTabSearch/>
      </div>
      <div className="w-full sm:ml-0 md:ml-60 pt-16 px-4 sm:px-6 lg:px-8">
        {/* {q && (
          <div className="flex justify-center">
            <h1 className="text-medium font-sm text-center">
              Search Results for "{q}"
            </h1>
          </div>
        )} */}
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <SearchResult query={q || ""} />
        </Suspense>
      </div>
    </div>
  );
};

export default index;