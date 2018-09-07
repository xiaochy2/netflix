import React from 'react';
import './MyList.css'

class Recommendation extends React.Component {
    add = () => {
        this.props.add(this.props.item.id)
    }
    /*
        Each movie has an image,a title, an id and a tooltips to display button
    */
    render() {
        return (<li className="Recommendation">
            <div className="tooltip">
                <img src={this.props.item.img} alt={this.props.item.img} />
                <div>Title: {this.props.item.title}</div>
                <div>Id: {this.props.item.id}</div>
                <div className="tooltiptext">
                    <button className='add' onClick={this.add}>Add</button>
                </div>
            </div>
        </li>)

    }
}

export default Recommendation;