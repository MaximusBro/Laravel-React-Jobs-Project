import React from "react"
import MenuList from "./MenuList";
import MobileMenu from "./MobileMenu";
import HeaderImg from "/public/assets/images/header1-logo.svg";

interface MainMenuProps {
	showMenu: boolean;
	setShowMenu(isShowedMenu: boolean): void;
}
const MainMenu: React.FC<MainMenuProps> = ({ showMenu, setShowMenu }) => {
	return (
		<>
			<div className={showMenu ? "main-menu show-menu" : "main-menu"}>
				<div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
					<div className="mobile-logo-wrap">
						<a href="index.html"><img alt="image" src={HeaderImg} /></a>
					</div>
					<div className="menu-close-btn"
						onClick={() => setShowMenu(false)}>
						<i className="bi bi-x-lg"></i>
					</div>
				</div>
				<MenuList />
				<MobileMenu />
			</div>
		</>
	)
}

export default MainMenu