import React from "react";

const DOB = ({dob, handleDobChange}) => {
    
    const days = [];
    for (let i = 1; i <= 31; i++) {
        days.push( <option key={i}> {i} </option> );
    }

    const months = [
        "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    

    const curYear = new Date().getFullYear();
    const years = [];
    for (let i=curYear; i>= 1991; i--) {
        years.push(<option key={i}> {i} </option>);
    }


    const handleDayChange = (e) => {
        handleDobChange("day", e.target.value);
      };
    

      const handleMonthChange = (e) => {
        handleDobChange("month", e.target.value);
      };
    
      const handleYearChange = (e) => {
        handleDobChange("year", e.target.value);
      };

    return (
        <div>
            <div>
                <h6>Birth Date</h6>
            </div>

            <div className="d-flex flex-row">

                <div className="d-flex flex-column me-3">
                    <select className="inputbox" value={dob.day} onChange={handleDayChange}>{days}</select>
                    <label className="label">Day</label>
                </div>

                <div className="d-flex flex-column me-3">

                    <select className="inputbox" value={dob.month} onChange={handleMonthChange}>
                        {months.map((month, index) => (
                        <option key={index}> {month} </option>
                        ))}
                    </select>
                    <label className="label">Month</label>
                </div>


                <div className="d-flex flex-column">
                    <select className="inputbox" value={dob.year} onChange={handleYearChange}>{years}</select>
                    <label className="label">Year</label>
                </div>

            </div>
        </div>

    )    
}

export default DOB;