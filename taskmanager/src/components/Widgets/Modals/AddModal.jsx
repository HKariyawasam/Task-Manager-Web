import React, { useState} from "react";
import { Modal } from "react-bootstrap";
import { FormSection } from "../FormSection";
import { RippleButton } from "../RippleButton";
import toastNotification from "../toastNotification";
import "../../Widgets/style.css";
import { createTask } from "../../../services/TaskService";
import { getUser } from "../../../utils/userSessions";

function AddModal(task) {
 
  const [username, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
 

  const onSubmit = (e) => {
    e.preventDefault();

    let user = getUser()
    const taskPayload = {
      title,
      description,
      status,
      priority,
      username : user,
    };

    createTask(taskPayload)
      .then((response) => {
        if (response.ok) {
          toastNotification("Success!", "success");
          window.location.reload(true);
        } else {
          toastNotification("Error occured!", "error");
        }
      })
      .catch((err) => {
        toastNotification("Error occured!", "error");
      });
  };

  return (
    <div>
      <Modal.Header>
        <Modal.Title>Create New Task</Modal.Title>
        <div>
          <button className="btn btn-close" onClick={task.onHide}></button>
        </div>
      </Modal.Header>
      <Modal.Body className="px-4">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <form>
              <div class="form-row">
                <FormSection headline={"Task"} />
              </div>
              <br></br>
              <div class="row">
                <div class="col-6">
                  <label className="form-pad" for="uName">
                    User Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="uName"
                    placeholder="Last Name"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </div>
                <div class="col-6">
                  <label className="form-pad" for="title">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="Title"
                   
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
              </div>

              <br></br>
              <div class="row">
                <div class="col-6">
                  <label className="form-pad" for="status">
                    Status
                  </label>
                  <select
                    class="form-select"
                    className="form-control"
                    name="status"
                    id="status"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option>Choose Status</option>
                    <option id="Complete">Complete</option>
                    <option id="In-Complete">In-Complete</option>
                    <option id="In-Progress">In-Progress</option>
                  </select>
                </div>
                <div class="col-6">
                  <label className="form-pad" for="priority">
                    Priority
                  </label>
                  <select
                    class="form-select"
                    className="form-control"
                    name="degree"
                    id="degree"
                    onChange={(e) => {
                      setPriority(e.target.value);
                    }}
                  >
                    <option>Choose Priority</option>
                    <option id="High">High</option>
                    <option id="Medium">Medium</option>
                    <option id="Low">Low</option>
                  </select>
                </div>
              </div>
              <br></br>
              <div class="form-row">
                <FormSection headline={"Addition Details"} />
              </div>
              <br></br>

              <div class="row">
                <div class="col-12">
                  <label className="form-pad" for="description">
                    Description
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="Description"
                  
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
              </div>
              <br></br>

              <div className="row mb-4">
                <div className="col py-3 text-center">
                  <RippleButton
                    className="ripple-button"
                    text="Submit"
                    onClick={(e) => {
                      onSubmit(e);
                    }}
                  />
                </div>
                <div className="col py-3 text-center">
                  <RippleButton
                    className="ripple-button-warning"
                    text="Cancel"
                    onClick={task.onHide}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </div>
  );
}

export default AddModal;
