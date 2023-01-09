import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getSubtotal,
  removeFromCart,
} from "../features/products/cartSlice";
import { formatCurrency } from "../utilities/currencyFormatter";

const Cart = () => {
  const { cartItems: data, cartTotalAmount: subtotal } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecrease = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleIncrease = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(getSubtotal());
  }, [data, dispatch]);

  return (
    <div className="cart-section container mx-auto py-10">
      <h2 className="cart-headline uppercase text-2xl font-bold space-font text-center mb-10">
        {data.length > 0
          ? `You've added ${data.length} item${data.length > 1 ? "s" : ""}`
          : "Your cart is empty"}
      </h2>

      <div className="start-shopping-btn text-center">
        {data.length === 0 && (
          <Link
            to="/products"
            className="flex items-center justify-center text-sky-500 cursor-pointer text-lg gap-2 group"
          >
            <span>
              <BsArrowLeft className="group-hover:-translate-x-2 duration-300" />
            </span>
            <span>Start Shopping</span>
          </Link>
        )}
      </div>

      {data.length > 0 && (
        <>
          <div className="cart-container ">
            <div className="products-headline grid grid-cols-5 gap-10 border-b pb-3 uppercase font-medium">
              <div className="product-column col-span-2">Product</div>
              <div className="unit-price-column">Unit Price</div>
              <div className="quantity-column">Quantity</div>
              <div className="total-price-column ml-auto">Total Price</div>
            </div>
            <div className="cart-products flex flex-col">
              {data?.map((product) => (
                <div
                  key={product.id}
                  className="product grid grid-cols-5 gap-10 mt-10 border-b pb-5"
                >
                  <div className="product-cart-left flex col-span-2 gap-5">
                    <img
                      className="h-32 w-32 object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="cart-details flex flex-col gap-3 items-start">
                      <span>{product.name}</span>
                      <button
                        onClick={() => handleRemove(product)}
                        className="remove-btn uppercase  text-gray-400 hover:text-rose-500 duration-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="unit-price">
                    {formatCurrency(product.price)}
                  </div>
                  <div className="cart-counter  flex ">
                    <button
                      onClick={() => handleDecrease(product)}
                      className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
                    >
                      -
                    </button>
                    <span className="h-10 w-10 bg-gray-100 flex justify-center items-center border border-gray-300">
                      {product.cartQuantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(product)}
                      className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
                    >
                      +
                    </button>
                  </div>
                  <div className="total-price ml-auto">
                    {formatCurrency(product.price * product.cartQuantity)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-lower flex justify-between items-start py-10">
            <button
              onClick={() => dispatch(clearCart())}
              className="clear-btn uppercase py-3 px-8 border font-medium hover:bg-rose-200 hover:text-rose-600 hover:border-rose-200 duration-300"
            >
              Clear Cart
            </button>
            <div className="subtotal-section flex flex-col items-start gap-2">
              <div className="subtotal-btn flex justify-between w-full text-2xl font-medium">
                <span className="text-sky-500">Subtotal</span>
                <span className="text-rose-500">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              <p className="text-gray-400">
                {" "}
                Taxes and shipping costs are calculated at the checkout
              </p>
              <Link
                to="/"
                className="checkout-btn bg-sky-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest text-center hover:bg-sky-600 duration-300"
              >
                Checkout
              </Link>
              <Link
                to="/products"
                className="continue uppercase text-sky-500 font-medium flex gap-2 items-center group"
              >
                <span>
                  <BsArrowLeft className="group-hover:-translate-x-2 duration-300" />
                </span>
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
