let authcall = require('../../api/axiosCall').authcall

export default  {
    async  SubmitFrom (data) {
      // console.log(data)
      return  await authcall.post('https://us-central1-shardahometutorbackend.cloudfunctions.net/app/register', data)
    },
    async  SubmitTeacherFrom (data) {
      // console.log(data)
      return  await authcall.post('https://us-central1-shardahometutorbackend.cloudfunctions.net/app/registerAsTeacher', data)
    }
}