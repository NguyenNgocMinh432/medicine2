import React from 'react';
const pad = {
    
    width: "300px",
    height: "530px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    marginTop: "30px",
    marginLeft: "20px"
}
export default class New extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            news: []
        };
    }


    componentDidMount() {
        fetch("http://localhost:3000/news")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        news: result,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {

        const { error, isLoaded, news } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div
                    style={
                        {
                            display: 'flex',
                            marginLeft: "120px",
                            marginRight: "130px"
                        }
                    }
                >
                    {news.map(item => (
                        <div
                            key={item.id}
                            style={pad}
                        >
                            <div>
                                <div>
                                    <img
                                    style={
                                        {
                                            width: "297px",
                                            height: "240px",
                                            borderRadius: "4px"
                                        }
                                    }
                                       src={process.env.PUBLIC_URL + item.image } />
                                       
                                </div>
                                <div
                                style={
                                    {
                                        padding:"10px"
                                    }
                                }
                                >
                                <div
                                >
                                    <p
                                        style={
                                            {
                                                fontWeight: "bold",
                                            }
                                        }
                                    >
                                        {item.title}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        {item.content}
                                    </p>
                                </div>
                                <di>
                                  <p
                                 style={
                                     {
                                        color: "#007bff",
                                     }
                                 }
                                  >Xem Thêm</p>
                                </di>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    }
}