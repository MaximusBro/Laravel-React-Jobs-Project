import AppleAppImg from "/public/assets/images/icon/apple-app.svg"
import GooglePlayImg from "/public/assets/images/icon/google-play.svg"
const FooterApps = () => {
	return (
		<div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-end justify-content-center">
			<div className="footer-widget four">
				<div className="widget-title">
					<h5>Download App</h5>
				</div>
				<div className="app-list">
					<ul>
						<li>
							<a href="#"><img src={AppleAppImg} alt="" /></a>
						</li>
						<li>
							<a href="#"><img src={GooglePlayImg} alt="" /></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default FooterApps