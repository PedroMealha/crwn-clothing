import styled, { css } from "styled-components";

const QuantityInputStyles = css`
  border: 1px solid #ccc;
  user-select: none;
  height: 100%;
  line-height: 30px;
`;

const ArrowStyles = css`
  display: inline-block;
  width: 30px;
  background: #f1f1f1;
  color: #444;
  font-weight: bold;
  cursor: pointer;

  &:active {
    background: #ddd;
  }
`;

export const CheckoutItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
`;

export const BackgroundImage = styled.img`
  width: auto;
  max-height: 150px;
`;

export const Remove = styled.button`
  font-size: 1.5em;
  outline: none;
  background: none;
  border: none;
  width: 1em;
  height: 1em;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  text-align: center;
`;

export const Value = styled.span`
  ${QuantityInputStyles}
  width: 60px;
  text-align: center;
`;

export const Decrement = styled.span`
  ${QuantityInputStyles};
  ${ArrowStyles};
  border-right: none;
  border-radius: 4px 0 0 4px;
`;

export const Increment = styled.span`
  ${QuantityInputStyles};
  ${ArrowStyles};
  border-left: none;
  border-radius: 0 4px 4px 0;
`;
