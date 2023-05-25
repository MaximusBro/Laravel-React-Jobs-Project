import FooterBottom from "./FooterBottom"
import FooterContacts from "./FooterContacts"
import FooterLogo from "./FooterLogo"
import FooterWidget from "./FooterWidget"
import FooterApps from "./FooterWidget/FooterApps"

const FooterData = [
	{
		title: "About Company",
		list: [
			{ linkTitle: "Contact Us", href: "#" },
			{ linkTitle: "Terms & Condition", href: "#" },
			{ linkTitle: "Privacy & Policy", href: "#" },
			{ linkTitle: "Candidate Listing", href: "#" },
		]
	},
	{
		title: "For Candidate’s",
		list: [
			{ linkTitle: "Create Resume", href: "#" },
			{ linkTitle: "Browse Categories", href: "#" },
			{ linkTitle: "Save Jobs List", href: "#" },
			{ linkTitle: "Browse Jobs", href: "#" },
			{ linkTitle: "Candidate Dashboard", href: "#" },
		]
	},
	{
		title: "For Employer’s",
		list: [
			{ linkTitle: "Post A Job", href: "#" },
			{ linkTitle: "Browse Candidates", href: "#" },
			{ linkTitle: "Job Packages", href: "#" },
			{ linkTitle: "Jobs Featured", href: "#" },
			{ linkTitle: "Employer Dashboard", href: "#" },
		]
	},
]
const Footer = () => {
	return (
		<footer className="footer1">
			<div className="container">
				<div className="row justify-content-center">
					{FooterData.map((item, index) => {
						return <FooterWidget key={index} {...item} />
					})}
					<FooterApps />
				</div>
				<div className="footer-btm">
					<FooterLogo />
					<div className="row align-items-center">
						<FooterContacts />
					</div>
					<div className="row border-top align-items-center">
						<FooterBottom />
					</div>
				</div>
			</div>
		</footer >
	)
}

export default Footer