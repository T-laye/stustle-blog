// import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { postId } = req.body;

    try {
      // Fetch the current post document
      const post = await writeClient.getDocument(postId);

      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }

      // Increment the views field
      const updatedViews = (post.views || 0) + 1;

      // Update the views in the Sanity document
      await writeClient.patch(postId).set({ views: updatedViews }).commit();

      return res.status(200).json({ updatedViews });
    } catch (error) {
      console.error("Error updating views in Sanity:", error);
      return res.status(500).json({ message: "Error updating views" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
