import React from 'react';

export default class Product extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            product_list:[{
                "id":1,
                "productName":"Bamboo fiber gobo",
                "intialPrice":"$ 126",
                "discountPrice":"$ 120",
                "imageUrl":"https://www.gstatic.com/webp/gallery3/1.png"
            },
            {
                "id":2,
                "productName":"Pearly white gold",
                "intialPrice":"$ 148",
                "discountPrice":"$ 110",
                "imageUrl":"https://www.gstatic.com/webp/gallery3/2_webp_ll.png"
            },
            {
                "id":3,
                "productName":"oled ring light",
                "intialPrice":"$ 136",
                "discountPrice":"$ 90",
                "imageUrl":"https://www.gstatic.com/webp/gallery3/5_webp_a.png"
            },
            {
                "id":4,
                "productName":"Bamboo fiber gobo",
                "intialPrice":"$ 140",
                "discountPrice":"$ 120",
                "imageUrl":"https://www.gstatic.com/webp/gallery3/1.png"
            },
            {
                "id":5,
                "productName":"Bamboo fiber gobo",
                "intialPrice":"$ 140",
                "discountPrice":"$ 120",
                "imageUrl":"https://www.gstatic.com/webp/gallery3/3.png"
            },
            {
                "id":6,
                "productName":"Bamboo fiber gobo",
                "intialPrice":"$ 140",
                "discountPrice":"$ 120",
                "imageUrl":"https://www.gstatic.com/webp/gallery3/4_webp_ll.png"
            }]
        }

    }

    // print product list
    printProductList =(rowData)=>{
       return rowData.map((element)=>{
            return(
                <div className="Product-list">
                    <img src={element.imageUrl}  alt="Sofa" style={{height: '76%',width: '75%'}}/>
                    <label style={{color:'black'}}>{element.productName}</label>
                    <label style={{color:'black'}}>{element.discountPrice}</label>
                </div>
            )
        })
        
    }

    render(){
        return(
            <div className="Product-container" id={"product"}>
                <h2>Related products</h2>
                <div>
                    {this.printProductList(this.state.product_list)}    
                </div>
               
            </div>
        )
    }
}