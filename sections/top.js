import { useEffect } from 'react'
import cx from 'classnames'
import anime from 'animejs'
import layout from 'styles/layout.module.scss'
import global from 'styles/global.module.scss'
import { firstAnimation } from 'modules/first-animation.js';

const Top = (props) => {
	useEffect(() => {
		anime({
			targets: ".first-throbber .throbber-inner",
			scale: 1.6,
			border: "0px",
			easing: "easeInCubic",
			direction: "alternate",
			loop: true,
			duration: 1500,
		});
		firstAnimation({
			_second: global.second_throbber,
			_start: global.first_throbber,
			_spring: global.spring,
			_catapult: global.catapult_throbber,
			_top: global.content_top,
			_step: global.step2,
		});
	});

	return (
		<div className={cx(global.content_top, layout.container)}>
			<div className={cx(layout.block_5)}>
				<div>
					<h1>
						Quest: A Creative Landing Page Theme For Easy Use
						</h1>
					<h3>
						TL;DR: Scroll through to see some cool interactive and reactive Javascript.
						</h3>
					<h5>
						A Project Icarus Design
						</h5>
				</div>
				<div className={cx(global.throbber, global.first_throbber)}>
					<div className={cx(global.animated_dot2, "mv-6")}></div>
					<div className={cx(global.throbber_inner)}></div>
				</div>
			</div>
			<div className={cx(layout.block_5, layout.text_center)}></div>
			<div className={cx(layout.block_1)} id="whereAmI">
				<div className={cx(global.throbber, global.second_throbber)}>
					<div className={cx(global.throbber_inner, global.pulser6)}></div>
				</div>
			</div>
			<div className={cx(layout.block_10, layout.text_center)}></div>
			<div className={cx(layout.block_1)}>
				<div className={global.spring}></div>
			</div>
		</div>
	)
}
export default Top;