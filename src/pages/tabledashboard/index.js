import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./tabledashboard.css";
import { styled } from "@mui/system";
import { faEye, faPencil, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
    '& .MuiTablePagination-toolbar': {
        '& > p': {
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1.15rem",
            paddingTop: "20px",
            color: "grey",
            fontWeight: 600,
        },
    },
    '& .MuiTablePagination-select': {
        backgroundColor: 'grey',
    }
}));

const icons = [faPlus, faPencil, faTrash, faEye];

function Tabledashboard() {
    const [page, setPage] = useState(0);
    const [rowsperPage, setrowsperPage] = useState(5);
    const usertable = useSelector((state) => state?.Registerreducer);
    const userdata = usertable.registerUser || [];

    const onChangePage = (event, nextPage) => {
        setPage(nextPage)
    }

    const onChangeRowsPerPage = (event) => {
        const newRowsPerPage = parseInt(event.target.value, 10);
        setrowsperPage(newRowsPerPage);
        setPage(0);
    }

    return (
      
        <div className="table-container">
            <TableContainer sx={{ width: "80%", height: "650px", backgroundColor: "#f2f2f2", margin: "30px", borderRadius: "20px" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ textAlign: "center", fontSize: "20px", fontWeight: "bolder" }}>Name</TableCell>
                            <TableCell style={{ textAlign: "center", fontSize: "20px", fontWeight: "bolder" }}>Email</TableCell>
                            <TableCell style={{ textAlign: "center", fontSize: "20px", fontWeight: "bolder" }}>Password</TableCell>
                            <TableCell style={{ textAlign: "center", fontSize: "20px", fontWeight: "bolder" }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userdata.slice(page * rowsperPage, page * rowsperPage + rowsperPage).map((users, rowIndex) => (
                            <TableRow key={users.email}>
                                <TableCell style={{ textAlign: "center", fontSize: "18px" }}>{users.name}</TableCell>
                                <TableCell style={{ textAlign: "center", fontSize: "18px" }}>{users.email}</TableCell>
                                <TableCell style={{ textAlign: "center", fontSize: "18px" }}>{users.password}</TableCell>
                                <TableCell style={{ textAlign: "center" }}>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        {icons.map((icon, index) => (
                                            <button key={index} style={{ border: "4px solid", outline: "none", cursor: "pointer", backgroundColor: "#15313cbd", borderRadius: "50%", width: "40px", height: "40px", color: "white", marginLeft: index > 0 ? "5px" : "0" }}>
                                                <FontAwesomeIcon icon={icon} style={{ margin: '0 5px', cursor: 'pointer' }} />
                                            </button>
                                        ))}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <StyledTablePagination
                        rowsPerPageOptions={[2, 5, 10, 15, 25]}
                        count={userdata.length}
                        rowsPerPage={rowsperPage}
                        page={page}
                        onPageChange={onChangePage}
                        onChange={onChangeRowsPerPage}
                    />
                </div>
            </TableContainer>
        </div>
    )
}

export default Tabledashboard;



// =================================================================>



// import { Table,TableBody,TableCell, TableContainer,TableHead, TableRow ,TablePagination} from "@mui/material";
// import React,{useState} from "react";
// import { useSelector } from "react-redux";
// import "./tabledashboard.css";
// import { styled } from "@mui/system";
// import {faEye , faPencil , faPlus , faTrash} from "@fortawesome/free-solid-svg-icons"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
//     '& .MuiTablePagination-toolbar': {
//       '& > p': {
//         display: "flex",
//         justifyContent: "space-between",
//         fontSize: "1.15rem",
//         paddingTop: "20px",
//         color: "grey",
//         fontWeight: 600,
//       },
//     },
//     '& .MuiTablePagination-select	':{
//        backgroundColor:'grey',
      
//     }
// }));

// const icons = [faPlus,faPencil,faTrash,faEye];

// function Tabledashboard(){
//      const[page,setPage] =useState(0);
//      const[rowsperPage,setrowsperPage] =useState(5);
//     const usertable = useSelector((state)=>state?.Registerreducer);
//     const userdata = usertable.registerUser || [];
//     console.log("users====>",usertable)

//     const onChangePage = (event , nextPage)=>{
//         console.log('nextPage==>',nextPage)
//        setPage(nextPage)
//      }

//      const onChangeRowsPerPage = (event) => {
//         const newRowsPerPage = parseInt(event.target.value, 10);
//         setrowsperPage(newRowsPerPage);
//         setPage(0); 
//     }
//     return(
//         <div className="table-container">
//          <TableContainer sx={{width:"80%",height:"700px",backgroundColor:"#f2f2f2",margin:"30px",borderRadius:"20px"}}>
//             <Table>
//           <TableHead>
//           <TableRow>
//                 <TableCell style={{textAlign:"center",fontSize:"20px",fontWeight:"bolder"}} >Name</TableCell>
//                 <TableCell style={{textAlign:"center",fontSize:"20px",fontWeight:"bolder"}}>Email</TableCell>
//                 <TableCell style={{textAlign:"center",fontSize:"20px",fontWeight:"bolder"}}>Password</TableCell>
             
//                 <TableCell style={{textAlign:"center",fontSize:"20px",fontWeight:"bolder"}}>Actions</TableCell>
             
//           </TableRow>
//         </TableHead>
//         <TableBody>
//             { userdata.slice(page * rowsperPage ,page * rowsperPage + rowsperPage).map((users)=>(
//                 <TableRow key={users.email}>
//                 <TableCell style={{textAlign:"center",fontSize:"18px"}}>{users.name}</TableCell>
//                 <TableCell style={{textAlign:"center",fontSize:"18px"}} >{users.email}</TableCell>
//                 <TableCell style={{textAlign:"center",fontSize:"18px"}}>{users.password}</TableCell>
//                {icons.map((icon,index)=>(
//                     <TableCell style={{ textAlign:"center"}}>

//                       <button key={index} style={{border:"none",outline:"none",cursor:"pointer",backgroundColor:"#15313cbd",borderRadius:"50%",width:"40px" ,height:"40px",color:"white", marginLeft: index > 0 ? "5px" : "0"}}>
//                         <FontAwesomeIcon icon={icon} style={{ margin: '0 5px', cursor: 'pointer' }}/>
//                         </button>
                      
//                         </TableCell>
//                ))}
              
//             </TableRow>
//             ))
//             }   
//         </TableBody>
//             </Table>
//             <div style={{display:"flex",justifyContent:"center"}}>
//                 <StyledTablePagination 
//                  rowsPerPageOptions={[2,5,10,15,25]}
//                 count= {userdata.length}
//                 rowsPerPage={rowsperPage}
//                 page={page}
//                 onPageChange={onChangePage}
//                 onChange={onChangeRowsPerPage}
//                 />
//             </div>
//           </TableContainer>
         
//         </div>
//     )
// }

// export default Tabledashboard;
