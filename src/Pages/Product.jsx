import React from 'react';

export default class Product extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            product_list:[{
                "id":1,
                "productName":"Bamboo fiber gobo",
                "intialPrice":"$ 126",
                "discountPrice":"$ 120"
            },
            {
                "id":2,
                "productName":"Pearly white gold",
                "intialPrice":"$ 148",
                "discountPrice":"$ 110"
            },
            {
                "id":3,
                "productName":"oled ring light",
                "intialPrice":"$ 136",
                "discountPrice":"$ 90"
            },
            {
                "id":4,
                "productName":"Bamboo fiber gobo",
                "intialPrice":"$ 140",
                "discountPrice":"$ 120"
            }]
        }

    }

    // print product list
    printProductList =(rowData)=>{
       return rowData.map((element)=>{
            return(
                <div className="Product-list">
                    <label style={{color:'black'}}>{element.productName}</label>
                    <label style={{color:'black'}}>{element.discountPrice}</label>
                </div>
            )
        })
        
    }

    render(){
        return(
            <div className="Product-container">
                <h2>Related products</h2>
                {this.printProductList(this.state.product_list)}
            </div>
        )
    }
}