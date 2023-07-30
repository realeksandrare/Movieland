import { Link } from 'react-router-dom'

export const Footer = () => {
	return (
		<footer className='p-4 bg-neutral-100 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
			<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
				© 2030{' '}
				<Link to='/' className='hover:underline'>
					Movieland
				</Link>
				. All Rights Reserved.
			</span>
			<ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
				<li>
					<button className='mr-4 hover:underline md:mr-6 '>Instagram</button>
				</li>
				<li>
					<button className='mr-4 hover:underline md:mr-6'>LinkedIn</button>
				</li>
				<li>
					<button className='mr-4 hover:underline md:mr-6'>Youtube</button>
				</li>
				<li>
					<button className='hover:underline'>Github</button>
				</li>
			</ul>
		</footer>
	)
}
