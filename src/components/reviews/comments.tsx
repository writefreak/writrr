import React from "react";
import { ProfileImg } from "../profileimg";
import CommentBox from "./commentBox";

const Comments = () => {
  return (
    <div className="font-lato sm:py-3">
      <h3 className="text-lg font-semibold">Comments Reside Here</h3>
      <div className="space-y-7 py-6">
        {data.map((d) => (
          <div key={d.id}>
            <div className="space-y-3 pb-4">
              <div className="flex gap-3">
                <ProfileImg />
                <div>
                  <p className="text-sm font-bold">{d.name}</p>
                  <p className="text-xs text-black/30 font-bold">
                    {d.commentedAt}
                  </p>
                  <p className="line-clamp-3 sm:line-clamp-none pt-3">
                    {d.comment}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CommentBox className="sm:hidden flex" />
    </div>
  );
};

export default Comments;

const data = [
  {
    id: 1,
    name: "Steven",
    commentedAt: "Commented 8hrs ago",
    comment:
      "Insightful and well-crafted! This blog beautifully captures the essence of the topic while delivering valuable takeaways. It's refreshing to read something so engaging and informative—definitely bookmarking for future reference!",
  },
  {
    id: 2,
    name: "Steven",
    commentedAt: "Commented 8hrs ago",
    comment:
      "Insightful and well-crafted! This blog beautifully captures the essence of the topic while delivering valuable takeaways. It's refreshing to read something so engaging and informative—definitely bookmarking for future reference!",
  },
  {
    id: 3,
    name: "Steven",
    commentedAt: "Commented 8hrs ago",
    comment:
      "Insightful and well-crafted! This blog beautifully captures the essence of the topic while delivering valuable takeaways. It's refreshing to read something so engaging and informative—definitely bookmarking for future reference!",
  },
  {
    id: 4,
    name: "Steven",
    commentedAt: "Commented 8hrs ago",
    comment:
      "Insightful and well-crafted! This blog beautifully captures the essence of the topic while delivering valuable takeaways. It's refreshing to read something so engaging and informative—definitely bookmarking for future reference!",
  },

  {
    id: 5,
    name: "Steven",
    commentedAt: "Commented 8hrs ago",
    comment:
      "Insightful and well-crafted! This blog beautifully captures the essence of the topic while delivering valuable takeaways. It's refreshing to read something so engaging and informative—definitely bookmarking for future reference!",
  },
];
