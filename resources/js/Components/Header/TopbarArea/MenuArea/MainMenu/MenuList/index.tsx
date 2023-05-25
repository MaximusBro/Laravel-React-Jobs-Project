import MenuItem from "./MenuItem"
const list = [
	{
		title: "Home", hrefTitle: "#", list: [
			{ listTitle: "Home one", listHref: "index.html" },
			{ listTitle: "Home Two", listHref: "index2.html" },
			{ listTitle: "Home Three", listHref: "index3.html" },
			{ listTitle: "Home Four", listHref: "index4.html" },
			{ listTitle: "Home Five", listHref: "index5.html" },]
	},
	{
		title: "Find Jobs", hrefTitle: "#", list: [
			{ listTitle: "Job Category", listHref: "category.html" },
			{ listTitle: "Job Listing 01", listHref: "job-listing1.html" },
			{ listTitle: "Job Listing 02", listHref: "job-listing2.html" },
			{ listTitle: "Job Details", listHref: "job-details.html" },]
	},
	{
		title: "Pages", hrefTitle: "#", list: [
			{ listTitle: "Candidate Dashboard", listHref: "dashboard.html" },
			{ listTitle: "Post A Jobs", listHref: "job-post.html" },
			{ listTitle: "Pricing Plan", listHref: "pricing-plan.html" },
			{ listTitle: "FAQ", listHref: "faq.html" },
			{ listTitle: "Checkout", listHref: "checkout.html" },
			{ listTitle: "Error", listHref: "error.html" },
			{ listTitle: "Login", listHref: "login.html" },
			{ listTitle: "Register", listHref: "register.html" },]
	},
	{
		title: "Company", hrefTitle: "#", list: [
			{ listTitle: "Company Listing 01", listHref: "company-listing1.html" },
			{ listTitle: "Company Listing 02", listHref: "company-listing2.html" },
			{ listTitle: "Company Details", listHref: "company-details.html" },
			{ listTitle: "Company Dashboard", listHref: "company-dashboard.html" },]
	},
	{
		title: "Blog", hrefTitle: "#", list: [
			{ listTitle: "Blog Grid", listHref: "blog-grid.html" },
			{ listTitle: "Blog Standard", listHref: "blog-standard.html" },
			{ listTitle: "Blog Right Sidebar", listHref: "blog-right-sidebar.html" },
			{ listTitle: "Blog Details", listHref: "blog-details.html" },]
	},
]
const MenuList = () => {
	return (
		<div>
			<ul className="menu-list">
				{list.map((item, index) => {
					const { title, hrefTitle, list } = item
					return <MenuItem key={index} title={title} hrefTitle={hrefTitle} list={list} />
				})}
				<li><a href="contact.html">Contact</a></li>
			</ul>
		</div>
	)
}

export default MenuList