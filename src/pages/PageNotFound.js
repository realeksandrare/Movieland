import { Link } from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'

import pageNotFound from '../assets/images/pagenotfound.png'

export const PageNotFound = () => {
	useTitle(`Page Not Found`)

	return (
		<main>
			<section className='flex flex-col justify-center items-center'>
				<div className='my-8 max-w-3xl'>
					<img src={pageNotFound} alt='Error 404: Page Not Found' />
				</div>
				<div>
					<Link to='/'>
						<button className='mt-4 py-2.5 px-5 bg-buttonBlue rounded hover:bg-buttonBlueHover text-black font-medium focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600'>
							Back to home
						</button>
					</Link>
				</div>
			</section>
		</main>
	)
}
