import React, { useState, useEffect } from 'react';
import SideBar from '../../navigation/sidebar/sidebar.component';
import CustomButton from '../../component/custom-button/custom-button';
import FormInput from '../../component/form-input/form-input-component';
import { BASE_URL } from '../../config';
import './product-styles.css';
import axios from 'axios'



const Product = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_URL}/walmart`)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, []);
    return (
        <>
        <div className="web-page">
        <div className="col-3 p-0">
        <SideBar/>
        </div>
       <div className="right-view">
       <div>
            <h3 className="text-center text-dark mt-5 text-lg">Our Products</h3>
        </div>
      <div className="flex justify-evenly">
        <div>
            <FormInput
            name="search"
            type="search"
            style={{
                border: "1px solid red",
                height: "30px",
                textAlign: "left",
                padding: "8px",
            }}
            placeholder="Search for card"
            required
            />
    </div>
    <div>
    <CustomButton
       style={{
        height: "30px",
        padding: "5px",
        margin: "20px",
        fontSize: "10px",
        backgroundColor: "teal",
       }}
      >
        Create a new Product
      </CustomButton>
    </div>
 </div>
 <div id="tableDiv">
  <table className="table">
    <thead>
        <tr className="head">
            {/*<th scope ="col">S/N</th>*/}
            <th scope="col">FullName</th>
            <th scope="col">Goods</th>
            <th scope="col">Amount</th>
            <th scope="col">Cards</th>
            <th scope="col">Products</th>
        </tr>
    </thead>
    <tbody>
        {data.map((item) => (
            <tr key={item._id}>
                <td>{item.FullName}</td>
                <td>{item.YourGoods}</td>
                <td>{item.Amount}</td>
                <td>{item.Cards}</td>
                <td>{item.products}</td>
            </tr>
       ))}
    </tbody>
  </table>
 </div>
       </div>
 </div>
        </>
    );
}

export default Product;