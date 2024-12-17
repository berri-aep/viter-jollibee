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
const [isCategoryEdit,setIsCategoryEdit] = React.useState(null);

const handleAdd = () => {
  dispatch(setIsAdd(true));
};
  return (
    <>
    
      <section className="layout-main">
        <div className="layout-div">
          <SideNavigation menu="category" />
          <main>
            <Header title="Category" subtitle="Manage Kiosk Category" />
            <div className="p-5">
              <div className="flex justify-between items-center">
               <div></div>
                <button className="btn btn-add" type="reset" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>
              <CategoryTable
                isCategoryEdit={isCategoryEdit}
                setIsCategoryEdit={setIsCategoryEdit}
              />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && (
        <ModalAddCategory
          isCategoryEdit={isCategoryEdit}
          setIsCategoryEdit={setIsCategoryEdit}
        />
      )}
    </>
  );
}

export default Category