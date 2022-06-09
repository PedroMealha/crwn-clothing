import styled from "styled-components";

export const Title = styled.h3`
  margin-bottom: 2em;
`;

export const Separator = styled.div`
  margin: 1em 0;
  border-bottom: 1px solid lightgray;
`;

export const CheckoutLabels = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
`;

export const CheckoutTotal = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
  font-size: 1.3em;

  .checkout-count {
    margin-left: 0.3em;
  }
`;

export const CheckoutContainer = styled.div`
  margin: 0 auto;
`;
