import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
`;

export const Name = styled.h3`
  margin: 12px 0 8px;
  font-size: 1.2rem;
  color: #333;
`;

export const Price = styled.p`
  font-weight: bold;
  color: #2ecc71;
  margin-bottom: 12px;
`;

export const Button = styled.button`
    padding: 10px 16px;
    width: 100%;
    border: none;
    border-radius: 8px;
    background: ${props => props.$inCart ? '#ccc' : '#27ae60'};
    color: #fff;
    font-weight: 600;
    cursor: ${props => props.$inCart ? 'default' : 'pointer'};
    transition: 0.3s;

    &:hover {
        background: ${props => props.$inCart ? '#ccc' : '#219150'};
    }
`;

