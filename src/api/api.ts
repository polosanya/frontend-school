import axios from "axios";

const host = "http://api.wisey.app";
const version = "api/v1";
export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5MzYwNWM2NC1jZGZhLTRiZjYtYmNjOC00MWFmZGRjNjYxMWYiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2NzkwMTc2NjUsImV4cCI6MTY3OTkxNzY2NX0.h1kv63fklSibt9oTAdDFC4ANsFZy0Lr1ZZQY3jIl_c0";

export const baseUrl = `https://api.wisey.app/api/v1/core/preview-courses`;

export const coursesApi = {
  getCourses() {
    return axios.get(`${host}/${version}/preview-courses`);
  },
};
