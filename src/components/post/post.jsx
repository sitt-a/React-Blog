import "./post.css"

export default function Post() {
  return (
    <div className="post">
  <img className='postimg' src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=400" alt="headerimg" />
    <div className="postinfo">
      <div className="postcats">
      <span className="postcat">Music</span>
        <span className="postcat">Life</span>
      </div>
      <span className="posttitle">Lorem ipsum dolor sit amet consectetur.</span>
       <hr/>
       <span className="postdate"></span>1 hour ago
    </div>
    <p className="postdescription">
     Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
       Suscipit dolorum, officiis 
       necessitatibus accusamus voluptatu
       Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
       Suscipit dolorum, officiis 
       necessitatibus accusamus voluptatu
     m sunt laudantium magnam eos dicta odio?
    </p>
  </div>
  )
}
