import React from 'react';
class MyList extends React.Component {
    remove = () => {
        this.props.remove(this.props.item.id);
    }
    /*
        Each movie has an image,a title, an id and a tooltips to display button
    */

    render() {
        return (<li>
            <div className="tooltip">
                <img src={this.props.item.img} alt={this.props.item.img} />
                <div >Title: {this.props.item.title}</div>
                <div >Id: {this.props.item.id}</div>
                <div className="tooltiptext">
                    <button className='remove' onClick={this.remove}>Remove</button>
                </div>
            </div>
        </li>)
    }
}

export default MyList;