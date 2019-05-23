import React from 'react';
import MeteorList from './MeteorList';
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
        this.onFocus = this.onFocus.bind(this);
      }

      

      changeCase(str){
        const splittedStr=str.split('')
        const firstChar=splittedStr[0].toUpperCase();
        let nextChars=''
        for(let i=1;i<splittedStr.length;i++){
            nextChars+=splittedStr[i].toLowerCase()
        }
        const searchTerm= firstChar+nextChars;
    
        return searchTerm
      }


    

        onChange(e){
            const value=e.target.value
            this.setState({
                term: value
                
            })
        }

        onSubmit(e){
            e.preventDefault();
            if(this.state.term){
                const meteor=this.changeCase(this.state.term)
                this.props.fetchTerm(meteor)
            }
        }

        onFocus(e){
            e.preventDefault()
            if(this.state.term){
                this.setState({
                    term: ''
                })
                
                window.location.reload()
            }
            
            
            
        }   

        render(){
                return (
                    <div class="ui segment" id="myForm">
                        <form onSubmit={this.onSubmit} class="ui action input" style={{marginLeft: '40%'}}>
                            <input
                            type="text"
                            name="search"
                            onChange={this.onChange}
                            onFocus={this.onFocus}
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

