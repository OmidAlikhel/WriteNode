import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/config";

export const CreatePost = () => {
  useTitle("CreatePost");
  const navigate = useNavigate();
  const postRef = collection(db, "posts");

  async function handleCreatepost(event) {
    event.preventDefault();
    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    };
    await addDoc(postRef, document);
    navigate("/");
  }

  return (
    <section className="create">
      <div className="heading">
        <h1> Add New Post</h1>
        <form className="createPost" onSubmit={handleCreatepost}>
          <input
            type="text"
            name="title"
            className="title"
            placeholder="Title"
            maxLength="50"
            required
          />
          <textarea
            type="text"
            className="description"
            name="description"
            placeholder="Description"
            maxLength="200"
          />
          <button type="submit" className="submit">
            Create
          </button>
        </form>
      </div>
    </section>
  );
};
