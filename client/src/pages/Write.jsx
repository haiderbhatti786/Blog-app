import ReactQuill from "react-quill-ver2";
import "quill/dist/quill.snow.css";
import "highlight.js/styles/github.css";
import { React, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router";
import moment from "moment";

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
const categories = ["Art", "Science", "Tech", "Cinema", "Design", "Food"];

const Write = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  // Debugging logs
  console.log("Location state:", state);
  console.log("Post category from state:", state?.cat);

  const [title, setTitle] = useState(state?.title || "");
  const [value, setValue] = useState(state?.desc || "");
  const [selectedCategory, setSelectedCategory] = useState(state?.cat || "");
  // console.log("Selected category:", selectedCategory);uuuux
  const [isHovered, setIsHovered] = useState(false);
  const [file, setFile] = useState(null);
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      console.log("file >>>>>>>>>>>>>>>..", file);
      const res = await axios.post("https://blog-app-n2gj.vercel.app/upload", formData, {
        withCredentials: true, // Ensure cookies are sent
      });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const sanitizeContent = (content) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) {
      imgUrl = await upload(); // Upload the image and get the URL
    }
    try {
      const sanitizedDesc = sanitizeContent(value); // Sanitize the description
      if (state) {
        await axios.put(
          `https://blog-app-n2gj.vercel.app/posts/${state.id}`,
          {
            title,
            desc: sanitizedDesc, // Use sanitized description
            cat: selectedCategory, // Correctly pass the category
            img: imgUrl, // Set the uploaded image URL
          },
          { withCredentials: true } // Ensure cookies are sent
        );
        toast.success("Post updated Successfully");
      } else {
        await axios.post(
          `https://blog-app-n2gj.vercel.app/posts`,
          {
            title,
            desc: sanitizedDesc, // Use sanitized description
            cat: selectedCategory, // Correctly pass the category
            img: imgUrl, // Set the uploaded image URL
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          },
          { withCredentials: true } // Ensure cookies are sent
        );
        toast.success("Post created Successfully");
      }

      navigate("/");
    } catch (err) {
      console.log(`this is the error = ${err}`);
    }
  };
  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          className="titleInput"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
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
          <span style={{ marginLeft: "10px" }}>
            <b>Visibility:</b> Public
          </span>
          <input
            type="file"
            name="file"
            id="file"
            style={{
              display: "none",
            }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label
            htmlFor="file"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 15px",
              borderRadius: "8px",
              marginLeft: "20px",
              backgroundColor: isHovered ? "#e0e3e7" : "#f0f2f5",
              color: "#333",
              border: "2px dashed #ccc",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "16px",
              fontWeight: "500",
              gap: "8px",
              ":hover": {
                backgroundColor: "#e0e3e7",
                borderColor: "#999",
              },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {file ? file.name : "Upload Image"}
          </label>
          <div className="buttons">
            <button
              className="draft-btn"
              style={{
                padding: "10px 20px",
                backgroundColor: "#f0f2f5",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#e0e3e7")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#f0f2f5")}
            >
              Save as Draft
            </button>
            <button
              className="update-btn"
              style={{
                padding: "10px 20px",
                backgroundColor: "#008080",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#006666")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#008080")}
              onClick={handleClick}
            >
              Publish
            </button>
          </div>
        </div>

        {/* Category Section */}
        <div className="item">
          <h1>Category</h1>
          <div className="category-options">
            {categories.map((category) => (
              <label
                key={category}
                className="category-label"
                checked={selectedCategory === category}
              >
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={
                    selectedCategory.toLowerCase() === category.toLowerCase()
                  }
                  onChange={() => setSelectedCategory(category)}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Write;
