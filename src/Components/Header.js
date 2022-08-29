import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
	  <Container>
		  <h1>
			Todo-List
		  </h1>
	</Container>
  )
}

export default Header

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 15px;

	h1 {
		font-size: 50px;
		background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,110,1) 47%, rgba(0,212,255,1) 100%);
		color: whitesmoke;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-stroke: 4px transparent;
		letter-spacing: 4px;
		font-weight: 400;
	}

	h1:hover {
		background-size: 200%;
		animation: ani 5s linear infinite;
	}

	@keyframes ani {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 400% 0;
		}
		100% {
			background-position: 0 0;
		}
	}
`