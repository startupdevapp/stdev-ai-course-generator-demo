import Link from 'next/link';

const Hero = () => {
	return (
		<section className="bg-gray-50">
			<div className="mx-auto max-w-screen-xl px-10 py-20 lg:flex lg:items-center">
				<div className="mx-auto max-w-xl text-center">
					<h1 className="text-4xl font-extrabold sm:text-5xl text-myPrimary leading-[60px]">
						{' '}
						Ai Course Generator <br />
						<strong className="text-black mt-3 font-extrabold sm:block leading=[60px]">
							Customized learning paths powered by AI
						</strong>
					</h1>

					<p className="mt-4 sm:text-xl/relaxed">
						Personalize learning by creating AI-powered courses and customizing
						learning paths to suit your goals and unique environment
					</p>

					<div className="mt-8 flex justify-center">
						<Link
							href={'/dashboard'}
							className="block w-full bg-myPrimary px-12 py-3 text-sm rounded-sm font-medium text-white shadow hover:bg-myPrimary/80 focus:outline-none focus:ring active:bg-myPrimary sm:w-auto"
						>
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
