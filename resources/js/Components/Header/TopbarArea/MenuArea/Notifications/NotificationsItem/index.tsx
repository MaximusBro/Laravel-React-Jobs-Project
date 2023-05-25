import React from "react";
import ClockImg from "/public/assets/images/icon/clock-1.svg"
interface NotificationsItemProps {
	srcCompany: string;
	text: string;
	time: string;
}
const NotificationsItem: React.FC<NotificationsItemProps> = React.memo(({ srcCompany, text, time }) => {

	return (
		<>
			<li>
				<div className="icon">
					<img src={srcCompany} alt="" />
				</div>
				<div className="content">
					<h6><a href="#">{text}</a></h6>
					<span><img src={ClockImg} alt="" /> {time}</span>
				</div>
			</li>
		</>
	)
}
)

export default NotificationsItem