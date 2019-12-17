import { getCookie } from "formula_one";

export const headers = {
  "X-CSRFToken": getCookie("csrftoken"),
  "Content-type": "multipart/form-data"
};

export const jsonHeaders = {
  "X-CSRFToken": getCookie("csrftoken"),
  "Content-type": "application/json" 
}