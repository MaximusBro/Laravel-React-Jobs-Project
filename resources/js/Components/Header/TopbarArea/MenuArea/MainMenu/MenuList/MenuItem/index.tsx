import React, { memo, useCallback, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItemProps {
	title: string;
	hrefTitle: string;
	list: Array<listProps>
}
interface listProps {
	listTitle: string;
	listHref: string;
}


const MenuItem: React.FC<MenuItemProps> = memo(({ title, hrefTitle, list }) => {

	const [showAccordion, setShowAccordion] = useState(false);

	const toggleShowCardion = useCallback(() => {
		setShowAccordion(state => !state)
	}, []);


	return (
		<li className={showAccordion ? "menu-item-has-children active" : "menu-item-has-children"}>
			<a href={hrefTitle} className="drop-down" >{title}</a >
			<i onClick={toggleShowCardion}
				className={showAccordion ? "bi bi-plus dropdown-icon active"
					: "bi bi-plus dropdown-icon"}
			></i>
			<AnimatePresence>
				{showAccordion && (
					<motion.ul
						initial={{ height: 0, overflow: "hidden" }}
						animate={{ height: "auto", }}
						exit={{ height: 0 }}
						transition={{ duration: 0.5 }}
						className="sub-menu" >
						{list.map((item, index) => {
							const { listTitle, listHref } = item;
							return (
								<li key={index}><a href={listHref}>{listTitle}</a></li>
							)
						})}
					</motion.ul>
				)
				}
			</AnimatePresence>
			{!showAccordion && (
				<ul
					className="sub-menu" >
					{list.map((item, index) => {
						const { listTitle, listHref } = item;
						return (
							<li key={index}><a href={listHref}>{listTitle}</a></li>
						)
					})}
				</ul>
			)}

		</li >
	)
})

export default MenuItem