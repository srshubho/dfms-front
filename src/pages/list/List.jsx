import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { userColumns, userRows } from "../../utils/datatablesource";
import React from "react";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable rows={userRows} columns={userColumns} />
      </div>
    </div>
  )
}

export default List