import LanguageSelect from "./LanguageSelect"
const Topbar = () => {
	return (
		<div>
			<div className="top-bar">
				<p>Welcome Our Job Portal! <a href="bookmark.html">Save Jobs</a></p>
				<div className="top-bar-right">
					<LanguageSelect />
					<div className="social-area">
						<ul>
							<li><a href="https://www.facebook.com/"><i className="bx bxl-facebook"></i></a></li>
							<li><a href="https://twitter.com/"><i className='bx bxl-twitter'></i></a></li>
							<li><a href="https://www.linkedin.com/"><i className='bx bxl-linkedin'></i></a></li>
							<li><a href="https://www.instagram.com/"><i className='bx bxl-instagram' ></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Topbar