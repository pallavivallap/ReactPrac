import React, { useState } from "react";

function Education1({ degree, handleEducChange }) {
    const degrees = [
        "Select UG", "Bachelor of Science", "Bachelor of Technology"
    ];

    const btech = [
        "Aerospace engineering", "Agricultural engineering", "Automobile Engineering", "Biomedical engineering", "Biotechnology",
        "Computer Science", "Ceramic engineering", "Civil Engineering", "Data science", "Electrical Engineering",
        "Electronics and Communication", "Information Technology", "Instrumentation and control engineering",
        "Mechanical Engineering", "Marine Engineering", "Metallurgical Engineering", "Petroleum Engineering"
    ];

    const bsc = [
        "BSc Computer Science", "BSc in Electronics", "BSc Agriculture", "BSc Biotechnology", "BSc Chemistry",
        "B.Sc Animation", "BSc in Biology", "Mathematics", "Bioinformatics", "Biotechnology",
        "BSc Dietetics", "Physics", "BSc Microbiology", "Zoology", "Radiology"
    ];

    const [selectedDegree, setSelectedDegree] = useState("Select UG");

    const handleDegreeChange = (e) => {
        setSelectedDegree(e.target.value);
        handleEducChange("degree", e.target.value);
      };
      
    const handleBtechChange = (e) => {
        handleEducChange("btech", e.target.value);
    };


    const handleBscChange = (e) => {
        handleEducChange("bsc", e.target.value);
    };

    return (
        <div className="d-flex flex-column me-3">
            <h6>Education</h6>
            <select className="inputbox" value={selectedDegree} onChange={handleDegreeChange}>
                {degrees.map((degree, index) => (
                    <option key={index} value={degree}>{degree}</option>
                ))}
            </select>

            <br />

            <div className="d-flex flex-column me-3 w-100 flex-grow-1">
                {selectedDegree === "Bachelor of Technology" && (
                    <select className="inputbox" value={degree.btech} onChange={handleBtechChange}>
                        {btech.map((btechs, index) => (
                            <option key={index}>{btechs}</option>
                        ))}
                    </select>
                )}
                {selectedDegree === "Bachelor of Science" && (
                    <select className="inputbox" value={degree.bsc} onChange={handleBscChange}>
                        {bsc.map((bscs, index) => (
                            <option key={index}>{bscs}</option>
                        ))}
                    </select>
                )}
            </div>
        </div>
    );
}

export default Education1;
