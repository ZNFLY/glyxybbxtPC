import {get} from "@/api/repair/axios"

//查询
export const getListApi = () => {
  return get("/AdminServlet/test")
}