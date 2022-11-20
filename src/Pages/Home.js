import { useEffect, useState } from "react";
import "./Home.css";
import { TextField, Typography } from "@mui/material";
import EditMenu from "./EditMenu";
import { UserAuth } from "../Context/auth-context";
import { useNavigate } from "react-router-dom";
import SimpleSnackbar from "./Snackbar";
export default function Home() {
  const [data, setData] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((json) => setData(json));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const createPost = async () => {
    if (user != null) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/posts`, {
          method: "POST",
          body: JSON.stringify({
            title: title,
            body: body,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => setData((data) => data.concat(json)))
          .reverse();
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/signin");
    }
  };

  return (
    <div>
      <h1 className="create-post">Create Post</h1>

      <div className="input-box">
        <TextField
          autoComplete="Title"
          name="title"
          required
          id="title"
          label="Title"
          autoFocus
          sx={{ width: "80%" }}
          placeholder="Enter Title Here"
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          autoComplete="Put Content"
          name="content"
          required
          id="content"
          label="Contents"
          sx={{ width: "80%", mt: 2 }}
          autoFocus
          onChange={(e) => setBody(e.target.value)}
        />

        <p>
          <SimpleSnackbar createPost={createPost} />
        </p>
      </div>

      <div className="card-container">
        {data &&
          data.map((data) => (
            <div key={data.id}>
              <ul className="card-box">
                <span
                  style={{
                    color: "grey",
                    cursor: "pointer",
                    float: "right",
                  }}
                >
                  <EditMenu setData={setData} />
                </span>
                <span> Title</span>
                <Typography>{data.title}</Typography>
                <li style={{ marginTop: "0.5rem" }}>Content</li>
                <Typography>{data.body}</Typography>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
