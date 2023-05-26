import "../css/app.css"
import "../css/all.css";
import "../css/bootstrap.min.css"
import './bootstrap';

import "../css/summernote.min.css"
import "../css/boxicons.min.css"
import "../css/bootstrap-icons.css"
import "../css/jquery-ui.css"
import "../css/swiper-bundle.css"
import "../css/slick-theme.css"
import "../css/slick.css";
import "../css/nice-select.css"
import "../css/select2.min.css"
import "../css/animate.css"
import "../css/jquery.fancybox.min.css"
import "../css/datepicker.min.css"
import "../css/jquery-ui.css";
import "../css/style.css";



import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
	setup({ el, App, props }) {
		const root = createRoot(el);

		root.render(<App {...props} />);
	},
	progress: {
		color: '#4B5563',
	},
});
