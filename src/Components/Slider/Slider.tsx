import "./slider.scss"

const Slider = () => {
	return (
		<div className="slider">
			<h2 className="slider__title">The Power of Simplicity</h2>
			<p className="slider__description">Instead of spending time searching for the right app, our AI will bring the right app to you.</p>
			<button type="button" className="slider__button">Learn</button>
			<ul className="slider__dots">
				<li className="slider__dot"></li>
				<li className="slider__dot"></li>
				<li className="slider__dot slider__dot--active"></li>
				<li className="slider__dot"></li>
				<li className="slider__dot"></li>
			</ul>
		</div>
	)
}


export {Slider}