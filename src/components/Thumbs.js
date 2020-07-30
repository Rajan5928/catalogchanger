import React, { Component, Fragment } from 'react';
import './Thumbs.css';

class Thumbs extends Component {
    // constructor(props){
    //     super(props);
    //     // this.onImageSelect = this.onImageSelect.bind(this);
    // }
    
    onImageSelect(index) {
        this.props.selectedCatalog(index);
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.items.map((catalog,idx) => (
                        <span className="catalog item thumb-select" onClick={(event) => this.onImageSelect(event.target.id)} id={idx} key={idx} data-testid={'thumb_outer_' + idx}>
                            <span className={"thumb-outer " + (idx === this.props.currentIndex ? 'thumb-selected' : ' ')} data-testid={'thumb_'+idx}>
                                <span className="thumb" id={idx} data-testid={'thumb_img_' + idx} style={{ backgroundImage: 'url('+ catalog.thumb + ')'}}  />
                            </span>
                            <div>{console.log(idx)}</div>
                        </span>
                    ))}

            </Fragment>
        );
    }
}

export default Thumbs;
