import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTitle } from '../hooks/useTitle'
import backupPoster from '../assets/images/backup_poster.jpg'

export const MovieItem = () => {
	const params = useParams()
	const [movie, setMovie] = useState({})

	const moviePoster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : backupPoster

	useEffect(() => {
		async function fetchMovie() {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${params.id}?api_key=37bd983172fb0f30363c881eebb5c975`
			)
			const json = await response.json()
			setMovie(json)
		}
		fetchMovie()
	}, [])

	const imdbMovieLink = `http://imdb.com/title/${movie.imdb_id}`

	useTitle(movie.title)

	return (
		<main className='flex'>
			<section className='flex flex-wrap justify-around items-center py-5'>
				<div className='max-w-sm px-3'>
					<img className='rounded-lg' src={moviePoster} alt={`${movie.title} movie poster`} />
				</div>

				<div className='max-w-xl text-gray-700 dark:text-gray-400 text-lg px-3  special:ml-16'>
					<h1 className='text-4xl my-3 font-bold text-center lg:text-left text-black dark:text-white'>{movie.title}</h1>
					<p className='my-4'>{movie.overview}</p>

					{movie.genres ? (
						<ul className='my-7 flex flex-wrap gap-2'>
							{movie.genres.map(genre => (
								<li
									key={genre.id}
									className='mr-2 bg-gray-100 dark:bg-transparent inline-block border border-gray-300 rounded dark:border-gray-600 p-2'>
									{genre.name}
								</li>
							))}
						</ul>
					) : (
						''
					)}

					<div className='flex items-center'>
						<svg
							className='w-4 h-4 text-yellow-300 mr-1'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 22 20'>
							<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
						</svg>
						<p className='ml-2  text-gray-900 dark:text-white'>{movie.vote_average}</p>
						<span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400'></span>
						<span className=' text-gray-900 dark:text-white'>{movie.vote_count} reviews</span>
					</div>

					<p className='my-4'>
						<span className='mr-2 font-bold'>Runtime:</span>
						<span className=''>{movie.runtime} min</span>
					</p>
					<p className='my-4'>
						<span className='mr-2 font-bold'>Budget:</span>
						<span className=''>{movie.budget}</span>
					</p>
					<p className='my-4'>
						<span className='mr-2 font-bold'>Release Date:</span>
						<span className=''>{movie.release_date}</span>
					</p>
					<p className='my-4'>
						<span className='mr-2 font-bold'>Revenue:</span>
						<span className=''>{movie.revenue}</span>
					</p>
					<p className='my-4'>
						<span className='mr-2 font-bold'>IMDB code:</span>
						<a className='' href={imdbMovieLink} target='_blank' rel='noreferrer'>
							{movie.imdb_id}
						</a>
					</p>
				</div>
			</section>
		</main>
	)
}
