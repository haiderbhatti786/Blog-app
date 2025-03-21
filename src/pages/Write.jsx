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
          <input
            style={{
              display: "none",
            }}
            type="file"
            id="file"
            name=""
          />
          <label
            className="file"
            style={{
              cursor: "pointer",
            }}
            htmlFor="file"
          >
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="tech" id="tech" />
            <label htmlFor="tech">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="cinema" id="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="design" id="design" />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="food" id="food" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
