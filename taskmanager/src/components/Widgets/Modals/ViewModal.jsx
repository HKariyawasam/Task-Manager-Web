import React from "react";
import { Modal } from "react-bootstrap";


function ViewModal(task) {


    return (
        <div>
            <Modal.Header>

                <Modal.Title>Task Details</Modal.Title>
                <div>
                    <button className="btn btn-close" onClick={task.onHide}></button>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                        <table class="table table-striped table-light ">
                            <tbody>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Task Title
                                    </th>
                                    <td class="text-left">{task.data.title}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Description
                                    </th>
                                    <td class="text-left">{task.data.description}</td>
                                </tr><tr>
                                    <th class="text-left" scope="row">
                                        Status
                                    </th>
                                    <td class="text-left">{task.data.status}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Priority
                                    </th>
                                    <td class="text-left">{task.data.priority}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Created At
                                    </th>
                                    <td class="text-left">{task.data.createdAt}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Updated At
                                    </th>
                                    <td class="text-left">{task.data.updatedAt}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        UserName
                                    </th>
                                    <td class="text-left">{task.data.username}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal.Body>
        </div>
    )
}

export default ViewModal