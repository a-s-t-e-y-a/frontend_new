import api from "@/app/api";
import { useQuery } from "@tanstack/react-query";


const useGetAllJobs = () => {
  const allJobs = useQuery({
    queryKey: ["api/jobs"],
    queryFn: async () => {
      const res = await api.get("/apply/get");
      return res?.data;
    },
  });
  return allJobs;
};

export default useGetAllJobs;