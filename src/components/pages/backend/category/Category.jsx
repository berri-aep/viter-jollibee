import { Plus } from 'lucide-react';
import React from 'react'
import Footer from '../partials/Footer';
import SideNavigation from '../partials/SideNavigation';
import Header from '../partials/Header';
import SearchBar from '../partials/SearchBar';
import CategoryTable from './CategoryTable';
import { StoreContext } from '@/components/store/storeContext';
import { setIsAdd } from '@/components/store/storeAction';
import ModalAddCategory from './ModalAddCategory';
import ToastSuccess from '../partials/ToastSuccess';
import ModalError from '../partials/Modals/ModalError';
import ModalValidation from '../partials/Modals/ModalValidation';

const Category = () => {
const { dispatch, store } = React.useContext(StoreContext);
const handleAdd = () => {
  dispatch(setIsAdd(true));
};
  return (
    <>
      <section className="layout-main">
        <div className="layout-div">
          <SideNavigation menu="category" />
          <main>
            <Header
              title="Category"
              subtitle="Manage Kiosk Category"
            />
            <div className="p-5">
              <div className="flex justify-between items-center">
                <SearchBar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>
              <CategoryTable />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && <ModalAddCategory />}
    </>
  );
}

export default Category