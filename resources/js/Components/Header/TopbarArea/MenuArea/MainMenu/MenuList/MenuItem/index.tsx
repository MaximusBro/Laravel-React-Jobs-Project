import React, { useCallback, useState, useEffect } from 'react'
import { useAnimate, usePresence } from 'framer-motion';

interface MenuItemProps {
	title: string;
	hrefTitle: string;
	list: Array<listProps>
}
interface listProps {
	listTitle: string;
	listHref: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, hrefTitle, list }) => {
	const [isPresent] = usePresence();
	const [submenu, animateSubmenu] = useAnimate();
	const [showAccordion, setShowAccordion] = useState(false);

	const toggleShowCardion = useCallback(() => {
		setShowAccordion(state => !state)
	}, []);

	useEffect(() => {
		if (isPresent) {
			const enterAnimation = async () => {
				await animateSubmenu(
					submenu.current,
					{
						height: showAccordion ? "auto" : 0,
						opacity: showAccordion ? 1 : 0
					},
					{ duration: 0.2 },
				)
			}
			enterAnimation()
		}
	}, [showAccordion])

	return (
		<li className={showAccordion ? "menu-item-has-children active" : "menu-item-has-children"}>
			<a href={hrefTitle} className="drop-down" > {title}</a >
			<i onClick={toggleShowCardion} className={showAccordion ? "bi bi-plus dropdown-icon active" : "bi bi-plus dropdown-icon"}></i>
			<ul ref={submenu} className="sub-menu" style={showAccordion ? { opacity: 1 } : { opacity: 0 }}>
				{list.map((item, index) => {
					const { listTitle, listHref } = item;
					return (
						<li key={index}><a href={listHref}>{listTitle}</a></li>
					)
				})}
			</ul>
		</li >
	)
}

export default MenuItem