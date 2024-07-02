// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import PageHeader from "@/components/PageHeader";
import Image from "next/image";

const GetStarted = () => {
  return (
    <main className="flex flex-col">
      <PageHeader pathName="/get-started" />
      <div className="h-[68px] lg:h-[200px]"></div>
    </main>
  );
}

export default GetStarted