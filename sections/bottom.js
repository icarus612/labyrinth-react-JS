import { useEffect } from 'react';
import cx from 'classnames'

import { animateLI } from 'modules/list-item.js';
import Card from 'components/card';

import layout from 'styles/layout.module.scss'
import global from 'styles/global.module.scss'

export default (props) => {

	useEffect(() => {
		animateLI();
	})
	
	return (
		<section className={global.animated_bottom} id="list-dot-outer">
			<div className="container" id="list-dot-start">
				<div className="d-flex flex-column flex-sm-row flex-nowrap justify-content-start align-items-stretch" >
					<div className='col-2 image'>
						<div className="throbber top-throbber">
							<div className="throbber-inner pulse1"></div>
							<div className="animated-dot mv-1"></div>
							<div className="animated-dot mv-2"></div>
							<div className="animated-dot mv-3"></div>
						</div>
					</div>
					<div className={cx(layout.block_10, layout.text_left)}>
						<h2>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et risus sapien. Aliquam tempus sapien non laoreet posuere.
							</h2>
					</div>
				</div>
				<div className={cx(layout.f_col, layout.justify_center, layout.align_end)} id="list-stage">
					<div className="throbber mid-throbber">
						<div className="throbber-inner pulse2"></div>
					</div>
					<Card
						title="Speed"
						description="
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et risus sapien. Aliquam tempus sapien non laoreet posuere. Fusce dolor nulla, interdum ultricies quam vitae, sagittis interdum enim. Nulla a nunc enim. Vestibulum mollis sodales tincidunt. Nulla ullamcorper dui quis magna feugiat, vel fringilla libero tristique. Nulla aliquet aliquam nisl, et aliquam nibh lacinia quis.    
						"
						pulsar="throbber-inner pulse3"
					/>
					<Card
						title="Depth"
						description="
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et risus sapien. Aliquam tempus sapien non laoreet posuere. Fusce dolor nulla, interdum ultricies quam vitae, sagittis interdum enim. Nulla a nunc enim. Vestibulum mollis sodales tincidunt. Nulla ullamcorper dui quis magna feugiat, vel fringilla libero tristique. Nulla aliquet aliquam nisl, et aliquam nibh lacinia quis.    
						"
						pulsar="throbber-inner pulse4"
					/>
					<Card
						title="Functionality"
						description="
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et risus sapien. Aliquam tempus sapien non laoreet posuere. Fusce dolor nulla, interdum ultricies quam vitae, sagittis interdum enim. Nulla a nunc enim. Vestibulum mollis sodales tincidunt. Nulla ullamcorper dui quis magna feugiat, vel fringilla libero tristique. Nulla aliquet aliquam nisl, et aliquam nibh lacinia quis.    
						"
						pulsar="throbber-inner pulse5"
					/>
				</div>
			</div>
		</section>
	)
}