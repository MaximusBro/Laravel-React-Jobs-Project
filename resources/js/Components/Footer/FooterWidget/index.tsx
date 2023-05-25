import React from 'react'
interface FooterWidgetProps {
	title: string;
	list: Array<List>;
}
interface List {
	linkTitle: string;
	href: string;
}
const FooterWidget: React.FC<FooterWidgetProps> = ({ title, list }) => {
	return (
		<div className="col-lg-3 col-md-4 col-sm-6 mb--50 d-flex justify-content-sm-start justify-content-center">
			<div className="footer-widget">
				<div className="widget-title">
					<h5>{title}</h5>
				</div>
				<div className="menu-container">
					<ul>
						{list.map((item, index) => {
							const { linkTitle, href } = item;
							return (
								<li key={index}><a href={href}>{linkTitle}<i className='bx bx-up-arrow-alt'></i></a></li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default FooterWidget