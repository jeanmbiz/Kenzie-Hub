import { Link } from "react-router-dom";
import styled from "styled-components";

export const ModalAddStyled = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 101;

  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.45);
  }

  .content {
    width: 100%;
    max-width: 300px;
    position: relative;
    background-color: var(--color-grey-3);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-2);
    width: 100%;
    height: 50px;
    border-radius: 4px 4px 0px 0px;
    padding: 12px 20px;

    h2 {
      font-weight: 700;
      font-size: 0.875rem;
    }

    button {
      background-color: transparent;
      border: none;
      color: var(--color-grey-1);
      font-weight: 600;
    }
  }

  .mainContent {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    div {
      display: flex;
      flex-direction: column;
      gap: 10px;

      label {
        font-size: 0.75rem;
        display: flex;
        flex-direction: column;
        gap: 10px;

        input {
          padding: 0px 16px;
          height: 48px;
          background-color: var(--color-grey-2);
          border-radius: 4px;
          color: var(--color-grey-0);

          &::placeholder {
            color: var(--color-grey-0);
          }

          &:focus {
            border: 1px solid var(--color-grey-0);
          }
        }
      }

      span {
        color: var(--color-negative);
        font-size: 12px;
        margin-left: 5px;
      }

      select {
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        background: var(--color-grey-2);

        padding: 0 16px;
        height: 48px;

        border-radius: 4px;

        color: var(--color-grey-0);

        &:focus {
          border: 1px solid var(--color-grey-0);
        }

        option {
          font-size: 1rem;
        }
      }
    }

    button {
      width: 100%;
      margin-top: 15px;
      padding: 0px 22px;
      height: 48px;
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
      border-radius: 4px;

      font-weight: 500;
      color: var(--color-grey-0);
    }
  }
`;

export const CloseLinkStyled = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: var(--color-grey-1);
`;
