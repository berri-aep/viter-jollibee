import React from "react";
import SliderBanner from "./SliderBanner";
import MenuTitle from "./MenuTitle";
import SideNav from "./SideNav";
import MenuList from "./MenuList";
import ModalCart from "./ModalCart";
import ToastSuccess from "./ToastSuccess";
import useQueryData from "@/components/custom-hook/useQueryData";

const Order = () => {
  const [categoryId, setCategoryId] = React.useState("");
  const [cartData, setCartData] = React.useState([]);
  const [showCart, setShowCart] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

    const {
      isLoading,
      isFetching,
      error,
      data: result,
      status,
    } = useQueryData(
      `/v2/category`, //endpoint
      "get", //method
      "category" //key
   );

   const getCategoryName = (categoryId, categoryResult) => {
    let categorySelectName = '';

    categoryResult?.data.map((item)=>{
      if(Number(categoryId) === Number(item.category_aid)){
        categorySelectName = item.category_title;
      }
   });
   return categorySelectName;
};
   const categoryName = categoryId === "" ? "value meal" : getCategoryName(categoryId, result);

  const getTotal = cartData.reduce((acc, item) => {
    return acc + item.food_price * item.quantity;
  },0)

  return (
    <>
      <SliderBanner />

      <div className="grid grid-rows-[auto_,1fr_,auto] min-h-[calc(100vh-200px)]">
        <MenuTitle categoryName={categoryName} />
        <section className="grid grid-cols-[150px_1fr] bg-myred px-3">
          <aside className="m-1 bg-white rounded-md h-[58vh] overflow-y-scroll custom-scroll">
            <SideNav
              setCategoryId={setCategoryId}
              isLoading={isLoading}
              isFetching={isFetching}
              result={result}
            />
          </aside>
          <main className="m-1 bg-white rounded-md h-[58vh] overflow-y-auto custom-scroll">
            <MenuList
              categoryId={categoryId}
              cartData={cartData}
              setCartData={setCartData}
              setIsSuccess={setIsSuccess}
            />
          </main>
        </section>
        <div className="flex p-1 px-3 justify-between item-center bg-myred text-white">
          <button className="px-4 py-2 border border-white rounded-md">
            Cancel
          </button>

          <div className="px-4 py-2 border border-white rounded-md w-[300px] text-center">
            <small>Total Order</small>
            <h4 className="mb-0">P {getTotal.toFixed(2)}</h4>
          </div>

          <button
            className="px-4 py-2 bg-myyellow text-white rounded-md relative"
            onClick={() => setShowCart(true)}
          >
            {cartData.length > 0 && (
              <span className="absolute -top-2 -left-2 text-[12px] font-bold  bg-white text-myred rounded-full size-[20px] grid place-content-center">
                {cartData.length}
              </span>
            )}
            View Cart
          </button>
        </div>
      </div>
      {showCart && (
        <ModalCart
          setShowCart={setShowCart}
          cartData={cartData}
          setCartData={setCartData}
          getTotal={getTotal}
          setIsSuccess={setIsSuccess}
        />
      )}
      {isSuccess && <ToastSuccess setIsSuccess={setIsSuccess} />}
    </>
  );
};

export default Order;
