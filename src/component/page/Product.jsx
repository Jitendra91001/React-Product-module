import React from 'react';
import '../style/cart.css';

export default class Product extends React.Component {
    render() {
        return (
            <>
            {this.gernarateProduct()}
            </>
        );
    }
    gernarateProduct=()=>{
        let product = this.props.Products;
        var path="./images/";
        return product.map((item,index)=> {
            return(
                <div className='col-sm-3 mt-3'>
                    <div className="card">
                        <img src={path+item.src} className="card-img-top" alt="..." height="390px" width="390px" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <div className="card-text">{item.prise}</div><button className='m-2 btn btn-success'>{index}</button>
                            <button className="btn btn-success">Buy now</button>
                            <button className="btn btn-warning ms-2">Add to cart</button>
                            <button className="btn btn-danger ms-2 btn-sm" onClick={()=>{this.props.deletedata(index)}}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        });
    }
}