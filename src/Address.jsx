import React from "react";

const Address = ({address, handleAddressChange}) => {

    const handleStreetChange1 = (e) => {
        handleAddressChange("street1", e.target.value);
    }

    const handleStreetChange2 = (e) => {
        handleAddressChange("street2", e.target.value);
    }

    const handleCityChange = (e) => {
        handleAddressChange("city", e.target.value);
    }

    const handleStateChange = (e) => {
        handleAddressChange("state", e.target.value);
    }

    const handlePinCodeChange = (e) => {
        handleAddressChange("pincode", e.target.value);
    }

    const handleEmailChange = (e)  => {
        handleAddressChange("email", e.target.value)
    }

    const handlePhoneChange = (e) => {
        handleAddressChange("phone", e.target.value)
    }



    return (
        <>
            <h6>Current Address</h6>
            <div className="d-flex flex-column">
                <input className="inputbox" type="text" value={address.street1} onChange={handleStreetChange1} maxLength={95} placeholder="Flat/Door No, Building Name, Street Name" />
                <p className="label">Street Address 1</p>
            </div>

            <div className="d-flex flex-column">
                <input className="inputbox" value={address.street2} onChange={handleStreetChange2} type="text" placeholder="Area" />
                <p className="label">Street Address 2</p>
            </div>

            <div className="d-flex flex-row">
                <div className="d-flex flex-column flex-grow-1 me-5">
                    <input className="inputbox" value={address.city} onChange={handleCityChange} type="text"/>
                    <p className="label">City</p>
                </div>
                <div className="d-flex flex-column flex-grow-1">
                    <input className="inputbox" value={address.state} onChange={handleStateChange} type="text"/>
                    <p className="label">State/Province</p>
                </div>
            </div>

            <div className="d-flex flex-column">
                <input className="inputbox" value={address.pincode} onChange={handlePinCodeChange} type="text" maxLength={6}/>
                <p className="label">Postal/Zip Code</p>
            </div>
            
            <div className="d-flex flex-row">
                <div className="d-flex flex-column flex-grow-1 me-5">
                    <h6>Email Address</h6>
                    <input className="inputbox" type="text" value={address.email} onChange={handleEmailChange} placeholder="abc@example.com" />
                </div>
                <div className="d-flex flex-column flex-grow-1">
                    <h6>Phone Number</h6>
                    <input className="inputbox" type="text" value={address.phone} onChange={handlePhoneChange} placeholder="9000000009" maxLength={10} />
                </div>
            </div>
        </>
    )
}

export default Address;
