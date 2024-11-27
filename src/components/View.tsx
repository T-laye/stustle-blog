// import { client } from "@/sanity/lib/client";
// import { POST_QUERY_ID } from "@/sanity/lib/queries";
// import { writeClient } from "@/sanity/lib/write-client";
// import React from "react";

// const View = async ({ id }: { id: string }) => {
//   const { views: totalViews } = await client.fetch(POST_QUERY_ID, { id });

//   await writeClient
//     .patch(id)
//     .set({ views: totalViews + 1 })
//     .commit();

//   return <div>View</div>;
// };

// export default View;
