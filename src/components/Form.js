import React from 'react';
import { connect } from 'react-redux';
import {fetchTerm} from '../actions';

class Form extends React.Component {
        
    constructor(props) {
        super(props);
        this.state = {
          term: ''
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    

        onChange(e){
            this.setState({
                term : e.target.value
            })
        }

        onSubmit(e){
            e.preventDefault();

            this.props.fetchTerm(this.state.term)
        }

        render(){
                return (
                    <div class="ui segment">
                        <form onSubmit={this.onSubmit} class="ui action input" style={{marginLeft: '40%'}}>
                            <input
                            type="text"
                            name="search"
                            onChange={this.onChange}
                            value={this.state.term}
                            />
                    
                        <button type="submit">Search</button>
                        </form>
            </div>
            )
        }
}

export default connect(null, {
    fetchTerm
})(Form);

