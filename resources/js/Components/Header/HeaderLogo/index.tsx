import HeaderImg from "/public/assets/images/header1-logo.svg"
const HeaderLogo = () => {
	return (
		<div className="header-main-logo d-lg-block d-none">
			<a href="index.html"><img alt="image" src={HeaderImg} /></a>
		</div>
	)
}

export default HeaderLogo