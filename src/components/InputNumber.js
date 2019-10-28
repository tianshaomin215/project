/*
* InputNumber，实现受控与非受控  
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            innerValue: ''
        }
    }

    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func
    }

    get isControl() {
        return 'value' in this.props;
    }

    get value() {
        if(this.isControl) {
            return this.props.value
        } else {
            return this.state.innerValue
        }
    }

    render() {
        return (
            <div>
                <input 
                    value={this.value} 
                    onChange={(e) => {
                        if(!this.isControl) {
                            this.setState({
                                innerValue: e.target.value
                            })
                        }
                        this.props.onChange(e);
                    }}
                />
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            innerValue: this.props.defaultValue
        });
    }
}

export default InputNumber;