import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './header.scss';
import { Dater } from '../dater/dater';

export class Header extends React.Component {
    state = { messages: [] }
    callbackFunction = (childData, type) => {
        this.state.messages.push({ m: childData, t: type });
        this.setState({ messages: this.state.messages });
        window.scrollTo(0,document.body.scrollHeight);
    };
    render() {
            return ([
                <Navbar bg="white" expand="lg" className="mb-4">
                    <Container>
                        <img src="https://uploads-ssl.webflow.com/56b22ae5a29233ce7a352d39/5dcd7665137dcb627c2b13d5_vatglobal%20(1).png" className="logo" alt="logo" />
                    </Container>
                </Navbar>,
                <Container>
                    <div className="feed">
                        <div className="feed-box">
                            {
                                this.state.messages.map( (message) =>
                                    message.t === 'message' ?
                                        <div className="message-row">
                                            <p className="title">Today in history</p>
                                            <div className="feed-bubble message" key={new Date(message.m).getTime()}>
                                                <div className="arrow-right"></div>
                                                {message.m.toString()}
                                            </div>
                                        </div>
                                        :
                                        <div className="you-row">
                                            <p className="title">You</p>
                                            <div className="feed-bubble you" key={new Date(message.m).getTime()}>
                                                <div className="arrow-left"></div>
                                                {message.m}
                                            </div>
                                            <img src="https://www.thispersondoesnotexist.com/image" className="profileFloater" />
                                        </div>
                                )
                            }
                        </div>
                        <div className="feed-input-box">
                            <Dater parentCallback={this.callbackFunction} style={{ width: '100%' }} />
                        </div>
                    </div>
                </Container>
            ]);
    }
}
