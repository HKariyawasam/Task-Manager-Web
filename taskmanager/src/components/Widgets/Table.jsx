import React, { useEffect, useState } from "react";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import "./Table.css";
import { FaEdit, FaTrash,FaSearch  } from "react-icons/fa";
import ViewModal from "./Modals/ViewModal";
import { Modal } from "react-bootstrap";
import EditModal from "./Modals/EditModal";
import { deleteTask } from "../../services/TaskService";
import { RippleButton } from "../Widgets/RippleButton";
import toastNotification from "./toastNotification";
import './style.css'

export default function Table(props) {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); 

  const [modalData, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const [modalDataUpdate, setModalDataUpdate] = useState([]);
  const [modalUpdate, setModalUpdate] = useState(false);

  const [modalDataDelete, setModalDataDelete] = useState([]);
  const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  useEffect(() => {
    setTasks(props.tasks);
    setFilteredTasks(props.tasks);
  }, [props.tasks]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Complete":
        return "success"; // Green
      case "In-Progress":
        return "warning"; // Yellow
      case "In-Complete":
        return "danger"; // Orange
      default:
        return "primary"; // Default color
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "danger"; // Green
      case "Medium":
        return "warning"; // Yellow
      case "Low":
        return "success"; // Orange
      default:
        return "primary"; // Default color
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredTasks = tasks.filter((task) =>
        task.username.toLowerCase().includes(query.toLowerCase()) ||  task.title.toLowerCase().includes(query.toLowerCase()) ||  task.status.toLowerCase().includes(query.toLowerCase()) ||  task.priority.toLowerCase().includes(query.toLowerCase())

    );
    setFilteredTasks(filteredTasks);
};

  const openModal = (task) => {
    setData(task);
    handleViewOnClick();
  };

  const handleViewOnClick = () => {
    setModalShow(true);
  };

  const openModalUpdate = (task) => {
    setModalDataUpdate(task);
    setModalUpdate(true);
  };

  const openModalDelete = (data) => {
      setModalDataDelete(data);
      setModalDeleteConfirm(true);
  }

  function onDelete(modalDataDelete) {
      deleteTask(modalDataDelete.id).then((response) => {
        if(response.ok){
            toastNotification("Task Deleted Sucessfully!", "success") 
        }else{

        }
          window.location.reload(false);
      })
  }

  return (
    <div className="body-content-container">
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ViewModal data={modalData} onHide={() => setModalShow(false)} />
      </Modal>
      
      <MDBTable align="middle" striped className="caption-top" responsive>
        <caption style={{ marginBottom: '10px', marginTop:'50px', fontSize:'30px', fontWeight:'bold' }}>Task List</caption>
        <div className="my-search"> {/* Add d-flex to center align items */}
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
        <MDBTableHead dark>
          <tr>
         
            <th scope="col" >
              UserName
            </th>
            <th scope="col" >
              Title
            </th>
            <th scope="col" >
              Status
            </th>
            <th scope="col" >
              Priority
            </th>
            <th scope="col" >
              Actions
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredTasks.map((task, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{task.username}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p
                    className="fw-normal mb-1 link-hover"
                    onClick={() => openModal(task)}
                  >
                    {task.title}
                  </p>
                </td>
                <td>
                  <MDBBadge
                    color={getStatusColor(task.status)}
                    pill
                    className="larger-pill"
                  >
                    {task.status}
                  </MDBBadge>
                </td>
                <td>
                  <MDBBadge
                    color={getPriorityColor(task.priority)}
                    pill
                    className="larger-pill"
                  >
                    {task.priority}
                  </MDBBadge>
                </td>
                <td>
                  <button  type="button" rounded size="md" className="btn btn-success mr-6" onClick={() => openModalUpdate(task)}>
                    <FaEdit />
                  </button>
                  <button  type="button"   disabled>
                   
                  </button>
                  <button  type="button" rounded size="md" className="btn btn-danger ml-2" onClick={() => openModalDelete(task)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>

      {/* Modal to be used in update */}
      <Modal
        show={modalUpdate}
        onHide={() => setModalUpdate(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <EditModal
          data={modalDataUpdate}
          onHide={() => setModalUpdate(false)}
        />
      </Modal>


       {/* Modal to be used in delete */}

       <Modal show={modalDeleteConfirm} size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header>
                    <Modal.Title>
                        <p><strong>Confirm Deletion</strong></p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center>
                        <p><strong>Are you sure you want to remove this task?</strong></p>
                    </center>
                </Modal.Body>
                <Modal.Footer>
                    <div className="delete-modal row">
                        <div className="col-6">
                            <RippleButton className="ripple-button" text=" Confirm" onClick={() => { onDelete(modalDataDelete); }} />
                        </div>
                        <div className="col-6">
                            <RippleButton className="ripple-button-warning" text="Cancel" onClick={() => setModalDeleteConfirm(false)} />
                        </div>

                    </div>
                </Modal.Footer>
            </Modal>
    </div>
  );
}
