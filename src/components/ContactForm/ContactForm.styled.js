import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
  padding: 30px 0;
`;

export const Input = styled.input`
  width: 210px;
  height: 20px;
  padding-left: 10px;
`;

export const Button = styled.button`
  background-color: ${props => (props.main ? 'green' : 'transparent')};
  display: inline-flex;
  width: 150px;
  height: 35px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: ${props => (props.round ? props.round : '2px')};
  transition: all 250ms linear;
  &:hover {
    background-color: green;
    border-color: transparent;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
