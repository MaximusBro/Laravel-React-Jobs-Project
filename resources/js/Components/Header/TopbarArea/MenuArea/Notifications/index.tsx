import { useState, useCallback, useEffect } from "react"
import NotificationsItem from "./NotificationsItem";
import NotificationIcon from "./NotificationIcon"
import CompanyImg from "/public/assets/images/bg/company-logo/notifacion-3.png";

const notificationsArray = [
	{ text: "Your application has accepted in 5 vacancies.", time: "10 min ago", srcCompany: CompanyImg, },
	{ text: "Your application has accepted in 5 vacancies.", time: "10 min ago", srcCompany: CompanyImg, },
	{ text: "Your application has accepted in 5 vacancies.", time: "10 min ago", srcCompany: CompanyImg, },
];

const Notifications = () => {
	const [notifications, setNotifications] = useState(0);
	const [notificationsShow, setNotificationsShow] = useState(false);
	const toggleNotifications = useCallback(() => {
		setNotificationsShow(state => !state);

	}, []);

	useEffect(() => {
		setNotifications(notificationsArray.length);
	}, [])

	return (
		<li>
			<div className="btn-group dropdown">
				<NotificationIcon notifications={notifications} toggleNotifications={toggleNotifications} />
				<div className={notificationsShow ?
					" notifacion-card dropdown-menu show"
					: " notifacion-card dropdown-menu"}
					aria-labelledby="dropdownMenuButton2"
					style={notificationsShow ?
						{
							position: "absolute",
							inset: "0px auto auto 0px",
							margin: "0px",
							transform: "translate3d(-246px, 36px, 0px)"
						}
						: {}}
				>
					<h6 className="title">{notifications} Notifications</h6>
					<ul>
						{notificationsArray.map((item, index) => {
							return <NotificationsItem key={index} {...item} />
						})}
					</ul>
					<div className="view-all">
						<a href="#">See All Notifications</a>
					</div>
				</div>
			</div>
		</li>
	)
}

export default Notifications