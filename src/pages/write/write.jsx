import"./write.css"

export default function Write() {
  return (
    <div className="write">
  <img className='writeimg' src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=700" alt="headerimg" />
        
        <form action="" className="writeform">
            <div className="writeformgroup">
                <label htmlFor="fileinput">
                <i className="writeicon fa-solid fa-plus"></i>
                </label>
               <input type="file" id="fileinput" style={{display:"none"}}></input> 
               <input type="text" placeholder="Title" className="writeinput" autoFocus={true} ></input> 
            </div>

            <div className="writeformgroup">
                 <textarea 
                 type="text" 
                 placeholder="Tell your story..."
                 className="writeinput writetext">

                 </textarea>
            </div>
            <button className="writesubmit">publish</button>
        </form>
    </div>
  )
}
