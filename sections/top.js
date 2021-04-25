import React, { useEffect } from 'react';
import anime from '../../assets/anime/lib/anime.es.js';
import { firstAnimation } from '../../assets/js/firstAnimation.js';

const Top = (props) => {
	useEffect(()=> {
		anime({
			targets: ".first-throbber .throbber-inner",
			scale: 1.6,
			border: "0px",
			easing: "easeInCubic",
			direction: "alternate",
			loop: true,
			duration: 1500,
		  });
		firstAnimation();
  });
	
	return (
		<section className=" position-relative overflow-visible pt-5" id='top'>
			<div className="container" id="top-container">
				<div className="d-flex flex-wrap flex-row">
					<div className="col-5 py-md-3 text-center text-white my-4">
						<div className="top-box d-flex flex-column p-5 text-center overflow-visible">
							<h1 className="dark qHeader">
								Quest: A Creative Landing Page Theme For Easy Use
							</h1>
							<h3 className="dark qHeader">
								TL;DR: Scroll through to see some cool interactive and reactive Javascript.
							</h3>
							<h5 className="dark qHeader2">
								A Project Icarus Design
							</h5>
						</div>
						<div className="throbber first-throbber">
							<div className="animated-dot2 mv-6"></div>
							<div className="throbber-inner"></div>
						</div>
					</div>
					<div className="col-5 py-md-3 text-center text-white my-4"></div>
					<div className="col-1 py-md-3 text-center text-white my-4" id="whereAmI">
						<div className="throbber second-throbber">
							<div className="throbber-inner pulse6"></div>
						</div>
					</div>
					<div className="col-10 py-md-3 text-center text-white my-4"></div>
					<div className="col-1 py-md-3 text-center text-white my-4">
						<div className="spring"></div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Top;