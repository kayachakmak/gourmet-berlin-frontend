import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { getCurrentDate } from "@/utils/utils";
import { useUser } from "../UserContext/UserContext.js";
import httpClient from "@/utils/httpClient.js";

export default function Comments({ comments }) {
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedComment, setEditedComment] = useState("");

  const router = useRouter();
  const { user } = useUser();

  async function handleDelete(ID) {
    const confirmDelete = window.confirm("Do you want to delete this comment?");

    if (confirmDelete) {
      try{
        const response = await httpClient.delete(`/comments`,{ data: { id: ID } })
        

      }catch(err){
        alert(err)
      }
    }
  }

  function handleEdit(comment) {
    setEditingCommentId(comment.id);
    setEditedComment(comment.comment);
  }

  async function handleSave(ID) {
    const editdate = getCurrentDate();

    try{
      const response =  await httpClient.put("/comments", { id: ID, comment:editedComment, editDate:editdate})
    if (response.ok) {
      setEditingCommentId(null);
    }}catch(err){
      alert(err)
    }
  }

  return (
    <ul className="list-none p-0">
      {comments.map((comment) => (
        <li
          key={comment.id}
          className="bg-purple-400 text-black rounded-lg my-4 overflow-hidden relative"
        >
          {editingCommentId === comment.id ? (
            <div className="p-4">
              <textarea
                className="w-full p-2 text-black"
                cols={50}
                rows={10}
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
              />
              <div className="flex justify-between mt-2 ">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleSave(comment.id)}
                >
                  Save
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setEditingCommentId(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-start space-x-4 p-4">
              <img
                className="w-12 h-12 rounded-full"
                src={comment?.userimage}
                alt={comment?.userimage}
              />
              <div className="flex-1 mt-2">
                <strong>@{comment.name}</strong> commented on {comment.date}
                <p className="italic">`{comment.comment}`</p>
                {comment.editDate && (
                  <small className="absolute bottom-0 right-2">
                    Edited on {comment.editDate}
                  </small>
                )}
                {comment.name === user?.name && (
                  <div className="absolute top-0 right-2 flex space-x-2">
                    <button
                      className="p-1"
                      onClick={() => {
                        handleEdit(comment);
                      }}
                    >
                      <Image
                        src="https://i.ibb.co/nbLJ2kQ/edit.png"
                        alt="Edit"
                        width={20}
                        height={20}
                      />
                    </button>
                    <button
                      className="p-1"
                      onClick={() => handleDelete(comment.id)}
                    >
                      <Image
                        src="https://i.ibb.co/F85nyhC/bin.png"
                        alt="Delete"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
