import { queryData } from "@/components/helpers/queryData";
import {
  useMutation,
  useMutationState,
  useQueryClient,
} from "@tanstack/react-query";
import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { GrFormClose } from "react-icons/gr";
import ButtonSpinner from "../spinner/ButtonSpinner";
import { MdDelete } from "react-icons/md";
import { StoreContext } from "@/components/store/storeContext";
import ModalWrapper from "@/components/pages/backend/partials/Modals/ModalWrapper";
import { Archive, X } from "lucide-react";
import SpinnerButton from "@/components/pages/backend/partials/spinners/SpinnerButton";

const ModalDelete = ({ setIsDelete, mysqlApiDelete, queryKey, item }) => {
  const { store, dispatch } = React.useContext(StoreContext
  );
  const handleClose = () => dispatch(setIsDelete(false));

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlApiDelete, "delete", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      dispatch(setIsDelete(false));

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        console.log("May error!");
      } else {
        setIsDelete(false);
        console.log("Naysuu!");
        dispatch(setSuccess(true));
        dispatch(setMessage(successMsg));
      }
    },
  });

  const handleYes = async () => {
    // mutate data
    mutation.mutate({
      item: item,
    });
  };
  return (
    <ModalWrapper>
      <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-full rounded-md border border-line">
        <div className="modal-header flex gap-2 p-2 items-center border-b border-line mb-2">
          <Archive size={16} stroke="red" />{" "}
          <span className="text-alert">Delete</span>
          <button className="ml-auto" onClick={handleClose}>
            <X />
          </button>
        </div>
        <div className="modal-body p-2 py-4">
          <p className="mb-0 text-center">
            Are you sure you want to remove this {item}?
          </p>

          <div className="flex justify-end gap-3 mt-5">
            <button className="btn btn-alert" onClick={handleYes}>
              <SpinnerButton /> Delete
            </button>
            <button className="btn btn-cancel" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalDelete;
