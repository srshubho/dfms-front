import "./new.scss";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { MenuItem, Select } from "@mui/material";
import { getData, postData } from "../../apiCall";

const New = ({ inputs, title, selects = null }) => {
  const [file, setFile] = useState("");

  async function fetchData(path, index) {
    try {
      let res = await getData(path)
      console.log(res.data)
      selects[index].options = res.data



    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    selects.forEach((item, index) => {
      if (item.path) {

        fetchData(item.path, index)
      }
    })
    // fetchData()

  }, []);

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
              {selects.length && selects.map((select) => (
                <div className="formInput" key={select.id}>
                  <label>{select.label}</label>
                  <Select
                    label={select.label}
                    fullWidth
                    value="aam"
                    variant="standard"
                  >
                    <MenuItem value={100}>---Select---</MenuItem>

                    {select.options.length && select.options.map((option) => (
                      <MenuItem value={option.id} key={option.id}>{option.value}</MenuItem>

                    ))}

                  </Select>
                </div>))}

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
