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
        this.onFocus = this.onFocus.bind(this);
      }

      
/*
      changeCase(str){
        const arr=str.split(' ')
        
        let meteor=""
        
        const arrMapped=arr.map(function(element){
          const word=element.split('')
          const firstLetter=word[0].toUpperCase()
          let nextLetters=[]
          for(let i=1;i<word.length;i++){
            nextLetters+=word[i].toLowerCase()
          }
          
          const newWord=firstLetter+nextLetters
          
          return newWord
          
         })

        
        meteor=arrMapped.join(" ")
        return meteor;

        
      }

*/
    

        onChange(e){
            const value=e.target.value
            if(value===''){
                window.location.reload()
            }
            this.setState({
                term: value
                
            })
            
        }

        onSubmit(e){
            e.preventDefault();
            if(this.state.term){
                
                this.props.fetchTerm(this.state.term)
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

