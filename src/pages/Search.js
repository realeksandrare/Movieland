import { useSearchParams } from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'
import { useFetch } from '../hooks/useFetch'
import { MovieCard } from '../components'

export const Search = ({ apiPath }) => {
	const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get('q')
	const { data: movies } = useFetch(apiPath, queryTerm)

useTitle(`Search results for: ${queryTerm}`)

	return (
		<main>
      <section>
        <p className='text-3xl text-gray-700 dark:text-white mt-4'>
          {movies.length === 0 ? `No results found for '${queryTerm}'` : `Result for: '${queryTerm}'`}
        </p>
      </section>
			<section className='max-w-7xl mx-auto py-7 mt-5'>
				<div className='flex justify-start flex-wrap '>
					{movies.map(movie => (
						<MovieCard movie={movie} key={movie.id} />
					))}
				</div>
			</section>
		</main>
	)
}
