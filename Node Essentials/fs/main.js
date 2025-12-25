import fs from "node:fs"

// fs.writeFile("./demo.txt" , "Hello this is Node js FS module" , (err) => {
//     if(err) {
//         console.log(err.message);
//     }
//     else{
//         console.log("File created successfully")
//     }
// })

// const result = fs.writeFileSync("./hilal.txt" , "Hello everyone this is hilal");
// console.log(result);


//  Read Files

// fs.readFile("./hilal.txt" , "utf-8" , (err , data) => {
//     if(err) {
//         console.log(err.message);
//     }else{
//         console.log(data)
//     }

// })

// fs.appendFile("./hilal.txt" , "HELLO THIS IS NODE JS FS MODULE", (err) => {
//     if(err) {
//         console.log(err.message);
//     }else{
//         console.log("File updated successfully");
//     }
// })


// delete file
// fs.rm("./hilal.txt", (err) => {
//     if(err) {
//         console.log(err.message);
//     }else{
//         console.log("File deleted successfully");
//     }
// })



// fs.writeFile("./hilal.txt" ,"echo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. > hilal.txtHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULEHELLO THIS IS NODE JS FS MODULE", (err) => {
//     if(err) {
//         console.log(err.message);
//     }else{
//         console.log("File updated successfully");
//     }
// })




// const josn = await fs.readFile('./user.json', "utf8" , (err , data)=> {
//     if(err) {
//         console.log(err);
//     }
//     else{
//         console.log(JSON.parse(data));
//     }

// })


// fs.writeFile("./response.json" , JSON.stringify({ name: "Hilal" , role: "Developer"}), (err) => {
//     if(err) {
//         console.log(err.message);
//     }else{
//         console.log("File created successfully")
//     }

// })

// Checking File / Folder Exists (access)

// import { access, constants } from 'node:fs/promises';

// try{
//     access("./hilal.txt" , constants.F_OK)
//     console.log("File exists");
// }catch(error) {
//     console.log(error.message);
// }


// fs.copyFile("./hilal.txt" , "./hilal2.txt" , (err) => {
//     if(err) {
//         console.log(err.message);
//     }else{
//         console.log("File copied successfully");
//     }

// })


// fs.mkdir("./HILAL_DIR", (err) => {
//     if(err) {
//         console.log(err.message);
//     }else{
//         console.log("Directory created successfully");
//     }

// })

// fs.rmdir("./HILAL_DIR" , (err) => {
//     if(err) {
//         console.log(err.message);
//     }else{
//         console.log("Directory deleted successfully");
//     }
// })


// fs.opendir("./Hilal" , (err , dir) => {
//     if(err) {
//         console.log(err.message);
//     }else{
//         console.log(dir);
//     }

// })

