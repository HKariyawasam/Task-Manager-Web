import React, { useEffect, useState } from "react";
import Table from "../Widgets/Table";
import { getTasksForUserName } from "../../services/TaskService";

export function Tasks() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getTasksForUserName("test_user_1")
      .then((response) => {
        if (response.ok) {
          setTaskList(response.data.reverse());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div >
      
        <Table tasks = {taskList}/>
     
    </div>
  );
}
