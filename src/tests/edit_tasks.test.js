// Testing inputs, drag and drop methods

import { fireEvent, getByText } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import "regenerator-runtime/runtime";
import { displayTasks, update } from "./test_files/index";
import { drag, drop } from "./test_files/drag_drop";

displayTasks();

describe("Function for testing text inputs", () => {
    const textInputs = global.document.getElementsByClassName("description");
    Array.from(textInputs).forEach((textInput) => {
      test("renders an Input Text element", () => {
        expect(textInput).not.toBeNull();
        expect(textInput).toBeInTheDocument();
      });
      test("focus In , inputs a text then focus Out  ", async () => {
        const oldText = textInput.value;
        fireEvent.focusIn(textInput);
        textInput.value = "The test text";
        fireEvent.input(textInput);
        fireEvent.focusOut(textInput);
        expect(textInput.value).not.toBe(oldText);
      });
    });  
});