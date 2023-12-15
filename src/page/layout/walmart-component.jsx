import React from 'react';
import Header from '../../navigation/header/header.component';
import FormInput from "../../component/form-input/form-input-component";
import CustomButton from "../../component/custom-button/custom-button";
import { useState } from 'react';
import Select from 'react-select'
import ariseBackground from'../../assets/Images/FIFA2.webp';
import './walmart-styles.css';


const Walmart = () => {
    const options = [
        { value: "options1", label: "Giftcard" },
        { value: "options2", label: "Steamcard"},
        { value: "options3", label: "Vanilacard"}
    ];
    const [selectedOptions, setSelectedOptions] = useState(null);
    const handleSelectChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
    };
    const customStyles = {
        control: (provided) => ({
            ...provided,
            width: '17%',
            display: 'flex',
            justifyContent: 'center',
            border: '1px solid #000',
            marginLeft: '34rem',
            borderRadius: '10px',
        })
    };
    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ariseBackground})`,
        backgroundSize : "cover",
        backgroundPosition: "center",
        height: "100vh",
        padding: '30px'
    };
    return (
        <>
        <Header />
        <div style={styles}>
            
        <div>
            <h1 className="text-center text-blue-900 mt-8 text-2x1">Process your order now...</h1>
            <form>
                <FormInput
                style={{width: "17%"}}
                name="FullName"
                type="text"
                placeholder="Full Name"
                required />

                <FormInput
                 style={{width: "17%"}}
                 name="Your goods"
                 type="text"
                 placeholder="Your goods"
                 required />

                <FormInput
                 style={{width: "17%"}}
                 name="Amount"
                 type="Number"
                 placeholder="Amount"
                 required 
                 />
                 <Select
                  options={options}
                  value={selectedOptions}
                  onChange={handleSelectChange}
                  styles={customStyles}
                 />

               

                <FormInput
                 style={{width: "17%"}}
                 name="Product"
                 type="text"
                 placeholder="Product"
                 required />

                 <div 
                     style=
                     {{display: "flex",
                    justifyContent: "center",
                    marginTop: "20px"}}>

                 <CustomButton type="submit"> Submit</CustomButton>
                 </div>
            </form>

        </div>
        </div>
        </>
    );
}

export default Walmart;