import styled from "styled-components";

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #286382;
  padding: 15px 15px 10px;
  color: #286382;
  font-family: Jost, sans-serif;
  font-size: 16px;
  width: inherit;
  ::placeholder {
    color: #286382;
  }
`;

export const Textarea = styled.textarea`
  border-radius: 5px;
  border: 1px solid #286382;
  padding: 15px 15px 0;
  color: #286382;
  font-family: Jost, sans-serif;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  ::placeholder {
    color: #286382;
  }
`;

export const Title = styled.div`
  font-family: Jost, sans-serif;
  font-weight: 500;
  font-size: 36px;
  color: #132A36;
`;

export const Text = styled(Title)`
  font-size: 20px;
  font-weight: 400;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerModal = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 13px 3px rgba(72, 104, 126, 0.3);
  padding: 30px 30px 40px;
  width: 555px;
`;

export const TitleModal = styled.div`
  text-transform: uppercase;
  font-family: Jost, sans-serif;
  font-size: 24px;
  color: #132A36;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 500;
  margin-top: -20px;
`;