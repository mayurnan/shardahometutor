let authcall = require('../../api/axiosCall').authcall

export default  {
    async  SubmitFrom (data) {
      // console.log(data)
      return  await authcall.post('http://127.0.0.1:3000/register', data)
    },
    async  SubmitTeacherFrom (data) {
      // console.log(data)
      return  await authcall.post('http://127.0.0.1:3000/registerAsTeacher', data)
    }
}