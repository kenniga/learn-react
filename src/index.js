import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <Avatar user={props.author} />
//         <UserInfo user={props.author />
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// function Avatar(props) {
// 	return (
// 		<img className="Avatar"
// 			src={props.user.avatarUrl}
// 			alt={props.user.name}
// 		/>
// 	);
// }

// function UserInfo(props) {
// 	return (
// 		<div className="UserInfo">
// 			<Avatar user={props.user} />
// 			<div className="UserInfo-name">
// 				{props.user.name}
// 			</div>
// 		</div>
// 	);
// }

// function Apps() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//     <div>
//     	<Comment
//     </div>
//   );
// }

// function Clock(props) {
// 	return (
// 		<div>
// 			<h1>
// 				Hello, world!
// 			</h1>
// 			<h2>
// 				It is {props.date.toLocaleTimeString()}.
// 			</h2>
// 		</div>
// 	)
// }

class Clock extends React.Component {
	render() {
		return (
			<div>
				<h1>
					Hello, world!
				</h1>
				<h2>
					It is {this.props.date.toLocaleTimeString()}.
				</h2>
			</div>
		)
	}
}

function tick() {
	ReactDOM.render(
		<Clock date={new Date()} />,
		document.getElementById('root')
	);
}

setInterval(tick, 1000);

// ReactDOM.render(
//   <Apps />,
//   document.getElementById('root')
// );