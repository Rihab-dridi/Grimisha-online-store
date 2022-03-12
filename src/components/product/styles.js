import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "100%",
    // backgroundColor:'pink',
    height:"100%" ,
    display:"flex" ,
    flexDirection:"column",
    justifyContent:'space-between'

  },
  media: {
    height: 0,
    paddingTop: "75.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
    // backgroundColor:'blue',
    padding:"0" 
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    // backgroundColor:'green'
   
  },
  name: {
    textAlign: "left",

  },
  description:{
    // backgroundColor:'red',
    textAlign:"left",
    lineHeight:"0.5"
  }
}));
