import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="side">

          </div>
          <div className="middle">
            <form>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              {inputs.length % 2 !== 0 && <div className="formInput" >

              </div>}

              <button>Send</button>
            </form>
          </div>
          <div className="side">

          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
