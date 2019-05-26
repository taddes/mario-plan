import React from 'react'

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">TItle - {id}</span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quis dolore amet veritatis quam. Modi deleniti assumenda cupiditate aliquam quisquam harum necessitatibus doloremque corporis, ex error exercitationem quae ipsa reiciendis!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Ninja</div>
          <div>Date: 2 sept 2018</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
