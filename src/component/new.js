import React from 'react';

const pad = {
    padding: "20px",
    width: "200px",
    height: "360px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    marginTop: "50px",
    marginLeft: "20px"
   
}
export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            card: []
        };
    }


    componentDidMount() {
        fetch("http://localhost:3000/card")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        card: result,
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

        const { error, isLoaded, card } = this.state;
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
                            marginLeft: "125px",
                            marginRight: "130px"
                            
                        }
                    }
                >
                    {card.map(item => (
                        <div
                            key={item.id}
                            style={pad}
                        >
                            <div>
                                <div>
                                    <img

                                    style={
                                        {
                                            width:"150px",
                                        }
                                    }
                                       src={process.env.PUBLIC_URL + item.image} />
                                     
                                </div>
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
                                    <button
                                    style={
                                        {
                                            width: "130px",
                                            height: "40px",
                                            borderRadius: "5px",
                                            backgroundColor:"#007bff",
                                            color: "white"
                                        }
                                    }
                                    >
                                        Liên Hệ Ngay!
                                    </button>
                                </di>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    }
}