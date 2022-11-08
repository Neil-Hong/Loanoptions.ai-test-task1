import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import "./fetchedTable.scss";

const FetchedTable = () => {
    const [result, setResult] = useState([]);
    const fetchData = async () => {
        try {
            const response = await fetch("http://universities.hipolabs.com/search?country=Australia");
            const data = await response.json();
            setResult(data);
        } catch (error) {
            alert(error.message);
            throw new Error(`${error}`);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(result);
    return (
        <div className="fechedTable-container">
            <h1>Loanoptions.ai Assessment - Task 1</h1>
            <div className="button-container">
                <button className="btn btn-dark">Load</button>
                <button className="btn btn-dark">Delete</button>
                <button className="btn btn-dark">Add</button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default FetchedTable;
