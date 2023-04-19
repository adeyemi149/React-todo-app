import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import CircularProgress from '@mui/material/CircularProgress';

const Quotes:React.FC = () => {
	const [quotes, setQuotes] = useState("")

	useEffect(() => {
		const fetchQuotes = async () => {
			await fetch('https://api.quotable.io/random?tags=technology,famous-quotes')
				.then(resp => resp.json())
				.then(respdata => setQuotes(respdata.content))
				.catch(err => console.log(err))
		}
		const request = setTimeout(() => { fetchQuotes() }, 1000)
		return () => clearTimeout(request)
	}, [setQuotes])


	return (
		<Container>
			<h4>Quote of the day</h4>
			<div>{quotes ? quotes : <CircularProgress />}</div>

		</Container>
	)
}

export default Quotes

const Container = styled(motion.div)`
	text-align: center;
	margin-bottom: 15px;
	max-width: 340px;
	width: 100%;
	line-height: 1.5;

	img {
		width: 30px;
		padding-top: 30px;
	}
`