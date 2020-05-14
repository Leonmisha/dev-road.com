import React from 'react'
import RenderTiles from './RendererTiles'
import RenderExpanded from './RendererExpanded'
import {Route} from 'react-router'

function RendererContainer(props) {

  let ResultingComponent = props.toRender.meta.hasChildren
    ? RenderTiles
    : RenderExpanded

  return (<div className={props.toRender.meta.id}>
    <Route render={match => <ResultingComponent pathname={match.location.pathname} component={props.toRender}/>}/>
  </div>)
}
export default RendererContainer
