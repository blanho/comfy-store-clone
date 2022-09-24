import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CartButton() {
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">12</span>
        </span>
      </Link>
      <button type="button" className="auth-btn">
        Login
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.2rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -12px;
    right: -12px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    padding: 12px;
    color: var(--clr-white);
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
  }
`;

export default CartButton;
