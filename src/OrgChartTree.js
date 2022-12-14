import React from 'react';
import Tree from 'react-d3-tree';
import data from './data';

export default function OrgChartTree() {

  const covertDataAsRequired = () => {
    const res = data.reduce((acc,current) => {
      const stateName = current.city.state;
      const child = current.reachable_cities.map((cur) => {
        return {
          name: cur.name,
          attributes: {
            state: cur.state,
            transport: cur.transport
          }
        }
      });
      if(acc[stateName]) {
        const cityVals = {};
        cityVals['name'] = current.city.name;
        cityVals['attributes'] = {
          state: stateName
        }
        cityVals['children'] = child;
        acc[stateName]['children'].push(cityVals)
      } else {
        acc[stateName] = {
          name: stateName,
          children: [
            {
              attributes: {
                state: stateName,
              },
              name: current.city.name,
              children: child
            }
          ]
        }
      }
      return acc;
    }, {} );

    return res;
  }

  const chartVals = {
    name: "USA",
    children:  Object.values(covertDataAsRequired())
  };

  return (
    <div id="treeWrapper" style={{ width: '75em', height: '50em' }}>
      <Tree data={chartVals} initialDepth={1} />
    </div>
  );
}