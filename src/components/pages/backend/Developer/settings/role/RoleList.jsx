import useQueryData from '@/components/custom-hook/useQueryData';
import ModalArchive from '@/components/partials/modal/ModalArchive';
import ModalDelete from '@/components/partials/modal/ModalDelete';
import ModalRestore from '@/components/partials/modal/ModalRestore';
import { StoreContext } from '@/components/store/storeContext';
import React from 'react'
import Pills from '../../partials/Pills';
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from 'lucide-react';
import LoadMore from '../../partials/LoadMore';
import SpinnerTable from '../../partials/spinners/SpinnerTable';
import TableLoader from '../../partials/TableLoader';
import IconNoData from '../../partials/IconNoData';
import IconServerError from '../../partials/IconServerError';
import { setIsAdd, setIsArchive, setIsDelete, setIsRestore } from '@/components/store/storeAction';

const RoleList = ({setItemEdit}) => {
  const { store, dispatch } = React.useContext(StoreContext);
   const [id, setIsId] = React.useState("");
   const [dataItem, setDataItem] = React.useState(null);
    let counter = 1;
     const {
      isLoading,
       isFetching,
       error,
       data: result,
       status,
     } = useQueryData(
       `/v2/role`, //endpoint
       "get", //method
       "role" //key
     );
       const handleDelete = (item) => {
         dispatch(setIsDelete(true));
         setIsId(item.role_aid);
         setDataItem(item);
       };
       const handleEdit = (item) => {
         dispatch(setIsAdd(true));
         setItemEdit(item);
       };
       const handleRestore = (item) => {
         dispatch(setIsRestore(true));
         setIsId(item.role_aid);
       };
       const handleArchive = (item) => {
         dispatch(setIsArchive(true));
         setIsId(item.role_aid);
       };
  return (
    <>
      <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        {isFetching && !isLoading && <SpinnerTable/>}
        <div className="table-wrapper custom-scroll">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Role Name</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {isLoading && (
              <tr>
              <td colSpan={100}>
                <TableLoader count={20} cols={5}/>
              </td>
            </tr>)}
              {result?.count === 0 && (
              <tr>
              <td colSpan={100}>
                <IconNoData />
              </td>
            </tr>

              )}
              {error && (
            <tr>
              <td colSpan={100}>
                <IconServerError />
              </td>
            </tr>
              )}

              {result?.count > 0 &&
                result.data.map((item, key) => (
                  <tr key={key}>
                    <td>{counter++}.</td>
                    <td>
                      {item.role_is_active === 1 ? (
                        <Pills text="Active" />
                      ) : (
                        <Pills text="inActive" />
                      )}
                    </td>
                    <td>{item.role_name}</td>
                    <td>{item.role_description}</td>
                    <td>
                      <ul className="table-action">
                        {item.role_is_active ? (
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
                                onClick={() => handleArchive(item)}
                              >
                                <Archive />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Restore"
                              >
                                <ArchiveRestore
                                  onClick={() => handleRestore(item)}
                                />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Delete"
                                onClick={() => handleDelete(item)}
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

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          mysqlApiDelete={`/v2/role/${id}`}
          queryKey={"role"}
          item={dataItem.role_name}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`/v2/role/active/${id}`}
          queryKey={"role"}
        />
      )}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`/v2/role/active/${id}`}
          queryKey={"role"}
        />
      )}
    </>
  );
}

export default RoleList