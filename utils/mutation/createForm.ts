import api from "@/app/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const useAddToAddress = () => {
  const mutate = useMutation({
    mutationKey: ["/addtoForm"],
    mutationFn: async (data) => {
      const res = await api.post("/form/reach-me", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Address add sucesfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutate;
};

export default useAddToAddress;
