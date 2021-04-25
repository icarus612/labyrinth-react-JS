import { useEffect } from 'react';
import { catapult } from '../../assets/js/catapult.js';

export default (props) => {

	useEffect(() => {
		catapult();
	})

	return (
		<section className="pb-5 overflow-visible" id="dot-outer">
			<div className="container" id="dot-start">
				<div className="d-flex flex-row flex-nowrap justify-content-start align-items-stretch" >
					<div className='col-4'>
						<div className='image'></div>
					</div>
					<div className="col-8 p-3 text-left step2">
						<h4 className="">
							Before we get started this site Isn't necacarilly mobile frindly, but screw off. Its a math puzzle where width is my most important. It all still works it just looks like shit.
            </h4>
					</div>
				</div>
				<div className="d-flex flex-column flex-wrap justify-content-center align-items-end workflow" id="stage">
					<div className="throbber catapult-throbber">
						<div className="throbber-inner pulse8"></div>
						<div className="catapult"></div>
						<div className="animated-dot2 mv-5"></div>
					</div>
					<div className="col-3">
						<div className="step3">
						</div>
					</div>
					<div className="col-5">
						<div className=" step4">
							<div className="throbber wheel-end-throbber">
								<div className="throbber-inner pulse7"></div>
							</div>
						</div>
					</div>
					<div className="d-flex flex-column flex-wrap col-12 justify-content-left align-items-end workflow" id="stage">
						<div className="col-11 step2 pl-3 pt-2" id="pathWidth">
							<div>
								<h4 className="description">
									Debth
                </h4>
								<p className="description">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et risus sapien. Aliquam tempus sapien non laoreet posuere. Fusce dolor nulla, interdum ultricies quam vitae, sagittis interdum enim. Nulla a nunc enim. Vestibulum mollis sodales tincidunt. Nulla ullamcorper dui quis magna feugiat, vel fringilla libero tristique. Nulla aliquet aliquam nisl, et aliquam nibh lacinia quis.
                </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

