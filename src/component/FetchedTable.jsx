import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import "./fetchedTable.scss";

const FetchedTable = () => {
    const [result, setResult] = useState(null);
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

    const handleLoad = () => {
        fetchData();
    };

    const handleDelete = () => {
        if (result) {
            result.splice(-1);
            setResult([...result]);
        }
    };

    const handleAdd = () => {
        if (result) {
            result.push(result[0]);
            setResult([...result]);
        }
    };
    return (
        <div className="fechedTable-container">
            <h1>Loanoptions.ai Assessment - Task 1</h1>
            <div className="button-container">
                <button className="btn btn-dark" onClick={handleLoad}>
                    Load
                </button>
                <button className="btn btn-dark" onClick={handleDelete}>
                    Delete
                </button>
                <button className="btn btn-dark" onClick={handleAdd}>
                    Add
                </button>
            </div>

            <table className="table table-striped table-bordered table-hover">
                <thead>
                    {result ? (
                        <tr>
                            <th>Country Code</th>
                            <th>Country</th>
                            <th>Domains</th>
                            <th>Name</th>
                            <th>State/Province</th>
                            <th>Website</th>
                        </tr>
                    ) : (
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    )}
                </thead>
                <tbody>
                    {result ? (
                        result.map((item) => {
                            return (
                                <tr>
                                    <td>{item.alpha_two_code}</td>
                                    <td>{item.country}</td>
                                    <td>{item.domains}</td>
                                    <td>{item.name}</td>
                                    <td>{item["state-province"] === null ? "null" : item["state-province"]}</td>
                                    <td>{item.web_pages}</td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FetchedTable;
