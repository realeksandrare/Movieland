import { Link } from 'react-router-dom'
import backupPoster from '../assets/images/backup_poster.jpg'

export const MovieCard = ({ movie }) => {
	const { title, overview, poster_path, id } = movie

	return (
		<div className=' max-w-sm m-4 bg-neutral-200 border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
			<Link to={`/movie/${id}`}>
				<img
					className='rounded-t-lg'
					src={{ poster_path } ? `https://image.tmdb.org/t/p/w500${poster_path}` : { backupPoster }}
					alt='movie'
				/>
			</Link>
			<div className='p-5'>
				<Link to={`/movie/${id}`}>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
				</Link>
				<p className=' mb-3 font-normal text-gray-600 dark:text-gray-400'>{overview}</p>
			</div>
		</div>
	)
}
