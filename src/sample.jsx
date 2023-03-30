import React, { Component } from "react"
import * as d3 from 'd3';
import "./App.css"
//componentDid mount()-----
class Sample extends Component {           //extends component creates an inheritence to the react component and gives access to the components functions .
                                          
   constructor(props) {
      super(props)
      this.myref = React.createRef()
   }
   
    componentDidMount() {
  
    var nodes=[
      {"id":"circle1","group":1},
      {"id":"circle2","group":1},
      {"id":"circle3","group":1},
      {"id":"circle4","group":1},
      {"id":"circle5","group":1},
      {"id":"circle6","group":1},
      {"id":"circle7","group":1},
      {"id":"circle8","group":1},
      {"id":"circle9","group":1},
      {"id":"circle10","group":2},
      {"id":"circle11","group":2},
      {"id":"circle12","group":2},
      {"id":"circle13","group":2},
      {"id":"circle14","group":2},
      {"id":"circle15","group":2},
      {"id":"circle16","group":2},
      {"id":"circle17","group":2},
      {"id":"circle18","group":2},
      {"id":"circle19","group":3},
      {"id":"circle20","group":3},
      {"id":"circle21","group":3},
      {"id":"circle22","group":3},
      {"id":"circle23","group":3},
      {"id":"circle24","group":3},
      {"id":"circle25","group":3},
      {"id":"circle26","group":3},
      {"id":"circle27","group":3}
    ]
     
      var links=[
         {"source":"circle1","target":"circle2"},
         {"source":"circle1","target":"circle4"},
         {"source":"circle1","target":"circle10"},

         {"source":"circle2","target":"circle3"},
         {"source":"circle2","target":"circle4"},
         {"source":"circle2","target":"circle6"},

         {"source":"circle2","target":"circle11"},
         {"source":"circle3","target":"circle6"},
         {"source":"circle3","target":"circle12"},

         {"source":"circle4","target":"circle7"},
         {"source":"circle4","target":"circle8"},
         {"source":"circle4","target":"circle13"},
         {"source":"circle4","target":"circle8"},

         {"source":"circle5","target":"circle3"},
         {"source":"circle5","target":"circle1"},
         {"source":"circle5","target":"circle9"},
         {"source":"circle5","target":"circle7"},
         {"source":"circle5","target":"circle14"},

         {"source":"circle6","target":"circle9"},
         {"source":"circle6","target":"circle15"},

         {"source":"circle7","target":"circle8"},
         {"source":"circle7","target":"circle16"},

         {"source":"circle8","target":"circle9"},
         {"source":"circle8","target":"circle17"},
         {"source":"circle8","target":"circle6"},


         {"source":"circle9","target":"circle18"},


         {"source":"circle10","target":"circle11"},
         {"source":"circle10","target":"circle13"},
         {"source":"circle10","target":"circle19"},

         {"source":"circle11","target":"circle13"},
         {"source":"circle11","target":"circle15"},
         {"source":"circle11","target":"circle20"},
         {"source":"circle11","target":"circle12"},

         {"source":"circle12","target":"circle15"},
         {"source":"circle12","target":"circle21"},

         {"source":"circle13","target":"circle17"},
         {"source":"circle13","target":"circle16"},
         {"source":"circle13","target":"circle22"},
         {"source":"circle14","target":"circle10"},

         {"source":"circle14","target":"circle12"},
         {"source":"circle14","target":"circle18"},
         {"source":"circle14","target":"circle16"},
         {"source":"circle15","target":"circle17"},
         {"source":"circle15","target":"circle18"},
         {"source":"circle15","target":"circle24"},

         {"source":"circle16","target":"circle17"},
         {"source":"circle16","target":"circle25"},

         {"source":"circle17","target":"circle18"},
         {"source":"circle17","target":"circle26"},

         {"source":"circle18","target":"circle27"},

        
         {"source":"circle19","target":"circle20"},
         {"source":"circle19","target":"circle22"},

         {"source":"circle20","target":"circle22"},
         {"source":"circle20","target":"circle24"},
         {"source":"circle20","target":"circle21"},

         {"source":"circle21","target":"circle24"},

         {"source":"circle22","target":"circle26"},
         {"source":"circle22","target":"circle25"},

         {"source":"circle23","target":"circle19"},
         {"source":"circle23","target":"circle21"},
         {"source":"circle23","target":"circle27"},
         {"source":"circle23","target":"circle25"},

         {"source":"circle24","target":"circle27"},
         {"source":"circle24","target":"circle26"},

         {"source":"circle25","target":"circle26"},

         {"source":"circle26","target":"circle27"}
        


      ]
     nodes = nodes.map(obj => {
         return JSON.parse(JSON.stringify(obj));
      });

      links = links.map(obj => {
         return JSON.parse(JSON.stringify(obj));
      });
      function getNodeColor(node) {
            let color = Math.floor(Math.random()*5);
            switch(color) {
              case 0:return 'green';
              case 1:return 'blue';
              case 2:return 'orange';
              case 3:return 'pink';
              case 4:return 'yellow';
              default :return 'black'
            }
      }

      let zoom = d3.zoom()
      .on('zoom', handleZoom);
    
      function handleZoom(e) {
      d3.selectAll('g')
        .attr('transform', e.transform);
    }
      var svg = d3.select('svg').call(zoom)

      var linkForce = d3.forceLink()
         .id(function (link) { return link.id})
         .links(links);

        

      d3.forceSimulation(nodes)
         .force('link', linkForce)
         .force('charge', d3.forceManyBody().strength(-130))
         .force('center', d3.forceCenter(800/ 2, 500/ 2))
         .on('tick', ticked);

         function ticked() {
            nodeElements
               .attr('cx', function (node) { return node.x })
               .attr('cy', function (node) { return node.y });
   
            linkElements
               .attr('x1', function (link) { return link.source.x })
               .attr('y1', function (link) { return link.source.y })
               .attr('x2', function (link) { return link.target.x })
               .attr('y2', function (link) { return link.target.y })
           
         }
      function handleDrag(e) {
         e.subject.x =  e.x;
         e.subject.y =  e.y;
         ticked();
      }

      var linkElements = svg.append("g")
         .selectAll("line")
         .data(links)
         .enter().append("line")
         .attr("stroke-width", 3)
         .attr("stroke", "grey");

      var nodeElements = svg.append("g")
         .selectAll("circle")
         .data(nodes)
         .enter().append("circle")
         .attr("r",10)
         .attr("fill", getNodeColor)
         .call( d3.drag().on('drag', handleDrag))
         
   }
   render() {
      return (<>
         <div ref={this.myref} id="data">
            <svg width="100%" height="100%"></svg>
         </div>
      </>)
   }
}
export default Sample;