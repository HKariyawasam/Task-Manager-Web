import React, { useEffect, useState } from "react";
import Table from "../Widgets/Table";
import { getTasksForUserName } from "../../services/TaskService";
import { getUser } from "../../utils/userSessions";

export function Tasks() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let user = getUser();
    getTasksForUserName(user)
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
