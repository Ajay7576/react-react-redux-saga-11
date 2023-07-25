
import axios from "axios";

   const apiUrl = `https://localhost:44368/api/student/`;


    export async function getStudentApi() {
       return await axios.get(apiUrl);
     } ;


   export async function addStudentApi(newStudent){
        return await axios.post(apiUrl,newStudent);
     };


     export async function updateStudentApi(updateStudent){
        return await axios.put(apiUrl,updateStudent);
     };


     export async function deleteStudentApi(deleteStudent){
        return await axios.delete(apiUrl+deleteStudent);
     };
 

