import styled from "styled-components/native";

export const Banner = styled.TouchableOpacity<any>`
width: ${props => props.width}px;
height: ${props => props.height}px;
justify-content:center;
align-items:center;
`;

export const Picture = styled.Image`
width: 90%;
height: 90%;
border-radius:10px;
`;

export const Loader = styled.ActivityIndicator`
z-index: 2;
position: absolute;
`;

