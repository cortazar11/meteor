import React from 'react';
import {connect} from 'react-redux';
import {fetchMeteors} from '../actions';

class MeteorList extends React.Component{

    componentDidMount(){
        this.props.fetchMeteors()
    }
    

    renderList(){
            const term= this.props.term
            const meteoriteFiltered= this.props.meteors.filter((meteorite)=>{
                    return meteorite.name===term
                    
                    
            })
            
            let arr=[]
            if(term){
                arr=meteoriteFiltered
            } else {
                arr= this.props.meteors
            }
            
            const meteorites=arr.map((meteorite)=>{
                
               
                    return (
                        <tbody>
                                <tr key={parseInt(meteorite.id)}>
                                    <td>{meteorite.name}</td>
                                    <td>{meteorite.id}</td>
                                    <td>{meteorite.nametype}</td>
                                    <td>{meteorite.recclass}</td>
                                    <td>{meteorite.mass}</td>
                                    <td>{meteorite.fall}</td>
                                    <td>{meteorite.year}</td>
                                    <td>{meteorite.reclat}</td>
                                    <td>{meteorite.reclong}</td>
                                
                                </tr>
                        </tbody>
                    )

                
                
            })

            
            return (
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>Name Type</th>
                            <th>Rec Class</th>
                            <th>Mass (g)</th>
                            <th>Fall</th>
                            <th>Year</th>
                            <th>Latitude</th>
                            <th>Longitud</th>
                        </tr>
                    </thead>
                    {meteorites}
                </table>
            )
    }

    render(){
        
        return (
            <div>{this.renderList()}</div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        meteors: state.meteors.items,
        term: state.meteors.term
    }
}

export default connect(mapStateToProps,{
    fetchMeteors
})(MeteorList);