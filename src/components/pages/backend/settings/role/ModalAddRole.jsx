import { InputText, InputTextArea } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { X } from "lucide-react";
import React from "react";
import * as Yup from "Yup";
import ModalWrapper from "../../partials/Modals/ModalWrapper";
import SpinnerButton from "../../partials/spinners/SpinnerButton";

const ModalAddRole = ({ itemEdit }) => {
  const { dispatch, store } = React.useContext(StoreContext);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v2/role/${itemEdit.role_aid}` : "/v2/role",
        itemEdit ? "PUT" : "POST",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["role"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("added"));
      }
    },
  });

  const handleClose = () => {
    if (mutation.isPending) return;
    dispatch(setIsAdd(false));
  };

  const initVal = {
    role_name: itemEdit ? itemEdit.role_name : "",
    role_description: itemEdit ? itemEdit.role_description : "",
    role_name_old: itemEdit ? itemEdit.role_name : "",
  };

  const yupSchema = Yup.object({
    role_name: Yup.string()
      .matches(/^[A-Za-z]+$/, "Invalid Name")
      .required("* Required"),
    role_description: Yup.string().required("* Required"),
  });
  return (
    <>
      <ModalWrapper>
        <div className="modal-side fixed absolute top-0 right-0 bg-primary h-[100dvh] w-[300px] border-l border-line">
          <div className="modal-header p-4 flex justify-between items-center">
            <h5 className="mb-0">{itemEdit ? "Edit" : "Add"} role</h5>
            <button onClick={handleClose}>
              <X />
            </button>
          </div>
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              mutation.mutate({
                ...values,
              });
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-form h-full max-h-[calc(100vh-56px)] grid grid-rows-[1fr_auto]">
                    <div className="form-wrapper p-4 max-h-[85vh] h-full overflow-y-auto custom-scroll">
                      <div className="input-wrap ">
                        <InputText
                          label="Role Name"
                          type="text"
                          name="role_name"
                        />
                      </div>
                      <div className="input-wrap">
                        <InputTextArea
                          label="Role Description"
                          type="text"
                          name="role_description"
                        />
                      </div>
                    </div>
                    <div className="form-action flex p-4 justify-end gap-5">
                      <button className="btn btn-accent" type="submit">
                        {mutation.isPending ? <SpinnerButton /> : "Save"}
                      </button>
                      <button
                        className="btn btn-cancel"
                        onClick={handleClose}
                        type="reset"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddRole;