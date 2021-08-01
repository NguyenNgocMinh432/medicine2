// import React from 'react';

// export default class Newproduct extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             response: {
//                 "card": [

//                 ]
//             }
//         }
//     }
//     componentDidMount() {
//         this.loadCard()
//     }
//     loadCard = () => {
//         var myHeaders = new Headers();
//         myHeaders.append('Content-Type', 'application/json');

//         var raw = JSON.stringify({ "start": 0, "length": 10, "search": { "values": "a" } });

//         var requestOptions = {
//             method: 'POST',
//             headers: myHeaders,
//             body: raw,
//             redirect: 'follow'
//         };
//         fetch(" http://localhost:3000/card", requestOptions)
//             .then(response => response.json())
//             .then(result => {
//                 this.setState({
//                     response: result,
//                 })
//             })
//             .catch(error => console.log('error', error))
            
//     }

//     render() {
//         return (
//             <div>
//                 <Card card={this.state.response.card} />
//             </div>
//         )
//     }
// }

// class Card extends React.Component {
//     render() {
//         return (
//             <div>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>id</th>
//                             <th>title</th>
//                             <th>content</th>
//                             <th>image</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.props.card.map(item => {
//                             return (
//                                 <tr key={item.id}>
//                                     <td>{item.id}</td>
//                                     <td>{item.title}</td>
//                                     <td>{item.content}</td>
//                                     <td>{item.image}</td>
//                                 </tr>
//                             )
//                         })}

//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }