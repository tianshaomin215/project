import React from 'react';
import ReactDOM from 'react-dom';

class ConfirmModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            show: true
        }
    }

    render() {
        return(
            this.state.show ? 
            (<div>
                <div>{this.props.text}</div>
                <button onClick={() => { this.setState({show: true})}}>确定</button>
                <button onClick={() => { this.setState({show: false})}}>取消</button>
            </div>
            )
            : ''
        )
    }

    componentDidMount() {
        console.log('挂载成功');
        this.props.onMount();
    }
}

let node = null;
const Confirm = {
    show(text) {
        return new Promise((resolve, reject) => {
            try {
                node = document.createElement('div');
                document.body.appendChild(node);
                ReactDOM.render(<ConfirmModal text={text} onMount={() => { resolve(true) }} />, node);
            }
            catch {
                reject(false);
            }
        });
    },
    hide() {
        if(node) {
            ReactDOM.unmountComponentAtNode(node);
            document.body.removeChild(node);
        }
    } 
}

export default Confirm;