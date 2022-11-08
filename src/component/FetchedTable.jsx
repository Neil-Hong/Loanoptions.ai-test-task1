import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, handleAdd, handleDelete } from "../redux/fetchDataSlice";

import "./fetchedTable.scss";

const FetchedTable = () => {
    const result = useSelector((state) => state.list.list);
    const dispatch = useDispatch();

    let mybutton = document.getElementById("topBtn");
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    const backTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div className="fechedTable-container">
            <h1>Loanoptions.ai Assessment - Task 1</h1>
            <div className="button-container">
                <button className="btn btn-dark" onClick={() => dispatch(fetchData())}>
                    Load
                </button>
                <button className="btn btn-dark" onClick={() => dispatch(handleDelete())}>
                    Delete
                </button>
                <button className="btn btn-dark" onClick={() => dispatch(handleAdd())}>
                    Add
                </button>
            </div>
            <button onClick={backTop} id="topBtn">
                Back to Top
            </button>

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
