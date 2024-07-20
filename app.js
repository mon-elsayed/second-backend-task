const request=require("request")


// const url="https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=egypt"

// request({url,json:true},(error,response)=>{

//     // console.log(response.body)

//     // const data1=JSON.parse(response.body)


// // console.log(data1)
// console.log(response.body.location.name)
// console.log(response.body.current.condition.text)





    
// }

// )
///////////////////////////////////////////////

//  const url = "http://api.weatherstack.com/current?access_key=aaf8d75230687617eaa10d75e38c7550&query=germany"

// request ({url , json : true  } , (error , response) => {

//     // console.log(response.body.location.name)
//     // console.log(response.body.current.weather_descriptions[0])

//     if (error) {
//         console.log("ERROR HAS OCCURED")
//     } else if (response.body.error){
//         console.log(response.body.error.message)
//     }else {
//         console.log(response.body.location.name ,response.body.current.weather_descriptions[0] )
//     }

// })


////////////////////////////////////////////////////////////

// const forecast=(longtitude,latitude,callback)=>{

// const url="https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q="+longtitude+","+latitude

// request({url,json:true},(error,response)=>{

//     // console.log(response.body)

//     // const data1=JSON.parse(response.body)


// // console.log(data1)
// // console.log(response.body.location.name)
// // console.log(response.body.current.condition.text)

// if (error){
//     callback("ERROR HAS OCCURED",undefined)
// }
// else if(response.body.error){
//    callback(response.body.error.message,undefined)
// }
// else{
//     callback(undefined,response.body.location.name+" is "+response.body.current.condition.text)
// }


    
// }

// )
// }

const forecast=require("./data1/forecast")
const geocode = require("./data1/geocode")

const country = process.argv[2]



geocode( country , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA : "  , data)

    forecast( data.latitude , data.longtitude , (error , data) => {
        console.log("ERROR : " , error)
        console.log("DATA : " , data)
     } )
 })

// forecast(29.871903452398,26.4941838299718,(error,data)=>{
//     console.log("error:",error)
//     console.log("data:",data)
// })
///////////////////////////////////////////////////////////

//////mapbox
// const geocode=(address,callback)=>{

// const geocodeurl ="https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"


// request({url:geocodeurl,json:true},(error,response)=>{



//     if(error){
//         callback("unable to connect this website",undefined)
//     }
//    else if(response.body.message){
//     callback(response.body.message,undefied)
//    }
// else if(response.body.features.length==0){
//     callback("unable to find location",undefined)
// }

//     else {
//         callback(undefined,{longtitude : response.body.features[0].center[0],
//                          latitude : response.body.features[0].center[1]})
//     }


// const longtitude=response.body.features[0].center[0]
// const latitude=response.body.features[0].center[1]
// console.log(latitude,longtitude)




// })
// }

