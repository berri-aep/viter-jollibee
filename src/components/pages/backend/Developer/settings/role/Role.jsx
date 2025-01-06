import React from 'react'
import Header from '../../partials/Header';
import SideNavigation from '../../partials/SideNavigation';
import RoleList from './RoleList';
import Footer from '../../partials/Footer';
import { StoreContext } from '@/components/store/storeContext';
import { FaPlus } from 'react-icons/fa';
import SearchBar from '../../partials/SearchBar';
import ModalAddRole from './ModalAddRole';
import { setIsAdd } from '@/components/store/storeAction';
import { Plus } from 'lucide-react';
import ModalValidation from '../../partials/Modals/ModalValidation';
import ModalError from '../../partials/Modals/ModalError';
import ToastSuccess from '../../partials/ToastSuccess';
import ModalSuccess from '@/components/partials/modal/modalSuccess';

const Role = () => {
   const { dispatch, store } = React.useContext(StoreContext);
    const [ itemEdit, setItemEdit ] = React.useState(null);
      const handleAdd = () => {
        dispatch(setIsAdd(true));
        setItemEdit(null);
      };
  return (
    <>
      <section className="layout-main">
        <div className="layout-div">
          <SideNavigation menu="settings" />
          <main>
            <Header title="Roles" subtitle="Welcome to Jollibee" />
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>
              <div className="flex items-end"></div>
              <RoleList setItemEdit={setItemEdit} />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.error && <ModalError />}
      {store.success && <ToastSuccess/>}
      {store.isAdd && <ModalAddRole itemEdit={itemEdit} />}
    </>
  );
}

export default Role