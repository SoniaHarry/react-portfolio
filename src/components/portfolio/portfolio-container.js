import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    //console.log("Portfolio container has rendered");
    this.state={
        pageTitle: "Welcome to my portFolio",
        data: [
            { title:"ceinsa", url:"www.google.com" },
            { title:"certiorem", url:"www.google.com" },
            { title:"ITDeusto", url:"www.google.com" },
            { title:"Hostinet", url:"www.google.com"}
        ]
    };
  }

  portfolioItems(){
    //const data=["Ceinsa","Certiorem","ITDeusto","Hostinet"];
    return this.state.data.map(item=>{
        return <PortfolioItem title={item.title} url={item.url}/>
    })
    
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        {this.portfolioItems()}
      </div>
    );
  }
}