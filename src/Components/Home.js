import React from "react";

const Home = () => {
    return (
        <div
            id="container"
            style={{
                backgroundColor: "#0A1C3F",
                margin: "auto",
                width: "724px",
                height: "431px",
                marginTop: "40px",
                padding: "30px",
            }}
        >
            <span
                style={{
                    color: "white",
                    float: "left",
                    width: "319px",
                    height: "421px",
                }}
            >
                <h1>Catchy Phrase</h1>
            </span>
            <span
                style={{
                    float: "right",
                    color: "white",
                    width: "319px",
                    height: "421px",
                    background: "rgba(18, 91, 234, 0.1)",
                    border: "0.2px solid #F2F5FB",
                    boxSizing: "border-box",
                    borderRadius: "5px",
                    padding: "15px",
                }}
            >
                <form>
                    <label> Email</label>
                    <br />
                    <input
                        type="text"
                        style={{
                            width: "282px",
                            height: "40px",
                            marginTop: "4px",
                        }}
                    />
                    <br />
                    <br />
                    <label>Password</label>
                    <br />
                    <input
                        type="text"
                        style={{
                            width: "282px",
                            height: "40px",
                            marginTop: "8px",
                        }}
                    />
                </form>

                <button
                    style={{
                        // position: "absolute",
                        width: "150px",
                        height: "38px",
                        background:
                            "linear-gradient(0deg, rgba(235, 218, 218, 0.2), rgba(235, 218, 218, 0.2)), rgba(0, 79, 245, 0.58)",
                        // background-blend-mode: "normal, color-burn",
                        // mix-blend-mode: "multiply",
                        borderRadius: "5px",
                    }}
                >
                    LOG IN
                </button>
                <button style={{ margin: "25px 90px 0px 90px" }}>
                    Sign IN With Google
                </button>
                <button style={{ margin: "25px 90px 0px 125px" }}>
                    Sign UP
                </button>
            </span>
        </div>
    );
};

export default Home;
