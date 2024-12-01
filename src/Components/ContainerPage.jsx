import React, { useContext, useState } from 'react'
import {DataContext} from '../context/UserDataContext'

function ContainerPage() {

  let {userData,setUserData} = useContext(DataContext)
 
  let [data,setData] = useState([])
  let [dataB,setDataB] = useState([])
  let [contB,setContB] = useState([])



  let handleChange = (product)=>{
    setData((prev) =>
      prev.includes(product) ? prev.filter((item) => item !== product) : [...prev, product]
    )

  }



  let handleChangeb = (product)=>{
    setDataB((prev) =>
      prev.includes(product) ? prev.filter((item) => item !== product) : [...prev, product]
    )
  }




  let handleALL = ()=>{
    if(userData?.length==0) return

    // setContB([...contB,data])
    let newD = [...contB]

    userData.map((e)=>{
    
     if(!(newD.includes(e))){
      newD.push(e)
     }
      
      
    })
    setUserData([])
    setContB(newD)
  }



  let handleRemoveAll = () =>{
    if(contB?.length==0) return

    // setContB([...contB,data])
    let newD = [...userData]

    contB.map((e)=>{
    
     if(!(newD.includes(e))){
      newD.push(e)
     }
      
      
    })
    
    setContB([])
    setUserData(newD)
  }



  let handlRemoveOne =()=>{
    if(dataB?.length==0) return

    let newD = [...userData]
   console.log(dataB)
   dataB.map((e)=>{
    setContB((pre)=>pre.filter((it)=>it !== e))
    if(!(newD.includes(e))){
      newD.push(e)
     }
    
  })
  setUserData(newD)
  
    

  }




  let handleAddOne = ()=>{
    if(data?.length==0) return

    // setContB([...contB,data])
    let newD = [...contB]

    data.map((e)=>{
      setUserData((pre)=>pre.filter((it)=>it !== e))
     if(!(newD.includes(e))){
      newD.push(e)
     }
      
      
    })
    setContB(newD)
    // setUserData((pre)=>pre.filter((item) => item !== contB.map(e=>e)))
  }
  
  // let selectedData = (e)=>{
  //   if(data.includes(e)) return
  //   setData([...data,e])


  // }
 
    
  return (
    <div className=' '>
       <div className="row p-5">
        <div className="">
            <h1 className='text-center pb-5'>Demo container cart</h1>
        </div>
       <div className="col ">
        <div className="border border-3  d-inline-block w-100 text-center">
        {userData?.map((e,i)=><div class="form-check px-5 m-5" key={i}>
  <input class="form-check-input" type="checkbox" checked={data?.includes(e)} value={e} id="flexCheckDefault" onChange={()=>handleChange(e)} />
  <label class="form-check-label" for="flexCheckDefault">
    {e}
  </label>
</div>)}
        </div>
       </div>
        <div className="col">
          <div className=" d-flex flex-column align-items-center gap-5">
            <button className="btn"></button>
            <button className="btn btn-success" onClick={()=>handleAddOne()}>Add</button>
            <button className="btn btn-success" onClick={()=>handleALL()}>Add All</button>
            <button className="btn btn-danger" onClick={()=>handlRemoveOne()}>Remove</button>
            <button className="btn btn-danger" onClick={()=>handleRemoveAll()}>Remove all</button>
          </div>
        </div>
        <div className="col">
        <div className="border border-3 h-100  d-inline-block w-100 text-center">
        {contB?.map((e,i)=><div class="form-check px-5 m-5" key={i}>
  <input class="form-check-input" type="checkbox" checked={dataB?.includes(e)} value={e} id="flexCheckDefault" onChange={()=>handleChangeb(e)} />
  <label class="form-check-label" for="flexCheckDefault">
    {e}
  </label>
</div>)}
          </div>
        </div>
       </div>
    </div>
  )
}

export default ContainerPage