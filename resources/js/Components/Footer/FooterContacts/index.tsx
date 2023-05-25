import FooterSupportImg from "/public/assets/images/icon/footer-support-icon.svg"
const FooterContacts = () => {
	return (
		<>
			<div className="col-lg-6 d-flex justify-content-lg-start justify-content-center">
				<div className="support">
					<div className="icon">
						<img src={FooterSupportImg} alt="" />
					</div>
					<div className="content">
						<h5>Support Line:</h5>
						<a href="tel:+099-03573983465">+099-035 7398 3465</a>
					</div>
				</div>
			</div>
			<div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
				<div className="footer-btm-menu">
					<ul>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Terms of Services</a></li>
						<li><a href="https://www.google.com/maps/place/Egens+Lab/@23.8340712,90.3634979,17z/data=!3m1!4b1!4m5!3m4!1s0x3755c14c8682a473:0xa6c74743d52adb88!8m2!3d23.8340663!4d90.3656866">Our Sitemap</a></li>
					</ul>
				</div>
			</div>
		</>

	)
}

export default FooterContacts;