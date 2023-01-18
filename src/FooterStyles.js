import styled from 'styled-components';

export const FooterBox = styled.div `
padding: 10px 10px;
background: #0e1420;
/*#2b235c
#723de3
#be30a0
#3ea9e6
#3ea9e6
#53226c
#32649b*/
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 50px 30px;
}
`;

export const FooterContainer = styled.div `
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
    padding-Top: 2%;
`

export const FooterColumn = styled.div `
display: flex;
flex-direction: column;
text-align: left;
margin-left: 40px;
`;

export const FooterRow = styled.div `
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a `
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: #3382bb;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p `
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;