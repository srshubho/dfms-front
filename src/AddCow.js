import { useState } from "react";
import { getData, postData } from "./apiCall";
import SupplierList from "./SupplierList";


const Create = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [msg, setMsg] = useState({ msg: "", type: "" });


    const handleSubmit = async (e) => {

        e.preventDefault();
        const data = { name, phone, address };
        try {
            const res = await postData("supplier", data)
            setMsg({ msg: "success", type: "success" })
        } catch (error) {

            setMsg({ msg: error.message, type: "error" })
        }


    }
    const handleData = async (e) => {
        e.preventDefault();
        try {
            const res = await getData("supplier")
            setSuppliers(res.data)
            setMsg({ msg: "success", type: "success" })
        } catch (error) {
            setMsg({ msg: error.message, type: "error" })
        }
    }
    const clearMsg = () => {
        setMsg({ msg: "", type: "" })
    }
    return (
        <div className="create">
            <h2>Add a New Cow</h2>
            {msg.msg ? <h6 className={`alert ${msg.type}`} onClick={clearMsg}>{msg.msg}</h6> : ""}
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>phone:</label>
                <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label>address:</label>
                <textarea rows="4" cols="50"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                >
                </textarea>

                <button>Add Supplier</button>
            </form>
            <SupplierList suppliers={suppliers} />
            <button className="margin10" onClick={handleData}>get SupplierList</button>
        </div>
    );
}

export default Create;