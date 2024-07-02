// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import PageHeader from "@/components/PageHeader";

const NotExist = () => {
  return (
    <main className="flex flex-col">
      <PageHeader pathName="/not-exist" />
      <div className="h-[68px] lg:h-[200px]"></div>
    </main>
  );
}

export default NotExist