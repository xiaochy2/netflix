import React from 'react';
import MyList from './MyList';
import Recommendation from './Recommendation';
import { connect } from 'react-redux';
import { getInfo ,add, remove} from '../actions';

class ListTable extends React.Component {
    componentDidMount() {
        this.props.getInfo();   // Get the initial data from json server database
    }
    remove = (id) => {
        this.props.remove(id);  // Remove from my list
    }
    add = (id) => {
        this.props.add(id);     // add recommendation to my list
    }
    render() {
        return (<div >
            <h2 className="MyList_header" >My List</h2>
            <ul className='flex-container'>
                {
                    this.props.mylist.map((item) => {
                        return <MyList item={item} remove={this.remove} />
                    })
                }
            </ul>
            <h2 className="Recommendation_header">Recommendation</h2>
            <ul className='flex-container'>
                {
                    this.props.recommendations.map((item) => {
                        return <Recommendation item={item} add={this.add} />
                    })
                }
            </ul>
        </div>
        );
    }

}

/*
    connect react with redux
*/

const mapstateToProps = state => {
    return ({
        mylist: state.mylist,
        recommendations: state.recommendations
    })
}

function mapdispatchToProps(dispatch) {
    return ({
        getInfo: () => dispatch(getInfo()),
        add: (id) => dispatch(add(id)),
        remove: (id) => dispatch(remove(id))
    })
}

export default connect(mapstateToProps, mapdispatchToProps)(ListTable);