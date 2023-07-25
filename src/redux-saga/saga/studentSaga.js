import { call, put, takeEvery } from 'redux-saga/effects'
import * as type from '../constants/studentConstants';
import { addStudentApi, deleteStudentApi, getStudentApi, updateStudentApi } from'../../services/studentApi';

function* fetchStudents() {
   try {
      const students= yield call(getStudentApi);
      yield put({type: type.All_STUDENT_SUCCESS, students });
      
   } catch (e) {
      yield put({type: type.All_STUDENT_FAIL, message: e.message});
   }
}



function* newStudent(action) {
   try {
      
      const newStudent= yield call(addStudentApi,action.payload);

      yield put({type: type.NEW_STUDENT_SUCCESS, newStudent:newStudent });
      yield fetchStudents();
      
   } catch (e) {
      yield put({type: type.NEW_STUDENT_FAIL, message: e.message});
   }
}


function* updateStudent(action) {

   try {
      
      const updateStudent= yield call(updateStudentApi,action.payload);

      yield put({type: type.UPDATE_STUDENT_SUCCESS, updateStudent:updateStudent });
      yield fetchStudents();
   } catch (e) {
      yield put({type: type.UPDATE_STUDENT_FAIL, message: e.message});
   }
}


function* deleteStudent(action) {
   try {
      
      const deleteStudent= yield call(deleteStudentApi,action.payload);

      yield put({type: type.DELETE_STUDENT_SUCCESS, deleteStudent:deleteStudent });
      yield fetchStudents();
   } catch (e) {
      yield put({type: type.DELETE_STUDENT_FAIL, message: e.message});
   }
}


function* studentSaga() {

   yield takeEvery(type.All_STUDENT_REQUEST, fetchStudents);
   yield takeEvery(type.NEW_STUDENT_REQUEST,newStudent);
   yield takeEvery(type.UPDATE_STUDENT_REQUEST,updateStudent);
   yield takeEvery(type.DELETE_STUDENT_REQUEST,deleteStudent);
}

export default studentSaga;