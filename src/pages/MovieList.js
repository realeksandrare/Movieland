import { useFetch } from '../hooks/useFetch'
import { useEffect } from 'react'
import { useTitle } from '../hooks/useTitle'
import { MovieCard } from '../components'

export const MovieList = ({ apiPath, title }) => {
	const { data: movies } = useFetch(apiPath)

	useTitle(`${title}`)

	return (
		<main>
			<section className='max-w-7xl mx-auto py-7 mt-5'>
				<div className='flex justify-start flex-wrap other:justify-evenly'>
					{movies.map(movie => (
						<MovieCard movie={movie} key={movie.id} />
					))}
				</div>
			</section>
		</main>
	)
}
