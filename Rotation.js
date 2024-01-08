AFRAME.registerComponent("terrain-rotation-reader",{
    schema:{
        speedOfRotation:{type:"number",default:0}
    },
    tick:function(){
        var map_rotation = this.el.getAttribute("rotation");
        map_rotation.y+=this.data.speedOfRotation 
        this.el.setAttribute("rotation",{x:map_rotation.x,y:map_rotation.y,z:map_rotation.z})
    },
    init:function(){
        window.addEventListener("keydown",(e)=> {
            if (e.key==="ArrowRight"){
                if(this.data.speedOfRotation<0.1){
                    this.data.speedOfRotation+=0.01
                }
            }
            if (e.key==="ArrowLeft"){
                if(this.data.speedOfRotation>-0.1){
                    this.data.speedOfRotation-=0.01
                }
            }
        })
    }
})

AFRAME.registerComponent("plane-rotation-reader",{
    schema:{
        speedOfRotation:{type:"number",default:0},
        speedOfAscent:{type:"number",default:0}
    },
    init:function(){
        this.data.speedOfRotation=this.el.getAttribute("rotation")
        this.data.speedOfAscent=this.el.getAttribute("position")
        var plane_rotation=this.data.speedOfRotation
        var plane_position=this.data.speedOfAscent
        window.addEventListener("keydown",(e)=>{
            if(e.key==="ArrowRight"){
                if(plane_rotation.x<10){
                    plane_rotation.x+=0.5
                    this.el.setAttribute("rotation",plane_rotation)
                }
                
            }
            if(e.key==="ArrowLeft"){
                if(plane_rotation.x>-10){
                    plane_rotation.x-=0.5
                    this.el.setAttribute("rotation",plane_rotation)
                }
                
            }
            if(e.key==="ArrowUp"){
                if(plane_rotation.z<20){
                    plane_rotation.z+=0.5
                    this.el.setAttribute("rotation",plane_rotation)
                }
                if(plane_position.y<2){
                    plane_position.y+=0.01
                    this.el.setAttribute("position",plane_position)
                }
                
            }
            if(e.key==="ArrowDown"){
                if(plane_rotation.z>-10){
                    plane_rotation.z-=0.5
                    this.el.setAttribute("rotation",plane_rotation)
                }
                if(plane_position.y>-2){
                    plane_position.y-=0.01
                    this.el.setAttribute("position",plane_position)
                }
                
            }

            
        })
    }
})