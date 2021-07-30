// function to add or remove task in our todo list"

import { addTask, removeTask } from "./test_files/add_remove";
import { displayTasks, tasks }from "./test_files/index";

jest.mock("./test_files/add_remove");

displayTasks();

describe("test adding and removing task method ", () => {
    test("add one li element to the ul:", () => {
        const input = global.document.getElementById("description");
        input.value = "Washing my body";
        const task = { id: 3, index: 1, description: "Washing my body", completed: true };
    
        const listBefore = global.document.getElementsByTagName("li");
        const lenB = listBefore.length;
        addTask(tasks);
        setTimeout(500, () => {
          const listAfter = global.document.getElementsByTagName("li");
          const lenA = listAfter.length;
    
          expect(lenA).toBe(lenB + 1);  
        })
    });

    test("remove the li element from the ul:", () => {
        const listBefore = global.document.getElementsByTagName("li");
        const lenB = listBefore.length;
        removeTask("div2", tasks);
        setTimeout(500, () => {
          const listAfter = global.document.getElementsByTagName("li");
          const lenA = listAfter.length;
          expect(lenB - 1).toBe(lenA);
        }); 
    });
});