import { useEffect } from 'react';
import cx from 'classnames'

import layout from 'styles/layout.module.scss'
import global from 'styles/global.module.scss'

import { catapult } from 'modules/catapult.js';

export default (props) => {

	useEffect(() => {
		catapult({
			s: global.step3,
			m: global.step4,
			e: global.pulsar5,
			w: global.wall,
			p: global.path,
			catapult: global.catapult
		});
	})

	return (
		<section className={cx(global.content_middle)} id="dot-outer">
			<div className={layout.container}>
				<div className={cx(layout.f_col, layout.justify_center, layout.align_end)}>
					<div className={layout.block_4}>
					</div>
					<div className={cx(layout.block_8, global.wall)}>
						<h4>
							Before we get started this site Isn't necacarilly mobile frindly, but screw off. Its a math puzzle where width is my most important. It all still works it just looks like shit.
            </h4>
					</div>
				</div>
				<div className={cx(layout.f_col, layout.justify_center, layout.align_end)}>
					<div className={cx(global.throbber, global.catapult_throbber)}>
						<div className={cx(global.throbber_inner, global.pulsar8)}></div>
						<div className={cx(global.catapult)}></div>
						<div className={cx(global.animated_dot2, "mv-5")}></div>
					</div>
					<div className={layout.block_3}>
					<div className={global.step3}>
						</div>
					</div>
					<div className={layout.blcok_5}>
						<div className={global.step4}>
							<div className={cx(global.throbber, global.wheel_end_throbber)}>
								<div className={cx(global.throbber_inner, global.pulser7)}></div>
							</div>
						</div>
					</div>
					<div className={cx(layout.f_col, layout.justify_center, layout.align_end)}>
						<div className={cx(layout.block_11, global.path)}>
							<h4>
								Debth
							</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et risus sapien. Aliquam tempus sapien non laoreet posuere. Fusce dolor nulla, interdum ultricies quam vitae, sagittis interdum enim. Nulla a nunc enim. Vestibulum mollis sodales tincidunt. Nulla ullamcorper dui quis magna feugiat, vel fringilla libero tristique. Nulla aliquet aliquam nisl, et aliquam nibh lacinia quis.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

