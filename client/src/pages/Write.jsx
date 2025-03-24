import ReactQuill from "react-quill-ver2";
import "quill/dist/quill.snow.css";
import "highlight.js/styles/github.css";
import { React, useState } from "react";
const modules = {
  toolbar: [
    [{ header: [false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "link",
];

const Write = () => {
  const [value, setValue] = useState("");

  console.log(value);

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" className="titleInput" />
        <div className="editorContainer">
          <ReactQuill
            value={value}
            onChange={setValue}
            theme="snow"
            modules={modules}
            formats={formats}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input type="file" />
        </div>
        <div className="item">Tags</div>
      </div>
    </div>
  );
};

export default Write;
