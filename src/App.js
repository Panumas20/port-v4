import './App.css';
import { Box } from '@mui/material';
import SlideBar from './components/layouts/SlideBar';
import ListMenu from './components/menu/ListMenu';
import Home from './components/contents/Home';

function App() {
	return (
		<Box sx={{ display: 'flex' }}>
			<SlideBar />
			<Box sx={{ display: 'grit' }}>
				<div>
					<Home />
				</div>
				<div>
					<h3>Content 2</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus, nam repellat similique sunt magnam aspernatur error praesentium fugiat accusantium, obcaecati alias omnis provident
						voluptate! Ut reprehenderit laboriosam accusantium distinctio sint vitae sunt temporibus repellendus cum aliquam ab, debitis vel aspernatur. Perferendis, blanditiis deserunt quisquam totam
						vel rem doloribus at amet pariatur itaque cum! Ratione, hic? Dolore, temporibus recusandae. Eligendi ad architecto ab ea. Dolor cum recusandae ipsum odio quisquam accusantium? Ratione
						nulla officia aut dolor distinctio qui. Vero sit suscipit harum animi obcaecati placeat facere praesentium nostrum error officiis numquam itaque dolor ipsam quo temporibus, omnis optio
						fuga perferendis.
					</p>
				</div>
				<div>
					<h3>Content 3</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus, nam repellat similique sunt magnam aspernatur error praesentium fugiat accusantium, obcaecati alias omnis provident
						voluptate! Ut reprehenderit laboriosam accusantium distinctio sint vitae sunt temporibus repellendus cum aliquam ab, debitis vel aspernatur. Perferendis, blanditiis deserunt quisquam totam
						vel rem doloribus at amet pariatur itaque cum! Ratione, hic? Dolore, temporibus recusandae. Eligendi ad architecto ab ea. Dolor cum recusandae ipsum odio quisquam accusantium? Ratione
						nulla officia aut dolor distinctio qui. Vero sit suscipit harum animi obcaecati placeat facere praesentium nostrum error officiis numquam itaque dolor ipsam quo temporibus, omnis optio
						fuga perferendis.
					</p>
				</div>
				<div>
					<h3>Content 4</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus, nam repellat similique sunt magnam aspernatur error praesentium fugiat accusantium, obcaecati alias omnis provident
						voluptate! Ut reprehenderit laboriosam accusantium distinctio sint vitae sunt temporibus repellendus cum aliquam ab, debitis vel aspernatur. Perferendis, blanditiis deserunt quisquam totam
						vel rem doloribus at amet pariatur itaque cum! Ratione, hic? Dolore, temporibus recusandae. Eligendi ad architecto ab ea. Dolor cum recusandae ipsum odio quisquam accusantium? Ratione
						nulla officia aut dolor distinctio qui. Vero sit suscipit harum animi obcaecati placeat facere praesentium nostrum error officiis numquam itaque dolor ipsam quo temporibus, omnis optio
						fuga perferendis.
					</p>
				</div>
			</Box>
		</Box>
	);
}

export default App;
