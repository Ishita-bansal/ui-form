
import { Table,TableBody,TableCell, TableContainer,TableHead, TableRow ,TablePagination} from "@mui/material";
import React,{useState} from "react";
import { useSelector } from "react-redux";
import "./tabledashboard.css";
import { styled } from "@mui/system";

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
    '& .MuiTablePagination-select	':{
       backgroundColor:'grey',
      
    }
}));


function Tabledashboard(){
     const[page,setPage] =useState(0);
     const[rowsperPage,setrowsperPage] =useState(5);
    const usertable = useSelector((state)=>state?.Registerreducer);
    const userdata = usertable.registerUser || [];
    console.log("users====>",usertable)

    const onChangePage = (event , nextPage)=>{
        console.log('nextPage==>',nextPage)
       setPage(nextPage)
     }

     const onChangeRowsPerPage = (event) => {
        const newRowsPerPage = parseInt(event.target.value, 10);
        setrowsperPage(newRowsPerPage);
        setPage(0); 
    }
    return(
        <div className="table-container">
         <TableContainer sx={{width:"80%",backgroundColor:"white",margin:"30px",borderRadius:"20px"}}>
            <Table>
          <TableHead>
          <TableRow>
                <TableCell style={{textAlign:"center",fontSize:"20px",fontWeight:"bolder"}} >Name</TableCell>
                <TableCell style={{textAlign:"center",fontSize:"20px",fontWeight:"bolder"}}>Email</TableCell>
                <TableCell style={{textAlign:"center",fontSize:"20px",fontWeight:"bolder"}}>Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            { userdata.slice(page * rowsperPage ,page * rowsperPage + rowsperPage).map((users)=>(
                <TableRow key={users.email}>
                <TableCell style={{textAlign:"center",fontSize:"18px"}}>{users.name}</TableCell>
                <TableCell style={{textAlign:"center",fontSize:"18px"}} >{users.email}</TableCell>
                <TableCell style={{textAlign:"center",fontSize:"18px"}}>{users.password}</TableCell>
            </TableRow>
            ))
            }   
        </TableBody>
            </Table>
            <div style={{display:"flex",justifyContent:"center"}}>
                <StyledTablePagination 
                 rowsPerPageOptions={[2,5,10,15,25]}
                count= {userdata.length}
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