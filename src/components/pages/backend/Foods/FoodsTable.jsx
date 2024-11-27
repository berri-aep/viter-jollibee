import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "@/components/store/storeAction";

import { Archive, ArchiveRestore, FilePenLine, Trash2 } from "lucide-react";
import React from "react";
import LoadMore from "../partials/LoadMore";
import ModalConfirm from "../partials/Modals/ModalConfirm";
import ModalDelete from "../partials/Modals/ModalDelete";
import Pills from "../partials/Pills";
import { StoreContext } from "@/components/store/storeContext";
import { menus } from "../menu-data";

const FoodsTable = ({setItemEdit}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  let counter = 1;

  const handleDelete = () => {
    dispatch(setIsDelete(true));
  };
  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };
  const handleRestore = () => {
    dispatch(setIsRestore(true));
  };
  const handleArchive = () => {
    dispatch(setIsArchive(true));
  };
  return (
    <>
      <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        {/* <SpinnerTable /> */}
        <div className="table-wrapper custom-scroll">
          {/* <TableLoader count={20} cols={5} /> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
              <td colSpan={100}>
                <IconNoData />
              </td>
            </tr>
            <tr>
              <td colSpan={100}>
                <IconServerError />
              </td>
            </tr> */}

              {menus.map((item,key) => (

                <tr key={key}>
                  <td>{counter++}.</td>
                  <td>
                    <Pills />
                  </td>
                  <td>{item.menu_title}</td>
                  <td>{item.menu_price}</td>
                  <td>{item.menu_category}</td>
                  <td>
                    <ul className="table-action">
                      {true ? (
                        <>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Edit"
                              onClick={() => handleEdit(item)}
                            >
                              <FilePenLine />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Archive"
                              onClick={handleArchive}
                            >
                              <Archive />
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <button className="tooltip" data-tooltip="Restore">
                              <ArchiveRestore onClick={() => handleRestore()} />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Delete"
                              onClick={handleDelete}
                            >
                              <Trash2 />
                            </button>
                          </li>
                        </>
                      )}
                    </ul>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>

          <LoadMore />
        </div>
      </div>

      {store.isDelete && <ModalDelete />}
      {store.isRestore && <ModalConfirm />}
      {store.isArchive && <ModalConfirm />}
    </>
  );
};

export default FoodsTable;
