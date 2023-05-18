var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
//const port= 2450;
var port=process.env.PORT||2450;
grtOrLess = "";
statecity=[];

customers = [
    {
      custId: 1,
      name: "ABC",
      password: "abc1234",
      role: "admin",
      email: "abc@gmail.com"
    },
    {
      custId: 2,
      name: "Willie",
      password: "willie1234",
      role: "student",
      email: "willie@gmail.com"
    },
    {
      custId: 3,
      name: "Jack",
      password: "jack1234",
      role: "faculty",
      email: "jack@gmail.com"
    },
    {
      custId: 4,
      name: "James",
      password: "james1234",
      role: "student",
      email: "james@gmail.com"
    },
    {
      custId: 5,
      name: "Harry",
      password: "harry1234",
      role: "faculty",
      email: "harry@gmail.com"
    },
    {
      custId: 6,
      name: "Tia",
      password: "tia1234",
      role: "student",
      email: "tia@gmail.com"
    },
    {
      custId: 7,
      name: "Aditya",
      password: "aditya123",
      role: "faculty",
      email: "aditya@gmail.com"
    },
    {
      custId: 8,
      name: "Sonu",
      password: "sonu1234",
      role: "student",
      email: "sonu@gmail.com"
    },
    {
      custId: 9,
      name: "Ellie",
      password: "ellie1234",
      role: "student",
      email: "ellie@gmail.com"
    },
    {
      custId: 10,
      name: "Gia",
      password: "gia1234",
      role: "faculty",
      email: "gia@gmail.com"
    }
  ];
  courses = [
    {
      courseId: 1,
      name: "ANGULAR",
      code: "ANG97",
      description: "All fundamentals of Angular 7",
      faculty: ["Daniel", "Jack"],
      students: ["Sam"]
    },
    {
      courseId: 2,
      name: "JAVASCRIPT",
      code: "JS124",
      description: "Intoduction to javascript",
      faculty: ["Aditya"],
      students: ["James", "Joy", "Monu", "Rita"]
    },
    {
      courseId: 3,
      name: "REACT",
      code: "RCT56",
      description: "React Javascript library",
      faculty: ["Jack", "Gia"],
      students: ["Raima", "Rita", "Sonu", "James"]
    },
    {
      courseId: 4,
      name: "BOOTSTRAP",
      code: "BS297",
      description: "Bootstrap Designing Framework",
      faculty: [],
      students: ["James", "Tia", "Ellie"]
    },
    {
      courseId: 5,
      name: "CSS",
      code: "CS365",
      description: "Basic stylesheet language",
      faculty: [],
      students: ["James", "Rita", "Monica"]
    },
    {
      courseId: 6,
      name: "REST AND MICROSERVICES",
      code: "RM392",
      description: "Introduction to Microservices",
      faculty: [],
      students: ["Sam"]
    },
    {
      courseId: 7,
      name: "NODE",
      code: "ND725",
      description: "Introduction to Node",
      faculty: ["Sonia"],
      students: ["Saransh", "Shrey", "Monica"]
    }
  ];
  faculties = [
    { id: 5, name: "Daniel", courses: ["ANGULAR"] },
    { id: 4, name: "Sonia", courses: ["NODE"] },
    { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
    { id: 2, name: "Gia", courses: ["REACT"] },
    { id: 1, name: "Aditya", courses: ["ANGULAR"] }
  ];
  classes = [
    {
      classId: 1,
      course: "REACT",
      time: "07:45",
      endTime: "08:45",
      topic: "Redux",
      facultyName: "Jack"
    },
    {
      classId: 2,
      course: "ANGULAR",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Jack"
    },
    {
      classId: 3,
      course: "JAVASCRIPT",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Aditya"
    }
  ];
  students = [
    {
      id: 16,
      name: "Willie",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "NODE"]
    },
    {
      id: 15,
      name: "Tia",
      dob: "30-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 14,
      name: "Apoorv",
      dob: "31-August-1998",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 13,
      name: "Joy",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 12,
      name: "Rachel",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 11,
      name: "Monica",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["CSS", "NODE"]
    },
    {
      id: 10,
      name: "Monu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 9,
      name: "Sonu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["REACT"]
    },
    {
      id: 8,
      name: "Raima",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["REACT"]
    },
    {
      id: 7,
      name: "Rita",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "REACT", "CSS"]
    },
    {
      id: 6,
      name: "Shrey",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["NODE"]
    },
    {
      id: 5,
      name: "Saransh",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: ["NODE"]
    },
    {
      id: 4,
      name: "Sanya",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 3,
      name: "James",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
    },
    {
      id: 2,
      name: "Sam",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "REST AND MICROSERVICES"]
    },
    {
      id: 1,
      name: "Ellie",
      dob: "12-June-1992",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["BOOTSTRAP"]
    }
  ];
  app.post("/login", function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
  
    var cust = customers.find(function(item) {
      return item.email === email && item.password === password;
    });
    console.log(cust);
    var custRec= {
        name:cust.name,
     email: cust.email,
      role: cust.role,
    }
    //if null then send error
    res.send(custRec);
  });

  app.post("/register", function(req, res) {
    const cust = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    }
    customers.unshift(cust);
    var customerRes= {
      name: req.body.name,
      role: req.body.role,
      email: req.body.email,
    }
    if(cust.role=="student"){
      find=students.find((fs)=>fs.id);
      if(find){
        cust.id=find.id+1;
        cust.dob="";
        cust.gender="";
        cust.dob="";
        cust.courses=[];
    students.unshift(cust);
      }
    }
    if(cust.role=="faculty"){
      find=faculties.find((fs)=>fs.id);
      if(find){
        cust.id=find.id+1;
        cust.courses=[];
    faculties.unshift(cust);
      }
    }
    res.send(customerRes);
  });

 

  app.get("/getStudentNames", function(req, res) {
    customerList = [];
   customerList= students.map(function(item) {
     return item.name;
    });
 
    
    res.send(customerList);
  });
  app.get("/getFacultyNames", function(req, res) {
    customerList = [];
   customerList= faculties.map(function(item) {
     return item.name;
    });
    
    
    res.send(customerList);
  });
  app.get("/getCourses", function(req, res) {
    customerList = [];
   customerList= courses.map(function(item) {
     return item;
    });
    res.send(customerList);
  });
  app.get("/getCourses/:courseId", function(req, res) {
    let courseId=+req.params.courseId;
    customerList = [];
   customerList= courses.find(function(item) {
     return item.courseId==courseId;
    });
    console.log(customerList);
  
    res.send(customerList);
  });

  app.put("/putCourse/:courseId", function (req, res) {
    console.log("Put called");
    let courseId = +req.params.courseId;
   const course = {...req.body};
    let updatedCourse = { courseId: courseId, ...course };
    let index = courses.findIndex((obj1) => obj1.courseId === courseId);
    console.log("updatedCourse",updatedCourse);
    console.log(index);
    if (index >= 0) {
      courses[index] = updatedCourse;
console.log(courses[index].students);
     let std= students.findIndex((st)=>{
       return courses[index].students.find((cs)=>cs==st.name);
      });
      console.log(std);
      students[std].courses.push(updatedCourse.name);

    let fac= faculties.findIndex((st)=>{
        return courses[index].faculty.find((cs)=>cs==st.name);
       });
       faculties[fac].courses.push(updatedCourse.name);

     
      res.send(updatedCourse);
    } else res.send("not found");
  });



  app.get("/getStudents", function(req, res) {
  var course=req.query.course;
    var list = [];
    list =students.map((arr)=>arr);
    if(course){
      let  arr=course.split(",");
      console.log(arr);
      list=list.filter((ls)=>{
      let cor=ls.courses.find((fs)=>fs);
      return arr.find((ar)=>ar==cor);
      })

    }
    let resArr = pagination(list, parseInt(req.query.page));
  
    res.json({
      page: parseInt(req.query.page),
      items: resArr,
      totalItems: resArr.length,
      totalNum: list.length
    });
  });

  app.get("/getFaculties", function(req, res) {
   var course=req.query.course;
     var list = [];
     list =faculties.map((arr)=>arr);
     if(course){
       let  arr=course.split(",");
       console.log(arr);
       list=list.filter((ls)=>{
       let cor=ls.courses.find((fs)=>fs);
       return arr.find((ar)=>ar==cor);
       })
     }
     let resArr = pagination(list, parseInt(req.query.page));
     res.json({
       page: parseInt(req.query.page),
       items: resArr,
       totalItems: resArr.length,
       totalNum: list.length
     });
   });

   app.post("/postStudentDetails", function(req, res) {
    find=students.find((fs)=>fs.id);
    const cust = {
      name: req.body.name,
     dob: req.body.dob,
     gender: req.body.gender,
     about: req.body.about,
    }
  
    var customerRes= {
      id:find.id+1,
      name: req.body.name,
     dob: req.body.dob,
     gender: req.body.gender,
     about: req.body.about,
     courses:[],
    }
    students.unshift(customerRes);
    res.send(customerRes);
  });

  app.get("/getStudentDetails/:name", function(req, res) {
    let name=req.params.name;
    customerList = [];
    customerList=students.find((fs)=>fs.name==name);
    console.log(customerList);
  if(customerList)
    res.send(customerList);
    else
    res.send("error");
  });

  app.get("/getStudentCourse/:name", function(req, res) {
    let name=req.params.name;
    customerList = [];
    customerList=courses.filter((fs)=>{
      console.log(fs.students.find((st)=>st==name));
     return fs.students.find((st)=>st==name)
    }
    );
    console.log(customerList);
  if(customerList){
   let arr= customerList.map((fs)=>{
        var customerRes= {
          courseId: fs.courseId,
          name:fs.name,
          code:fs.code,
          description:fs.description,
         } 
        return customerRes;
    })
    console.log(arr);
    res.send(arr);
  }
    else
    res.send("error");
  });
  
  app.get("/getStudentClass/:name", function(req, res) {
    let name=req.params.name;
    customerList = [];
    customerList=classes.filter((fs)=>{
      console.log(students.findIndex((st)=>st.name==name));
      let index=students.findIndex((st)=>st.name==name);
     return students[index].courses.find((cs)=>cs==fs.course);
    }
    );
    console.log(customerList);
  if(customerList){
    res.send(customerList);
  }
    else
    res.send("error");
  });
  app.get("/getFacultyCourse/:name", function(req, res) {
    let name=req.params.name;
    customerList = [];
    customerList=courses.filter((fs)=>{
      console.log(fs.faculty.find((st)=>st==name));
     return fs.faculty.find((st)=>st==name)
    }
    );
    console.log(customerList);
  if(customerList){
   let arr= customerList.map((fs)=>{
        var customerRes= {
          courseId: fs.courseId,
          name:fs.name,
          code:fs.code,
          description:fs.description,
         } 
        return customerRes;
    })
    console.log(arr);
    res.send(arr);
  }
    else
    res.send("error");
  });
  app.get("/getFacultyClass/:name", function(req, res) {
    let name=req.params.name;
    customerList = [];
    customerList=classes.filter((fs)=>{
      console.log(faculties.findIndex((st)=>st.name==name));
      let index=faculties.findIndex((st)=>st.name==name);
     return faculties[index].courses.find((cs)=>cs==fs.course);
    }
    );
    console.log(customerList);
  if(customerList){
    res.send(customerList);
  }
    else
    res.send("error");
  });
  app.post("/postClass", function(req, res) {
    find=classes.find((fs)=>fs.classId);
    const cust = {
     course: req.body.course,
    time: req.body.time,
     endTime: req.body.endTime,
     topic: req.body.topic,
    facultyName: req.body.facultyName,
    }
  
    var customerRes= {
      classId:find.classId+1,
      course: req.body.course,
      time: req.body.time,
       endTime: req.body.endTime,
       topic: req.body.topic,
      facultyName: req.body.facultyName,
    }
    classes.unshift(customerRes);
    res.send(customerRes);
  });
  
  app.put("/postClass/:classId", function(req, res) {
    console.log("Put called");
    let classId = +req.params.classId;
    console.log(classId);
   const course = {...req.body};
    let updatedCourse = { classId: classId, ...course };
    let index = classes.findIndex((obj1) => obj1.classId == classId);
    console.log("index",index);
    if (index >= 0) {
      classes[index] = updatedCourse;
console.log("classes",classes);
      res.send(updatedCourse);
    } else res.send("not found");
  });
  app.get("/getClass/:classId", function(req, res) {
    let classId=req.params.classId;
    customerList = [];
    customerList=classes.find((fs)=>fs.classId==classId
    );
    console.log(customerList);
  if(customerList){
    res.send(customerList);
  }
    else
    res.send("error");
  });
  
  function pagination(obj, page) {
    var resArr = obj;
    resArr = resArr.slice(page * 3 - 3, page * 3);
    return resArr;
  }
 

  app.listen(port, () => console.log(`Node app listening on port ${port}!`));