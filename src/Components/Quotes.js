import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"

function Quotes() {
	const [quotes, setQuotes] = useState("")

	useEffect(() => {
		const fetchQuotes = async () => {
			await fetch('https://api.quotable.io/random?tags=technology,famous-quotes')
			.then(resp => resp.json())
				.then(respdata => setQuotes(respdata.content))
			.catch(err => console.log(err))
		}

		fetchQuotes()
	}, [])

	const trim = (word) => {
		let length = 100;
		let trimmedString = word.length > length ? word.substring(0, length - 3) + ".." : word;
		trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(".")));
		return trimmedString;
	}

  return (
	  <Container
		animate={{scale: 1 }}
		initial={{ scale: 0 }}
		transition= {{ delay: .9 }}
	  >
		  <h4>Quote of the day</h4>
		  <p>{quotes}</p>
	</Container>
  )
}

export default Quotes

const Container = styled(motion.div)`
	text-align: center;
	margin-bottom: 15px;
	width: 340px;
	overflow: hidden;

	p {
		width: 100%;
		text-align: center;
	}
`