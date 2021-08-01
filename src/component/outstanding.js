import React from 'react';
const pad = {
    padding: "20px",
    width: "200px",
    height: "300px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    marginTop: "50px",
    marginLeft: "20px"
}
export default class outstanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            outstanding: []
        };
    }


    componentDidMount() {
        fetch(" http://localhost:3000/outstanding")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        outstanding: result,
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

        const { error, isLoaded, outstanding } = this.state;
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
                            marginLeft: "140px",
                            marginRight: "120px"
                        }
                    }
                >
                    {outstanding.map(item => (
                        <div
                            key={item.id}

                        >
                            <div
                                style={
                                    {
                                        display: "flex"
                                    }
                                }
                            >   
                                <div>
                                    <img
                                        style={
                                            {
                                                width: "280px",
                                                height: "180px",
                                                borderRadius: "10px"
                                            }
                                        }
                                        src={item.image} />
                                </div>
                                <div
                                style={
                                    {
                                        marginTop:"-20px",
                                        marginLeft:"10px",
                                        width: "333px"
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