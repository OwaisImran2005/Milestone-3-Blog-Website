"use client"
import { useState, useEffect } from "react";

interface Comment {
  name: string;
  text: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  // Load comments from localStorage
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      const newComment = { name, text: comment };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);

      // Save comments to localStorage
      localStorage.setItem("comments", JSON.stringify(updatedComments));

      // Clear form
      setName("");
      setComment("");
    }
  };

  // Handle delete functionality
  const handleDelete = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);

    // Update localStorage
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  return (
    <div className="comment max-w-2xl mx-auto p-4 ">
      <h2 className="text-xl font-semibold mb-4">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit Comment
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Comments</h3>
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="border p-4 rounded-md shadow-sm flex justify-between items-start"
              >
                <div>
                  <p className="font-semibold">{comment.name}</p>
                  <p>{comment.text}</p>
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
