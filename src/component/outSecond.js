import React from 'react';
const pad = {
   
    width: "200px",
    height: "300px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    marginTop: "50px",
    marginLeft: "20px"
}
export default class outstandingSecond extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            outstandingSecond: []
        };
    }


    componentDidMount() {
        fetch(" http://localhost:3000/outstandingSecond")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        outstandingSecond: result,
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

        const { error, isLoaded, outstandingSecond } = this.state;
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
                    {outstandingSecond.map(item => (
                        <div
                            key={item.id}
                        >
                            <div
                            style={
                                {
                                    display:"flex",
                                    marginTop: "20px"
                                    
                                }
                            }
                            >
                                <div>
                                    <img
                                    style={
                                        {
                                            width:"280px",
                                            height:"180px",
                                            borderRadius: "10px"
                                        }
                                    }
                                        src={item.image} />
                                </div>
                                <div
                                style={
                                    {
                                        marginTop:"-20px",
                                        width:"333px",
                                        marginLeft:"10px"
                                        
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
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    }
}