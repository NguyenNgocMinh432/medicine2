import React from 'react';

export default class IntroduceLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
           introduceBelow: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:3000/introduceBelow")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                       introduceBelow: result,
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

        const { error, isLoaded,introduceBelow } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div
                  style={
                      {
                          marginLeft:"20px"
                      }
                  }
                >
                    {introduceBelow.map(item => (
                        <div
                            key={item.id}

                        >
                            <div
                            
                            >
                                <div
                                >
                                    <p
                                        style={
                                            {
                                                fontWeight: "bold",
                                                fontSize: "30px",
                                                marginTop:"-5px",
                                               
                                            }
                                        }
                                    >
                                        {item.title}
                                    </p>
                                </div>
                                <div>
                                    <p
                                    >
                                        {item.content}
                                    </p>
                                </div>
                                <di>
                                    <button
                                    style={
                                        {
                                            width:"150px",
                                            height:"40px",
                                            borderRadius: "5px",
                                            backgroundColor: "rgb(125, 152, 243)"
                                        }
                                    }
                                    >
                                        Xem Chi Tiết
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